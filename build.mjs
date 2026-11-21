import { execSync } from 'node:child_process'
import { rmSync, mkdirSync, cpSync } from 'node:fs'
rmSync('dist', { recursive: true, force: true })
mkdirSync('dist/assets', { recursive: true })
cpSync('public', 'dist', { recursive: true })
cpSync('src/index.html', 'dist/index.html')
execSync('npx tailwindcss -c tailwind.config.js -i src/input.css -o dist/assets/styles.css --minify', { stdio: 'inherit' })
console.log('Built to dist/')
