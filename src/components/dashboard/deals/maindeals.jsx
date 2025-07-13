import { useContext } from "react";
import DashboardHomeHeader from "../home/dashHomeHeader";
import DashboardMainTopBottom from "../../../layout/dashboardMainTopBottom";
import DashboardMain from "../../../layout/dashboardMain";
import { UserContext } from "../../../App";
import { DealsIcon } from "../../../utils/sideBarIcon";

const DealsMain = () => {
  //   const [getInfos, setGetInfos] = useState(false);
  const { walletData } = useContext(UserContext);

  return (
    <DashboardMainTopBottom>
      <DashboardHomeHeader data={walletData} title="Deals" icon={DealsIcon} />
      <DashboardMain>
        <div>Deals page</div>
      </DashboardMain>
    </DashboardMainTopBottom>
  );
};

export default DealsMain;
