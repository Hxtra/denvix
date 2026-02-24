'use client'

import { useState, useEffect } from 'react'
import { Save, Lock, Bell, Cog } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function SettingsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    companyName: 'Denvix',
    contactEmail: 'contact@denvix.no',
    phone: '+47 912 34 567',
    timezone: 'Europe/Oslo',
    currency: 'NOK',
    notificationsEmail: true,
    notificationsSlack: false,
    lowConversionAlert: 5,
    overdueInvoiceAlert: true,
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div suppressHydrationWarning></div>
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-slate-400">Configure admin dashboard and notifications</p>
      </div>

      {/* Company Information */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Cog className="h-5 w-5" />
            Company Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Company Name</Label>
              <Input
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label>Contact Email</Label>
              <Input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label>Timezone</Label>
              <Select value={formData.timezone} onValueChange={(value) => setFormData({ ...formData, timezone: value })}>
                <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="Europe/Oslo">Europe/Oslo</SelectItem>
                  <SelectItem value="Europe/London">Europe/London</SelectItem>
                  <SelectItem value="Europe/Paris">Europe/Paris</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Currency</Label>
            <Select value={formData.currency} onValueChange={(value) => setFormData({ ...formData, currency: value })}>
              <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="NOK">NOK (Norwegian Krone)</SelectItem>
                <SelectItem value="USD">USD (US Dollar)</SelectItem>
                <SelectItem value="EUR">EUR (Euro)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
            <div>
              <p className="font-semibold text-white">Email Notifications</p>
              <p className="text-sm text-slate-400">Receive updates via email</p>
            </div>
            <Switch
              checked={formData.notificationsEmail}
              onCheckedChange={(value) => setFormData({ ...formData, notificationsEmail: value })}
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
            <div>
              <p className="font-semibold text-white">Slack Notifications</p>
              <p className="text-sm text-slate-400">Send alerts to Slack</p>
            </div>
            <Switch
              checked={formData.notificationsSlack}
              onCheckedChange={(value) => setFormData({ ...formData, notificationsSlack: value })}
            />
          </div>
          <div className="space-y-2">
            <Label>Low Conversion Alert Threshold (%)</Label>
            <Input
              type="number"
              value={formData.lowConversionAlert}
              onChange={(e) => setFormData({ ...formData, lowConversionAlert: parseInt(e.target.value) })}
              className="bg-slate-800 border-slate-700 text-white"
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
            <div>
              <p className="font-semibold text-white">Overdue Invoice Alerts</p>
              <p className="text-sm text-slate-400">Notify when invoices are overdue</p>
            </div>
            <Switch
              checked={formData.overdueInvoiceAlert}
              onCheckedChange={(value) => setFormData({ ...formData, overdueInvoiceAlert: value })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="bg-slate-900 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            Change Password
          </Button>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            Manage Admin Users
          </Button>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
        <Save className="mr-2 h-5 w-5" />
        Save Settings
      </Button>
    </div>
  )
}
