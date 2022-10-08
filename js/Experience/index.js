import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import vertexShader from './shaders/section-6/vertex.glsl'
import fragmentShader from './shaders/section-6/fragment.glsl'

import suzanneSrc from '../../assets/models/suzanne.glb'

import Cold_Sunset__Cam_1_FrontZ from '../../assets/env/Cold_Sunset__Cam_0_Front+Z.png'
import Cold_Sunset__Cam_0_Back_Z from '../../assets/env/Cold_Sunset__Cam_1_Back-Z.png'
import Cold_Sunset__Cam_2_LeftX from '../../assets/env/Cold_Sunset__Cam_2_Left+X.png'
import Cold_Sunset__Cam_3_Right_X from '../../assets/env/Cold_Sunset__Cam_3_Right-X.png'
import Cold_Sunset__Cam_4_UpY from '../../assets/env/Cold_Sunset__Cam_4_Up+Y.png'
import Cold_Sunset__Cam_5_Down_Y from '../../assets/env/Cold_Sunset__Cam_5_Down-Y.png'

/**
 * Section 6
 */
// class Experience {
//   constructor(options) {
//     this.scene = new THREE.Scene()
//     this.cubeTextureLoader = new THREE.CubeTextureLoader()
//     this.gltfLoader = new GLTFLoader()
//     this.container = options.domElement
//     this.bind()
//     this.init()
//   }
//   /**
//    * Experience setup
//    */
//   async init() {
//     await this.setAssets()

//     this.setSizes()
//     this.setRenderer()
//     this.setCamera()
//     this.setResize()
//     this.setSuzanne()

//     this.update()
//     console.log('🤖', 'Experience initialized')
//   }
//   bind() {
//     this.resize = this.resize.bind(this)
//     this.update = this.update.bind(this)
//   }
//   resize() {
//     // Update sizes
//     this.sizes.width = window.innerWidth
//     this.sizes.height = window.innerHeight
//     // Update camera
//     this.camera.aspect = this.sizes.width / this.sizes.height
//     this.camera.updateProjectionMatrix()
//     // Update renderer
//     this.renderer.setSize(this.sizes.width, this.sizes.height)
//     this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//   }
//   //////////////////////////////////////////////////////////////////////////////
//   setSizes() {
//     this.sizes = {
//       width: this.container.offsetWidth,
//       height: this.container.offsetHeight || window.innerHeight,
//     }
//   }
//   setCamera() {
//     // Base camera
//     this.camera = new THREE.PerspectiveCamera(
//       60,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000.0
//     )
//     this.camera.position.set(1, 0, 3)
//     // Controls
//     this.controls = new OrbitControls(this.camera, this.renderer.domElement)
//     this.controls.target.set(0, 0, 0)
//     this.controls.enableDamping = true
//     this.controls.update()
//   }
//   setRenderer() {
//     this.renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true,
//     })
//     this.renderer.setSize(this.sizes.width, this.sizes.height)
//     this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//     this.container.appendChild(this.renderer.domElement)
//   }
//   async setAssets() {
//     this.cubeTextures = await this.cubeTextureLoader.loadAsync([
//       Cold_Sunset__Cam_2_LeftX,
//       Cold_Sunset__Cam_3_Right_X,
//       Cold_Sunset__Cam_4_UpY,
//       Cold_Sunset__Cam_5_Down_Y,
//       Cold_Sunset__Cam_0_Back_Z,
//       Cold_Sunset__Cam_1_FrontZ,
//     ])
//     this.scene.background = this.cubeTextures
//     this.suzanne = await this.gltfLoader.loadAsync(suzanneSrc)
//   }
//   setSuzanne() {
//     const material = new THREE.ShaderMaterial({
//       uniforms: {},
//       vertexShader,
//       fragmentShader,
//     })
//     this.suzanne.scene.traverse((c) => {
//       c.material = material
//     })
//     this.scene.add(this.suzanne.scene)
//     // const geometry = new THREE.IcosahedronBufferGeometry(1, 128)
//     // const mesh = new THREE.Mesh(geometry, material)
//     // this.scene.add(mesh)
//   }
//   setPlane() {
//     this.material = new THREE.ShaderMaterial({
//       uniforms: {},
//       vertexShader,
//       fragmentShader,
//     })
//     const geometry = new THREE.PlaneGeometry(1, 1)
//     const plane = new THREE.Mesh(geometry, this.material)
//     plane.position.set(0.5, 0.5, 0)
//     // this.scene.add(plane)
//   }
//   setCube() {
//     const cube = new THREE.Mesh(
//       new THREE.BoxGeometry(1, 1, 1),
//       new THREE.MeshNormalMaterial()
//     )
//     // this.scene.add(cube)
//   }
//   setResize() {
//     window.addEventListener('resize', this.resize)
//   }
//   //////////////////////////////////////////////////////////////////////////////
//   update() {
//     // Update controls
//     // this.controls.update()
//     // Render
//     this.renderer.render(this.scene, this.camera)
//     // Call update again on the next frame
//     window.requestAnimationFrame(this.update)
//   }
// }

class Experience {
  constructor() {}

  async initialize() {
    this.threejs_ = new THREE.WebGLRenderer({ antialias: true })
    document.body.appendChild(this.threejs_.domElement)

    window.addEventListener(
      'resize',
      () => {
        this.onWindowResize_()
      },
      false
    )

    this.scene_ = new THREE.Scene()

    this.camera_ = new THREE.PerspectiveCamera(60, 1920.0 / 1080.0, 0.1, 1000.0)
    this.camera_.position.set(1, 0, 3)

    const controls = new OrbitControls(this.camera_, this.threejs_.domElement)
    controls.target.set(0, 0, 0)
    controls.update()

    const loader = new THREE.CubeTextureLoader()
    const texture = loader.load([
      '../../assets/env/Cold_Sunset__Cam_2_Left+X.png',
      '../../assets/env/Cold_Sunset__Cam_3_Right-X.png',
      '../../assets/env/Cold_Sunset__Cam_4_Up+Y.png',
      '../../assets/env/Cold_Sunset__Cam_5_Down-Y.png',
      '../../assets/env/Cold_Sunset__Cam_0_Front+Z.png',
      '../../assets/env/Cold_Sunset__Cam_1_Back-Z.png',
    ])

    this.scene_.background = texture

    await this.setupProject_()

    this.onWindowResize_()
    this.raf_()
  }

  async setupProject_() {
    const material = new THREE.ShaderMaterial({
      uniforms: {
        specMap: {
          value: this.scene_.background,
        },
      },
      vertexShader,
      fragmentShader,
    })

    const loader = new GLTFLoader()
    loader.setPath('./../assets/models/')
    loader.load('suzanne.glb', (gltf) => {
      gltf.scene.traverse((c) => {
        c.material = material
      })
      this.scene_.add(gltf.scene)
    })

    // Test
    const geometry = new THREE.IcosahedronBufferGeometry(1, 128)
    const mesh = new THREE.Mesh(geometry, material)
    // this.scene_.add(mesh)
  }

  onWindowResize_() {
    this.threejs_.setSize(window.innerWidth, window.innerHeight)

    this.camera_.aspect = window.innerWidth / window.innerHeight
    this.camera_.updateProjectionMatrix()
  }

  raf_() {
    requestAnimationFrame((t) => {
      this.c?.update()
      this.threejs_.render(this.scene_, this.camera_)
      this.raf_()
    })
  }
}

export default Experience
