import { auth, db } from "@/libs/firebase";
import {
  ChatBubble,
  FavoriteBorder,
  Loop,
  MoreHoriz,
} from "@mui/icons-material";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
type Tweet = {
  text: string;
  Timestamp: {
    seconds: number;
    nanoseconds: number;
  };
  photoURL: string;
  displayName: string;
  email: string;
};

export const MyTweet = () => {
  const [user] = useAuthState(auth);
  const [tweet, setTweet] = useState<any>([]);

  useEffect(() => {
    const tweetData = collection(db, "tweet");
    const q = query(tweetData, orderBy("Timestamp", "desc"));
    onSnapshot(q, (post) => {
      setTweet(post.docs.map((doc) => ({ ...doc.data() })));
    });
  }, [user]);

  return (
    <ul className="p-0 m-0">
      {tweet
        .filter((item: Tweet) => item.email === user?.email)
        .map((item: Tweet) => {
          console.log(item);
          return (
            <li
              key={item.Timestamp.nanoseconds}
              className="relative pt-3 pl-3 flex border-solid border-0 border-b border-gray-500 flex-col"
            >
              <div className="flex">
                <Image
                  src={item.photoURL}
                  width={40}
                  height={40}
                  alt={"アイコン"}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="m-0 font-bold">{item.displayName}</p>
                  <p className="m-0 mb-3 max-w-xs">{item.text}</p>
                </div>
                {user?.email === item.email ? (
                  <MoreHoriz className="absolute right-0 mr-4 mt-0 cursor-pointer" />
                ) : null}
              </div>
              <div className="flex justify-around mb-2">
                <ChatBubble className="cursor-pointer" />
                <Loop className="cursor-pointer" />
                <FavoriteBorder className="cursor-pointer" />
              </div>
            </li>
          );
        })}
    </ul>
  );
};
