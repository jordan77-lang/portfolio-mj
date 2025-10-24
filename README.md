# portfolio-mj (Hugo / Ananke theme) — starter

This repo is a minimal Hugo portfolio using the Ananke theme.
Replace placeholders (Your Name, links, CV) and add any extra project pages.

## Quick local preview

1. Install Hugo if you don't have it:
   - **macOS** (Homebrew): `brew install hugo`
   - **Linux** (snap): `sudo snap install hugo --channel=extended`
   - **Windows**: use Chocolatey (`choco install hugo-extended`) or download from https://gohugo.io/getting-started/installing/

2. Run the dev server:
   ```bash
   hugo server -D
   ```

3. Open http://localhost:1313 in your browser to preview.

## Structure

- `config.toml` — site-wide settings (title, baseURL, theme)
- `content/` — Markdown files for pages and projects
- `static/` — static files (images, PDFs, etc.)
- `themes/ananke/` — the Ananke theme (added as a Git submodule)

## Publishing to GitHub Pages

The `.github/workflows/gh-pages.yml` workflow automatically builds and deploys your site to GitHub Pages when you push to the `main` branch.

Your site will be live at: https://jordan77-lang.github.io/portfolio-mj/

## Adding your CV

Place your CV PDF in `static/files/YourName_CV.pdf` so it will be accessible at `/files/YourName_CV.pdf`.

## Customization

- Edit `content/_index.md` for the homepage
- Add new projects in `content/projects/`
- Update `config.toml` to change site settings
