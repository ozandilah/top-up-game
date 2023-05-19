import TransactionDetailContent from "@/components/organism/TransactionDetailContent";
import React from "react";

export default function Detail() {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent />
      </section>
    </>
  );
}
