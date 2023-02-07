import { useState } from "react";
import { Modal, Group, Button } from "@mantine/core";
import { SignInButton } from "@/components/auth/signInButton";

export const SideBarContentSignOut = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex items-start flex-col min-h-screen">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        title="サインイン"
        overlayColor="gray"
      >
        {/* <ModalContentSignOut /> */}
        <SignInButton />
      </Modal>
      <Group position="center">
        <Button
          onClick={() => setOpened(true)}
          className="rounded-full ml-10 mt-24"
        >
          サインイン
        </Button>
      </Group>
    </div>
  );
};
