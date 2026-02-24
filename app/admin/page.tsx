'use client'

import { useEffect, useState } from 'react'
import { Users, FileText, DollarSign, TrendingUp, Activity, AlertCircle } from 'lucide-react'
import { MetricsCard } from './components/MetricsCard'
import { AdminDataTable } from './components/AdminDataTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import Link from 'next/link'

// Mock data
const mockMetrics = {
  totalVisitors: 12458,
  visitorsChange: 12.5,
  conversions: 342,
  conversionsChange: 8.2,
  revenue: 45230,
  revenueChange: 15.3,
  activeProjects: 18,
  activeClients: 24,
  pendingLeads: 7,
}

const mockVisitorData = [
  { date: 'Mon', visitors: 240 },
  { date: 'Tue', visitors: 380 },
  { date: 'Wed', visitors: 280 },
  { date: 'Thu', visitors: 420 },
  { date: 'Fri', visitors: 510 },
  { date: 'Sat', visitors: 380 },
  { date: 'Sun', visitors: 290 },
]

const mockServiceData = [
  { name: 'Landing Page Dev', conversions: 45 },
  { name: 'Website Dev', conversions: 32 },
  { name: 'Responsive Design', conversions: 28 },
  { name: 'Maintenance', conversions: 18 },
]

const mockRecentLeads = [
  { id: 1, name: 'John Smith', service: 'Landing Page Dev', date: '2024-02-23', status: 'new' },
  { id: 2, name: 'Emma Johnson', service: 'Website Development', date: '2024-02-22', status: 'contacted' },
  { id: 3, name: 'Alex Brown', service: 'Responsive Redesign', date: '2024-02-21', status: 'proposal' },
  { id: 4, name: 'Maria Garcia', service: 'Website Maintenance', date: '2024-02-20', status: 'negotiating' },
  { id: 5, name: 'James Wilson', service: 'Landing Page Dev', date: '2024-02-19', status: 'converted' },
]

const mockRecentProjects = [
  { id: 1, name: 'Ecommerce Platform', client: 'TechCorp', status: 'in-progress', progress: 75 },
  { id: 2, name: 'Blog Redesign', client: 'Creative Agency', status: 'in-progress', progress: 50 },
  { id: 3, name: 'Portfolio Site', client: 'Designer Co', status: 'review', progress: 90 },
  { id: 4, name: 'Landing Page', client: 'StartupXYZ', status: 'completed', progress: 100 },
]

const statusColors: Record<string, string> = {
  new: 'bg-blue-500/20 text-blue-400',
  contacted: 'bg-purple-500/20 text-purple-400',
  proposal: 'bg-amber-500/20 text-amber-400',
  negotiating: 'bg-orange-500/20 text-orange-400',
  converted: 'bg-green-500/20 text-green-400',
  'in-progress': 'bg-blue-500/20 text-blue-400',
  review: 'bg-purple-500/20 text-purple-400',
  completed: 'bg-green-500/20 text-green-400',
}

export default function AdminDashboard() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome back to Denvix Admin</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Total Visitors"
          value={mockMetrics.totalVisitors.toLocaleString()}
          change={mockMetrics.visitorsChange}
          icon={<TrendingUp className="h-8 w-8" />}
          trend="up"
        />
        <MetricsCard
          title="Conversions"
          value={mockMetrics.conversions}
          change={mockMetrics.conversionsChange}
          icon={<Users className="h-8 w-8" />}
          trend="up"
        />
        <MetricsCard
          title="Revenue"
          value={`$${mockMetrics.revenue.toLocaleString()}`}
          change={mockMetrics.revenueChange}
          icon={<DollarSign className="h-8 w-8" />}
          trend="up"
        />
        <MetricsCard
          title="Active Projects"
          value={mockMetrics.activeProjects}
          change={2}
          changeLabel="this week"
          icon={<FileText className="h-8 w-8" />}
          trend="up"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricsCard
          title="Active Clients"
          value={mockMetrics.activeClients}
          change={5}
          changeLabel="new this month"
          trend="up"
        />
        <MetricsCard
          title="Pending Leads"
          value={mockMetrics.pendingLeads}
          change={-2}
          changeLabel="from yesterday"
          trend="down"
        />
        <Card className="bg-yellow-500/10 border-yellow-500/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-1" />
              <div>
                <p className="text-sm text-yellow-400 font-semibold">Outstanding Invoices</p>
                <p className="text-2xl font-bold text-yellow-300 mt-1">$8,500</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitor Trends */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Visitor Trends (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockVisitorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="#a78bfa"
                  strokeWidth={2}
                  dot={{ fill: '#a78bfa', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Service Performance */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Service Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockServiceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" dataKey="name" angle={-45} textAnchor="end" height={80} />
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

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <AdminDataTable
          title="Recent Leads"
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'service', label: 'Service' },
            {
              key: 'status',
              label: 'Status',
              render: (value) => (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[value] || 'bg-slate-700 text-slate-300'}`}>
                  {value}
                </span>
              ),
            },
            { key: 'date', label: 'Date' },
          ]}
          data={mockRecentLeads.slice(0, 5)}
        />

        {/* Recent Projects */}
        <AdminDataTable
          title="Recent Projects"
          columns={[
            { key: 'name', label: 'Project' },
            { key: 'client', label: 'Client' },
            {
              key: 'status',
              label: 'Status',
              render: (value) => (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[value] || 'bg-slate-700 text-slate-300'}`}>
                  {value}
                </span>
              ),
            },
            {
              key: 'progress',
              label: 'Progress',
              render: (value) => (
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-slate-700 rounded h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-400">{value}%</span>
                </div>
              ),
            },
          ]}
          data={mockRecentProjects}
        />
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">New Client</h3>
                <p className="text-sm text-slate-400 mt-1">Add a new client to your system</p>
              </div>
              <Users className="h-8 w-8 text-purple-400" />
            </div>
            <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/admin/clients">Add Client</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/20 cursor-pointer hover:border-blue-500/40 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">New Project</h3>
                <p className="text-sm text-slate-400 mt-1">Start tracking a new project</p>
              </div>
              <FileText className="h-8 w-8 text-blue-400" />
            </div>
            <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/admin/projects">New Project</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500/20 cursor-pointer hover:border-orange-500/40 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Flash Sale</h3>
                <p className="text-sm text-slate-400 mt-1">Create a new flash sale promotion</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-400" />
            </div>
            <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/admin/flash-sales">Create Sale</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
