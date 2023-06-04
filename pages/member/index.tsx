import OverViewContent from "@/components/organism/OverviewContent";
import SideBar from "@/components/organism/Sidebar";
import { JWTPayloadTypes, userTypes } from "@/services/data-types";
import jwtDecode from "jwt-decode";
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

interface getServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}
export async function getServerSideProps({ req }: getServerSideProps) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: userTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
