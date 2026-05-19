/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const publicDir = path.join(__dirname, '..', 'public')
const svgBuffer = fs.readFileSync(path.join(publicDir, 'favicon.svg'))
const appleSvgBuffer = fs.readFileSync(path.join(publicDir, 'apple-touch-icon.svg'))

async function main() {
  await Promise.all([
    sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png')),
    sharp(svgBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png')),
    sharp(appleSvgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png')),
  ])
  console.log('Favicons generated:')
  console.log('  - public/favicon-32x32.png')
  console.log('  - public/favicon-16x16.png')
  console.log('  - public/apple-touch-icon.png')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
