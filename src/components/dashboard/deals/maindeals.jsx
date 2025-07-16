import { useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import { UserContext } from "../../../App";
import { DealsIcon } from "../../../utils/sideBarIcon";
import ACRPoker from "../../../assets/ACRPoker.png";

const DealsMain = () => {
  //   const [getInfos, setGetInfos] = useState(false);
  const { walletData } = useContext(UserContext);

  return (
    <DashboardMainTopBottom>
      <DashboardHomeHeader data={walletData} title="Deals" icon={DealsIcon} />
      <DashboardMain>
        <div className="HottestDeals HottestDealsDashboard">
          <div className="wallet_balance_head">
            Deals
          </div>
          <div className="HottestDealschild">
            <div className="deal-card ">
              <div className="deal-image">
                <img src={ACRPoker} />
              </div>
              <div className="HottestDealsDesc">
                <div className="card-subtitle">Pokerbazzi</div>
                <div className="card-title">
                  Experience the Serenity of Ja...
                </div>
                <button className="deal-button mt-2 w-100">
                  Claim Now!
                </button>
              </div>
            </div>
            <div className="deal-card ">
              <div className="deal-image">
                <img src={ACRPoker} />
              </div>
              <div className="HottestDealsDesc">
                <div className="card-subtitle">Pokerbazzi</div>
                <div className="card-title">
                  Experience the Serenity of Ja...
                </div>
                <button className="deal-button mt-2 w-100">
                  Claim Now!
                </button>
              </div>
            </div>
            <div className="deal-card ">
              <div className="deal-image">
                <img src={ACRPoker} />
              </div>
              <div className="HottestDealsDesc">
                <div className="card-subtitle">Pokerbazzi</div>
                <div className="card-title">
                  Experience the Serenity of Ja...
                </div>
                <button className="deal-button mt-2 w-100">
                  Claim Now!
                </button>
              </div>
            </div>
            <div className="deal-card ">
              <div className="deal-image">
                <img src={ACRPoker} />
              </div>
              <div className="HottestDealsDesc">
                <div className="card-subtitle">Pokerbazzi</div>
                <div className="card-title">
                  Experience the Serenity of Ja...
                </div>
                <button className="deal-button mt-2 w-100">
                  Claim Now!
                </button>
              </div>
            </div>
            <div className="deal-card ">
              <div className="deal-image">
                <img src={ACRPoker} />
              </div>
              <div className="HottestDealsDesc">
                <div className="card-subtitle">Pokerbazzi</div>
                <div className="card-title">
                  Experience the Serenity of Ja...
                </div>
                <button className="deal-button mt-2 w-100">
                  Claim Now!
                </button>
              </div>
            </div>
            <div className="deal-card ">
              <div className="deal-image">
                <img src={ACRPoker} />
              </div>
              <div className="HottestDealsDesc">
                <div className="card-subtitle">Pokerbazzi</div>
                <div className="card-title">
                  Experience the Serenity of Ja...
                </div>
                <button className="deal-button mt-2 w-100">
                  Claim Now!
                </button>
              </div>
            </div>
            <div className="deal-card ">
              <div className="deal-image">
                <img src={ACRPoker} />
              </div>
              <div className="HottestDealsDesc">
                <div className="card-subtitle">Pokerbazzi</div>
                <div className="card-title">
                  Experience the Serenity of Ja...
                </div>
                <button className="deal-button mt-2 w-100">
                  Claim Now!
                </button>
              </div>
            </div>
            <div className="deal-card ">
              <div className="deal-image">
                <img src={ACRPoker} />
              </div>
              <div className="HottestDealsDesc">
                <div className="card-subtitle">Pokerbazzi</div>
                <div className="card-title">
                  Experience the Serenity of Ja...
                </div>
                <button className="deal-button mt-2 w-100">
                  Claim Now!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="HottestDeals PromotionsandOffers">
          <div className="HottestDealschild">
            <div className="wallet_balance_head">
              Promotions and Offers
            </div>
            <div className="deal-card ">
              <div className="deal-image">
                <img src={ACRPoker} />
              </div>
              <div className="HottestDealsDesc">
                <div className="card-title">
                  Experience the Serenity of Japan's Traditional Countryside
                </div>
                <div className="card-subtitle"><strong>News</strong> . May 1, 2023</div>
              </div>
            </div>
          </div>
        </div>
      </DashboardMain>
      
    </DashboardMainTopBottom>
  );
};

export default DealsMain;
