import Link from "next/link";
import {
  AnnouncementSharp,
  Book,
  Home,
  Message,
  OtherHouses,
  Search,
} from "@mui/icons-material";
import { useState } from "react";
import { Modal, Group, Button } from "@mantine/core";
import { TweetModalContent } from "../tweetModalContent";
type Content = {
  id: number;
  icon: any;
  label: string;
  link: string;
};

const sidebarMenu: Content[] = [
  {
    id: 1,
    icon: <Home />,
    label: "ホーム",
    link: "/",
  },
  { id: 2, icon: <Search />, label: "検索", link: "/" },
  { id: 4, icon: <AnnouncementSharp />, label: "通知", link: "/" },
  { id: 3, icon: <Message />, label: "メッセージ", link: "/" },
  { id: 5, icon: <Book />, label: "ブックマーク", link: "/" },
  { id: 6, icon: <OtherHouses />, label: "マイページ", link: "/myPage" },
];

export const SideBarContentSignIn = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex items-start flex-col min-h-screen">
      <ul className="space-y-4 mt-24">
        {sidebarMenu.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.link} className="flex">
                <div className="text-gray-200 mr-1 text-2xl">{item.icon}</div>
                <div className="text-gray-200 text-xl hidden sm:block">
                  {item.label}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Modal opened={opened} onClose={() => setOpened(false)} centered>
        <TweetModalContent />
      </Modal>
      <Group position="center">
        <Button onClick={() => setOpened(true)} className="rounded-full ml-10">
          ツイート
        </Button>
      </Group>
    </div>
  );
};
