import { BsArrowDownShort } from "react-icons/bs";
import Input from "./Input";
import Button from "./Button";
import TxnInfo from "./TxnInfo";

export default function Sell() {
  return (
    <div className="mt-10">
      <Input
        innerLabel="I want to spend"
        type="number"
        options={[{ name: "USD" }, { name: "INR" }]}
      />
      <div className="relative w-40 mx-auto">
        <div className="bg-white px-[20px] pt-[20px] pb-[14px] left-1/4 absolute -top-4 rounded-full">
          <div className="rounded-full border-2 border-primary text-xl text-primary inline-block">
            <BsArrowDownShort />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Input
          innerLabel="I receive"
          type="number"
          value={33}
          options={[{ name: "USD" }, { name: "INR" }]}
        />
      </div>
      <p className="text-xs text-defaultText mt-2">1 BNB = 100,518.17 NGN</p>
      <div className="mt-10">
        <p className="font-semibold">Choose Payment method</p>
        <div className="grid grid-cols-3 mt-4">
          <div className="border-2 border-gray rounded-md p-4">Applepay</div>
        </div>
      </div>
      <div className="my-10">
        <TxnInfo />
      </div>
      <Button children="Proceed to Checkout" isDisabled />
    </div>
  );
}
