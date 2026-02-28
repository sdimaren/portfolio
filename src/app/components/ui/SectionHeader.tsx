import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SectionHeaderProps {
    title: ReactNode
    description?: ReactNode
    className?: string
    action?: ReactNode
}

export function SectionHeader({ title, description, className, action }: SectionHeaderProps) {
    return (
        <div className={cn("flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8", className)}>
            <div>
                <h2 className={cn("text-4xl md:text-6xl font-serif mb-6 transition-colors", "text-gray-900 dark:text-white")}>
                    {title}
                </h2>
                {description && (
                    <p className={cn("max-w-md transition-colors", "text-gray-600 dark:text-gray-400")}>
                        {description}
                    </p>
                )}
            </div>
            {action && action}
        </div>
    )
}
