'use client'
import React from 'react'

/*
 Todo list : 
 - Filling in the blanks (left illustration - project name)
 - Adding the google icon
 - Font
*/

const Register = () => {
    return (
        <section className='flex'>
            <div className='w-1/2'></div>
            <div className='w-1/2'>
                <div>
                    <span>Start your journey with</span>
                    <h2 className=''>Create an account!</h2>
                    <p>Already have an account ? <span>Login</span></p>
                </div>
                <form>
                    <label htmlFor="">Username</label>
                    <input type="text" className='' />
                    <label htmlFor="">Email</label>
                    <input type="text" className='' />
                    <label htmlFor="">Password</label>
                    <input type="text" className='' />
                    <label htmlFor="">Confirm password</label>
                    <input type="text" className='' />
                    <button type='submit'>Submit</button>
                </form>
                <button>
                    Signup with Google
                </button>
            </div>
        </section>
    )
}

export default Register