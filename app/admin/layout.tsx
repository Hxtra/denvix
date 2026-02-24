'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigationItems = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Clients', href: '/admin/clients' },
  { label: 'Projects', href: '/admin/projects' },
  { label: 'Services', href: '/admin/services' },
  { label: 'Flash Sales', href: '/admin/flash-sales' },
  { label: 'Portfolio', href: '/admin/portfolio' },
  { label: 'Finance', href: '/admin/finance' },
  { label: 'CMS', href: '/admin/cms' },
  { label: 'Analytics', href: '/admin/analytics' },
  { label: 'Conversions', href: '/admin/conversions' },
  { label: 'Communications', href: '/admin/communications' },
  { label: 'Reports', href: '/admin/reports' },
  { label: 'Settings', href: '/admin/settings' },
]

function Sidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white flex flex-col border-r border-slate-800 z-40">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold">
            D
          </div>
          <span className="font-bold text-lg">Denvix Admin</span>
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-2 px-3">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  className={`w-full justify-start ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <Button
          variant="ghost"
          className="w-full justify-start text-slate-300 hover:text-red-400 hover:bg-slate-800"
          onClick={() => {
            // Handle logout
            window.location.href = '/'
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </nav>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 md:hidden z-50 bg-slate-900 border-slate-700 text-white"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-slate-900 border-slate-800">
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="md:ml-64 p-4 md:p-8">
        {children}
      </main>
    </div>
  )
}
