---
title: "Gaussian Splat WebXR Meta App (In Progress)"
date: 2025-10-29
description: "Building WebXR social experiences from COLMAP reconstructions and Gaussian Splatting"
tags: ["webxr", "gaussian-splat", "colmap", "vr", "ar", "xr", "photogrammetry"]
---

## Overview

I'm prototyping a meta-like app that lets you invite avatars into your own space to visit together in VR, across the world. The pipeline starts with real-world image/video capture, reconstructs the scene with COLMAP, then generates a Gaussian Splat representation for real-time, photorealistic rendering on the web.

## Workflow

1. Capture photos and video of the environment
2. Reconstruct camera poses + point clouds in COLMAP (sparse → dense)
3. Train and export a Gaussian Splat of the environment
4. Load the splat in a WebXR scene for immersive navigation
5. Add multi-user avatars, interaction, and occlusion

## Demo Clips

COLMAP point cloud test:

<div class="my-4">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dDWqRMZVn3A?si=vQafu4Edo5qdXK6L" title="COLMAP Point Cloud Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Gaussian splat from COLMAP (early test):

<div class="my-4">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/sdPILHZ0Buc?si=0b8uXeiv6aXkONA6" title="Gaussian Splat Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Technology

- COLMAP for structure-from-motion and dense reconstruction
- Gaussian Splatting for efficient, photorealistic scene rendering
- WebXR for browser-based AR/VR
- Potential viewers/tooling: Three.js + WebXR, gsplat-based viewers, or custom GLSL pipelines

## Status & Next Steps

- ✅ COLMAP reconstructions (initial tests)
- ✅ Early Gaussian splat experiments
- 🔜 WebXR scene integration (navigation, controller mapping)
- 🔜 Multi-user avatars (WebRTC or websocket relay)
- 🔜 Occlusion and collision for presence realism
- 🔜 Mobile performance tuning and progressive loading

## Vision

A sharable link where friends can join you inside your own captured environment, explore together, and interact—straight from a browser-enabled VR headset or desktop, no app install required.

If you have a space you'd like to capture or want to collaborate, reach out: [stramark@gmail.com](mailto:stramark@gmail.com).
