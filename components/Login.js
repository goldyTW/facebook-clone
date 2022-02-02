import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center'>
            <Image
            src="https://links.papareact.com/t4i"
            height={400}
            width ={400}
            objectFit='contain'></Image>

            <h1 onClick={signIn}
            className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login With Facebook</h1>
        </div>
    )
}

export default Login
