import type { User } from "@clerk/nextjs/api";
import { Webhook } from "svix";
import { headers } from "next/headers";

type UnwantedKeys =
  | "emailAddresses"
  | "firstName"
  | "lastName"
  | "primaryEmailAddressId"
  | "primaryPhoneNumberId"
  | "phoneNumbers";
interface UserInterface extends Omit<User, UnwantedKeys> {
  email_addresses: {
    email_address: string;
    id: string;
  }[];
  primary_email_address_id: string;
  first_name: string;
  last_name: string;
  primary_phone_number_id: string;
  phone_numbers: {
    phone_number: string;
    id: string;
  }[];
}

const webhookSecret: string = process.env.SIGNINGSECRET || "";
let i: string;

export async function POST(request: Request) {
  const payLoad = await request.json();
  const payLoadString = JSON.stringify(payLoad);
  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id");
  const svixIdTimeStamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixIdTimeStamp || !svixSignature) {
    console.log("svixId", svixId);
    console.log("svixIdTimeStamp", svixIdTimeStamp);
    console.log("svixSignature", svixSignature);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const svixHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixIdTimeStamp,
    "svix-signature": svixSignature,
  };

  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;
  try {
    evt = wh.verify(payLoadString, svixHeaders) as Event;
  } catch (error) {
    console.log("error");
    return new Response("Error occured", {
      status: 400,
    });
  }
  const { id } = evt.data;
  const eventType: EventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    const user = {
      name: `${payLoad.data["first_name"]} ${payLoad.data["last_name"]}`,
      username: payLoad.data["username"],
      clerkID: payLoad.data["id"],
    };

    console.log(user);
  } else if (eventType === "user.deleted") {
    const deletedUserClerkID = payLoad.data.id;
    console.log(deletedUserClerkID);
  }

  return new Response("", {
    status: 201,
  });
}

type Event = {
  data: UserInterface;
  object: "event";
  type: EventType;
};

type EventType = "user.created" | "user.updated" | "user.deleted" | "*";

// export async function GET() {
//   return Response.json({ message: i });
// }
