'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, Image } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'

const mockPortfolios = [
  {
    id: 1,
    title: 'Ecommerce Platform Redesign',
    client: 'TechCorp',
    category: 'web-development',
    description: 'Complete redesign of ecommerce platform with improved UX',
    images: 3,
    featured: true,
    status: 'published',
  },
  {
    id: 2,
    title: 'Creative Agency Landing Page',
    client: 'Creative Agency AS',
    category: 'landing-page',
    description: 'High-converting landing page for digital agency',
    images: 2,
    featured: true,
    status: 'published',
  },
]

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [portfolios, setPortfolios] = useState(mockPortfolios)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-slate-400">Manage and showcase your completed projects</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
            <DialogHeader>
              <DialogTitle>Add Portfolio Project</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Project Title *</Label>
                <Input
                  placeholder="Project title"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Client</Label>
                <Input
                  placeholder="Client name"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Project description..."
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Create Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolios.map((project) => (
          <Card key={project.id} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <p className="text-sm text-slate-400 mt-1">{project.client}</p>
                </div>
                {project.featured && <Badge className="bg-yellow-500/20 text-yellow-400">Featured</Badge>}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-300">{project.description}</p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Image className="h-4 w-4" />
                  <span>{project.images} images</span>
                </div>
                <Badge className="bg-green-500/20 text-green-400">{project.status}</Badge>
              </div>
              <div className="flex gap-2 pt-4 border-t border-slate-700">
                <Button variant="outline" size="sm" className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800">
                  <Edit2 className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-red-500/20 text-red-400 hover:bg-red-500/10">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
