'use client'
import {Card, CardBody} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import React from "react";

export default function SendMessage(){
    return (
        <>
        <Card>
      <CardBody>
        <p className='mb-5'>Messaging</p>
        <Textarea
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