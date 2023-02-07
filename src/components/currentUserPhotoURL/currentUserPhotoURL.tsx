import { auth } from "@/libs/firebase";
import Image from "next/image";

export const CurrentUserPhotoURL = () => {
  return (
    <>
      {auth.currentUser && auth.currentUser.photoURL ? (
        <Image
          src={auth.currentUser.photoURL}
          width={50}
          height={50}
          alt="icon"
          className="rounded-full flex mr-3"
        />
      ) : null}
    </>
  );
};
