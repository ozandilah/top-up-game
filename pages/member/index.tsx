import OverViewContent from "@/components/organism/OverviewContent";
import SideBar from "@/components/organism/Sidebar";
import React from "react";

export default function Member() {
  return (
    <>
      <section className="overview overflow-auto">
        <SideBar activeMenu="overview" />
        <OverViewContent />
      </section>
    </>
  );
}
