'use client'

import { useState, useEffect } from 'react'
import { DollarSign, TrendingUp, AlertCircle, FileText } from 'lucide-react'
import { MetricsCard } from '../components/MetricsCard'
import { AdminDataTable } from '../components/AdminDataTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const mockInvoices = [
  { id: 'INV-001', client: 'TechCorp', amount: 45000, status: 'paid', date: '2024-02-20', dueDate: '2024-02-20' },
  { id: 'INV-002', client: 'Creative Agency', amount: 12000, status: 'paid', date: '2024-02-18', dueDate: '2024-02-18' },
  { id: 'INV-003', client: 'StartupXYZ', amount: 8500, status: 'overdue', date: '2024-02-01', dueDate: '2024-02-15' },
  { id: 'INV-004', client: 'Designer Co', amount: 18000, status: 'pending', date: '2024-02-22', dueDate: '2024-03-07' },
  { id: 'INV-005', client: 'TechCorp', amount: 6500, status: 'pending', date: '2024-02-23', dueDate: '2024-03-08' },
]

const mockRevenueData = [
  { month: 'Jan', revenue: 45230, profit: 34230 },
  { month: 'Feb', revenue: 52100, profit: 38900 },
  { month: 'Mar', revenue: 48600, profit: 36800 },
  { month: 'Apr', revenue: 61200, profit: 46200 },
  { month: 'May', revenue: 55300, profit: 41200 },
  { month: 'Jun', revenue: 67890, profit: 51890 },
]

const paymentMethodsData = [
  { name: 'Bank Transfer', value: 145230, color: '#3b82f6' },
  { name: 'Wise', value: 85400, color: '#06b6d4' },
  { name: 'Credit Card', value: 32100, color: '#8b5cf6' },
]

export default function FinancePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  const totalRevenue = mockRevenueData.reduce((sum, d) => sum + d.revenue, 0)
  const totalProfit = mockRevenueData.reduce((sum, d) => sum + d.profit, 0)
  const paidInvoices = mockInvoices.filter((i) => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0)
  const pendingInvoices = mockInvoices.filter((i) => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0)
  const overdueInvoices = mockInvoices.filter((i) => i.status === 'overdue').reduce((sum, i) => sum + i.amount, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Finance & Payments</h1>
        <p className="text-slate-400">Track revenue, invoices, and financial transactions</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          change={12}
          trend="up"
          icon={<DollarSign className="h-8 w-8 text-green-500" />}
        />
        <MetricsCard
          title="Total Profit"
          value={`$${totalProfit.toLocaleString()}`}
          change={15}
          trend="up"
          icon={<TrendingUp className="h-8 w-8 text-blue-500" />}
        />
        <MetricsCard
          title="Paid Invoices"
          value={`$${paidInvoices.toLocaleString()}`}
          icon={<FileText className="h-8 w-8 text-green-500" />}
        />
        <MetricsCard
          title="Pending & Overdue"
          value={`$${(pendingInvoices + overdueInvoices).toLocaleString()}`}
          icon={<AlertCircle className="h-8 w-8 text-orange-500" />}
        />
      </div>

      {/* Alerts */}
      {overdueInvoices > 0 && (
        <Card className="bg-red-500/10 border-red-500/30">
          <CardContent className="p-4 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-sm text-red-400 font-semibold">Outstanding Invoices</p>
              <p className="text-xs text-red-300 mt-1">${overdueInvoices.toLocaleString()} is overdue</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Revenue Trend (Last 6 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={mockRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Revenue"
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Profit"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white">Payment Methods Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentMethodsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: $${(value / 1000).toFixed(0)}k`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {paymentMethodsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Invoice Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-green-500/10 border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-green-400">Paid</p>
                <p className="text-2xl font-bold text-green-300 mt-2">${paidInvoices.toLocaleString()}</p>
              </div>
              <Badge className="bg-green-500/20 text-green-400">{mockInvoices.filter((i) => i.status === 'paid').length}</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-500/10 border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-blue-400">Pending</p>
                <p className="text-2xl font-bold text-blue-300 mt-2">${pendingInvoices.toLocaleString()}</p>
              </div>
              <Badge className="bg-blue-500/20 text-blue-400">{mockInvoices.filter((i) => i.status === 'pending').length}</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-red-500/10 border-red-500/30">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-red-400">Overdue</p>
                <p className="text-2xl font-bold text-red-300 mt-2">${overdueInvoices.toLocaleString()}</p>
              </div>
              <Badge className="bg-red-500/20 text-red-400">{mockInvoices.filter((i) => i.status === 'overdue').length}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Table */}
      <AdminDataTable
        title="Recent Invoices"
        columns={[
          { key: 'id', label: 'Invoice ID' },
          { key: 'client', label: 'Client' },
          {
            key: 'status',
            label: 'Status',
            render: (value) => {
              const colors: Record<string, string> = {
                paid: 'bg-green-500/20 text-green-400',
                pending: 'bg-blue-500/20 text-blue-400',
                overdue: 'bg-red-500/20 text-red-400',
              }
              return (
                <Badge className={colors[value] || 'bg-slate-500/20 text-slate-400'}>
                  {value}
                </Badge>
              )
            },
          },
          {
            key: 'date',
            label: 'Date',
            render: (value) => value,
          },
          {
            key: 'amount',
            label: 'Amount',
            render: (value) => <span className="font-semibold text-green-400">${value.toLocaleString()}</span>,
          },
        ]}
        data={mockInvoices}
      />

      {/* Wise Integration */}
      <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-sm font-bold">W</div>
            Wise Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400">Account Status</p>
              <p className="text-lg font-bold text-cyan-400 mt-1">Connected</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400">Total Transfers</p>
              <p className="text-lg font-bold text-cyan-400 mt-1">24</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-sm text-slate-400">Last Transfer</p>
              <p className="text-lg font-bold text-cyan-400 mt-1">2024-02-23</p>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Your Wise account is connected and actively processing international transfers. Latest exchange rates are updated in real-time.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
