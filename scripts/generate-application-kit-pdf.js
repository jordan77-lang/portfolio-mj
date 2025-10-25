const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function h(doc, text, level = 1) {
  const sizes = { 1: 22, 2: 16, 3: 13 };
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(sizes[level]).text(text);
  doc.font('Helvetica').fontSize(11);
}

function p(doc, text) {
  doc.text(text);
  doc.moveDown(0.3);
}

function bullets(doc, items) {
  items.forEach(it => doc.text(`• ${it}`));
  doc.moveDown(0.3);
}

function link(doc, label, url) {
  doc.fillColor('#0000EE').text(label, { link: url, underline: true });
  doc.fillColor('black');
}

function rule(doc) {
  const x = doc.page.margins.left;
  const y = doc.y + 4;
  doc.moveTo(x, y).lineTo(doc.page.width - x, y).strokeColor('#cccccc').stroke();
  doc.strokeColor('black');
  doc.moveDown(0.4);
}

function generate() {
  const outDir = path.resolve(__dirname, '../static/files');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'curriculum-application-kit.pdf');

  const doc = new PDFDocument({ size: 'LETTER', margins: { top: 54, bottom: 54, left: 54, right: 54 } });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // Title
  doc.font('Helvetica-Bold').fontSize(22).text('Senior Curriculum Designer — Application Kit');
  doc.font('Helvetica').fontSize(11);
  p(doc, 'All-in-one reference to draft a cover letter, resume bullets, and interview answers for Dreamscape Learn.');
  rule(doc);

  // How to use
  h(doc, 'How to use', 2);
  bullets(doc, [
    'Use the cover letter template with bracketed fields for quick personalization.',
    'Copy bullets into your resume/LinkedIn.',
    'Use the STAR worksheets to prep interviews.',
    'Map your examples to the JD with the mapping table.',
    'Keep ATS keywords in mind and reuse portfolio links.'
  ]);
  rule(doc);

  // Cover letter template
  h(doc, 'Cover letter template (Dreamscape Learn)', 2);
  p(doc, '[Your Name]  •  [City, State]  •  [Email]  •  [Phone]  •  [Portfolio URL]');
  p(doc, 'Dear Hiring Committee,');
  p(doc, "I'm excited to apply for the Senior Curriculum Designer role with Dreamscape Learn. My work blends evidence-based curriculum design with immersive technologies and cinematic storytelling — the exact intersection at the heart of DSL’s mission. I build scalable, engaging experiences by aligning clear outcomes to interactive labs, authentic assessments, and instructor-ready resources.");
  p(doc, 'Evidence-based design: I anchor every unit with backward design (outcomes → evidence → learning experiences), using UDL and PBL to make complex tasks accessible. Each build includes authentic assessments, formative checks, and rubrics; cycles are piloted and iterated based on feedback. [Add a one-sentence example tied to your portfolio].');
  p(doc, 'Integrating SME input and source material: I synthesize SME interviews, research, and technical documentation into learner-friendly assets (lesson guides, lab sheets, performance tasks). I collaborate with writers, VR developers, and instructors to translate narrative and mechanics into teachable, assessable steps, maintaining templates and standards. [Add a one-sentence VR/AR or simulation example].');
  bullets(doc, [
    'Immersive + narrative learning: Phoenix Neutrino (live cinematic storytelling) • HGTV (on-camera design/build)',
    'Experiential STEM: Zephyr (stratospheric mission) • Space Night (community-scale interactive science)',
    'Engineering programs: Robotics (iterative builds) • CNC Lab (safety, production workflows)'
  ]);
  p(doc, 'I’m drawn to DSL’s vision: emotionally engaging, scientifically rigorous learning that scales. I bring strong collaboration across disciplines, a builder’s mindset, and a track record of shipping programs that align outcomes with memorable experiences. Thank you for your consideration.');
  p(doc, 'Sincerely,');
  p(doc, '[Your Name]');
  rule(doc);

  // Resume bullet bank
  h(doc, 'Resume bullet bank', 2);
  bullets(doc, [
    'Led cross-functional teams (writers, VR devs, SMEs) to translate learning goals into interactive lessons, labs, and assessments.',
    'Applied backward design and UDL to produce inclusive, measurable learning with authentic performance tasks.',
    'Integrated VR/AR concepts and simulation-based practice to increase engagement and transfer.',
    'Managed multiple curricula; scoped work, set milestones, and delivered on schedule.',
    'Produced instructor enablement kits: tutorials, guides, rubrics, checklists, and templates.',
    'Ran pilots; gathered feedback; iterated scaffolding, pacing, and assets to improve outcomes.',
    'Specified/adapted tools (LMS, authoring, analytics, collaboration) aligned to curriculum needs.',
    'Created media-rich storytelling elements to support emotionally engaging learning moments.',
    'Drove safety, build quality, and real-world application across robotics and manufacturing programs.',
    'Produced experiential events connecting learning to community and industry.',
    'Directed time-boxed production formats — calm coordination and rapid iteration.',
    'Mentored students and staff; fostered clear communication and collaboration.'
  ]);
  rule(doc);

  // STAR worksheets
  h(doc, 'STAR interview worksheets', 2);
  h(doc, 'A) Cross-functional collaboration', 3);
  bullets(doc, ['Situation: [Challenge]', 'Task: [Outcome owned]', 'Action: [Backwards design → prototype → pilot → iterate; stakeholder alignment]', 'Result: [Engagement, clarity, reuse]']);
  h(doc, 'B) VR/AR curriculum design', 3);
  bullets(doc, ['Situation: [Abstract concept → immersive experience]', 'Task: [Measurable, accessible, engaging]', 'Action: [Outcomes → interactions → assets; UDL scaffolds; feedback loop]', 'Result: [Evidence of learning; reusable pattern]']);
  h(doc, 'C) Iterative improvement', 3);
  bullets(doc, ['Situation: [Pilot revealed issues]', 'Task: [Fix friction]', 'Action: [Revise scaffolds, exemplars, rubrics; adjust flow]', 'Result: [Higher completion/quality; smoother delivery]']);
  rule(doc);

  // JD mapping
  h(doc, 'JD mapping — your evidence lines', 2);
  bullets(doc, [
    'Define learning goals & progressions → [Outcome map + rubric — Robotics/CNC/Zephyr]',
    'Translate goals into materials & assessments → [Lesson shell, lab sheet, performance task]',
    'Use technology to enhance & scale → [VR-aligned design; media storytelling; simulation]',
    'Manage multiple curricula → [Parallel programs with scopes/milestones — Robotics + Space Night + Lab]',
    'Communicate & deliver on time → [Status reports, reviews, risk management]',
    'Evaluate effectiveness & iterate → [Pilot, feedback, revision; before/after clarity or outcomes]',
    'Instructor resources → [Tutorials, standards, templates, rubrics]',
    'Specify innovative software/tools → [Adaptive/simulation tool selection criteria]'
  ]);
  rule(doc);

  // ATS keywords
  h(doc, 'ATS keywords', 2);
  p(doc, 'Curriculum design; instructional design; backward design; UDL; PBL; authentic assessment; VR; AR; simulation; cinematic storytelling; learning engineering; learning analytics; LMS; prototyping; cross-functional collaboration; SME collaboration; agile; templates; rubrics; scalability; iteration; student engagement.');
  rule(doc);

  // Portfolio links
  h(doc, 'Portfolio links', 2);
  link(doc, 'Project Zephyr', 'https://jordan77-lang.github.io/portfolio-mj/projects/zephyr/'); doc.moveDown(0.1);
  link(doc, 'Space Night', 'https://jordan77-lang.github.io/portfolio-mj/projects/space-night/'); doc.moveDown(0.1);
  link(doc, 'Robotics', 'https://jordan77-lang.github.io/portfolio-mj/projects/robotics/'); doc.moveDown(0.1);
  link(doc, 'CNC & Manufacturing Lab', 'https://jordan77-lang.github.io/portfolio-mj/projects/cnc-lab/'); doc.moveDown(0.1);
  link(doc, 'Phoenix Neutrino Project', 'https://jordan77-lang.github.io/portfolio-mj/projects/phoenix-neutrino/'); doc.moveDown(0.1);
  link(doc, 'HGTV: Over Your Head', 'https://jordan77-lang.github.io/portfolio-mj/projects/over-your-head/'); doc.moveDown(0.1);
  link(doc, 'Silver Apple Award', 'https://jordan77-lang.github.io/portfolio-mj/projects/silver-apple-award/');

  doc.end();
  stream.on('finish', () => console.log(`PDF generated at: ${outPath}`));
}

generate();
