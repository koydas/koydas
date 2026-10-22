export const theme = {
  color: {
    bg: '#05070f',
    surface: '#0a1020',
    surfaceRaised: '#111a2e',
    border: '#1b2640',
    borderStrong: '#2c3b60',
    text: '#f1f5f9',
    muted: '#a3b0c5',
    subtle: '#64748b',
    accent: '#2f63f0',
    accentSoft: '#6d8dff',
    success: '#34d399',
    violet: '#8b5cf6',
  },
  radius: { sm: '8px', md: '12px', lg: '18px' },
  maxWidth: '1180px',
} as const;

export const desktop = '@media (min-width: 900px)';
