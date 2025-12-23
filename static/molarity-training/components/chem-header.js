class ChemHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    const current = (typeof window !== 'undefined') ? (window.location.pathname.split('/').pop() || 'index.html') : '';
    const progress = this.getAttribute('progress') || '0';
    const training = this.getAttribute('training') || 'Molarity to Mass Conversion';

    // Determine step number for visual indicator
    const steps = ['index.html', 'step1.html', 'step2.html', 'practice.html', 'summary.html'];
    const currentStep = steps.indexOf(current === '' ? 'index.html' : current) + 1;
    const totalSteps = steps.length;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin-bottom: 2rem;
        }
        
        header {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          color: white;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
        }
        
        /* Subtle animated gradient overlay */
        header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent, 
            rgba(13, 148, 136, 0.1), 
            transparent
          );
          animation: shimmer 8s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(50%); }
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .left-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .logo {
          font-size: 1.5rem;
        }
        
        h1 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        
        /* Enhanced Progress Bar */
        .progress-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .progress-bar {
          width: 200px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }
        
        .progress {
          height: 100%;
          background: linear-gradient(90deg, #0d9488 0%, #14b8a6 50%, #22c55e 100%);
          width: ${progress}%;
          transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-radius: 4px;
          position: relative;
        }
        
        .progress::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: progress-shine 2s ease-in-out infinite;
        }
        
        @keyframes progress-shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .progress-text {
          font-size: 0.8rem;
          color: #14b8a6;
          font-weight: 600;
          white-space: nowrap;
        }
        
        .step-indicator {
          font-size: 0.75rem;
          color: #14b8a6;
          font-weight: 600;
          background: rgba(13, 148, 136, 0.2);
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          border: 1px solid rgba(13, 148, 136, 0.3);
        }
        
        nav {
          display: flex;
          gap: 0.5rem;
        }
        
        a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          padding: 0.5rem 0.875rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          position: relative;
        }
        
        a:hover {
          color: white;
          background-color: rgba(13, 148, 136, 0.2);
        }
        
        .active {
          color: white;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.3) 0%, rgba(13, 148, 136, 0.2) 100%);
          border: 1px solid rgba(13, 148, 136, 0.4);
        }
        
        .active::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background: #14b8a6;
          border-radius: 2px;
        }
        
        /* Mobile responsive */
        @media (max-width: 900px) {
          .container {
            flex-direction: column;
            gap: 1rem;
          }
          
          nav {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          a {
            font-size: 0.8rem;
            padding: 0.4rem 0.7rem;
          }
          
          .progress-bar {
            width: 150px;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          header::before,
          .progress::after {
            animation: none;
          }
        }
      </style>
      
      <header>
        <div class="container">
          <div class="left-section">
            <div class="title-row">
              <span class="logo">🔬</span>
              <h1>${training}</h1>
            </div>
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <span class="progress-text">${progress}% Complete</span>
            </div>
          </div>
          
          <nav>
            <a href="index.html" class="${current === '' || current === 'index.html' ? 'active' : ''}" ${current === '' || current === 'index.html' ? 'aria-current="page"' : ''}>Intro</a>
            <a href="step1.html" class="${current === 'step1.html' ? 'active' : ''}" ${current === 'step1.html' ? 'aria-current="page"' : ''}>Molar Mass</a>
            <a href="step2.html" class="${current === 'step2.html' ? 'active' : ''}" ${current === 'step2.html' ? 'aria-current="page"' : ''}>Conversion</a>
            <a href="practice.html" class="${current === 'practice.html' ? 'active' : ''}" ${current === 'practice.html' ? 'aria-current="page"' : ''}>Practice</a>
            <a href="summary.html" class="${current === 'summary.html' ? 'active' : ''}" ${current === 'summary.html' ? 'aria-current="page"' : ''}>Summary</a>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('chem-header', ChemHeader);