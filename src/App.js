import { useState } from "react";
import "./App.css";
import Logo from "./logo.svg";
import smallLogo from "./assets/SmallLogo.png";
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
    const element = document.getElementById(tab);
    element.classList.add("activeTab");
    const element2 = document.getElementById(activeTab);
    element2.classList.remove("activeTab");
    if (window.innerWidth < 640) {
      setIsMenuOpen(false);
    }
  }
  const [profile, setProfile] = useState("profile1");

  const LogoIcon = isMenuOpen ? Logo : smallLogo;
  return (
    <div className="flex relative">
      <ToogleIcon toggleMenu={toggleMenu} />
      <aside
        className={` border-r-2 fixed top-0 left-0 h-full sm:h-screen z-10 bg-white ${
          isMenuOpen
            ? " w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 "
            : "hidden sm:block w-1/10"
        }`}
      >
        <div className="w-fit flex flex-col mx-auto justify-between h-screen">
          <div>
            <div
              className="py-[34px] cursor-pointer flex justify-center"
              onClick={toggleMenu}
            >
              <img
                src={LogoIcon}
                alt="Logo"
                className={`${isMenuOpen ? "w-[150px]" : "w-[50px]"}`}
              />
            </div>
            <div
              className={`flex flex-col ${
                isMenuOpen ? "gap-2 pt-1 sm:pt-0 sm:gap-1" : ""
              }`}
            >
              <button
                onClick={() => handleClickTab("AiInsights")}
                className="tabIcon"
                id="AiInsights"
              >
                <img
                  src={AiInsightsIcon}
                  alt="DashboardIcon"
                  // width={22}
                  className={`${
                    isMenuOpen ? "w-[28px] sm:w-[22px]" : "w-[22px]"
                  }`}
                />
                <span
                  className={`${
                    isMenuOpen ? "text-[20px] sm:text-[16px]" : "hidden"
                  }`}
                >
                  AI Insights
                </span>
              </button>
              <button
                onClick={() => handleClickTab("Dashboard")}
                className="tabIcon"
                id="Dashboard"
              >
                <img
                  src={DashboardIcon}
                  alt="DashboardIcon"
                  className={`${
                    isMenuOpen ? "w-[28px] sm:w-[22px]" : "w-[22px]"
                  }`}
                />
                <span
                  className={`${
                    isMenuOpen ? "text-[20px] sm:text-[16px]" : "hidden"
                  }`}
                >
                  Dashboard
                </span>
              </button>
              <button
                onClick={() => handleClickTab("Transactions")}
                className="tabIcon"
                id="Transactions"
              >
                <img
                  src={TransactionsIcon}
                  alt="DashboardIcon"
                  className={`${
                    isMenuOpen ? "w-[28px] sm:w-[22px]" : "w-[22px]"
                  }`}
                />
                <span
                  className={`${
                    isMenuOpen ? "text-[20px] sm:text-[16px]" : "hidden"
                  }`}
                >
                  Transactions
                </span>
              </button>
              <button
                onClick={() => handleClickTab("Reconciliation")}
                className="tabIcon"
                id="Reconciliation"
              >
                <img
                  src={ReconciliationIcon}
                  alt="DashboardIcon"
                  className={`${
                    isMenuOpen ? "w-[28px] sm:w-[22px]" : "w-[22px]"
                  }`}
                />
                <span
                  className={`${
                    isMenuOpen ? "text-[20px] sm:text-[16px]" : "hidden"
                  }`}
                >
                  Reconciliation
                </span>
              </button>
            </div>
          </div>
          <div
            className={`pb-[30px] flex flex-col ${
              isMenuOpen ? "fixed bottom-0 sm:static" : ""
            }`}
          >
            <div className="h-0.5 w-full bg-[#f6f6f6]"></div>
            <button className="tabIcon flex items-center">
              <img
                src={settingIcon}
                alt="settingIcon"
                className={`${
                  isMenuOpen ? "w-[28px] sm:w-[22px]" : "w-[22px]"
                }`}
              />
              <span
                className={`${
                  isMenuOpen ? "text-[20px] sm:text-[16px]" : "hidden"
                }`}
              >
                Setting
              </span>
            </button>
            <button className="tabIcon flex items-center">
              <img
                src={logoutIcon}
                alt="logoutIcon"
                className={`${
                  isMenuOpen ? "w-[28px] sm:w-[22px]" : "w-[22px]"
                }`}
              />
              <span
                className={`${
                  isMenuOpen ? "text-[20px] sm:text-[16px]" : "hidden"
                }`}
              >
                Logout
              </span>
            </button>
            <ProfileSection
              apiData={apiData}
              profile={profile}
              setProfile={setProfile}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>
      </aside>
      <main
        className={`p-[38px] ${
          isMenuOpen
            ? "w-full sm:w-4/5 ml-0 sm:ml-[20%]"
            : "w-full sm:w-11/12 ml-0 sm:ml-[10%]"
        }`}
      >
        {/* <ToogleIcon toggleMenu={toggleMenu} /> */}

        {activeTab === "AiInsights" && (
          <AiInsights apiData={apiData} profile={profile} />
        )}
        {activeTab === "Dashboard" && (
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
