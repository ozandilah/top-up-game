import callAPI from "@/config/api";
import axios from "axios";
import { CheckoutTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getFeaturedGame() {
  const url = `${ROOT_API}/${API_VERSION}/players/landingpage`;
  const data = {};

  return callAPI({
    url,
    method: "GET",
    data,
  });
}

export async function getDetailVoucher(id: string) {
  const URL = `players/${id}/detail`;
  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);

  const axiosResponse = response.data;
  return {
    responseData: axiosResponse.data,
    paymentData: axiosResponse.payment,
  };
}

export async function getGameCategory() {
  const url = `${ROOT_API}/${API_VERSION}/players/category`;
  const data = {};

  return callAPI({
    url,
    method: "GET",
    data,
  });
}

export async function setCheckOut(data: CheckoutTypes) {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}
