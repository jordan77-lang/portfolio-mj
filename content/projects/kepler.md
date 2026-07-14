---
title: "Kepler's Laws Simulator"
date: 2026-07-14
description: "Interactive 3D orbital mechanics simulation for exploring Kepler's laws through sandbox controls and solar-system presets."
tags: ["interactive tools", "astronomy", "physics", "3D", "Three.js"]
launch_url: "https://jordan77-lang.github.io/Kepler/"
launch_label: "Launch Kepler Simulator"
role: "Designer/developer of an interactive 3D Kepler's Laws simulator for educational outreach."
challenge: |
  Orbital mechanics is hard to internalize from static diagrams. Students need real-time control over eccentricity, period relationships, and swept-area visualization.
approach: |
  Built a React + Three.js experience with a Kepler's 2nd Law sandbox, a 3rd Law solar-system mode, body presets, velocity vectors, swept areas, apsides, and a live phase plot—using a custom universal Kepler solver for conic sections.
outcomes: |
  A hands-on 3D simulation students and outreach audiences can use to explore Kepler's laws through play, presets, and visible geometric relationships.
---

## Overview

An interactive 3D orbital mechanics simulator built for the Center for Planetary Observation (CPO). Learners explore Kepler’s laws through real-time simulation, presets, and hands-on controls.

## Source

- Repository: [github.com/jordan77-lang/Kepler](https://github.com/jordan77-lang/Kepler)

## Features

- **2nd Law sandbox:** adjust semi-major axis, eccentricity, and inclination
- **3rd Law solar system mode:** Mercury through Neptune and Halley’s Comet
- Velocity vectors, swept areas, foci/major axis, apsides, and phase plot
- Play/pause, reset, and simulation speed controls
- Custom universal Kepler solver supporting elliptical, parabolic, and hyperbolic trajectories

## Tech

React, Vite, React Three Fiber / Drei, Three.js, Tailwind CSS, Recharts
