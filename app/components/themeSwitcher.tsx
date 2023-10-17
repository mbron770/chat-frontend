'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@nextui-org/button'

export default function ThemeSwitcher() {
    const[toggled, setToggled] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setToggled(true)
    }, []
    )

    if(!toggled) return null 

    return (
        <div className='flex gap-4'>

<Button size='sm' variant='flat' onClick={() => setTheme('light')}>
        Light
      </Button>
      <Button size='sm' variant='flat' onClick={() => setTheme('dark')}>
        Dark
      </Button>
      <Button size='sm' variant='flat' onClick={() => setTheme('modern')}>
        Modern
      </Button>

        </div>

    )
}