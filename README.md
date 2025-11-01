# Mark Jordan - Portfolio Website

This is a Hugo-based portfolio website using the aafu theme, showcasing my experience as a STEM educator and former HGTV host.

## Quick local preview

1. Install Hugo Extended if you don't have it:
   - **macOS** (Homebrew): `brew install hugo`
   - **Linux** (snap): `sudo snap install hugo --channel=extended`
   - **Windows**: `choco install hugo-extended` or download from https://gohugo.io/getting-started/installing/

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Build Tailwind CSS (in one terminal):
   ```bash
   npm run dev:css
   ```

4. Run the dev server (in another terminal):
   ```bash
   hugo server -D
   ```

5. Open http://localhost:1313/ in your browser to preview.

## Structure

- `config.yaml` — site-wide settings (title, baseURL, theme, content sections)
- `content/` — Markdown files for pages and projects
- `static/` — static files (images, PDFs, resume)
- `themes/aafu/` — the aafu theme (added as a Git submodule)
- `assets/main.css` — Tailwind CSS styles
- `tailwind.config.js` — Tailwind configuration

## Publishing to GitHub Pages

The `.github/workflows/gh-pages.yml` workflow automatically builds and deploys your site to GitHub Pages when you push to the `main` branch.

Your site will be live at: https://markajordan.com/

## Customization

- Edit `config.yaml` to update your profile, experience, education, projects, and skills
- Add new project pages in `content/projects/`
- Update resume at `static/files/Mark_Jordan_Resume.pdf`
- Customize styles in `assets/main.css` using Tailwind CSS
