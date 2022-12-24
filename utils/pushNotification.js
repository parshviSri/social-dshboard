import * as EpnsAPI from "@epnsproject/sdk-restapi";
import { ethers } from "ethers";
import { getAccount } from "./ether";
const PK = process.env.NEXT_PUBLIC_PK;
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
export const subscribeChannel = async () => {
  let account = await getAccount();
  const provider = new ethers.providers.Web3Provider(window?.ethereum);
  const _signer = provider.getSigner();
  try {
    await EpnsAPI.channels.subscribe({
      signer: _signer,
      channelAddress: "eip155:80001:0x8e641940371866F4Bfb1986cb35f163D0f038053", // channel address in CAIP
      userAddress: `eip155:80001:${account}`, // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendNotification = async (_account, sender, message) => {
  try {
    const apiResponse = await EpnsAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `Message from ${sender.name}`,
        body: message,
      },
      payload: {
        title: `Message from ${sender.name}`,
        body: `${message}`,
        cta: "",
        img: "",
      },
      recipients: `eip155:80001:${_account}`, // recipient address
      channel: "eip155:42:0x8e641940371866F4Bfb1986cb35f163D0f038053", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};

export const recieveNotification = async () => {
  let account = await getAccount();

  const notify = await EpnsAPI.user.getFeeds({
    user: `eip155:80001:${account}`, // user address in CAIP
    env: "staging",
  });
  return notify;
};
