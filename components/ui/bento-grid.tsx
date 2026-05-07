'use client'

import { cn } from '@/lib/utils'

export interface BentoItem {
  title: string
  description: string
  icon: React.ReactNode
  status?: string
  tags?: string[]
  meta?: string
  cta?: string
  colSpan?: number
  hasPersistentHover?: boolean
}

interface BentoGridProps {
  items: BentoItem[]
}

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'group relative p-6 rounded-xl overflow-hidden transition-all duration-300',
            'border border-[#003F74]/10 bg-white',
            'hover:shadow-lg hover:-translate-y-1 will-change-transform',
            item.colSpan ? `col-span-${item.colSpan}` : 'col-span-1',
            item.colSpan === 2 ? 'md:col-span-2' : '',
            {
              'shadow-lg -translate-y-1': item.hasPersistentHover,
            }
          )}
          style={{
            boxShadow: item.hasPersistentHover
              ? '0 12px 48px rgba(0, 63, 116, 0.14)'
              : '0 4px 32px rgba(0, 63, 116, 0.07)',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div className="relative flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{ backgroundColor: '#003F74' }}
              >
                {/* Icon with white color */}
                <div style={{ color: '#FFFFFF' }}>
                  {item.icon}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3
                className="font-semibold tracking-tight text-[16px]"
                style={{ color: '#003F74' }}
              >
                {item.title}
                <span
                  className="ml-2 text-xs font-normal"
                  style={{ color: '#5A6A7A' }}
                >
                  {item.meta}
                </span>
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#5A6A7A' }}
              >
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-2 text-xs">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md transition-all duration-200"
                    style={{
                      backgroundColor: '#003F74',
                      color: '#003F74',
                      opacity: 0.25,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { BentoGrid }
export type { BentoGridProps }
