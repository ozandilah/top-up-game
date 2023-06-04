import React from "react";
import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

interface SidebarProps {
  activeMenu:
    | "overview"
    | "transactions"
    | "message"
    | "card"
    | "logout"
    | "rewards"
    | "settings";
}
export default function SideBar(props: SidebarProps) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem
              title="Overview"
              icon="icon-menu-overview"
              active={activeMenu === "overview"}
              href="/member"
            />
            <MenuItem
              title="Transactions"
              icon="icon-transactions"
              href="/member/transactions"
              active={activeMenu === "transactions"}
            />
            <MenuItem
              title="Messages"
              icon="icon-message"
              href="/member"
              active={activeMenu === "message"}
            />
            <MenuItem
              title="Card"
              icon="icon-card"
              href="/member"
              active={activeMenu === "card"}
            />
            <MenuItem
              title="Rewards"
              icon="icon-rewards"
              href="/member"
              active={activeMenu === "rewards"}
            />
            <MenuItem
              title="Settings"
              icon="icon-settings"
              href="/member/edit-profile"
              active={activeMenu === "settings"}
            />
            <MenuItem
              title="Logout"
              icon="icon-logout"
              onClick={onLogout}
              active={activeMenu === "logout"}
            />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
