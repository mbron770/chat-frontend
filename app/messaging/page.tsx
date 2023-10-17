'use client'
import SendMessage from "../components/chat/SendMessage";
import RecievedMessages from "../components/chat/RecievedMessages"
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { auth } from "@clerk/nextjs";
import { useEffect, useState } from 'react';
import io from 'socket.io-client'


const socket = io('http://127.0.0.1:10000')


// async function sendMessage() {
//     // const res = await fetch('http://127.0.0.1:10000', { cache: 'no-store' })
//     const message = {
//         user: user, 
//         text: text,
//     }
//     socket.emit('send_message', message)
//     setText('')
// }



export default function Messaging(){
    const clerkUser: User | null = currentUser()
    const { userId } = auth()
    const [text, setText] = useState<string>('')
    const [user, setUser] = useState(userId)
    

    const sendMessage = () => {
        const message = {
            user: user, 
            text: text,
        }
        socket.emit('send_message', message)
        setText('')
    }
    
    



    return(
        <>
        
        <SendMessage setText={setText}/>
        <RecievedMessages/>
       </>
    )
}