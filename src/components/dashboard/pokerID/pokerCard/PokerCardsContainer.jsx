import React, { useState, useEffect, useContext } from "react";
import styles from "./PokerCardsContainer.module.css";
import PokerCard from "./pokerCard";
import { userAccountIdsInfo } from "../../../../servicefile/pokeridservice";
import { UserContext } from "../../../../App";

const PokerCardsContainer = ({ getInfos, setGetInfos }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [AllIDs, setAllIds] = useState([]);
  const [tabSelected, setTabSelected] = useState([]);
  const { userData } = useContext(UserContext);

  const getTagIdInfo = async () => {
    if (!userData || !userData._id) return;

    const res = await userAccountIdsInfo(userData._id);
    setAllIds(res);
    setTabSelected(res);
    setGetInfos(false);
  };

  useEffect(() => {
    getTagIdInfo();
  }, []);

  useEffect(() => {
    if (getInfos === true) {
      getTagIdInfo();
    }
  }, [getInfos]);

  const setTab = (val) => {
    if (val === 1) {
      setTabSelected([...AllIDs]);
    } else if (val === 2) {
      let currentTabs = AllIDs.filter((item) => item.status === "Approved");
      setTabSelected([...currentTabs]);
    } else if (val === 3) {
      let currentTabs = AllIDs.filter((item) => item.status === "Pending");
      setTabSelected([...currentTabs]);
    } else {
      let currentTabs = AllIDs.filter((item) => item.status === "Aborted");
      setTabSelected([...currentTabs]);
    }
    setActiveTab(val);
  };
  const getIcon = (label) => {
    if (label === "View all") {
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    }
    if (label === "Approved") {
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      );
    }
    if (label === "Pending") {
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="6" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      );
    }
    if (label === "Aborted") {
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      );
    }
    return null;
  };
  

  return (
      <div className={styles.PokerCardsContainer}>
        
         <ul className="nav nav-tabs mb-4 PokerIdDB" id="pokerTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="add-tab" data-bs-toggle="tab" data-bs-target="#add" type="button" role="tab" aria-selected="true">
                Add New Poker ID
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="retag-tab" data-bs-toggle="tab" data-bs-target="#retag" type="button" role="tab" aria-selected="false">
                Retag Poker ID
              </button>
            </li>
          </ul>

          
          <div className="tab-content PokerIdDBDesc" id="pokerTabContent">
            
            <div className="tab-pane fade show active" id="add" role="tabpanel" aria-labelledby="add-tab">
                <div className="form-container d-flex  justify-content-start">
                    <div className="formControl  d-flex">
                      <select className="form-select InputDB" required>
                        <option selected disabled>Select Poker Sites</option>
                        <option>ACR Poker</option>
                        <option>WPT Global</option>
                        <option>GG Poker</option>
                      </select>
                      <input type="text" className="form-control InputDB" placeholder="Username" required />
                    </div>
                    <div className="formControl d-flex ">
                      <input type="text" className="form-control InputDB" placeholder="Enter Account ID*" required />
                      <button type="submit" className="btn btn-pink">Submit</button>
                    </div>
                </div>
              </div>            
              <div className="tab-pane fade" id="retag" role="tabpanel" aria-labelledby="retag-tab">
                <div className="form-container d-flex  justify-content-start">
                      <div className="formControl  d-flex">
                        <select className="form-select InputDB" required>
                          <option selected disabled>Select Poker Sites</option>
                          <option>ACR Poker</option>
                          <option>WPT Global</option>
                          <option>GG Poker</option>
                        </select>
                      </div>
                      <div className="formControl d-flex ">
                        <input type="text" className="form-control InputDB" placeholder="Enter Account ID*" required />
                        <button type="submit" className="btn btn-pink">Submit</button>
                      </div>
                </div>
            </div>
          </div>








      <div className={styles.TabContent}>
            <div className={styles.TabFilters}>
                {["View all", "Approved", "Pending", "Rejected"].map((label, index) => {
                  const tabIndex = index + 1;
                  const isActive = activeTab === tabIndex;

                  return (
                    <button
                      key={label}
                      className={`${styles.TabButton} ${isActive ? styles.Active : ""}`}
                      onClick={() => setTab(tabIndex)}
                    >
                      {/* {getIcon(label) && <span className={styles.TabIcon}>{getIcon(label)}</span>} */}
                      {label}
                      <span className={styles.Underline}></span>
                    </button>
                  );
                })}
              </div>

      </div>
      <div
        className={`${styles.CardsContent} ${
          tabSelected.length > 6 ? styles.scrollable : ""
        }`}
      >
        <div className={styles.CardsRow}>
          {tabSelected &&
            tabSelected.length > 0 &&
            tabSelected.map((item, index) => (
              <div className={styles.CardItem} key={index}>
                <PokerCard
                  status={item.status}
                  color={item.status}
                  item={item}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokerCardsContainer;
