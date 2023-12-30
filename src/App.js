import { useState } from "react";
import "./App.css";
import Logo from "./logo.svg";
import ToogleIcon from "./components/ToogleIcon";
import AiInsights from "./components/AiInsights";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Reconciliation from "./components/Reconciliation";
import { apiData } from "./apiData";
import AiInsightsIcon from "./assets/aiInsightsIcon.svg";
import DashboardIcon from "./assets/dashboardIcon.svg";
import TransactionsIcon from "./assets/transactionIcon.svg";
import ReconciliationIcon from "./assets/reconciliationIcon.svg";
import ProfileSection from "./components/profileSection/ProfileSection";
import settingIcon from "./assets/settingIcon.svg";
import logoutIcon from "./assets/logoutIcon.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("AiInsights");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleClickTab(tab) {
    setActiveTab(tab);
  }
  const [profile, setProfile] = useState("profile1");

  return (
    <div className="flex">
      <aside
        className={` border-r-2 fixed top-0 left-0 h-screen ${
          isMenuOpen ? "w-1/5 " : "w-1/10"
        }`}
      >
        <ToogleIcon toggleMenu={toggleMenu} />
        <div className="w-fit flex flex-col mx-auto justify-between h-screen">
          <div>
            <div className="py-[34px] cursor-pointer">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="flex flex-col ">
              <button
                onClick={() => handleClickTab("AiInsights")}
                className="tabIcon"
              >
                <img src={AiInsightsIcon} alt="DashboardIcon" width={22} />
                <span>AI Insights</span>
              </button>
              <button
                onClick={() => handleClickTab("Dashborad")}
                className="tabIcon"
              >
                <img src={DashboardIcon} alt="DashboardIcon" width={22} />

                <span>Dashboard</span>
              </button>
              <button
                onClick={() => handleClickTab("Transactions")}
                className="tabIcon"
              >
                <img src={TransactionsIcon} alt="DashboardIcon" width={22} />

                <span>Transactions</span>
              </button>
              <button
                onClick={() => handleClickTab("Reconciliation")}
                className="tabIcon"
              >
                <img src={ReconciliationIcon} alt="DashboardIcon" width={22} />
                <span>Reconciliation</span>
              </button>
            </div>
          </div>
          <div className="pb-[30px] flex flex-col ">
            <div className="h-0.5 w-full bg-[#f6f6f6]"></div>
            <button className="tabIcon flex items-center">
              <img src={settingIcon} alt="settingIcon" width={22} />
              <span>Setting</span>
            </button>
            <button className="tabIcon flex items-center">
              <img src={logoutIcon} alt="logoutIcon" width={22} />
              <span>Logout</span>
            </button>
            <ProfileSection
              apiData={apiData}
              profile={profile}
              setProfile={setProfile}
              isMenuOpen={isMenuOpen}
            />
          </div>
        </div>
      </aside>
      <main
        className={`p-[38px] ${
          isMenuOpen ? "w-4/5 ml-[20%]" : "w-9/10 ml-[10%]"
        }`}
      >
        {activeTab === "AiInsights" && (
          <AiInsights apiData={apiData} profile={profile} />
        )}
        {activeTab === "Dashborad" && (
          <Dashboard apiData={apiData} profile={profile} />
        )}
        {activeTab === "Transactions" && (
          <Transactions apiData={apiData} profile={profile} />
        )}
        {activeTab === "Reconciliation" && (
          <Reconciliation apiData={apiData} profile={profile} />
        )}
      </main>
    </div>
  );
}

export default App;
