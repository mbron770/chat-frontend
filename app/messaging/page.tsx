"use client";
import SendMessage from "../components/chat/SendMessage";
import RecievedMessages from "../components/chat/RecievedMessages";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useUser } from "@clerk/nextjs";

export default function Messaging() {
  const { user } = useUser();
  console.log(user?.id);
  const clerkUser = user?.id;
  const [socket, setSocket] = useState<any | null>(null);
  console.log(clerkUser);
  console.log(socket.io["uri"]);

  useEffect(() => {
    const newSocket = io("http://127.0.0.1:10000");
    setSocket(newSocket);
  }, [clerkUser]);

  const sendMessage = (message: { clerkUser: any; text: string }) => {
    socket.emit("send_message", JSON.stringify(message));
    console.log(message);
  };

  return (
    <>
      <SendMessage sendMessage={sendMessage} clerkUser={clerkUser} />
      <RecievedMessages />
    </>
  );
}
