import { Outlet } from "react-router";
import ShopHeader from "../components/ShopHeader";
import ShopFooter from "../components/ShopFooter";

const ShopLayout = function () {
  return (
    <div className="min-h-screen bg-background">
      <ShopHeader />
      <main>
        <Outlet />
      </main>
      <ShopFooter />
    </div>
  );
};

export default ShopLayout;
