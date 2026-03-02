'use client'

import { useState, useEffect, useRef } from 'react'
import { Palette, X, RotateCcw } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { THEME_PRESETS } from '../../data/themePresets'
import { cn } from '../../utils/cn'

export default function ThemePicker() {
    const { presetId, setPresetId, preset, setCustomGradient, useMixBlend, setUseMixBlend } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Manage open/close with animation states
    const openModal = () => {
        setIsOpen(true)
        // Trigger entrance animation on next frame
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsAnimating(true))
        })
    }

    const closeModal = () => {
        setIsAnimating(false)
        // Wait for exit animation to finish before unmounting
        setTimeout(() => setIsOpen(false), 200)
    }

    const toggleModal = () => {
        if (isOpen) closeModal()
        else openModal()
    }

    // Click outside to close
    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                closeModal()
            }
        }

        // Use a small delay so the opening click doesn't immediately close it
        const timer = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside)
        }, 10)

        return () => {
            clearTimeout(timer)
            document.removeEventListener('mousedown', handleClickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    return (
        <div ref={containerRef} className="fixed bottom-6 right-6 z-[60]">
            {/* Popover Panel */}
            {isOpen && (
                <div
                    id="theme-picker-menu"
                    role="dialog"
                    aria-label="Theme settings"
                    className={cn(
                        "absolute bottom-14 right-0 w-64 rounded-2xl border backdrop-blur-xl p-4 shadow-2xl transition-all duration-200 ease-out origin-bottom-right",
                        isAnimating ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                    )}
                    style={{
                        backgroundColor: preset.body,
                        borderColor: `${preset.accent}40`,
                    }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <span className={cn("text-xs uppercase tracking-widest font-medium", "text-gray-500 dark:text-gray-400")}>
                            Theme
                        </span>
                        <button
                            type="button"
                            onClick={closeModal}
                            className={cn("p-1 rounded-lg transition-colors", "hover:bg-black/5 dark:hover:bg-white/10")}
                            aria-label="Close theme picker"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-4 gap-1.5">
                        {THEME_PRESETS.map((p, index) => (
                            <button
                                key={p.id}
                                type="button"
                                onClick={() => setPresetId(p.id)}
                                aria-label={`Select ${p.name} theme`}
                                aria-pressed={presetId === p.id}
                                className={cn(
                                    "group flex flex-col items-center gap-1.5 p-1.5 rounded-xl transition-all duration-150",
                                    presetId === p.id
                                        ? "bg-black/10 ring-1 ring-black/20 dark:bg-white/10 dark:ring-1 dark:ring-white/20"
                                        : "hover:bg-black/5 dark:hover:bg-white/5"
                                )}
                                style={{
                                    transitionDelay: isAnimating ? `${index * 30}ms` : '0ms',
                                }}
                            >
                                {/* Color swatch */}
                                <div
                                    className="w-7 h-7 rounded-full border-2 transition-transform duration-200 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[2]})`,
                                        borderColor: p.accent,
                                    }}
                                />
                                <span className={cn("text-[8px] uppercase tracking-wider font-medium text-center", "text-gray-600 dark:text-gray-400")}>
                                    {p.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10">
                        <div className="flex items-center justify-between mb-2">
                            <span className={cn("text-[10px] uppercase tracking-widest font-medium", "text-gray-500 dark:text-gray-400")}>
                                Customize Gradient
                            </span>
                            <button
                                type="button"
                                onClick={() => setCustomGradient(preset.id, null)}
                                className={cn("flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider transition-colors", "text-gray-500 hover:text-gray-900 hover:bg-black/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10")}
                                aria-label="Reset custom gradient"
                            >
                                <RotateCcw className="w-2.5 h-2.5" /> Reset
                            </button>
                        </div>
                        <div className="flex items-center gap-2 justify-between px-1">
                            {preset.gradient.map((color, index) => (
                                <label
                                    key={index}
                                    className="relative w-8 h-8 rounded-full cursor-pointer shadow-sm border border-black/10 dark:border-white/20 transition-transform duration-200 hover:scale-110 overflow-hidden shrink-0"
                                    style={{ backgroundColor: color }}
                                    title={`Color ${index + 1}`}
                                >
                                    <input
                                        type="color"
                                        value={color}
                                        onChange={(e) => {
                                            const newColors = [...preset.gradient] as [string, string, string, string];
                                            newColors[index] = e.target.value;
                                            setCustomGradient(preset.id, newColors);
                                        }}
                                        className="absolute inset-0 w-[200%] h-[200%] -top-2 -left-2 cursor-pointer opacity-0"
                                    />
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10">
                        <div className="flex items-center justify-between">
                            <span className={cn("text-[10px] uppercase tracking-widest font-medium", "text-gray-500 dark:text-gray-400")}>
                                Mix Blend
                            </span>
                            <button
                                type="button"
                                onClick={() => typeof setUseMixBlend === 'function' && setUseMixBlend(!useMixBlend)}
                                className={cn(
                                    "w-8 h-4 rounded-full relative transition-colors duration-200",
                                    useMixBlend ? "bg-emerald-500" : "bg-black/20 dark:bg-white/20"
                                )}
                            >
                                <div className={cn(
                                    "absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform duration-200 shadow-sm",
                                    useMixBlend ? "translate-x-4" : "translate-x-0"
                                )} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button */}
            <button
                type="button"
                onClick={toggleModal}
                aria-label="Toggle theme picker"
                aria-expanded={isOpen}
                aria-controls="theme-picker-menu"
                className={cn(
                    "p-3 rounded-full border shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95",
                    isOpen ? 'rotate-45' : 'rotate-0',
                    "bg-white/80 border-black/10 text-gray-700 hover:bg-white dark:bg-transparent dark:border-white/20 dark:text-white dark:hover:bg-white/10",
                    preset.headerDark && "bg-transparent border-white/20 text-white hover:bg-white/10"
                )}
            >
                <Palette className="w-5 h-5" />
            </button>
        </div>
    )
}

