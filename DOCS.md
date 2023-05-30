# Runnig the program
You can simply run teh program by using 
`npm run dev`

# Plugins used:
## 1: flowbite

## 2: MaterialUI

## 3: TailwindCSS
# Tailwind configuration
`module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [
    require('flowbite/plugin')
],
}`
