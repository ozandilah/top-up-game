import TransactionDetailContent from "@/components/organism/TransactionDetailContent";
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
  userTypes,
} from "@/services/data-types";
import { getTransactionsDetail } from "@/services/member";
import jwtDecode from "jwt-decode";
import React from "react";
interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function Detail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent data={transactionDetail} />
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
  params: {
    idTrx: string;
  };
}
export async function getServerSideProps({ req, params }: getServerSideProps) {
  const { idTrx } = params;
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

  const response = await getTransactionsDetail(idTrx, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
