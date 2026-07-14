---
title: "HearSay & Screen Reader Tools"
date: 2026-07-14
description: "Authoring tools that help make STEM course content pronounceable by screen readers — MathSay, pronunciation dictionaries, and preview workflows."
tags: ["interactive tools", "accessibility", "chemistry", "screen readers", "instructional design"]
launch_links:
  - label: "Launch HearSay"
    url: "https://jordan77-lang.github.io/Hearsay/"
  - label: "Dictionary Builder"
    url: "https://jordan77-lang.github.io/screenreader/dictionary-builder.html"
role: "Designer/developer of accessibility authoring tools for STEM curriculum, including HearSay and the Screen Reader Dictionary Builder."
challenge: |
  Chemistry and STEM notation often break for screen-reader users (subscripts dropped, formulae mangled, units spelled letter-by-letter). Authors need tools that preview speech and generate broadly supported fixes without requiring every student to configure dictionaries.
approach: |
  Built complementary tools: a Screen Reader Dictionary Builder for course pronunciation dictionaries (NVDA/JAWS/VoiceOver exports), and HearSay for authoring assistance—detecting risky tokens, proposing MathML / accessible-text fixes, MathSay for Canvas equations, and speech preview workflows aligned to course dictionaries.
outcomes: |
  A practical accessibility toolchain for STEM curriculum authors that improves spoken presentation of course content and supports institutional inclusive design goals.
---

## Overview

HearSay and the Screen Reader Dictionary Builder help course authors make STEM content pronounceable by screen readers. Together they support dictionary management, equation markup for Canvas, speech preview, and export formats used by major screen readers.

## Source

- [Hearsay](https://github.com/jordan77-lang/Hearsay) · [screenreader](https://github.com/jordan77-lang/screenreader)

## What they do

- Detect risky STEM tokens (formulae, units, Greek letters, reaction operators)
- Propose copy-paste fixes (MathML, visually hidden spoken text, careful `aria-label` use)
- Let authors **hear** original vs. fixed pronunciation
- Build and export pronunciation dictionaries for NVDA, JAWS, and VoiceOver
- MathSay workflow for LaTeX → MathML / accessible Canvas equation export

## Why it matters

Accessible STEM content is part of inclusive curriculum design — not an afterthought. These tools sit alongside image accessibility and learning-objective workflows as production support for immersive and online courses.
