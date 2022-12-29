/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ipfsUrl } from "../../../../../../utils/ipfs-url";

const Feeds = (props) => {
   const { post } = props;
   const profileData =post?.profile;
   const  picture = profileData?.picture; 
    const name  = profileData?.name;
    const profilePic = ipfsUrl(picture?.original?.url)
  const  content = post?.metadata?.content;
  const media = post?.metadata?.media;
  const totalAmountOfMirrors = post?.stats?.totalAmountOfMirrors;
  const totalAmountOfCollects = post?.stats?.totalAmountOfCollects;
  const totalAmountOfComments = post?.stats?.totalAmountOfComments;
  const totalUpvotes = post?.stats?.totalUpvotes;
  let url;
  if (media?.length > 0) {
    url = media[0]?.original?.url.includes("ipfs")
      ? ipfsUrl(media[0]?.original?.url)
      : media[0]?.original?.url;
  }

  return (
    <div className="p-3 border  mt-4">
      <div>
        <div className="flex">
          <img
            src={profilePic}
            className="border rounded-full w-16 h-16 "
            alt="feed-profile-pic"
          />
          <p className="text-xl m-3">{name}</p>
        </div>
        <p className="text-2xl">{content}</p>
        {url && (
          <img
            src={url}
            alt="post-image"
            className="object-fill h-64 w-[100%]"
          />
        )}
        <div className="flex  m-3">
          <div className="basis-1/4 flex m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p>{totalUpvotes}</p>
          </div>
          <div className="flex basis-1/4 m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <p>{totalAmountOfComments}</p>
          </div>
          <div className="flex basis-1/4 m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <p>{totalAmountOfMirrors}</p>
          </div>
          <div className="flex basis-1/4 m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
            <p>{totalAmountOfCollects}</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Feeds;
