'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Calendar, DollarSign, Users } from 'lucide-react'
import { AdminDataTable } from '../components/AdminDataTable'
import { MetricsCard } from '../components/MetricsCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const mockProjects = [
  {
    id: 1,
    name: 'Ecommerce Platform',
    client: 'TechCorp',
    status: 'in-progress',
    progress: 75,
    startDate: '2024-01-15',
    deadline: '2024-03-15',
    budget: 45000,
    spent: 34500,
    assignedTo: 'John Doe',
  },
  {
    id: 2,
    name: 'Blog Redesign',
    client: 'Creative Agency',
    status: 'in-progress',
    progress: 50,
    startDate: '2024-02-01',
    deadline: '2024-02-28',
    budget: 12000,
    spent: 6000,
    assignedTo: 'Jane Smith',
  },
  {
    id: 3,
    name: 'Portfolio Site',
    client: 'Designer Co',
    status: 'review',
    progress: 90,
    startDate: '2024-01-20',
    deadline: '2024-02-20',
    budget: 18000,
    spent: 17500,
    assignedTo: 'Mike Johnson',
  },
  {
    id: 4,
    name: 'Landing Page',
    client: 'StartupXYZ',
    status: 'completed',
    progress: 100,
    startDate: '2024-01-10',
    deadline: '2024-02-10',
    budget: 8000,
    spent: 7800,
    assignedTo: 'Sarah Wilson',
  },
]

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [projects, setProjects] = useState(mockProjects)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    status: 'inquiry',
    budget: '',
    deadline: '',
    description: '',
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleAddProject = () => {
    if (formData.name && formData.client) {
      const newProject = {
        id: projects.length + 1,
        ...formData,
        progress: 0,
        spent: 0,
        startDate: new Date().toISOString().split('T')[0],
        assignedTo: 'Unassigned',
      }
      setProjects([...projects, newProject])
      setFormData({ name: '', client: '', status: 'inquiry', budget: '', deadline: '', description: '' })
      setIsDialogOpen(false)
    }
  }

  const stats = {
    total: projects.length,
    inProgress: projects.filter((p) => p.status === 'in-progress').length,
    completed: projects.filter((p) => p.status === 'completed').length,
    budget: projects.reduce((sum, p) => sum + p.budget, 0),
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-slate-400">Track and manage all project deliverables</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Project Name *</Label>
                <Input
                  placeholder="Project name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Client *</Label>
                <Input
                  placeholder="Client name"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="inquiry">Inquiry</SelectItem>
                    <SelectItem value="proposal">Proposal</SelectItem>
                    <SelectItem value="agreement">Agreement</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="review">Review</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Budget</Label>
                  <Input
                    type="number"
                    placeholder="0"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Deadline</Label>
                  <Input
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Project description..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <Button
                onClick={handleAddProject}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Create Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricsCard title="Total Projects" value={stats.total} icon={<Users className="h-8 w-8" />} />
        <MetricsCard
          title="In Progress"
          value={stats.inProgress}
          icon={<Users className="h-8 w-8" />}
          trend="up"
          change={2}
        />
        <MetricsCard title="Completed" value={stats.completed} icon={<Users className="h-8 w-8" />} />
        <MetricsCard
          title="Total Budget"
          value={`$${stats.budget.toLocaleString()}`}
          icon={<DollarSign className="h-8 w-8" />}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-48 bg-slate-900 border-slate-700 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-900 border-slate-700">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="inquiry">Inquiry</SelectItem>
            <SelectItem value="proposal">Proposal</SelectItem>
            <SelectItem value="agreement">Agreement</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="review">Review</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Projects Table */}
      <AdminDataTable
        title="All Projects"
        columns={[
          {
            key: 'name',
            label: 'Project',
            render: (value, row) => (
              <div>
                <p className="font-semibold text-white">{value}</p>
                <p className="text-xs text-slate-400 mt-1">{row.client}</p>
              </div>
            ),
          },
          {
            key: 'status',
            label: 'Status',
            render: (value) => {
              const colors: Record<string, string> = {
                inquiry: 'bg-gray-500/20 text-gray-400',
                proposal: 'bg-yellow-500/20 text-yellow-400',
                agreement: 'bg-purple-500/20 text-purple-400',
                'in-progress': 'bg-blue-500/20 text-blue-400',
                review: 'bg-orange-500/20 text-orange-400',
                completed: 'bg-green-500/20 text-green-400',
              }
              return (
                <span className={`px-2 py-1 rounded text-xs font-semibold ${colors[value] || 'bg-slate-500/20 text-slate-400'}`}>
                  {value}
                </span>
              )
            },
          },
          {
            key: 'progress',
            label: 'Progress',
            render: (value) => (
              <div className="flex items-center gap-2">
                <div className="w-24 bg-slate-700 rounded h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded"
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400">{value}%</span>
              </div>
            ),
          },
          {
            key: 'deadline',
            label: 'Deadline',
            render: (value) => (
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-slate-500" />
                {value}
              </div>
            ),
          },
          {
            key: 'spent',
            label: 'Budget Used',
            render: (value, row) => (
              <div>
                <p className="text-sm text-white">${value.toLocaleString()}</p>
                <p className="text-xs text-slate-400">of ${row.budget.toLocaleString()}</p>
              </div>
            ),
          },
        ]}
        data={filteredProjects}
      />
    </div>
  )
}
