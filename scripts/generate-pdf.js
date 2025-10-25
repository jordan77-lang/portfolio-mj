const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function addHeading(doc, text, level = 1) {
  const sizes = { 1: 20, 2: 16, 3: 13 };
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(sizes[level]).text(text, { continued: false });
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(11);
}

function addBulletList(doc, items) {
  const bullet = '\u2022';
  const left = doc.x;
  items.forEach(item => {
    doc.text(`${bullet} ${item}`, { indent: 10 });
  });
  doc.moveDown(0.2);
  doc.x = left;
}

function addParagraph(doc, text) {
  doc.text(text, { align: 'left' });
  doc.moveDown(0.5);
}

function addLink(doc, label, url) {
  const startX = doc.x;
  const startY = doc.y;
  doc.fillColor('#0000EE').text(label, { link: url, underline: true });
  doc.fillColor('black');
  doc.moveDown(0.2);
}

function generate() {
  const outDir = path.resolve(__dirname, '../static/files');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'curriculum-designer-summary.pdf');

  const doc = new PDFDocument({ size: 'LETTER', margins: { top: 54, bottom: 54, left: 54, right: 54 } });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // Title
  doc.font('Helvetica-Bold').fontSize(22).text('Senior Curriculum Designer — Highlights', { align: 'left' });
  doc.moveDown(0.5);
  doc.font('Helvetica').fontSize(11);

  // Profile
  addHeading(doc, 'Profile', 2);
  addBulletList(doc, [
    'Curriculum designer creating immersive, interactive learning enhanced by emerging tech (VR/AR, simulation, data-informed iteration).',
    'Proven leader managing multi-disciplinary initiatives with educators, developers, creative producers, and researchers.',
    'Expert in project-based learning, assessment alignment, and career-connected STEM curricula that scale.',
    'Strong media and narrative craft from on-camera and live production work, applied to emotionally engaging learning.'
  ]);

  // Core strengths
  addHeading(doc, 'Core strengths aligned to the role', 2);
  addBulletList(doc, [
    'Curriculum design: backward design (goals → evidence → learning), UDL, PBL, authentic assessment',
    'Emerging tech integration: VR/AR-aligned lesson design, simulation-based practice, media-rich storytelling',
    'Multi-project leadership: prioritize, plan, and deliver multiple curricula across disciplines',
    'Collaboration: partner with SMEs, writers, developers; translate requirements into buildable learning',
    'Quality and iteration: pilot, collect data, iterate; maintain design standards and templates',
    'Instructor enablement: tutorials, rubrics, templates, checklists; consistent delivery',
    'Platforms/tools: LMS, authoring tools, prototyping, basic analytics, version control'
  ]);

  // Experience highlights
  addHeading(doc, 'Experience highlights mapped to essential duties', 2);
  addBulletList(doc, [
    'Define learning goals and progressions: map SME inputs and standards to measurable outcomes and rubrics',
    'Translate goals to materials/assessments: lesson guides, labs/builds, performance tasks, and formative checks',
    'Use technology to enhance/scale: integrate VR/AR concepts, simulations, and narrative media for engagement',
    'Manage multiple curricula: run parallel programs with clear scope, dependencies, and milestones',
    'Collaborate cross-functionally: align narrative, mechanics, and outcomes with creative and technical teams',
    'Evaluate and iterate: pilot, gather feedback, improve scaffolding, pacing, and assets',
    'Build instructor resources: tutorials, build guides, safety standards, templates, and rubrics',
    'Specify innovative tools: recommend adaptive/simulation tools that meet curriculum goals'
  ]);

  // Selected projects and outcomes
  addHeading(doc, 'Selected projects and outcomes', 2);
  addBulletList(doc, [
    'Dreamscape Learn — Curriculum Design: immersive VR/AR-aligned courseware and labs with cross-functional teams',
    'Project Zephyr — High Altitude Weather Balloon: payload design, telemetry, recovery, post-flight data analysis',
    'Space Night — Experiential STEM event: community-scale interactive science experience tied to outcomes',
    'Robotics & Competition Teams: iterative design/build cycles, competition deliverables, student leadership',
    'CNC & Manufacturing Lab: lab program, safety systems, equipment training, and production workflows',
    'Phoenix Neutrino Project — Director: live “kamikaze filmmaking” merging improv and film; narrative experiences',
    'HGTV: Over Your Head — Master Carpenter & Host: on-camera design/build; visual storytelling and engagement',
    'Recognition — Silver Apple Award: honored for STEM teaching and mentorship'
  ]);

  // Portfolio links
  addHeading(doc, 'Portfolio links', 3);
  addLink(doc, 'Project Zephyr', 'https://jordan77-lang.github.io/portfolio-mj/projects/zephyr/');
  addLink(doc, 'Space Night', 'https://jordan77-lang.github.io/portfolio-mj/projects/space-night/');
  addLink(doc, 'Robotics', 'https://jordan77-lang.github.io/portfolio-mj/projects/robotics/');
  addLink(doc, 'CNC & Manufacturing Lab', 'https://jordan77-lang.github.io/portfolio-mj/projects/cnc-lab/');
  addLink(doc, 'Phoenix Neutrino Project', 'https://jordan77-lang.github.io/portfolio-mj/projects/phoenix-neutrino/');
  addLink(doc, 'HGTV: Over Your Head', 'https://jordan77-lang.github.io/portfolio-mj/projects/over-your-head/');
  addLink(doc, 'Silver Apple Award', 'https://jordan77-lang.github.io/portfolio-mj/projects/silver-apple-award/');

  // Education
  addHeading(doc, 'Education', 2);
  addBulletList(doc, ['M.S. Instructional Design & Technology (Walden University)']);

  // Cover letter prompts
  addHeading(doc, 'Cover letter prompt drafts', 2);
  addParagraph(doc, 'Evidence-based practices: Use backward design to anchor units in measurable outcomes; design authentic assessments and scaffold using UDL/PBL; embed retrieval/deliberate practice; include formative checks and rubrics; pilot, gather feedback, and iterate.');
  addParagraph(doc, 'Integrating SMEs and texts: Build outcome map and requirements brief; run structured SME interviews; synthesize research and technical docs into concise, learner-friendly assets; validate with SMEs; run lean pilots; iterate toward clarity and impact.');

  // Keywords
  addHeading(doc, 'ATS-friendly keywords', 3);
  addParagraph(doc, 'Curriculum design; instructional design; backward design; UDL; PBL; authentic assessment; VR; AR; simulation; cinematic storytelling; learning engineering; learning analytics; LMS; prototyping; cross-functional collaboration; SME collaboration; agile; templates; rubrics; scalability; iteration; student engagement.');

  doc.end();

  stream.on('finish', () => {
    console.log(`PDF generated at: ${outPath}`);
  });
}

generate();
