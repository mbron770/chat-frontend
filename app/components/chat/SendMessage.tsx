"use client";
import { Card, CardBody } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import React from "react";
import { useEffect, useState } from "react";
import type { RootState, AppDispatch } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setRecipient } from "../../redux/selectedRecipientSlice";
interface SendMessageProps {
  sendMessage: (message: {
    sender: any;
    content: string;
    dateTime: Date;
    recipient: string;
  }) => void;
  clerkUser: any;
}

export default function SendMessage({
  sendMessage,
  clerkUser,
}: SendMessageProps) {
  const [text, setText] = useState<string>("");
  console.log(text);

  const recipient = useSelector(
    (state: RootState) => state.selectedRecipient.value
  );

  function sendMessageToDB(message: any) {
    // fetch("https://backend-3ktp.onrender.com/display_all_users", { cache: 'no-store' })
    fetch("https://backend-3ktp.onrender.com/add_message_to_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cache: 'no-store',
      },
      body: JSON.stringify(message),
    }).then((res) => {
      if (res.ok) return res.json();
    });
  }

  const handleSend = () => {
    const message = {
      sender: clerkUser,
      content: text,
      dateTime: new Date(),
      recipient: recipient,
    };
    setText("");
    sendMessage(message);
    sendMessageToDB(message)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <Card>
        <CardBody>
          <p className="mb-5">Messaging</p>
          <Textarea
            onChange={handleChange}
            value={text}
            label="Send Message"
            labelPlacement="outside"
            placeholder="Enter your description"
            className="max-w-xs"
          />

          <Button color="secondary" onClick={handleSend}>
            Send
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
