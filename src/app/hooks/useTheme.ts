'use client'

import { usePreloader } from '../components/providers/PreloaderProvider'

/**
 * Convenience hook: reads the current theme from PreloaderProvider context.
 * Returns isLight, theme, setTheme, accent, preset, and setPresetId.
 */
export function useTheme() {
    const preloader = usePreloader()

    if (!preloader) {
        throw new Error('useTheme must be used within a PreloaderProvider')
    }

    const { theme, setTheme, preset, presetId, setPresetId } = preloader
    const isLight = theme === 'white'
    const accent = preset.accent

    return { theme, isLight, setTheme, accent, preset, presetId, setPresetId }
}
