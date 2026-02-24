'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Funnel, Target, Zap } from 'lucide-react'
import { MetricsCard } from '../components/MetricsCard'
import { AdminDataTable } from '../components/AdminDataTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FunnelChart, Funnel, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const mockConversionFunnel = [
  { stage: 'Landing Page', value: 4250, percentage: 100 },
  { stage: 'Service Page', value: 2850, percentage: 67 },
  { stage: 'Contact Click', value: 1420, percentage: 33 },
  { stage: 'Form Submit', value: 342, percentage: 8 },
  { stage: 'Converted', value: 145, percentage: 3.4 },
]

const mockServiceConversions = [
  { service: 'Landing Page Dev', visits: 1250, inquiries: 85, conversions: 34, rate: '40%' },
  { service: 'Website Development', visits: 980, inquiries: 68, conversions: 28, rate: '41%' },
  { service: 'Responsive Redesign', visits: 750, inquiries: 52, conversions: 18, rate: '35%' },
  { service: 'Website Maintenance', visits: 420, inquiries: 28, conversions: 12, rate: '43%' },
]

const mockConversionEvents = [
  { event: 'Form Submission', count: 342, value: 45000, source: 'Contact Form' },
  { event: 'Service Inquiry', count: 285, value: 38000, source: 'Landing Page' },
  { event: 'Flash Sale Click', count: 156, value: 18600, source: 'Flash Sale Banner' },
  { event: 'Chat Opened', count: 420, value: 0, source: 'Messenger' },
  { event: 'Phone Call', count: 87, value: 12000, source: 'Contact Button' },
]

export default function ConversionsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [timeRange, setTimeRange] = useState('7d')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  const totalVisits = 4250
  const totalConversions = 145
  const conversionRate = ((totalConversions / totalVisits) * 100).toFixed(2)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Conversion Tracking</h1>
          <p className="text-slate-400">Monitor and analyze conversion events and funnel performance</p>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-40 bg-slate-900 border-slate-700 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-900 border-slate-700">
            <SelectItem value="1d">Last 24 Hours</SelectItem>
            <SelectItem value="7d">Last 7 Days</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
            <SelectItem value="90d">Last 90 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Total Visits"
          value={totalVisits.toLocaleString()}
          icon={<Target className="h-8 w-8" />}
        />
        <MetricsCard
          title="Total Conversions"
          value={totalConversions}
          change={15}
          trend="up"
          icon={<TrendingUp className="h-8 w-8" />}
        />
        <MetricsCard
          title="Conversion Rate"
          value={`${conversionRate}%`}
          change={2}
          trend="up"
          icon={<Zap className="h-8 w-8" />}
        />
        <MetricsCard
          title="Conversion Value"
          value="$113,600"
          change={18}
          trend="up"
          icon={<TrendingUp className="h-8 w-8 text-green-500" />}
        />
      </div>

      {/* Conversion Funnel */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Funnel className="h-5 w-5" />
            Conversion Funnel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockConversionFunnel.map((stage, idx) => {
              const dropoffRate = idx === 0 ? 0 : 100 - stage.percentage
              return (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{stage.stage}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-blue-400">{stage.value.toLocaleString()}</span>
                      <span className="text-xs text-slate-400 ml-2">({stage.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-800 rounded h-3">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded"
                      style={{ width: `${stage.percentage}%` }}
                    />
                  </div>
                  {dropoffRate > 0 && (
                    <p className="text-xs text-red-400">
                      ↓ {dropoffRate.toFixed(1)}% drop-off from previous step
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Service Conversion Performance */}
      <AdminDataTable
        title="Service Conversion Performance"
        columns={[
          { key: 'service', label: 'Service' },
          {
            key: 'visits',
            label: 'Visits',
            render: (value) => <span className="font-semibold text-blue-400">{value.toLocaleString()}</span>,
          },
          {
            key: 'inquiries',
            label: 'Inquiries',
            render: (value) => <span className="font-semibold text-purple-400">{value}</span>,
          },
          {
            key: 'conversions',
            label: 'Conversions',
            render: (value) => <span className="font-semibold text-green-400">{value}</span>,
          },
          {
            key: 'rate',
            label: 'Conversion Rate',
            render: (value) => <span className="font-semibold text-yellow-400">{value}</span>,
          },
        ]}
        data={mockServiceConversions}
      />

      {/* Conversion Events */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Conversion Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockConversionEvents.map((event, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-4 flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-white">{event.event}</p>
                  <p className="text-xs text-slate-400 mt-1">Source: {event.source}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-2xl font-bold text-blue-400">{event.count}</p>
                  {event.value > 0 && (
                    <p className="text-sm text-green-400">${event.value.toLocaleString()}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Attribution */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Conversion Attribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                { source: 'Direct', conversions: 58 },
                { source: 'Organic', conversions: 42 },
                { source: 'Referral', conversions: 28 },
                { source: 'Social', conversions: 12 },
                { source: 'Email', conversions: 5 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Bar dataKey="conversions" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
