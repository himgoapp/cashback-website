import Sidebar from "../sidebar/sidebar";
import DealsMain from "./maindeals";
const DealsContainer = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar active={3} />
      <DealsMain />
    </div>
  );
};

export default DealsContainer;
