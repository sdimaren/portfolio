'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    scale?: boolean
}

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = 'up',
    scale = false,
}: FadeInProps) {
    const directions = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
        none: { x: 0, y: 0 }
    }

    const directionProps = directions[direction]

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                ...directionProps,
                ...(scale ? { scale: 0.9 } : {})
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                ...(scale ? { scale: 1 } : {})
            }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: delay
            }}
        >
            {children}
        </motion.div>
    )
}
