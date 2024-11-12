import Victory from '@/assets/victory-hand-removebg-preview.png'
import BackGround from '@/assets/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1-removebg-preview.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleLogin = async () => {
        
    }

    const handleSignUp = async () => {

    }

    return (
        <div className="h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-10 lg:px-0">
            <div className="h-[90vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-full max-w-[95vw] md:max-w-[85vw] lg:max-w-[70vw] xl:max-w-[60vw] rounded-3xl grid md:grid-cols-1 xl:grid-cols-2">
                <div className="flex flex-col gap-8 items-center justify-center px-4 sm:px-8 lg:px-16 py-8">
                    <div className="flex items-center justify-center flex-col w-full">
                        <div className="flex items-center justify-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                Welcome
                            </h1>
                            <img src={Victory} alt="Victory Emoji" className='h-10 md:h-12 lg:h-14' />
                        </div>
                        <p className='font-medium text-center'>
                            Fill in the details to get started with the best chat app
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <Tabs className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                            <TabsList className='bg-transparent rounded-none w-full'>
                                <TabsTrigger value='login' className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300'>
                                    Login
                                </TabsTrigger>
                                <TabsTrigger value='signup' className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300'>
                                    Signup
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value='login' className='flex flex-col gap-5 mt-10'>
                                <Input placeholder='Email' type='email' className='rounded-full p-6' value={email} onChange={e => setEmail(e.target.value)} />
                                <Input placeholder='Password' type='password' className='rounded-full p-6' value={password} onChange={e => setPassword(e.target.value)} />
                                <Button className='p-6 rounded-full' onClick={handleLogin}>Login</Button>
                            </TabsContent>
                            <TabsContent value='signup' className='flex flex-col gap-5'>
                                <Input placeholder='Email' type='email' className='rounded-full p-6' value={email} onChange={e => setEmail(e.target.value)} />
                                <Input placeholder='Password' type='password' className='rounded-full p-6' value={password} onChange={e => setPassword(e.target.value)} />
                                <Input placeholder='Confirm Password' type='password' className='rounded-full p-6' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                                <Button className='p-6 rounded-full' onClick={handleSignUp}>Signup</Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className="hidden xl:flex items-center justify-center">
                    <img src={BackGround} alt="BackGround Image" className='h-[50vh] object-cover rounded-br-3xl rounded-tr-3xl'/>
                </div>
            </div>
        </div>
    )
}

export default Auth
