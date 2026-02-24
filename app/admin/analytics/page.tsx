'use client'

import { useState, useEffect } from 'react'
import { Eye, Users, BarChart3, TrendingUp } from 'lucide-react'
import { MetricsCard } from '../components/MetricsCard'
import { AdminDataTable } from '../components/AdminDataTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockTrafficData = [
  { date: 'Mon', pageviews: 1240, uniqueVisitors: 845, bounceRate: 42, avgDuration: 2.5 },
  { date: 'Tue', pageviews: 1380, uniqueVisitors: 932, bounceRate: 38, avgDuration: 2.8 },
  { date: 'Wed', pageviews: 1280, uniqueVisitors: 876, bounceRate: 41, avgDuration: 2.4 },
  { date: 'Thu', pageviews: 1420, uniqueVisitors: 998, bounceRate: 35, avgDuration: 3.1 },
  { date: 'Fri', pageviews: 1510, uniqueVisitors: 1085, bounceRate: 32, avgDuration: 3.4 },
  { date: 'Sat', pageviews: 1380, uniqueVisitors: 945, bounceRate: 39, avgDuration: 2.9 },
  { date: 'Sun', pageviews: 1290, uniqueVisitors: 820, bounceRate: 44, avgDuration: 2.3 },
]

const mockPagePerformance = [
  { page: '/', pageviews: 4250, uniqueVisitors: 3120, bounceRate: '38%', avgTime: '2m 15s' },
  { page: '/landing-page-dev', pageviews: 1850, uniqueVisitors: 1420, bounceRate: '42%', avgTime: '1m 45s' },
  { page: '/website-development', pageviews: 1620, uniqueVisitors: 1210, bounceRate: '35%', avgTime: '2m 30s' },
  { page: '/responsive-redesign', pageviews: 1340, uniqueVisitors: 980, bounceRate: '41%', avgTime: '1m 50s' },
  { page: '/website-maintenance', pageviews: 920, uniqueVisitors: 650, bounceRate: '48%', avgTime: '1m 20s' },
]

const mockTrafficSources = [
  { source: 'Direct', visitors: 3450, sessions: 4120, percentage: 35 },
  { source: 'Google', visitors: 2890, sessions: 3220, percentage: 29 },
  { source: 'Referral', visitors: 1920, sessions: 2100, percentage: 18 },
  { source: 'Social Media', visitors: 1340, sessions: 1650, percentage: 15 },
  { source: 'Other', visitors: 120, sessions: 140, percentage: 3 },
]

export default function AnalyticsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [timeRange, setTimeRange] = useState('7d')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  const totalPageviews = mockTrafficData.reduce((sum, d) => sum + d.pageviews, 0)
  const totalVisitors = mockTrafficData.reduce((sum, d) => sum + d.uniqueVisitors, 0)
  const avgBounceRate = (
    mockTrafficData.reduce((sum, d) => sum + d.bounceRate, 0) / mockTrafficData.length
  ).toFixed(1)
  const avgSessionDuration = (
    mockTrafficData.reduce((sum, d) => sum + d.avgDuration, 0) / mockTrafficData.length
  ).toFixed(1)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Website Analytics</h1>
          <p className="text-slate-400">Track traffic, visitors, and user behavior</p>
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
          title="Total Pageviews"
          value={totalPageviews.toLocaleString()}
          change={12}
          trend="up"
          icon={<Eye className="h-8 w-8" />}
        />
        <MetricsCard
          title="Unique Visitors"
          value={totalVisitors.toLocaleString()}
          change={8}
          trend="up"
          icon={<Users className="h-8 w-8" />}
        />
        <MetricsCard
          title="Avg Bounce Rate"
          value={`${avgBounceRate}%`}
          change={-5}
          changeLabel="improvement"
          trend="down"
          icon={<BarChart3 className="h-8 w-8" />}
        />
        <MetricsCard
          title="Avg Session Duration"
          value={`${avgSessionDuration}m`}
          change={15}
          trend="up"
          icon={<TrendingUp className="h-8 w-8" />}
        />
      </div>

      {/* Traffic Trends */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">Traffic Trends (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={mockTrafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Line
                type="monotone"
                dataKey="pageviews"
                stroke="#a78bfa"
                strokeWidth={2}
                name="Pageviews"
              />
              <Line
                type="monotone"
                dataKey="uniqueVisitors"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Unique Visitors"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Traffic Sources & Page Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockTrafficSources.map((source, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{source.source}</span>
                    <span className="text-sm text-slate-400">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{source.visitors.toLocaleString()} visitors</span>
                    <span>{source.sessions.toLocaleString()} sessions</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bounce Rate Trend */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Bounce Rate & Session Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockTrafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Bar dataKey="bounceRate" fill="#ef4444" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Page Performance Table */}
      <AdminDataTable
        title="Page Performance"
        columns={[
          { key: 'page', label: 'Page' },
          {
            key: 'pageviews',
            label: 'Pageviews',
            render: (value) => <span className="font-semibold text-blue-400">{value.toLocaleString()}</span>,
          },
          {
            key: 'uniqueVisitors',
            label: 'Unique Visitors',
            render: (value) => <span className="font-semibold text-purple-400">{value.toLocaleString()}</span>,
          },
          { key: 'bounceRate', label: 'Bounce Rate' },
          { key: 'avgTime', label: 'Avg Time' },
        ]}
        data={mockPagePerformance}
      />

      {/* Real-time Visitors Card */}
      <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-400">Real-time Visitors Now</p>
              <p className="text-4xl font-bold text-green-300 mt-2">24</p>
              <p className="text-xs text-slate-400 mt-2">Watching your website right now</p>
            </div>
            <div className="text-6xl text-green-500 opacity-20">
              <Eye className="h-16 w-16" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
