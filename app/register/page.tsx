'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
/*
 Todo list : 
 - Filling in the blanks (left illustration - project name)
 - Adding the google icon
 - Font
*/

const inter = Inter({subsets: ['latin']})

const Register = () => {
    return (
        <section style={{display: "flex"}} className={inter.className}>
            <div className='w-1/2'></div>
                <div className='w-1/2 flex flex-col items-center justify-center gap-10 h-screen pr-4'>
                    <div className='space-y-4 text-center'>
                        <span className='font-extrabold md:text-5xl text-4xl'>Start your journey with</span>
                        <p className='text-gray-500 text-sm'>You can register and get unlimited access to our services</p>
                    </div>
                    <form className='flex flex-col gap-5 md:w-72 w-full'>
                        <input type="email" placeholder='Enter your email' className='outline-none bg-gray-50 p-2 px-4 rounded-md' />
                        <input type="password" placeholder='Create a password' className='outline-none bg-gray-50 p-2 px-4 rounded-md' />
                        <input type="password" placeholder='Confirm password' className='outline-none bg-gray-50 p-2 px-4 rounded-md'  />
                        <button className='bg-blue-400 rounded-md text-white p-2'>Submit</button>
                    <span className='text-blue-500 text-sm'>Already have an account ? <Link href='/signin'>Sign in</Link> </span>
                    </form>
                    <button className='bg-gray-200 p-3 rounded-md'>
                        Signup with Google
                    </button>
                </div>
        </section>
    )
}

export default Register