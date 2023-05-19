import SideBar from "@/components/organism/Sidebar";
import TransactionContent from "@/components/organism/TransactionsContent";
import React from "react";

export default function Transactions() {
  return (
    <>
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContent />
      </section>
    </>
  );
}
