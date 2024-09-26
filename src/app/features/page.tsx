'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Shield, Users, Smartphone, Search, Zap, Globe, Clock, Server, Layers, Cloud, Calendar, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Features() {
  const features = [
    { icon: <Lock size={24} />, title: "End-to-End Encryption", description: "Your files are encrypted before they leave your device, ensuring maximum security." },
    { icon: <Shield size={24} />, title: "Zero-Knowledge Privacy", description: "We can't read your files or see your passwords. Your data remains truly yours." },
    { icon: <Users size={24} />, title: "Secure Collaboration", description: "Share files and folders while maintaining end-to-end encryption." },
    { icon: <Smartphone size={24} />, title: "Cross-Device Sync", description: "Access your files from any device, always in sync and secure." },
    { icon: <Globe size={24} />, title: "Global Accessibility", description: "Access your files from anywhere in the world, securely and quickly." },
    { icon: <Zap size={24} />, title: "Lightning-Fast Transfers", description: "Upload and download files at blazing speeds with our optimized network." },
    { icon: <Clock size={24} />, title: "Version History", description: "Keep track of changes and restore previous versions of your files." },
    { icon: <Server size={24} />, title: "Robust Infrastructure", description: "Your data is stored on multiple servers for redundancy and high availability." },
    { icon: <Layers size={24} />, title: "Advanced Permissions", description: "Set granular access controls for shared files and folders." },
    { icon: <Search size={24} />, title: "Powerful Search", description: "Find your files quickly with our advanced, privacy-preserving search feature." },
  ]
  const router =  useRouter()
  const imageLoader = () => {
    return `https://pbs.twimg.com/profile_images/1836278819180707840/LM9rq1gr_400x400.jpg`
  }
   
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
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
            <Button variant="ghost" onClick={() => router.push('/')}>Home</Button>
            {/* <Button variant="ghost">Pricing</Button> */}
            <Button variant="ghost" onClick={() => router.push('/support')}>Support</Button>
            {/* <Button variant="outline">Login</Button> */}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          Powerful Features for Your Digital Life
        </h1>

        <section className="mb-16">
          <Card className="bg-gradient-to-r from-gray-900 to-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold flex items-center justify-center">
                <Calendar className="mr-2" /> Join Us Live @ our Global Launch Event
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl mb-4">for the exciting launch of Personal Cloud!</p>
              <p className="text-2xl font-bold mb-2">September 27, 2024</p>
              <p className="mb-4">Be the first to experience our cutting-edge features.</p>
              <Button variant="secondary" size="lg">
                Set a Reminder <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur-sm">
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
        </div>

        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to experience these features?</h2>
          <p className="text-xl text-gray-600 mb-8">Join our waitlist and be the first to try Personal Cloud by DoShare.</p>
          <Button onClick={() => router.push('/')} size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
            Join Waitlist
          </Button>
        </section>
      </main>

      <footer className="bg-purple-100 py-8 mt-12">
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
