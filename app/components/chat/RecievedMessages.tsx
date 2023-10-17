'use client'
import React from "react";
import {Textarea} from "@nextui-org/react";


export default function RecievedMessages(){
    return(
        <Textarea
      isReadOnly
      label="Description"
      variant="bordered"
      labelPlacement="outside"
      placeholder="Enter your description"
      defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
      className="max-w-xs"
    />

    )
}