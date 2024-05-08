import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI: bigint = 1_000_000_000n;

const _minimumJoinDAO: bigint = 10_000_000_000_000_000_000_000n;
const _maximumJoinDAO: bigint = 100_000_000_000_000_000_000_000n;

const ProsureModule = buildModule("ProsureModule", (m) => {
  //   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  //   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const usdt = m.contract("USDT");
  const INSURE = m.contract("insure", [usdt]);
  const GOVERNANCE = m.contract("Governance", [
    usdt,
    INSURE,
    _minimumJoinDAO,
    _maximumJoinDAO,
  ]);

  return { usdt, INSURE, GOVERNANCE };
});

export default ProsureModule;

// USDT= "0x934932752EDDeb6150e412E04D747bd974164A7d";
// insure="0xFCB01529892bF14daCf90cc4B00184133cB07339";
// Governance= "0x054aC154CF6c757697B290fB7A824B6aC2262F82;
