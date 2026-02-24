'use client'

import { useState, useEffect } from 'react'
import { Plus, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

const mockReports = [
  {
    id: 1,
    name: 'Monthly Performance Report',
    type: 'Performance',
    generatedDate: '2024-02-23',
    period: 'February 2024',
    format: 'PDF',
  },
  {
    id: 2,
    name: 'Lead Analysis Report',
    type: 'Leads',
    generatedDate: '2024-02-22',
    period: 'Last 30 Days',
    format: 'PDF',
  },
  {
    id: 3,
    name: 'Financial Summary',
    type: 'Financial',
    generatedDate: '2024-02-20',
    period: 'Q1 2024',
    format: 'CSV',
  },
]

export default function ReportsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
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
          <h1 className="text-3xl font-bold text-white mb-2">Reports</h1>
          <p className="text-slate-400">Generate and export custom reports</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
            <DialogHeader>
              <DialogTitle>Generate New Report</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Report Type</Label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="performance">Performance Report</SelectItem>
                    <SelectItem value="leads">Lead Analysis</SelectItem>
                    <SelectItem value="financial">Financial Summary</SelectItem>
                    <SelectItem value="traffic">Traffic Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Period</Label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                    <SelectItem value="90d">Last 90 Days</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Export Format</Label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="excel">Excel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Generate
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <Label className="text-slate-400">Total Reports Generated</Label>
            <p className="text-3xl font-bold text-white mt-2">24</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-slate-800">
          <CardContent className="p-6">
            <Label className="text-slate-400">Scheduled Reports</Label>
            <p className="text-3xl font-bold text-white mt-2">3</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3">
        {mockReports.map((report) => (
          <Card key={report.id} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex-1">
                <p className="font-semibold text-white">{report.name}</p>
                <div className="flex items-center gap-3 mt-2">
                  <Badge className="bg-blue-500/20 text-blue-400">{report.type}</Badge>
                  <span className="text-xs text-slate-400">{report.period}</span>
                  <span className="text-xs text-slate-400">{report.generatedDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
