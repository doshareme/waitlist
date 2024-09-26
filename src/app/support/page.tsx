'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Cloud, BookOpen, MessageCircle, Phone, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Support() {
  const supportOptions = [
    { icon: <BookOpen size={24} />, title: "Knowledge Base", description: "Find answers to common questions in our comprehensive knowledge base.",href:"/features" },
    { icon: <MessageCircle size={24} />, title: "Live Chat", description: "Chat with our support team in real-time for quick assistance.",href:"/"  },
    { icon: <Phone size={24} />, title: "Phone Support", description: "Speak directly with our support team for complex issues." ,href:"/" },
    { icon: <Mail size={24} />, title: "Email Support", description: "Send us an email and we'll get back to you within 24 hours.",href:"mailt:support@doshare.me"  },
  ]
  const router =  useRouter()


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">Personal Cloud by DoShare</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" onClick={() => router.push('/features')}>Home</Button>
            <Button variant="ghost" onClick={() => router.push('/features')}>Features</Button>
            {/* <Button variant="ghost">Pricing</Button> */}
            {/* <Button variant="outline">Login</Button> */}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          We're Here to Help
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {supportOptions.map((option, index) => (
          <Link href={option.href} key={index} >
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="text-purple-600">{option.icon}</div>
                  <span>{option.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{option.description}</p>
              </CardContent>
            </Card>
          </Link>
          ))}
        </div>

        <Card className="bg-white/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <Input id="subject" placeholder="What's your question about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Please describe your issue or question" rows={4} />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
            </form>
          </CardContent>
        </Card>
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