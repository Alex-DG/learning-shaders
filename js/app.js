import '../styles/app.css'
import Experience from './Experience'

console.log('🎉', 'Project generated using vite-three-starter')
console.log(':: https://github.com/Alex-DG/vite-three-starter ::')

/**
 * Experience
 */
// new Experience({
//   domElement: document.getElementById('experience'),
// })
let APP_ = null

window.addEventListener('DOMContentLoaded', async () => {
  APP_ = new Experience()
  await APP_.initialize()
})
