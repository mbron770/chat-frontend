import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { auth } from "@clerk/nextjs";

async function getData() {
  const res = await fetch('https://backend-3ktp.onrender.com/test')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
  
} 


export default async function Home() {
  
  const data = await getData()
  const user: User | null = await currentUser();
  const { userId } = auth();
  
  return (
    
   <>
   <UserButton afterSignOutUrl="/"/>
   {data.map((d: string) => <p>{d}</p>)}
   
   {userId ? <p>{userId}</p> : <p>user not signed in</p>}
   
   

   </>
  )
}
