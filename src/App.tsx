import { useState } from "react";
import Tabs from "./components/Tabs";
import Sell from "./components/Sell";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="bg-black min-h-screen flex justify-center">
      <div className="max-w-[800px] w-full p-4 bg-white ">
        <Tabs active={activeTab} setActive={setActiveTab} />
        {activeTab === 1 && <Sell />}
      </div>
    </div>
  );
}

export default App;
