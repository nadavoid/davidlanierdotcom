/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      maxWidth: {
        'prose': '70ch',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            '--tw-prose-body': 'inherit',
            '--tw-prose-headings': 'inherit',
            '--tw-prose-links': 'inherit',
            '--tw-prose-code': 'inherit',
            '--tw-prose-quotes': 'inherit',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
