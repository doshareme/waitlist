'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Cloud, Lock, Shield, Users, Smartphone, Search, ArrowRight, Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import HyperText from '@/components/ui/heading'
import WordRotate from '@/components/ui/rotation'
import Image from 'next/image'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    fetch("https://wb.doshare.me/?email="+email).then((res)=>{console.log(res)})
    setSubmitted(true)
  }
  const router =  useRouter()
  const imageLoader = ({ src, width, quality }) => {
    return `https://pbs.twimg.com/profile_images/1836278819180707840/LM9rq1gr_400x400.jpg`
  }
   
  

  const features = [
    { icon: <Lock size={24} />, title: "End-to-End Encryption", description: "Your files are encrypted before they leave your device, ensuring maximum security." },
    { icon: <Shield size={24} />, title: "Zero-Knowledge Privacy", description: "We can't read your files or see your passwords. Your data remains truly yours." },
    { icon: <Users size={24} />, title: "Secure Collaboration", description: "Share files and folders while maintaining end-to-end encryption." },
    { icon: <Smartphone size={24} />, title: "Cross-Device Sync", description: "Access your files from any device, always in sync and secure." },
    { icon: <Search size={24} />, title: "Powerful Search", description: "Find your files quickly with our advanced, privacy-preserving search feature." },
  ]

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-purple-300 via-purple-100 to-purple-200">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <Image
      loader={imageLoader}
      src="me.png"
      className='rounded-lg'
      alt="Picture of the author"
      width={50}
      height={50}
    />
            <span className="text-2xl font-bold text-purple-600">DoShare</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" onClick={() => router.push('/features')}>Features</Button>
            {/* <Button variant="ghost" onClick={() => router.push('/features')}>Pricing</Button> */}
            <Button variant="ghost" onClick={() => router.push('/support')}>Support</Button>
            {/* <Button variant="outline" onClick={() => router.push('/')}>Login</Button> */}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section className="text-center mb-16"           initial={{opacity:0.5}} 
animate={
  { opacity: 1}
}>
          <motion.h1 
          initial={{opacity:0.5,y:-50}} 
animate={
  { opacity: 1, y: 0 }
}


 className="self-center justify-center text-center items-center flex flex-row text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            A Fortress for <WordRotate className='bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 p-4' words={["Your Memories","Your Files","Your Projects","Your Group Photos", "You"]} />
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto inline">
            Experience uncompromising privacy with end-to-end encrypted cloud storage platform. 
            <br/>
            Freely share, sync, and secure your digital life with Personal Cloud by DoShare.
          </p>
          <div className="max-w-md mx-auto p-4">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow border-slate-600"
                />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">Join Waitlist</Button>
              </form>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle className="mx-auto text-green-500 mb-2" size={50} />
                  <p className="text-xl font-semibold">Thank you for joining our waitlist!</p>
                  <p>We'll notify you when Personal Cloud by DoShare is ready.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.section>



        <section className="mb-16">
          <HyperText text='Key Features' className="text-3xl font-bold text-center mb-8"/>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{opacity:0,y:50}}  animate={{ opacity: 1, y: 0 }}   transition={{ delay: 1 }}          >
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm"  >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="text-purple-600">{feature.icon}</div>
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-gray-900 to-blue-500 text-white">
            <CardHeader>
              <p className="text-gray-400 text-center">Experience the future of secure cloud storage at our</p>

              <CardTitle className="text-2xl md:text-3xl font-bold flex items-center justify-center">
                <Calendar className="mr-2" /> 
                
                <HyperText text='Global Launch Event'/>
              </CardTitle>
            </CardHeader>
            <p className="text-center text-gray-400">on</p>

            <CardContent className="text-center">
            <p className="text-2xl font-bold mb-2 text-gray-300">September 27, 2024</p>

              <p className="text-xl text-gray-400 mb-4">Join us for the exciting launch of something new !</p>
              <Button variant="secondary" size="lg">
                Set a Reminder <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to secure your digital world?</h2>
          <p className="text-xl text-gray-600 mb-8">Join our waitlist and be the first to experience truly personal, end-to-end encrypted cloud storage.</p>
          <Button onClick={() => router.push('/')} size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
            Join Waitlist <ArrowRight className="ml-2" />
          </Button>
        </section>
      </main>

      <footer className="bg-purple-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Personal Cloud by DoShare. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-purple-600">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600">Terms of Service</a>
            <a href="#" className="hover:text-purple-600">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}