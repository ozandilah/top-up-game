import Footers from "@/components/organism/Footer";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import TopUpForm from "@/components/organism/TopUpForm";
import TopUpItem from "@/components/organism/TopUpItem";
import { getDetailVoucher } from "@/services/player";
import { Header } from "@/stories/Header";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

export default function Detail() {
  const { query, isReady } = useRouter();

  const [dataItem, setDataItem] = useState({
    name: "",
    thumbnail: "",
    category: {
      name: "",
    },
  });

  const [nominals, setNominals] = useState([]);

  const [payments, setPayments] = useState([]);

  const getVoucherDetailAPI = useCallback(async (id: string) => {
    const data = await getDetailVoucher(id);
    console.log("====================================");
    console.log("data: ", data);
    console.log("====================================");

    setDataItem(data.responseData);
    setNominals(data.responseData.nominals);
    setPayments(data.paymentData);
  }, []);

  useEffect(() => {
    if (isReady) {
      getVoucherDetailAPI(query.id as string);
    }
  }, [isReady]);

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem type="mobile" data={dataItem} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" data={dataItem} />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footers />
    </>
  );
}
