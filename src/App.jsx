import { useState } from 'react'
import './App.css'

function App() {
  const [started, setStarted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="Vichador inicio"><span className="brand-mark">✳</span> Vichador</a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#product" onClick={() => setMenuOpen(false)}>Producto</a>
          <a href="#integrations" onClick={() => setMenuOpen(false)}>Integraciones</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Precios</a>
          <a href="#docs" onClick={() => setMenuOpen(false)}>Docs <span className="arrow">↗</span></a>
        </div>
        <div className="nav-actions">
          <button className="login" onClick={() => setStarted(true)}>Iniciar sesión</button>
          <button className="small-cta" onClick={() => setStarted(true)}>Crear cuenta <span>↗</span></button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">☰</button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse"></span> AUTOMATIZACIÓN SIN FRICCIÓN</p>
          <h1>Tu trabajo,<br /><em>en movimiento.</em></h1>
          <p className="hero-lede">Conecta tus herramientas. Automatiza lo repetitivo.<br className="desktop-break" /> Haz espacio para lo que de verdad importa.</p>
          <div className="hero-buttons">
            <button className="primary-cta" onClick={() => setStarted(true)}>Empieza gratis <span>↗</span></button>
            <a className="text-link" href="#product">Ver cómo funciona <span>↓</span></a>
          </div>
          <p className="fine-print">Sin tarjeta de crédito · Configura en 2 minutos</p>
        </div>
        <div className="hero-art" aria-label="Previsualización de un workflow de automatización">
          <div className="art-glow"></div>
          <div className="workflow-window">
            <div className="window-bar"><span className="window-dot red"></span><span className="window-dot yellow"></span><span className="window-dot green"></span><span className="workflow-name">lead-to-slack.flow</span><span className="save-state">● Guardado</span></div>
            <div className="canvas-toolbar"><span>⌕</span><span>⊞</span><span>↗</span><span className="zoom">100%</span></div>
            <svg className="connections" viewBox="0 0 640 315" preserveAspectRatio="none" aria-hidden="true"><path d="M145 145 C 190 145, 180 215, 225 215" /><path d="M385 215 C 425 215, 410 150, 455 150" /></svg>
            <div className="node trigger-node"><span className="node-icon">◉</span><div><b>Nuevo lead</b><small>HubSpot · Trigger</small></div><i>•••</i></div>
            <div className="node action-node"><span className="node-icon">✦</span><div><b>Enriquecer datos</b><small>Clearbit · Action</small></div><i>•••</i></div>
            <div className="node slack-node"><span className="node-icon">#</span><div><b>Notificar al equipo</b><small>Slack · Action</small></div><i>•••</i></div>
            <div className="canvas-status"><span className="status-live"></span> Activo <span className="status-divider"></span> 3 pasos</div>
          </div>
          <div className="floating-note"><span>✦</span><div><b>Automatización ejecutada</b><small>hace 2 segundos</small></div></div>
        </div>
      </section>

      <div className="trusted"><span>Equipos que ya están<br />ganando tiempo con Vichador</span><div className="logo-row"><b>northstar</b><b>⌁ LUMA</b><b>arc / lab</b><b>fieldnote</b><b>ORBIT</b></div></div>

      <section className="product-section" id="product">
        <div className="section-heading"><p className="eyebrow">UNA NUEVA FORMA DE TRABAJAR</p><h2>Menos pestañas.<br /><em>Más impulso.</em></h2><p>Vichador convierte tus procesos en flujos visuales que cualquiera puede entender, construir y mejorar.</p></div>
        <div className="feature-list"><article><span className="feature-number">01</span><div><h3>Conecta todo</h3><p>Más de 500 apps listas para hablar entre sí. Y si no está, créala.</p></div><span className="feature-icon">⌁</span></article><article><span className="feature-number">02</span><div><h3>Diseña visualmente</h3><p>Construye con bloques. Entiende el flujo de un vistazo. Sin código obligatorio.</p></div><span className="feature-icon">⌘</span></article><article><span className="feature-number">03</span><div><h3>Crece con confianza</h3><p>Logs claros, reintentos automáticos y control total sobre cada ejecución.</p></div><span className="feature-icon">↗</span></article></div>
      </section>

      <section className="integrations" id="integrations"><div><p className="eyebrow">TU STACK, A TU MANERA</p><h2>Donde tus herramientas<br /><em>se encuentran.</em></h2><p>CRM, bases de datos, APIs, mensajería. Vichador los une para que tus ideas avancen a la velocidad de tu equipo.</p><button className="outline-cta" onClick={() => setStarted(true)}>Explorar integraciones <span>↗</span></button></div><div className="orbit-art"><span className="orbit orbit-one"></span><span className="orbit orbit-two"></span><span className="orbit-core">✳</span><span className="app-badge badge-hub">▦</span><span className="app-badge badge-slack">#</span><span className="app-badge badge-notion">N</span><span className="app-badge badge-air">✈</span></div></section>

      <section className="bottom-cta" id="pricing"><div><p className="eyebrow">LISTO PARA AVANZAR</p><h2>Tu próximo gran flujo<br /><em>empieza aquí.</em></h2></div><button className="primary-cta" onClick={() => setStarted(true)}>Crear mi cuenta <span>↗</span></button></section>
      <footer id="docs"><a className="brand" href="#top"><span className="brand-mark">✳</span> Vichador</a><span>Automatiza con intención.</span><div><a href="#product">Producto</a><a href="#integrations">Integraciones</a><a href="#pricing">Precios</a><a href="#docs">Docs ↗</a></div></footer>
      {started && <div className="modal-backdrop" onClick={() => setStarted(false)}><div className="signup-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setStarted(false)} aria-label="Cerrar">×</button><span className="modal-mark">✳</span><h2>Tu espacio de automatización<br /><em>te espera.</em></h2><p>Crea una cuenta gratis y empieza a mover tu trabajo.</p><input placeholder="Tu email de trabajo" type="email" /><button className="primary-cta" onClick={() => setStarted(false)}>Continuar <span>↗</span></button></div></div>}
    </main>
  )
}

export default App
