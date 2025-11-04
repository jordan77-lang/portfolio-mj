const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function H(doc, text, size = 14, bold = true) {
  doc.moveDown(0.3);
  if (bold) doc.font('Helvetica-Bold'); else doc.font('Helvetica');
  doc.fontSize(size).text(text);
  doc.font('Helvetica').fontSize(11);
}

function para(doc, text) {
  if (!text) return;
  doc.text(text, { align: 'left' });
  doc.moveDown(0.2);
}

function bullets(doc, items) {
  if (!items || !items.length) return;
  items.forEach(it => doc.text(`• ${it}`));
  doc.moveDown(0.2);
}

function rule(doc) {
  const x = doc.page.margins.left;
  const y = doc.y + 4;
  doc.moveTo(x, y).lineTo(doc.page.width - x, y).strokeColor('#cccccc').stroke();
  doc.strokeColor('black');
  doc.moveDown(0.2);
}

function generate() {
  const outDir = path.resolve(__dirname, '../static/files');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'Mark_Jordan_Resume.pdf');

  const doc = new PDFDocument({ size: 'LETTER', margins: { top: 54, bottom: 54, left: 54, right: 54 } });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // Header
  doc.font('Helvetica-Bold').fontSize(18).text('Mark Jordan');
  doc.font('Helvetica').fontSize(10).fillColor('#444').text('Mesa, Arizona  •  stramark@gmail.com  •  github.com/jordan77-lang  •  linkedin.com/in/mark-jordan-769417a  •  markajordan.com');
  doc.fillColor('black');
  rule(doc);

  // Summary
  H(doc, 'Summary', 12);
  para(doc, 'STEM educator and curriculum designer building immersive, interactive learning experiences. 24 years teaching engineering, robotics, and cybersecurity; now designing VR/AR-aligned curricula at ASU’s Dreamscape Learn. Focused on backward design, UDL/PBL, authentic assessment, and narrative engagement.');

  // Experience
  H(doc, 'Experience', 12);
  // ASU Dreamscape Learn
  H(doc, 'Curriculum Designer — ASU Dreamscape Learn', 11);
  bullets(doc, [
    'Design immersive VR/AR-informed courseware and labs with cross-functional teams (writers, VR devs, SMEs).',
    'Align outcomes to interactive lessons, authentic assessments, rubrics, and instructor-ready resources.',
  ]);
  // STEM Teacher
  H(doc, 'STEM Teacher — Arizona Public Schools', 11);
  bullets(doc, [
    '24 years teaching Engineering, Robotics, Cyber Security, and Aerospace; PLTW certified.',
    'Created and led community-scale programs: Space Night (500+ attendees), competition teams, SkillsUSA, Maker’s Club.',
  ]);
  // Media / Leadership highlights (concise)
  H(doc, 'Master Carpenter & Host — HGTV “Over Your Head”', 11);
  para(doc, 'On-camera design/build; mentored homeowners; produced engaging, narrative-forward learning moments.');
  H(doc, 'Vice President — Gilbert Education Association', 11);
  para(doc, 'Led contract negotiations, policy development, and professional development initiatives.');
  H(doc, 'Technical Director — The Torch Theatre / Phoenix Improv Festival', 11);
  para(doc, 'Overseen technical production for live performance; created Level 1 improvisation training curriculum.');
  H(doc, 'Director — Phoenix Neutrino Project', 11);
  para(doc, 'Directed live “kamikaze filmmaking” project uniting 40+ performers in time-boxed collaborative storytelling.');

  // Selected Projects / Recognition
  H(doc, 'Selected Projects & Recognition', 12);
  bullets(doc, [
    'Project Zephyr — Stratospheric balloon mission: payload design, live telemetry, recovery, data analysis.',
    'Space Night — Experiential STEM event: interactive science experiences tied to outcomes.',
    'Silver Apple Award — Recognized for STEM teaching and mentorship (Arizona’s Family / AZ Bank & Trust).',
    'HGTV: Over Your Head — Master Carpenter & Host (3 seasons).',
  ]);

  // Skills
  H(doc, 'Skills', 12);
  bullets(doc, [
    'Curriculum & Instruction: Backward design, UDL, PBL, authentic assessment, instructor enablement',
    'Immersive & Interactive: VR/AR-aligned design, simulation, cinematic/narrative storytelling',
    'Technical: HTML/JS, 3D modeling, CNC/CAM prototyping, LMS, rapid authoring (Rise/Storyline)',
    'Collaboration & Delivery: Cross-functional teamwork, agile iteration, quality standards, templates/rubrics',
  ]);

  // Education
  H(doc, 'Education', 12);
  bullets(doc, [
    'M.S., Instructional Design & Technology — Emphasis in Online Learning, Walden University',
    'Graduate Coursework — Arts, Media and Engineering (AR/VR Design), ASU — School of Arts, Media and Engineering (GAME)',
    'Graduate Coursework — Professional Studies (Engineering Education), Rochester Institute of Technology (RIT)',
    'B.F.A., Secondary Education (Technical Theatre Emphasis), Arizona State University',
  ]);

  // Certifications
  H(doc, 'Certifications', 12);
  bullets(doc, [
    'Project Lead The Way Instructor — IED, POE, AE, EDD, Cybersecurity',
    'Arizona Secondary Education Certified; ESL Endorsement (PreK–12)',
    'High Power Rocketry Level 1 Certified (NAR)'
  ]);

  // Portfolio Links
  H(doc, 'Portfolio', 12);
  para(doc, 'Project Zephyr — markajordan.com/projects/zephyr  •  Space Night — markajordan.com/projects/space-night  •  Silver Apple Award — markajordan.com/projects/silver-apple-award');

  doc.end();
  stream.on('finish', () => console.log(`Resume generated at: ${outPath}`));
}

generate();
