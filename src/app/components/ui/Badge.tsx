import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'outline'
    children: ReactNode
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full border text-xs uppercase tracking-widest transition-colors",
                variant === 'default' && "border-black/10 bg-black/5 text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-400",
                variant === 'glass' && "font-mono backdrop-blur-md bg-black/40 border-black/20 text-gray-200 dark:bg-black/60 dark:border-white/10 dark:text-gray-300",
                variant === 'outline' && "px-2 py-1 text-[10px] tracking-wider shrink-0 border-black/10 text-gray-500 dark:border-white/10 dark:text-gray-500",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
