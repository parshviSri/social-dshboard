import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../../../state/action-creator";
import { getAccount } from "../../../api/authentication/ethers.sevice";
import { getProfile } from "../../../../utils/update-profile";
import { login } from "../../../api/authentication/login";
import { getPublications } from "../../../api/publications/getpublication";
import { getFollowers } from "../../../api/followers/getFollowers";
import { getFollowings } from "../../../api/followings/getFollowings";
import { getNotification } from "../../../api/notifications/getNotification";
import { getPendingFollowerRequest } from "../../../api/followers/getPendingFollowerRequest";
import { getFeeds } from "../../../api/feed/getFeed";
import { getOnChainId } from "../../../api/onchain/getOnChainIdentity";
import { exploreProfiles } from "../../../api/recommended/recommendedprofile";
const LoginElement = () => {
  const dispatch = useDispatch();
  const updateMediaType = async (type) => {
    const _userAccount = await getAccount();
    dispatch(actions.getUserAccount(_userAccount));
    await login(_userAccount);
    const profile = await getProfile();
    dispatch(actions.getUserProfile(profile));
    const publications = await getPublications(_userAccount, profile.id);
    dispatch(actions.getRecentPublications(publications));
    const followers = await getFollowers(profile.id);
    dispatch(actions.getRecentFollowers(followers));
    const followings = await getFollowings([_userAccount]);
    dispatch(actions.getRecentFollowings(followings));
    const notifications = await getNotification(_userAccount, profile.id);
    dispatch(actions.getRecentNotifications(notifications));
    const pendingRequest = await getPendingFollowerRequest();
    dispatch(actions.getPendingFollowerRequest(pendingRequest));
    // const nftCollection = await getNFTCollection(_userAccount);
    // dispatch(actions.getNFTCollection(nftCollection));
    const onchainId = await getOnChainId(profile.id);
    dispatch(actions.getOnChainId(onchainId));
    const feeds  = await getFeeds(profile.id);
    dispatch(actions.getFeeds(feeds))
    dispatch(actions.setmediaType(type));
    const exploreProfile = await exploreProfiles();
    console.log();
    dispatch(actions.gettrendingProfile(exploreProfile));
  };
  return (
    <div className="flex justify-center m-6 text-center">
      <div className="basis-2/3">
        <p className="text-4xl">Start your new digital life</p>
        <div className="flex justify-center m-12">
          <button className="text-3xl border rounded-md p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 ">
            Connect with google
          </button>
        </div>
        <div className="flex justify-center m-12">
          <button
            className="text-3xl border rounded-md p-4 bg-gradient-to-r from-cyan-500 to-blue-500 px-12 "
            onClick={async () => {
              await updateMediaType("web3");
            }}
          >
            Connect with Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginElement;
