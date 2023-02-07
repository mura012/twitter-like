import { Timeline } from "../tweet/timeline";
import { TweetForm } from "./tweetForm";

export const MainContent = () => {
  return (
    <div>
      <TweetForm />
      <Timeline />
    </div>
  );
};
