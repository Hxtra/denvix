import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface MetricsCardProps {
  title: string
  value: string | number
  change?: number
  changeLabel?: string
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
}

export function MetricsCard({
  title,
  value,
  change,
  changeLabel = 'vs last month',
  icon,
  trend = 'neutral',
}: MetricsCardProps) {
  return (
    <Card className="bg-slate-900 border-slate-800 text-white">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-slate-400">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {change !== undefined && (
              <div className="flex items-center gap-1 pt-2">
                {trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : trend === 'down' ? (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                ) : null}
                <span
                  className={`text-xs font-semibold ${
                    trend === 'up'
                      ? 'text-green-500'
                      : trend === 'down'
                        ? 'text-red-500'
                        : 'text-slate-400'
                  }`}
                >
                  {change > 0 ? '+' : ''}
                  {change}% {changeLabel}
                </span>
              </div>
            )}
          </div>
          {icon && <div className="text-slate-600">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  )
}
