import { useState } from "react";
import "./App.css";
import Logo from "./logo.svg";
import ToogleIcon from "./components/ToogleIcon";
import AiInsights from "./components/AiInsights";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Reconciliation from "./components/Reconciliation";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("AiInsights");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleClickTab(tab) {
    setActiveTab((activeTab) => (activeTab = tab));
  }
  console.log({ line: 14, activeTab });

  return (
    <div className="flex">
      <aside
        className={` border-r-2 fixed top-0 left-0 h-screen ${
          isMenuOpen ? "w-1/5 " : "w-1/10"
        }`}
      >
        <div className="w-fit flex flex-col mx-auto justify-between h-screen">
          <div className="py-[34px]">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex flex-col py-[33px]">
            <button onClick={() => handleClickTab("AiInsights")}>
              AI Insights
            </button>
            <button onClick={() => handleClickTab("Dashborad")}>
              Dashboard
            </button>
            <button onClick={() => handleClickTab("Transactions")}>
              Transactions
            </button>
            <button onClick={() => handleClickTab("Reconciliation")}>
              Reconciliation
            </button>
          </div>
          <div className="pb-[50px] pt-[131px]">
            <div className="h-0.5 w-full bg-red-900"></div>
            <button>Settings</button>
            <button>Logout</button>
          </div>
        </div>
      </aside>
      <main className={`${isMenuOpen ? "w-4/5 ml-[20%]" : "w-9/10 ml-[10%]"}`}>
        <ToogleIcon toggleMenu={toggleMenu} />
        {activeTab === "AiInsights" && <AiInsights />}
        {activeTab === "Dashborad" && <Dashboard />}
        {activeTab === "Transactions" && <Transactions />}
        {activeTab === "Reconciliation" && <Reconciliation />}
      </main>
    </div>
  );
}

export default App;
