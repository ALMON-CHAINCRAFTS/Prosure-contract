import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
const { ethers } = require("hardhat");

describe("Prosure", function () {
  // ficture deployer

  async function deployProsureFixture() {
    const [owner, accountTwo, accountThree] = await ethers.getSigners();

    // deploy mUSDT
    const mUSDT = await ethers.getContractFactory("USDT");
    const usdt = await mUSDT.deploy();

    // deploy insure contract
    const PROSURE = await ethers.getContractFactory("insure");
    const prosure = await PROSURE.deploy(usdt.getAddress());

    // deploy governance contract
    const _minimumJoinDAO = BigInt(1e22);
    const _maximumJoinDAO = BigInt(1e23);
    const Governance = await ethers.getContractFactory("Governance");
    const governance = await Governance.deploy(
      usdt.getAddress(),
      prosure.getAddress(),
      _minimumJoinDAO,
      _maximumJoinDAO
    );

    console.log(usdt, prosure, _minimumJoinDAO, _maximumJoinDAO);

    return {
      usdt,
      owner,
      accountTwo,
      accountThree,
      prosure,
      governance,
      _minimumJoinDAO,
      _maximumJoinDAO,
    };
  }

  describe("AfterDeployment", function () {
    it("Should check owner balance", async function () {
      const { usdt, owner } = await loadFixture(deployProsureFixture);
      const expectedAmount = ethers.parseUnits("1", 27);

      expect(Number(await usdt.balanceOf(owner.address))).to.be.equal(
        Number(expectedAmount)
      );
    });
  });

  describe("Insurer", function () {
    it("should create new insurance cover and add to existing", async function () {
      const { prosure, owner, usdt, accountTwo, accountThree } =
        await loadFixture(deployProsureFixture);
      const _protocolName = "Uniswap";
      const _protocolDomain = "https://app.uniswap.org/";
      const _description =
        "A proper check have been made that this protocol is entirely safe from hack";
      const _coverAmount = ethers.parseUnits("1000", 18);
      const _riskLevel = 0;

      await usdt.approve(prosure.getAddress(), _coverAmount);
      expect(
        Number(await usdt.allowance(owner.getAddress(), prosure.getAddress()))
      ).to.be.equal(Number(_coverAmount));
      const id = await prosure.id();
      await prosure.createNewInsure(
        _protocolName,
        _protocolDomain,
        _description,
        _coverAmount,
        _riskLevel
      );

      console.log(
        await prosure.getProtocolData(id),
        "protocol data by id after creating insurance"
      );

      // Creating on existing insure
      const _coverAmount2 = ethers.parseUnits("1000", 18);

      await usdt.transfer(accountTwo.getAddress(), _coverAmount2);
      await usdt.transfer(accountThree.getAddress(), _coverAmount2);
      expect(Number(await usdt.balanceOf(accountTwo.getAddress()))).to.be.equal(
        Number(_coverAmount2)
      );
      expect(
        Number(await usdt.balanceOf(accountThree.getAddress()))
      ).to.be.equal(Number(_coverAmount2));

      await usdt
        .connect(accountTwo)
        .approve(prosure.getAddress(), _coverAmount2);
      expect(
        Number(
          await usdt
            .connect(accountTwo)
            .allowance(accountTwo.getAddress(), prosure.getAddress())
        )
      ).to.be.equal(Number(_coverAmount2));

      await prosure
        .connect(accountTwo)
        .createOnExistinginsure(id, _coverAmount2);

      console.log(await prosure.getProtocolData(id), "protocol data by id");

      // buy cover base on the available cover
      const _coverPeriod = "30"; // 13-Mar-2023

      // not proper test for determining actual cover to pay
      await usdt
        .connect(accountThree)
        .approve(prosure.getAddress(), _coverAmount2);
      expect(
        Number(
          await usdt
            .connect(accountThree)
            .allowance(accountThree.getAddress(), prosure.getAddress())
        )
      ).to.be.equal(Number(_coverAmount2));

      await prosure
        .connect(accountThree)
        .buyCover(id, _coverPeriod, _coverAmount2);

      console.log(
        await usdt.connect(accountThree).balanceOf(accountThree.getAddress()),
        "balance after buying cover"
      );
    });
  });
});
