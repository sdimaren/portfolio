export interface ThemePreset {
    id: string
    name: string
    mode: 'dark' | 'light'
    gradient: [string, string, string, string]
    body: string
    accent: string
    glow: string // for contact section background glow
    headerDark?: boolean // force dark header even in light mode
    popoverBg: string // explicit background color for the theme picker container
}

export const THEME_PRESETS: ThemePreset[] = [
    {
        id: 'obsidian',
        name: 'Obsidian',
        mode: 'dark',
        gradient: ['#363636', '#0e0e10', '#19191c', '#2e2e31'],
        body: '#19191c',
        accent: '#ffbf00',
        glow: '#ffbf00',
        popoverBg: '#1a1a1ee6', // Translucent dark charcoal
    },
    {
        id: 'ivory',
        name: 'Ivory',
        mode: 'light',
        gradient: ['#e0e0e0', '#f0f0f0', '#d9d9d9', '#f7f7f7'],
        body: '#d9d9d9',
        accent: '#b8860b',
        glow: '#b8860b',
        popoverBg: '#ffffffea', // Translucent white
    },
    {
        id: 'gold',
        name: 'Gold',
        mode: 'light',
        gradient: ['#e8c870', '#d4b04a', '#f0d888', '#dcc060'],
        body: '#d4b04a',
        accent: '#8b6914',
        glow: '#8b6914',
        headerDark: true,
        popoverBg: '#e6bd55eb', // Translucent rich gold
    },
    {
        id: 'ocean',
        name: 'Ocean',
        mode: 'dark',
        gradient: ['#0a192f', '#112240', '#1d3557', '#0a192f'],
        body: '#112240',
        accent: '#ffd166',
        glow: '#ffd166',
        popoverBg: '#0e2041e6', // Translucent deep navy
    },
    {
        id: 'forest',
        name: 'Forest',
        mode: 'dark',
        gradient: ['#1a2e1a', '#0e200e', '#1c3a1c', '#2e412e'],
        body: '#0e200e',
        accent: '#f4a261',
        glow: '#f4a261',
        popoverBg: '#122c12e6', // Translucent dark green
    },
    {
        id: 'ember',
        name: 'Ember',
        mode: 'dark',
        gradient: ['#2d1b0e', '#1a1008', '#3d2817', '#2e1f12'],
        body: '#1a1008',
        accent: '#e9c46a',
        glow: '#e9c46a',
        popoverBg: '#21130be6', // Translucent warm dark brown
    },
]

export const DEFAULT_PRESET_ID = 'obsidian'

export function getPresetById(id: string): ThemePreset {
    return THEME_PRESETS.find((p) => p.id === id) ?? THEME_PRESETS[0]
}
