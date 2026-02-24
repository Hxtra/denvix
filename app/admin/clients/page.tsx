'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Mail, Phone, MapPin } from 'lucide-react'
import { AdminDataTable } from '../components/AdminDataTable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// Mock data
const mockClients = [
  {
    id: 1,
    name: 'TechCorp Norway',
    email: 'contact@techcorp.no',
    phone: '+47 91234567',
    location: 'Oslo',
    company: 'Tech Solutions',
    status: 'active',
    projects: 3,
    totalSpent: 45000,
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Creative Agency AS',
    email: 'hello@creative.no',
    phone: '+47 98765432',
    location: 'Bergen',
    company: 'Creative Agency',
    status: 'active',
    projects: 5,
    totalSpent: 78500,
    joinDate: '2023-11-20',
  },
  {
    id: 3,
    name: 'StartupXYZ',
    email: 'info@startupxyz.no',
    phone: '+47 87654321',
    location: 'Stavanger',
    company: 'StartupXYZ',
    status: 'active',
    projects: 1,
    totalSpent: 12000,
    joinDate: '2024-02-01',
  },
  {
    id: 4,
    name: 'Designer Co',
    email: 'design@designer.no',
    phone: '+47 76543210',
    location: 'Trondheim',
    company: 'Design Company',
    status: 'inactive',
    projects: 2,
    totalSpent: 28000,
    joinDate: '2023-08-10',
  },
]

export default function ClientsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [clients, setClients] = useState(mockClients)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    notes: '',
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddClient = () => {
    if (formData.name && formData.email) {
      const newClient = {
        id: clients.length + 1,
        ...formData,
        status: 'active',
        projects: 0,
        totalSpent: 0,
        joinDate: new Date().toISOString().split('T')[0],
      }
      setClients([...clients, newClient])
      setFormData({ name: '', email: '', phone: '', company: '', location: '', notes: '' })
      setIsDialogOpen(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Clients</h1>
          <p className="text-slate-400">Manage and track all your clients</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Client</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Name *</Label>
                <Input
                  placeholder="Client name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Email *</Label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  placeholder="+47 912 34 567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Company</Label>
                <Input
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  placeholder="City/Region"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Notes</Label>
                <Textarea
                  placeholder="Any additional notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <Button
                onClick={handleAddClient}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Create Client
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
        <Input
          placeholder="Search clients by name, email, or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <p className="text-sm text-slate-400">Total Clients</p>
            <p className="text-3xl font-bold text-white mt-2">{clients.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <p className="text-sm text-slate-400">Active</p>
            <p className="text-3xl font-bold text-green-400 mt-2">{clients.filter((c) => c.status === 'active').length}</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <p className="text-sm text-slate-400">Total Revenue</p>
            <p className="text-3xl font-bold text-blue-400 mt-2">${clients.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <p className="text-sm text-slate-400">Total Projects</p>
            <p className="text-3xl font-bold text-purple-400 mt-2">{clients.reduce((sum, c) => sum + c.projects, 0)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Clients Table */}
      <AdminDataTable
        title="All Clients"
        columns={[
          {
            key: 'name',
            label: 'Name',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-white">{value}</p>
                <p className="text-xs text-slate-400 mt-1">{row.company}</p>
              </div>
            ),
          },
          {
            key: 'email',
            label: 'Contact',
            render: (value, row) => (
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-3 w-3 text-slate-500" />
                  {value}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-3 w-3 text-slate-500" />
                  {row.phone}
                </div>
              </div>
            ),
          },
          {
            key: 'location',
            label: 'Location',
            render: (value) => (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-500" />
                {value}
              </div>
            ),
          },
          {
            key: 'status',
            label: 'Status',
            render: (value) => (
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  value === 'active'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-slate-500/20 text-slate-400'
                }`}
              >
                {value}
              </span>
            ),
          },
          {
            key: 'projects',
            label: 'Projects',
            render: (value) => <span className="font-semibold text-blue-400">{value}</span>,
          },
          {
            key: 'totalSpent',
            label: 'Total Spent',
            render: (value) => <span className="font-semibold text-green-400">${value.toLocaleString()}</span>,
          },
        ]}
        data={filteredClients}
      />
    </div>
  )
}
