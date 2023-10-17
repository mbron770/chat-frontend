'use client'
import {Card, CardBody} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import React from "react";

type Props = {
  setText: (value: string) => void
}

export default function SendMessage({setText}: Props){

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)

  }
    return (
        <>
        <Card>
      <CardBody>
        <p className='mb-5'>Messaging</p>
        <Textarea
      onChange={handleChange}
      label="Send Message"
      labelPlacement="outside"
      placeholder="Enter your description"
      className="max-w-xs"
    />

<Button color="secondary">
        Send
      </Button>  
        
      </CardBody>
    </Card>


        </>

    )
}