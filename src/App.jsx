import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Stars,
  ScrollControls,
  Scroll,
  Sparkles,
  TorusKnot,
  Sphere,
  MeshDistortMaterial
} from "@react-three/drei";
import "./App.css";

// Animated 3D Shape for the Hero Section
function HeroShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[1.2, 0.4, 128, 32]} position={[0, -0.5, 0]}>
        <meshStandardMaterial
          color="#ec4899"
          roughness={0.1}
          metalness={0.8}
          emissive="#ec4899"
          emissiveIntensity={0.2}
        />
      </TorusKnot>
    </Float>
  );
}

// Background animated sphere
function BackgroundSphere({ position, color, distort, speed }) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.8}
          roughness={0.2}
          distort={distort}
          speed={speed}
        />
      </Sphere>
    </Float>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#030308']} />

        {/* Lighting Setup */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={5} color="#3b82f6" />
        <pointLight position={[10, 0, 5]} intensity={5} color="#ec4899" />

        {/* Environment Details */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1.5} />
        <Sparkles count={200} scale={15} size={2} speed={0.4} opacity={0.6} color="#ffffff" />

        {/* Scrollable Context */}
        <ScrollControls pages={6} damping={0.2} distance={1.5}>

          {/* 3D Elements that move with scroll */}
          <Scroll>
            <group position={[3, -1, 0]}>
              <HeroShape />
            </group>
            <BackgroundSphere position={[-4, -8, -2]} color="#3b82f6" distort={0.5} speed={2} />
            <BackgroundSphere position={[4, -16, -5]} color="#a855f7" distort={0.4} speed={3} />
            <BackgroundSphere position={[-3, -24, -3]} color="#ec4899" distort={0.6} speed={1.5} />
          </Scroll>

          {/* HTML Overlay that scrolls */}
          <Scroll html style={{ width: '100%', height: '100%' }}>
            <div className="content">

              {/* Hero Section */}
              <section className="section hero">
                <div className="hero-text glass-panel fade-in">
                  <div className="badge">Available for hire</div>
                  <h1>Akanksha<br /><span className="gradient-text">Jadhav</span></h1>
                  <h2>MCA Graduate | MERN Stack Developer</h2>
                  <p className="hero-desc">
                    I build immersive, performant, and scalable web applications.
                    Let's create something extraordinary together.
                  </p>

                </div>
              </section>

              {/* About Section */}
              <section className="section align-right">
                <div className="glass-panel fade-in delay-1 right-panel">
                  <h2>About Me</h2>
                  <p>
                    Passionate about pushing the boundaries of web development.
                    With a strong foundation in the MERN stack and a keen eye for design,
                    I transform complex problems into elegant, user-friendly solutions.
                  </p>
                  <p style={{ marginTop: '1rem' }}>
                    Constantly learning and exploring new technologies like 3D web graphics
                    to build the next generation of web experiences.
                  </p>
                </div>
              </section>

              {/* Skills Section */}
              <section className="section">
                <div className="glass-panel fade-in delay-2 full-width">
                  <h2>Technical Arsenal</h2>
                  <div className="cards">
                    <div className="skill-card">React.js</div>
                    <div className="skill-card">Node.js</div>
                    <div className="skill-card">MongoDB</div>
                    <div className="skill-card">Express.js</div>
                    <div className="skill-card">JavaScript (ES6+)</div>
                    <div className="skill-card">Firebase</div>
                    <div className="skill-card">Three.js / R3F</div>
                    <div className="skill-card">Tailwind CSS</div>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section className="section">
                <div className="full-width">
                  <h2 className="section-title text-center">Featured Projects</h2>

                  <div className="project-grid">
                    <div className="project-card glass-panel group">
                      <div className="project-icon">🤖</div>
                      <h3>AI Mock Desk</h3>
                      <p>AI Interview Simulator using OpenAI API. Helps candidates prepare for technical interviews with real-time feedback.</p>
                      <a href="https://github.com/akankshajadhav1" className="project-link">View Project →</a>
                    </div>

                    <div className="project-card glass-panel group">
                      <div className="project-icon">📈</div>
                      <h3>EduTracker</h3>
                      <p>Competitive Programming Performance Tracking System. Visualize progress and identify areas for improvement.</p>
                      <a href="https://github.com/akankshajadhav1" className="project-link">View Project →</a>
                    </div>

                    <div className="project-card glass-panel group">
                      <div className="project-icon">⚽</div>
                      <h3>Turf Booking</h3>
                      <p>Venue Booking Application with Payment Integration. Seamlessly book and manage sports facilities online.</p>
                      <a href="https://github.com/akankshajadhav1" className="project-link">View Project →</a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section className="section footer-section">
                <div className="glass-panel contact-panel fade-in delay-3">
                  <h2>Let's Connect</h2>
                  <p className="contact-desc">Ready to start your next project? Reach out and let's make it happen.</p>

                  <div className="contact-info">
                    <a href="mailto:akankshaja0101@gmail.com" className="contact-link">
                      <span className="icon">✉️</span> akankshaja0101@gmail.com
                    </a>
                    <a href="https://github.com/akankshajadhav1" target="_blank" rel="noreferrer" className="contact-link">
                      <span className="icon">🐙</span> github.com/akankshajadhav1
                    </a>
                    <a href="tel:+918530791168" className="contact-link">
                      <span className="icon">📱</span> +91 8530791168
                    </a>
                  </div>
                </div>

                <footer>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/akanksha-jadhav-4b6681262/" target="_blank" rel="noreferrer" className="social-icon">
                      <span>💼</span> LinkedIn
                    </a>
                    <a href="https://github.com/akankshajadhav1" target="_blank" rel="noreferrer" className="social-icon">
                      <span>🐙</span> GitHub
                    </a>
                    <a href="https://twitter.com/akankshajadhav" target="_blank" rel="noreferrer" className="social-icon">
                      <span>𝕏</span> Twitter
                    </a>
                  </div>
                  <p>© {new Date().getFullYear()} Akanksha Jadhav. Built with React Three Fiber.</p>
                </footer>
              </section>

            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
