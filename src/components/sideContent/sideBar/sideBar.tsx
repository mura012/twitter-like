import { auth } from "@/libs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { SideBarContentSignIn } from "./sideBarContentSignIn";
import { SideBarContentSignOut } from "./sideBarContentSignOut";
export const SideBar = () => {
  const [user] = useAuthState(auth);
  return (
    <div>{user ? <SideBarContentSignIn /> : <SideBarContentSignOut />}</div>
  );
};
