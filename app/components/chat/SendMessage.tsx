"use client";
import { Card, CardBody } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import React from "react";
import { useEffect, useState } from "react";
interface SendMessageProps {
  sendMessage: (message: { clerkUser: any; text: string, dateTime: Date}) => void;
  clerkUser: any;
}

export default function SendMessage({
  sendMessage,
  clerkUser,
}: SendMessageProps) {
  const [text, setText] = useState<string>("");
  console.log(text);

  const handleSend = () => {
    const message = {
      clerkUser: clerkUser,
      text: text,
      dateTime: new Date()
    };
    setText("");
    sendMessage(message);
    
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
