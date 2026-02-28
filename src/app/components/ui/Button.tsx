import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
}

export const Button = ({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) => (
    <a
        className={cn(
            "inline-flex items-center justify-center rounded-full font-medium transition-all hover:scale-105",
            variant === 'primary' && "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
            variant === 'outline' && "border border-black/20 text-gray-900 hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5",
            size === 'sm' && "px-5 py-2 text-sm",
            size === 'md' && "px-8 py-4",
            size === 'lg' && "px-10 py-5 text-lg",
            className
        )}
        {...props}
    >
        {children}
    </a>
)
