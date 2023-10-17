// 'use client'
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import { auth } from "@clerk/nextjs";
import React from "react";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/react";
import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import shoe from '@/public/images/shoe.webp'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://backend-3ktp.onrender.com/test', { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
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
   


<section className='py-36'>
      <div className='container flex items-center justify-center'>
        <Card className='py-4 lg:w-3/4 xl:w-1/2'>
          <CardBody className='overflow-visible py-2'>
            <div className='flex gap-6'>
              <Image alt='Shoe' className='flex-1 object-cover' src={shoe} />
              <div className='flex-1'>
                <h2 className='text-lg font-bold uppercase'>
                  Nike Adapt BB 2.0
                </h2>
                <p className='text-sm text-default-500'>
                  Consistent, customized fit, game-changing.
                </p>

                <div className='mb-6 mt-2 flex gap-3'>
                  <span className='font-bold'>$279.79</span>
                  <span className='text-default-600 line-through'>$350</span>
                  <span className='text-success'>20% off</span>
                </div>

                

                <div className='mt-6 flex gap-6'>
                  <Button color='primary'>Buy now</Button>
                  <Button color='primary' variant='bordered' radius='full'>
                    Add to bag
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>

    

   </>
  )
}
