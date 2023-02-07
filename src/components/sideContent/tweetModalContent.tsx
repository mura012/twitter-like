import { auth, db } from "@/libs/firebase";
import { Button } from "@mantine/core";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { CurrentUserPhotoURL } from "../currentUserPhotoURL/currentUserPhotoURL";

export const TweetModalContent = () => {
  const [user] = useAuthState(auth);
  const [tweetText, setTweetText] = useState("");
  const handlwTweet = async () => {
    const docRef = await addDoc(collection(db, "tweet"), {
      text: tweetText,
      Timestamp: Timestamp.fromDate(new Date()),
      photoURL: user?.photoURL,
      displayName: user?.displayName,
      email: user?.email,
    });
    setTweetText("");
  };
  return (
    <div>
      <form
        className="border-solid border-0 border-b border-gray-500 pb-6 relative pl-2"
        onSubmit={(e) => e.preventDefault()}
        action="/form"
        autoComplete="off"
      >
        <label className="flex">
          <CurrentUserPhotoURL />
          <div>
            <span>つぶやく</span>
            <input
              placeholder="今何してる？"
              className="h-7 text-base text-black"
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
            />
          </div>
        </label>
        <Button
          className="absolute right-4 bottom-2 rounded-full"
          onClick={handlwTweet}
          disabled={tweetText ? false : true}
        >
          ツイート
        </Button>
      </form>
    </div>
  );
};
