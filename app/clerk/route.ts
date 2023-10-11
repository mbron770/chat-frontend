import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { Svix } from "svix";
import { Webhook } from "svix";

import { WebhookEvent } from "@clerk/nextjs/server";


// export async function POST(request: Request, response: Response){
//     // const res = await fetch('https://backend-3ktp.onrender.com/test')
//     // const resData = await res.json()
//     // return Response.json(resData)

//     // if(request.method !== 'POST') return new Response('method not allowed', {
//     //     status: 405
//     // })

//     const payload = request.body
//     const headers = request.headers
//     const clerkSecret = process.env.SIGNINGSECRET || ''
//     const heads = {
//         'svix-id': headers.get('svix-id') || '', 
//         'svix-timestamp': headers.get('svix-timestamp') || '', 
//         "svix-signature": headers.get("svix-signature") || '',
//     }

//     const wh = new Webhook(clerkSecret)
//     let evt: any

//     try{
//         evt = wh.verify(JSON.stringify(payload), heads)
//     }catch(error){
//         return new NextResponse('failed', {
//             status: response.status
//         })
//     }

//     if(evt.type === "user.created" || evt.type === "user.updated") {
//     //     // // const updateResult = await User.updateOne(
//     //     //   { id: evt.data.id },
//     //     //   evt.data,
//     //     //   { upsert: true }
//     //     // );
//         console.log("Update result:" /*, updateResult*/);
//       } else if (evt.type === "user.deleted") {
//     //     // const { id } = evt.data;
//     //     // const deleteResult = await User.deleteOne({ id: evt.data.id });
//         console.log("Delete result:" /*, deleteResult*/);
//       }

//       return new NextResponse('success', {
//         status: response.status
//     })
// }

export async function POST(request: Request) {
    const payload: WebhookEvent = await request.json();
    console.log(payload.data);
    return Response.json({ message: "Received" });
  }

export async function GET() {
    return Response.json({ message: "Hello World!" });
  }