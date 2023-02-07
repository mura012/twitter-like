import { SignOutButton } from "@/components/auth/signOutButton";
import { MainContentTitle } from "@/components/mainContent/mainContentTitle";
import { Layout } from "@/layout";
import { auth } from "@/libs/firebase";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";

const myPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user] = useAuthState(auth);
  return (
    <Layout title="マイページ">
      <div>
        <MainContentTitle title="マイページ" />
        {user && user.photoURL ? (
          <div className="flex ml-3">
            <Image
              src={user.photoURL}
              width={90}
              height={90}
              alt="アイコン"
              className="rounded-full"
            />
            <p>{user.displayName}</p>
          </div>
        ) : null}
        <div className="text-end mr-4">
          <SignOutButton />
        </div>
      </div>
    </Layout>
  );
};

export default myPage;
