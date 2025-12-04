class ChemHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    const current = (typeof window !== 'undefined') ? (window.location.pathname.split('/').pop() || 'index.html') : '';
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          color: white;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h1 {
          margin: 0;
          font-size: 1.5rem;
        }
        nav {
          display: flex;
          gap: 1rem;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: background-color 0.2s;
        }
        a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .active {
          background-color: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .progress-bar {
          margin-top: 1rem;
          height: 6px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress {
          height: 100%;
          background-color: white;
          width: ${this.getAttribute('progress') || '0'}%;
          transition: width 0.3s ease;
        }
      </style>
      <header>
        <div class="container">
          <div>
            <h1>Molarity to Mass Conversion</h1>
<div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
            <nav>
            <a href="index.html" class="${current === '' || current === 'index.html' ? 'active' : ''}" ${current === '' || current === 'index.html' ? 'aria-current="page"' : ''}>Introduction</a>
            <a href="step1.html" class="${current === 'step1.html' ? 'active' : ''}" ${current === 'step1.html' ? 'aria-current="page"' : ''}>Step 1: Molar Mass</a>
            <a href="step2.html" class="${current === 'step2.html' ? 'active' : ''}" ${current === 'step2.html' ? 'aria-current="page"' : ''}>Step 2: Conversion</a>
            <a href="practice.html" class="${current === 'practice.html' ? 'active' : ''}" ${current === 'practice.html' ? 'aria-current="page"' : ''}>Practice</a>
            <a href="summary.html" class="${current === 'summary.html' ? 'active' : ''}" ${current === 'summary.html' ? 'aria-current="page"' : ''}>Summary</a>
          </nav>
</div>
      </header>
    `;
  }
}
customElements.define('chem-header', ChemHeader);