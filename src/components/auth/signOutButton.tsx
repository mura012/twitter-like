import { auth } from "@/libs/firebase";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";
export const SignOutButton = () => {
  const router = useRouter();
  const signOut = () => {
    auth.signOut();
    router.push("/");
  };
  return <Button onClick={signOut}>サインアウト</Button>;
};
