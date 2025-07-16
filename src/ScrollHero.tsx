import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

const ScrollHero = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, scrollMesh: THREE.Mesh;
    let animationStarted = false;
    let audioPlayed = false;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("https://i.ibb.co/8FyTvqM/Antique-Scroll-with-Ornate-Tassels-1.png", (texture: THREE.Texture) => {
      const geometry = new THREE.PlaneGeometry(3, 4);
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
      scrollMesh = new THREE.Mesh(geometry, material);
      scrollMesh.scale.y = 0;
      scene.add(scrollMesh);

      const playScrollAudio = () => {
        if (!audioPlayed) {
          const audio = new Audio("/assets/scroll-unroll.mp3");
          audio.volume = 0.7;
          audio.play();
          audioPlayed = true;
        }
      };

      const startScrollAnimation = () => {
        if (animationStarted) return;
        animationStarted = true;
        playScrollAudio();
        gsap.to(scrollMesh.scale, {
          y: 1,
          duration: 3,
          ease: "power2.out",
        });
      };

      window.addEventListener("click", startScrollAnimation);
      window.addEventListener("touchstart", startScrollAnimation);
      window.addEventListener("scroll", startScrollAnimation);
    });

    // Particle Background
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 300;
    const positions = [];
    for (let i = 0; i < particleCount; i++) {
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
    }
    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", () => {});
      window.removeEventListener("touchstart", () => {});
      window.removeEventListener("scroll", () => {});
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: 0 }} />
  );
};

export default ScrollHero;
