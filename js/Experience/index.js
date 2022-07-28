import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import vertexShader from './shaders/section-3/vertex.glsl'
import fragmentShader from './shaders/section-3/fragment.glsl'

import textureSrc from '../../assets/textures/dog.jpg'
import overlaySrc from '../../assets/textures/overlay.png'

class Experience {
  constructor(options) {
    this.scene = new THREE.Scene()
    this.container = options.domElement
    this.init()
  }

  /**
   * Experience setup
   */
  async init() {
    this.bind()
    this.setSizes()
    this.setRenderer()
    this.setCamera()
    this.setResize()

    await this.setAssets()

    this.setPlane()

    this.update()

    console.log('🤖', 'Experience initialized')
  }

  bind() {
    this.resize = this.resize.bind(this)
    this.update = this.update.bind(this)
  }

  resize() {
    // Update sizes
    this.sizes.width = window.innerWidth
    this.sizes.height = window.innerHeight

    // Update camera
    this.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.updateProjectionMatrix()

    // Update renderer
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  //////////////////////////////////////////////////////////////////////////////

  setSizes() {
    this.sizes = {
      width: this.container.offsetWidth,
      height: this.container.offsetHeight || window.innerHeight,
    }
  }

  setCamera() {
    // Base camera
    this.camera = new THREE.OrthographicCamera(0, 1, 1, 0, 0.1, 1000)
    this.camera.position.set(0, 0, 1)

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.container.appendChild(this.renderer.domElement)
  }

  async setAssets() {
    const loader = new THREE.TextureLoader()
    this.texture = await loader.load(textureSrc)

    // this.texture.wrapS = this.texture.wrapT = THREE.ClampToEdgeWrapping
    // this.texture.wrapS = this.texture.wrapT = THREE.RepeatWrapping
    // this.texture.wrapS = this.texture.wrapT = THREE.MirroredRepeatWrapping

    this.overlay = await loader.load(overlaySrc)
  }

  setPlane() {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        tint: { value: new THREE.Vector4(1, 0, 0, 1) },
        diffuse: { value: this.texture },
        overlay: { value: this.overlay },
      },
      vertexShader,
      fragmentShader,
    })

    const geometry = new THREE.PlaneGeometry(1, 1)

    const plane = new THREE.Mesh(geometry, material)
    plane.position.set(0.5, 0.5, 0)
    this.scene.add(plane)
  }

  setCube() {
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshNormalMaterial()
    )
    this.scene.add(cube)
  }

  setResize() {
    window.addEventListener('resize', this.resize)
  }

  //////////////////////////////////////////////////////////////////////////////

  update() {
    // Update controls
    this.controls.update()

    // Render
    this.renderer.render(this.scene, this.camera)

    // Call update again on the next frame
    window.requestAnimationFrame(this.update)
  }
}

export default Experience
