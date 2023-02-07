import { SideContent } from "@/components/sideContent";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-screen bg-gray-900 text-gray-200">
        <div className="flex-[3] border-0 border-r border-gray-500 border-solid">
          <SideContent />
        </div>
        <main className="flex-[6]">{children}</main>
        <div className="flex-[3] border-0 border-l border-gray-500 border-solid">
          right
        </div>
      </div>
    </>
  );
};
