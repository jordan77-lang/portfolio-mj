class ChemFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    const year = new Date().getFullYear();

    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #94a3b8;
          padding: 2rem 1rem;
          margin-top: 3rem;
          position: relative;
          overflow: hidden;
        }
        
        /* Subtle top border glow */
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0d9488, #14b8a6, #0d9488, transparent);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        
        .logo-section {
          text-align: center;
        }
        
        .logo {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .logo-icon {
          font-size: 1.5rem;
        }
        
        .tagline {
          font-size: 0.875rem;
          color: #64748b;
        }
        
        .links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          position: relative;
          padding: 0.25rem 0;
        }
        
        a:hover {
          color: #14b8a6;
        }
        
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #0d9488, #14b8a6);
          transition: width 0.2s ease;
        }
        
        a:hover::after {
          width: 100%;
        }
        
        .divider {
          width: 100%;
          max-width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #334155, transparent);
        }
        
        .copyright {
          font-size: 0.75rem;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .heart {
          color: #14b8a6;
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }
        
        @media (min-width: 768px) {
          .container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          
          .divider {
            display: none;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .heart {
            animation: none;
          }
        }
      </style>
      
      <footer>
        <div class="container">
          <div class="logo-section">
            <div class="logo">
              <span class="logo-icon">🔬</span>
              <span>Mission Training</span>
            </div>
            <div class="tagline">Molarity to Mass Conversion</div>
          </div>
          
          <div class="links">
            <a href="index.html">Introduction</a>
            <a href="step1.html">Molar Mass</a>
            <a href="step2.html">Conversion</a>
            <a href="practice.html">Practice</a>
            <a href="summary.html">Summary</a>
          </div>
          
          <div class="divider"></div>
          
          <div class="copyright">
            <span>© ${year}</span>
            <span>•</span>
            <span>Made with</span>
            <span class="heart">♥</span>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('chem-footer', ChemFooter);
