import { FC } from "react";
import { ITxnInfo } from "./types";

const TxnInfo: FC<ITxnInfo> = ({
  amount,
  fiat,
  token,
  networkFee,
  unitPrice,
}) => {
  return (
    <div className="rounded-lg text-[#494257] text-sm bg-gray p-4">
      <p className="font-semibold text-lg">Transaction summary</p>
      <div className="flex mt-3 items-center justify-between">
        <p>
          Amount<span className="text-defaultText">(inclusive txn fee)</span>
        </p>
        <p>{amount ?? "-"}</p>
      </div>
      <div className="flex mt-2 items-center justify-between">
        <p>Unit Price</p>
        <p>{unitPrice ?? "-"}</p>
      </div>
      <div className="flex mt-2 items-center justify-between">
        <p>Network Fee</p>
        <p>{networkFee ?? "N/A"}</p>
      </div>
    </div>
  );
};

export default TxnInfo;
