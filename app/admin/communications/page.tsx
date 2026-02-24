'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, Mail, Phone } from 'lucide-react'
import { AdminDataTable } from '../components/AdminDataTable'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mockMessages = [
  {
    id: 1,
    from: 'John Smith',
    type: 'Messenger',
    message: 'Hi, interested in landing page development',
    date: '2024-02-23',
    status: 'unread',
  },
  {
    id: 2,
    from: 'Emma Johnson',
    type: 'WhatsApp',
    message: 'Can you provide a quote for website redesign?',
    date: '2024-02-23',
    status: 'read',
  },
  {
    id: 3,
    from: 'Contact Form',
    type: 'Email',
    message: 'Inquiry about responsive design service',
    date: '2024-02-22',
    status: 'read',
  },
]

export default function CommunicationsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Communications</h1>
        <p className="text-slate-400">Track all customer messages and inquiries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-slate-400">Total Messages</p>
                <p className="text-2xl font-bold text-white">342</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Mail className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm text-slate-400">Unread</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Phone className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-slate-400">Avg Response Time</p>
                <p className="text-2xl font-bold text-white">2.5h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <AdminDataTable
        title="Recent Messages"
        columns={[
          {
            key: 'from',
            label: 'From',
            render: (value) => <span className="font-semibold text-white">{value}</span>,
          },
          {
            key: 'type',
            label: 'Channel',
            render: (value) => {
              const colors: Record<string, string> = {
                Messenger: 'bg-blue-500/20 text-blue-400',
                WhatsApp: 'bg-green-500/20 text-green-400',
                Email: 'bg-purple-500/20 text-purple-400',
              }
              return <Badge className={colors[value] || 'bg-slate-500/20 text-slate-400'}>{value}</Badge>
            },
          },
          {
            key: 'message',
            label: 'Message',
            render: (value) => <span className="text-slate-200 text-sm">{value}</span>,
          },
          {
            key: 'status',
            label: 'Status',
            render: (value) => (
              <Badge className={value === 'unread' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}>
                {value}
              </Badge>
            ),
          },
          {
            key: 'date',
            label: 'Date',
            render: (value) => <span className="text-slate-400 text-sm">{value}</span>,
          },
        ]}
        data={mockMessages}
      />
    </div>
  )
}
