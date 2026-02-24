'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import { MetricsCard } from '../components/MetricsCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

const mockServices = [
  {
    id: 1,
    name: 'Landing Page Development',
    description: 'High-converting landing pages for your campaigns',
    basePrice: 5000,
    flashPrice: 2500,
    inquiries: 45,
    conversions: 12,
    active: true,
  },
  {
    id: 2,
    name: 'Website Development',
    description: 'Full-featured websites with modern technology',
    basePrice: 15000,
    flashPrice: 7500,
    inquiries: 32,
    conversions: 8,
    active: true,
  },
  {
    id: 3,
    name: 'Responsive Redesign',
    description: 'Make your existing site mobile-friendly',
    basePrice: 8000,
    flashPrice: 4000,
    inquiries: 28,
    conversions: 7,
    active: true,
  },
  {
    id: 4,
    name: 'Website Maintenance',
    description: 'Ongoing support and optimization',
    basePrice: 2000,
    flashPrice: 1000,
    inquiries: 18,
    conversions: 6,
    active: true,
  },
]

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [services, setServices] = useState(mockServices)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    basePrice: '',
    flashPrice: '',
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  const handleOpenDialog = (service?: (typeof services)[0]) => {
    if (service) {
      setEditingId(service.id)
      setFormData({
        name: service.name,
        description: service.description,
        basePrice: service.basePrice.toString(),
        flashPrice: service.flashPrice.toString(),
      })
    } else {
      setEditingId(null)
      setFormData({ name: '', description: '', basePrice: '', flashPrice: '' })
    }
    setIsDialogOpen(true)
  }

  const handleSaveService = () => {
    if (formData.name && formData.basePrice) {
      if (editingId !== null) {
        setServices(
          services.map((s) =>
            s.id === editingId
              ? {
                  ...s,
                  name: formData.name,
                  description: formData.description,
                  basePrice: parseInt(formData.basePrice),
                  flashPrice: parseInt(formData.flashPrice),
                }
              : s
          )
        )
      } else {
        const newService = {
          id: Math.max(...services.map((s) => s.id)) + 1,
          name: formData.name,
          description: formData.description,
          basePrice: parseInt(formData.basePrice),
          flashPrice: parseInt(formData.flashPrice),
          inquiries: 0,
          conversions: 0,
          active: true,
        }
        setServices([...services, newService])
      }
      setIsDialogOpen(false)
    }
  }

  const handleDeleteService = (id: number) => {
    setServices(services.filter((s) => s.id !== id))
  }

  const totalInquiries = services.reduce((sum, s) => sum + s.inquiries, 0)
  const totalConversions = services.reduce((sum, s) => sum + s.conversions, 0)
  const avgConversionRate = ((totalConversions / totalInquiries) * 100).toFixed(1)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Services</h1>
          <p className="text-slate-400">Manage and track all your service packages</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => handleOpenDialog()}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
            <DialogHeader>
              <DialogTitle>{editingId ? 'Edit Service' : 'Add New Service'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Service Name *</Label>
                <Input
                  placeholder="Service name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Service description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Base Price *</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.basePrice}
                    onChange={(e) => setFormData({ ...formData, basePrice: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Flash Sale Price</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.flashPrice}
                    onChange={(e) => setFormData({ ...formData, flashPrice: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
              </div>
              <Button
                onClick={handleSaveService}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                {editingId ? 'Update Service' : 'Create Service'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricsCard title="Total Services" value={services.length} />
        <MetricsCard title="Total Inquiries" value={totalInquiries} trend="up" change={8} />
        <MetricsCard title="Conversions" value={totalConversions} trend="up" change={12} />
        <MetricsCard title="Conversion Rate" value={`${avgConversionRate}%`} />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const conversionRate = ((service.conversions / service.inquiries) * 100).toFixed(1)
          const discount = (
            ((service.basePrice - service.flashPrice) / service.basePrice) *
            100
          ).toFixed(0)
          return (
            <Card key={service.id} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white">{service.name}</CardTitle>
                    <p className="text-sm text-slate-400 mt-1">{service.description}</p>
                  </div>
                  <Badge className={service.active ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}>
                    {service.active ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Base Price</span>
                    <span className="text-xl font-bold text-white">${service.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Flash Sale Price</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-green-400">${service.flashPrice.toLocaleString()}</span>
                      <p className="text-xs text-slate-400 mt-1">{discount}% off</p>
                    </div>
                  </div>
                </div>

                {/* Performance */}
                <div className="grid grid-cols-3 gap-2 bg-slate-800/50 rounded-lg p-4">
                  <div className="text-center">
                    <p className="text-slate-400 text-xs">Inquiries</p>
                    <p className="text-2xl font-bold text-blue-400">{service.inquiries}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400 text-xs">Conversions</p>
                    <p className="text-2xl font-bold text-green-400">{service.conversions}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-400 text-xs">Conv. Rate</p>
                    <p className="text-2xl font-bold text-purple-400">{conversionRate}%</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-slate-700">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenDialog(service)}
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                  >
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteService(service.id)}
                    className="flex-1 border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/40"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
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
