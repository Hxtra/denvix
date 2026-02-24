'use client'

import { useState, useEffect } from 'react'
import { Edit2, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const mockContent = [
  {
    id: 1,
    section: 'Homepage Hero',
    title: 'Nordic Precision. Global Impact.',
    lastUpdated: '2024-02-20',
    status: 'published',
  },
  {
    id: 2,
    section: 'Service Descriptions',
    title: 'All Service Pages Content',
    lastUpdated: '2024-02-18',
    status: 'published',
  },
  {
    id: 3,
    section: 'Testimonials',
    title: 'Client Testimonials Section',
    lastUpdated: '2024-02-15',
    status: 'published',
  },
  {
    id: 4,
    section: 'FAQ Page',
    title: 'Frequently Asked Questions',
    lastUpdated: '2024-02-10',
    status: 'draft',
  },
]

export default function CMSPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedContent, setSelectedContent] = useState<(typeof mockContent)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Content Management</h1>
        <p className="text-slate-400">Update website content and manage pages</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockContent.map((content) => (
          <Card key={content.id} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-slate-500" />
                    <CardTitle className="text-white">{content.section}</CardTitle>
                  </div>
                  <p className="text-sm text-slate-400 mt-2">{content.title}</p>
                </div>
                <Badge
                  className={
                    content.status === 'published'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }
                >
                  {content.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-slate-400">Last updated: {content.lastUpdated}</p>
              <Dialog open={isDialogOpen && selectedContent?.id === content.id} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => setSelectedContent(content)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit Content
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Edit {content.section}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Content</Label>
                      <Textarea
                        placeholder="Enter content..."
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-64"
                        defaultValue={`${content.title} - Edit this content`}
                      />
                    </div>
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        className="border-slate-700 text-slate-300"
                        onClick={() => setIsDialogOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
