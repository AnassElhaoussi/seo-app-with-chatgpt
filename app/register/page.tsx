"use client"
import React from 'react'
import { Input,
         Heading,
         Stack,
         Flex,
         InputGroup,
         FormLabel,
         Text,
         Button
} from '@chakra-ui/react'
import Link from 'next/link'
import {inter} from '../../utils/font'
import {ChakraProvider} from '@chakra-ui/react'
import {useState} from 'react'

const Register = () => {
    const [user, setUser] = useState<{
        username: string,
        email: string,
        password: string
    }>({
        username: "",
        email: "",
        password: ""
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name
        const value = e.target.value
        
        setUser({
            ...user,
            [inputName]: value 
        })
    }
    return (
        <ChakraProvider>
            <Flex
            style={inter.style}
            >
                <div className='w-1/2'></div>
                <Flex 
                direction='column'
                width='50%' gap='2rem' padding='3rem' alignItems='start'>
                    <Stack>
                        <Heading 
                        as='h2' 
                        style={inter.style}
                        fontWeight='extrabold'
                        >
                            Sign up
                        </Heading>
                        <Text fontSize='sm'>
                            Sign up and get unlimited access to our services.
                        </Text>
                    </Stack>
                    <Stack gap={2} minWidth='70%'>
                        <InputGroup flexDirection='column'>
                            <FormLabel>Username</FormLabel>
                            <Input placeholder='Enter your username'
                             name='username' value={user.username} onChange={onChange} />
                        </InputGroup>
                        <InputGroup flexDirection='column'>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Enter your email'
                             type='email' name='email' value={user.email} onChange={onChange} />
                        </InputGroup>
                        <InputGroup flexDirection='column'>
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='Enter your password'
                             type='password' name='password' value={user.password} onChange={onChange} />
                        </InputGroup>
                        <Button colorScheme='blue'>Submit</Button>
                    </Stack>
                    <Text>Already have an account ? <Link href='/login'>Login</Link></Text>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}

export default Register