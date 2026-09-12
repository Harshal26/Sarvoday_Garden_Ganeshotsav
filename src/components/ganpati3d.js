/**
 * 3D Interactive Ganpati Bappa Experience + Falling Flower Petals Particle Engine
 * Powered by Three.js
 */

export function initGanpati3D() {
  const container = document.querySelector('.hero__ganpati-art');
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  // Scene setup
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.position.z = 8;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(220, 220);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Group for idol rotation
  const idolGroup = new THREE.Group();
  scene.add(idolGroup);

  // Materials
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 0.85,
    roughness: 0.2,
    emissive: 0xd4af37,
    emissiveIntensity: 0.2
  });

  const vermilionMaterial = new THREE.MeshStandardMaterial({
    color: 0xe65100,
    metalness: 0.5,
    roughness: 0.3,
  });

  const glowingHaloMaterial = new THREE.MeshBasicMaterial({
    color: 0xffa000,
    wireframe: true
  });

  // 1. Halo Ring (Aura)
  const haloGeo = new THREE.TorusGeometry(2.4, 0.05, 16, 100);
  const haloMesh = new THREE.Mesh(haloGeo, glowingHaloMaterial);
  idolGroup.add(haloMesh);

  // 2. Crown (Mukut)
  const crownGeo = new THREE.ConeGeometry(0.7, 1.2, 8);
  const crownMesh = new THREE.Mesh(crownGeo, goldMaterial);
  crownMesh.position.y = 1.6;
  idolGroup.add(crownMesh);

  const crownBaseGeo = new THREE.CylinderGeometry(0.75, 0.8, 0.3, 16);
  const crownBaseMesh = new THREE.Mesh(crownBaseGeo, vermilionMaterial);
  crownBaseMesh.position.y = 0.95;
  idolGroup.add(crownBaseMesh);

  // 3. Head & Face
  const headGeo = new THREE.SphereGeometry(0.85, 32, 32);
  const headMesh = new THREE.Mesh(headGeo, goldMaterial);
  headMesh.position.y = 0.3;
  idolGroup.add(headMesh);

  // 4. Trunk (Sondh)
  const trunkCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.3, 0.6),
    new THREE.Vector3(0.1, -0.2, 0.85),
    new THREE.Vector3(0.4, -0.6, 0.8),
    new THREE.Vector3(0.65, -0.4, 0.7),
  ]);
  const trunkGeo = new THREE.TubeGeometry(trunkCurve, 32, 0.16, 12, false);
  const trunkMesh = new THREE.Mesh(trunkGeo, goldMaterial);
  idolGroup.add(trunkMesh);

  // 5. Ears (Supe-Karn)
  const earGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.08, 16);
  const leftEar = new THREE.Mesh(earGeo, goldMaterial);
  leftEar.position.set(-0.95, 0.3, 0);
  leftEar.rotation.z = Math.PI / 4;
  idolGroup.add(leftEar);

  const rightEar = new THREE.Mesh(earGeo, goldMaterial);
  rightEar.position.set(0.95, 0.3, 0);
  rightEar.rotation.z = -Math.PI / 4;
  idolGroup.add(rightEar);

  // 6. Body (Lotus Throne)
  const bodyGeo = new THREE.CylinderGeometry(1.2, 1.5, 1.2, 16);
  const bodyMesh = new THREE.Mesh(bodyGeo, vermilionMaterial);
  bodyMesh.position.y = -0.8;
  idolGroup.add(bodyMesh);

  // 7. Modak in hand
  const modakGeo = new THREE.ConeGeometry(0.3, 0.45, 12);
  const modakMesh = new THREE.Mesh(modakGeo, goldMaterial);
  modakMesh.position.set(0.8, -0.5, 0.7);
  modakMesh.rotation.x = -Math.PI / 6;
  idolGroup.add(modakMesh);

  // 8. FALLING FLOWER PETALS PARTICLE SYSTEM
  const petalCount = 45;
  const petals = [];
  const petalGeo = new THREE.SphereGeometry(0.08, 8, 4);
  petalGeo.scale(1, 0.2, 1.8); // Flatten to look like a flower petal

  const petalColors = [0xffa000, 0xe65100, 0xe91e63, 0xffd700];

  for (let i = 0; i < petalCount; i++) {
    const color = petalColors[Math.floor(Math.random() * petalColors.length)];
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.9,
    });

    const petalMesh = new THREE.Mesh(petalGeo, mat);
    resetPetal(petalMesh);
    petalMesh.position.y = (Math.random() - 0.5) * 8; // Scatter initially
    scene.add(petalMesh);
    petals.push({
      mesh: petalMesh,
      speedY: 0.015 + Math.random() * 0.02,
      rotSpeedX: 0.01 + Math.random() * 0.02,
      rotSpeedZ: 0.01 + Math.random() * 0.02,
      swayFreq: 1 + Math.random() * 2,
    });
  }

  function resetPetal(mesh) {
    mesh.position.set(
      (Math.random() - 0.5) * 7,
      4.5 + Math.random() * 2,
      (Math.random() - 0.5) * 4
    );
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
  }

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffd700, 1.5);
  mainLight.position.set(5, 5, 5);
  scene.add(mainLight);

  const backLight = new THREE.PointLight(0xff6d00, 2, 10);
  backLight.position.set(-4, -2, -3);
  scene.add(backLight);

  // Interactive Drag Tilt Controls
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  const onPointerDown = (e) => {
    isDragging = true;
    previousMousePosition = {
      x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
      y: e.clientY || (e.touches && e.touches[0].clientY) || 0,
    };
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const currentY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    const deltaX = currentX - previousMousePosition.x;
    const deltaY = currentY - previousMousePosition.y;

    idolGroup.rotation.y += deltaX * 0.015;
    idolGroup.rotation.x += deltaY * 0.015;

    previousMousePosition = { x: currentX, y: currentY };
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  renderer.domElement.addEventListener('mousedown', onPointerDown);
  renderer.domElement.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  renderer.domElement.addEventListener('touchstart', onPointerDown);
  renderer.domElement.addEventListener('touchmove', onPointerMove);
  window.addEventListener('touchend', onPointerUp);

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    if (!isDragging) {
      idolGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.3;
      idolGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.1;
    }

    haloMesh.rotation.z = elapsedTime * 0.4;

    // Animate falling flower petals
    petals.forEach((p) => {
      p.mesh.position.y -= p.speedY;
      p.mesh.position.x += Math.sin(elapsedTime * p.swayFreq) * 0.005;
      p.mesh.rotation.x += p.rotSpeedX;
      p.mesh.rotation.z += p.rotSpeedZ;

      if (p.mesh.position.y < -4.5) {
        resetPetal(p.mesh);
      }
    });

    renderer.render(scene, camera);
  }

  animate();
}
