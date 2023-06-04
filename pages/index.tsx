import Head from "next/head";

import { Inter } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/organism/Navbar";
import MainBanner from "@/components/organism/Banner";
import TransactionStep from "@/components/organism/Transactions-Step";
import FeaturedGame from "@/components/organism/FeaturedGame";
import Reached from "@/components/organism/Reached";
import Story from "@/components/organism/Story";
import Footers from "@/components/organism/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Store - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="Store - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:image"
          content="https://images.app.goo.gl/LxgCnM9zBrZkCXKUA"
        />
        <meta property="og:url" content="https://icodie.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footers />
    </>
  );
}
