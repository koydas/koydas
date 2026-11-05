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
  // One scale each (site-kit/tokens.css; tested against it).
  space: { 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '24px', 6: '32px', 7: '48px' },
  text: { xs: '12px', sm: '13px', md: '15px', lg: '18px', xl: '24px', '2xl': '32px' },
  focus: { color: '#6d8dff', width: '2px', offset: '2px' },
  maxWidth: '1180px',
} as const;

export const desktop = '@media (min-width: 900px)';
