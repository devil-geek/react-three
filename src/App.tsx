import { css, Global } from "@emotion/react"
import { useLayoutEffect, useRef } from "react"
import {
  DirectionalLight,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AmbientLight,
} from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"

export function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    const renderer = new WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
      antialias: true,
      alpha: true,
    })

    const camera = new PerspectiveCamera(
      45, // fov
      window.innerWidth / window.innerHeight, // aspect
      0.1, // near
      100 // far
    )

    camera.position.set(2, 1, 2)

    const scene = new Scene()

    // lights
    const directionalLight = new DirectionalLight(0xffffff, 0.2)
    directionalLight.castShadow = true
    directionalLight.position.set(-1, 2, 4)
    scene.add(directionalLight)

    const ambientLight = new AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    //fbx model
    const container = new Object3D()
    container.position.set(0, 0, 0)

    const fbxLoader = new FBXLoader()
    fbxLoader.load(
      "/mush.fbx",
      (object) => {
        object.scale.set(0.05, 0.05, 0.05)
        object.position.set(0, -0.3, 0)
        container.add(object)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      (error) => {
        console.log(error)
      }
    )
    scene.add(container)

    renderer.setAnimationLoop(() => {
      //container.rotation.y -= 0.01
      renderer.render(scene, camera)
    })

    renderer.setSize(window.innerWidth, window.innerHeight)

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", onResize, false)

    new OrbitControls(camera, renderer.domElement)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
          }
        `}
      />
      <canvas
        css={css`
          width: 100%;
          height: 100%;
          display: block;
          background-image: linear-gradient(
            to top,
            #0a264f,
            #15487a,
            #1b6ea6,
            #1b96d2,
            #16c1fd
          );
        `}
        ref={canvasRef}
      />
    </>
  )
}
