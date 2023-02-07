import { auth, provider } from "@/libs/firebase";
import { Button } from "@mantine/core";
import { signInWithPopup } from "firebase/auth";
export const SignInButton = () => {
  const signIn = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <div className="text-center">
      <Button onClick={signIn}>Googleでサインイン</Button>
    </div>
  );
};
