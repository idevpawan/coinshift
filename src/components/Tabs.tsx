import { FC } from "react";
import { tabs } from "../constant";
import { ITabs } from "./types";

const Tabs: FC<ITabs> = ({ active, setActive }) => {
  return (
    <div className="flex bg-primaryLight p-2 rounded">
      {tabs.map((e) => {
        return (
          <div
            className={` text-center px-2 py-1.5 rounded ${
              active === e.id
                ? "text-white bg-primary w-full"
                : "text-defaultText w-full"
            }`}
            onClick={() => setActive(e.id)}
            key={e.id}
          >
            {e.title}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
