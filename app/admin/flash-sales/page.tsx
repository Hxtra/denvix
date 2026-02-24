'use client'

import { useState, useEffect } from 'react'
import { Plus, Zap, Clock, Users } from 'lucide-react'
import { MetricsCard } from '../components/MetricsCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'

const mockFlashSales = [
  {
    id: 1,
    title: 'Valentine Special - 50% Off Landing Pages',
    discount: 50,
    discountType: 'percentage',
    services: ['Landing Page Dev'],
    startDate: '2024-02-10',
    endDate: '2024-02-14',
    slots: 20,
    slotsUsed: 18,
    status: 'active',
    revenue: 22500,
  },
  {
    id: 2,
    title: 'Spring Launch - Website Development Deal',
    discount: 30,
    discountType: 'percentage',
    services: ['Website Dev'],
    startDate: '2024-03-01',
    endDate: '2024-03-15',
    slots: 15,
    slotsUsed: 8,
    status: 'scheduled',
    revenue: 84000,
  },
  {
    id: 3,
    title: 'Weekend Flash Deal - 40% Off All Services',
    discount: 40,
    discountType: 'percentage',
    services: ['Landing Page Dev', 'Website Dev', 'Responsive Design'],
    startDate: '2024-02-24',
    endDate: '2024-02-25',
    slots: 30,
    slotsUsed: 25,
    status: 'completed',
    revenue: 45000,
  },
]

export default function FlashSalesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [sales, setSales] = useState(mockFlashSales)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    discount: '',
    discountType: 'percentage',
    services: [] as string[],
    startDate: '',
    endDate: '',
    slots: '',
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  const handleAddSale = () => {
    if (formData.title && formData.discount && formData.slots) {
      const newSale = {
        id: Math.max(...sales.map((s) => s.id)) + 1,
        title: formData.title,
        discount: parseInt(formData.discount),
        discountType: formData.discountType,
        services: formData.services,
        startDate: formData.startDate,
        endDate: formData.endDate,
        slots: parseInt(formData.slots),
        slotsUsed: 0,
        status: 'scheduled',
        revenue: 0,
      }
      setSales([...sales, newSale])
      setFormData({
        title: '',
        discount: '',
        discountType: 'percentage',
        services: [],
        startDate: '',
        endDate: '',
        slots: '',
      })
      setIsDialogOpen(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400'
      case 'scheduled':
        return 'bg-blue-500/20 text-blue-400'
      case 'completed':
        return 'bg-slate-500/20 text-slate-400'
      default:
        return 'bg-slate-500/20 text-slate-400'
    }
  }

  const stats = {
    active: sales.filter((s) => s.status === 'active').length,
    totalRevenue: sales.reduce((sum, s) => sum + s.revenue, 0),
    totalSlots: sales.reduce((sum, s) => sum + s.slots, 0),
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Flash Sales</h1>
          <p className="text-slate-400">Create and manage limited-time promotions</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
              <Plus className="mr-2 h-4 w-4" />
              New Flash Sale
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Flash Sale</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Sale Title *</Label>
                <Input
                  placeholder="e.g., 50% Off Landing Pages"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Discount *</Label>
                  <Input
                    type="number"
                    placeholder="50"
                    value={formData.discount}
                    onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Type</Label>
                  <Select value={formData.discountType} onValueChange={(value) => setFormData({ ...formData, discountType: value })}>
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="percentage">Percentage</SelectItem>
                      <SelectItem value="fixed">Fixed Amount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Available Slots *</Label>
                <Input
                  type="number"
                  placeholder="20"
                  value={formData.slots}
                  onChange={(e) => setFormData({ ...formData, slots: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <Button
                onClick={handleAddSale}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                Create Flash Sale
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricsCard
          title="Active Sales"
          value={stats.active}
          icon={<Zap className="h-8 w-8 text-orange-500" />}
          trend="up"
          change={1}
        />
        <MetricsCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toLocaleString()}`}
          icon={<Zap className="h-8 w-8 text-orange-500" />}
          trend="up"
          change={25}
        />
        <MetricsCard
          title="Total Slots"
          value={stats.totalSlots}
          icon={<Users className="h-8 w-8 text-blue-500" />}
        />
      </div>

      {/* Sales List */}
      <div className="space-y-6">
        {sales.map((sale) => {
          const slotUsagePercent = (sale.slotsUsed / sale.slots) * 100
          const isActive = sale.status === 'active'
          return (
            <Card
              key={sale.id}
              className={`bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors ${
                isActive ? 'border-orange-500/30' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      {isActive && <Zap className="h-5 w-5 text-orange-500 animate-pulse" />}
                      <CardTitle className="text-white">{sale.title}</CardTitle>
                    </div>
                    <p className="text-sm text-slate-400 mt-2 space-x-2">
                      <span>
                        {sale.discount}
                        {sale.discountType === 'percentage' ? '%' : '$'} OFF
                      </span>
                      <span className="text-slate-600">•</span>
                      <span>{sale.startDate} to {sale.endDate}</span>
                    </p>
                  </div>
                  <Badge className={getStatusColor(sale.status)}>
                    {sale.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Services */}
                <div>
                  <p className="text-sm text-slate-400 mb-2">Applied Services</p>
                  <div className="flex flex-wrap gap-2">
                    {sale.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="bg-slate-800 border-slate-700 text-slate-300">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Slot Usage */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-slate-500" />
                      <span className="text-sm text-slate-400">Slots Used</span>
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {sale.slotsUsed} of {sale.slots}
                    </span>
                  </div>
                  <Progress
                    value={slotUsagePercent}
                    className="h-2 bg-slate-800"
                  />
                </div>

                {/* Revenue */}
                <div className="bg-slate-800/50 rounded-lg p-3 flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Total Revenue</span>
                  <span className="text-2xl font-bold text-green-400">${sale.revenue.toLocaleString()}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-slate-700">
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                  >
                    Edit Sale
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
