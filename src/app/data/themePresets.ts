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
    defaultMixBlend?: boolean
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
        gradient: ['#ffffff', '#fcfaf5', '#f2ece0', '#e8dfcc'],
        body: '#fcfaf5',
        accent: '#eab001ff',
        glow: '#ffbf00',
        popoverBg: '#ffffffea',
    },
    {
        id: 'gold',
        name: 'Gold',
        mode: 'light',
        gradient: ['#fdfaf0', '#e8c870', '#c5a059', '#aa8018'],
        body: '#fdf8e1',
        accent: '#e9d29eff',
        glow: '#b8860b',
        headerDark: true,
        popoverBg: '#fdf8e1eb',
    },
    {
        id: 'ocean',
        name: 'Ocean',
        mode: 'dark',
        gradient: ['#0a192f', '#112240', '#1d3557', '#0a192f'],
        body: '#112240',
        accent: '#b5cdecff',
        glow: '#ffd166',
        popoverBg: '#0e2041e6', // Translucent deep navy
        defaultMixBlend: true,
    },
    {
        id: 'forest',
        name: 'Forest',
        mode: 'dark',
        gradient: ['#1a2e1a', '#0e200e', '#1c3a1c', '#2e412e'],
        body: '#0e200e',
        accent: '#1a6723ff',
        glow: '#f4a261',
        popoverBg: '#122c12e6', // Translucent dark green
        defaultMixBlend: true,
    },
    {
        id: 'ember',
        name: 'Ember',
        mode: 'dark',
        gradient: ['#2d1b0e', '#1a1008', '#3d2817', '#2e1f12'],
        body: '#1a1008',
        accent: '#b5c2cdff',
        glow: '#e9c46a',
        popoverBg: '#21130be6', // Translucent warm dark brown
        defaultMixBlend: true,
    },
    {
        id: 'sunset',
        name: 'Sunset',
        mode: 'dark',
        gradient: ['#ff3b7c', '#ff9a44', '#7a28cb', '#ffcf54'],
        body: '#230f2b',
        accent: '#e08ce0ff',
        glow: '#ff3b7c',
        popoverBg: '#230f2be6', // Translucent dark violet
    },
    {
        id: 'aurora',
        name: 'Aurora',
        mode: 'dark',
        gradient: ['#00e676', '#00b4d8', '#8a2be2', '#0077b6'],
        body: '#0b132b',
        accent: '#00e676',
        glow: '#00b4d8',
        popoverBg: '#0b132be6', // Translucent dark sea
    },
    {
        id: 'synth',
        name: 'Synth',
        mode: 'dark',
        gradient: ['#ff007f', '#00f7ff', '#7000ff', '#fbee43'],
        body: '#1a0b2e',
        accent: '#00f7ff',
        glow: '#ff007f',
        popoverBg: '#1a0b2ee6', // Translucent deep plum
        defaultMixBlend: true,
    },
    {
        id: 'blossom',
        name: 'Blossom',
        mode: 'light',
        gradient: ['#ffb7b2', '#ff9ced', '#ffffff', '#ffcfd2'],
        body: '#fff0f5',
        accent: '#e23e57',
        glow: '#ff9ced',
        popoverBg: '#fff0f5e6', // Translucent blush pink
    },
    {
        id: 'galaxy',
        name: 'Galaxy',
        mode: 'dark',
        gradient: ['#3a0ca3', '#f72585', '#4cc9f0', '#120524'],
        body: '#120524',
        accent: '#4cc9f0',
        glow: '#f72585',
        popoverBg: '#120524e6', // Translucent cosmic black
        defaultMixBlend: true,
    },
    {
        id: 'citrus',
        name: 'Citrus',
        mode: 'light',
        gradient: ['#ffb700', '#ffd000', '#dcff00', '#ffffff'],
        body: '#fdfcec',
        accent: '#ff7b00',
        glow: '#ffd000',
        popoverBg: '#fdfcece6',
    },
]

export const DEFAULT_PRESET_ID = 'obsidian'

export function getPresetById(id: string): ThemePreset {
    return THEME_PRESETS.find((p) => p.id === id) ?? THEME_PRESETS[0]
}
