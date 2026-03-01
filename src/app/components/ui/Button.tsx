import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps {
    variant?: 'primary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    href?: string
    onClick?: () => void
    className?: string
    children: ReactNode
}

export const Button = ({ variant = 'primary', size = 'md', href, onClick, className, children }: ButtonProps) => {
    const classes = cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all hover:scale-105 cursor-pointer",
        variant === 'primary' && "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
        variant === 'outline' && "border border-black/20 text-gray-900 hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5",
        size === 'sm' && "px-5 py-2 text-sm",
        size === 'md' && "px-8 py-4",
        size === 'lg' && "px-10 py-5 text-lg",
        className
    )

    const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))

    if (isExternal) {
        const isHttp = href.startsWith('http')
        return (
            <a
                href={href}
                target={isHttp ? "_blank" : undefined}
                rel={isHttp ? "noopener noreferrer" : undefined}
                className={classes}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            onClick={() => {
                if (onClick) {
                    onClick()
                } else if (href) {
                    const el = document.getElementById(href)
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                }
            }}
            className={classes}
        >
            {children}
        </button>
    )
}

