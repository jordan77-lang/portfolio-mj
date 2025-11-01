---
title: "AR/VR Projects"
date: 2025-10-29
description: "Immersive augmented and virtual reality experiences for education and entertainment"
tags: ["ar", "vr", "augmented-reality", "virtual-reality", "3d-modeling", "unity"]
---

## Overview

As part of my exploration into immersive learning technologies, I've developed several AR and VR projects that demonstrate the potential of extended reality (XR) for education and engagement. These projects combine 3D modeling, real-time rendering, and interactive experiences.

## Featured Projects

### Gaussian Splat WebXR Meta App (In Progress)

Exploring Gaussian Splatting to create interactive WebXR environments. The goal is a “meta app” that lets you invite avatars into your home and visit together in VR from anywhere in the world.

Current workflow: Capture images and video of a space → Generate COLMAP point clouds for camera poses and sparse/dense reconstruction → Train and export a Gaussian Splat of the environment → Integrate the splat into a WebXR scene for immersive exploration and social presence.

Status and next steps: Initial COLMAP reconstructions complete; early Gaussian splat tests underway. Next: WebXR integration, multi-user avatars, occlusion, and mobile performance tuning.

COLMAP point cloud test:

<div class="my-2">
	<iframe width="480" height="270" src="https://www.youtube.com/embed/dDWqRMZVn3A?si=vQafu4Edo5qdXK6L" title="COLMAP Point Cloud Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Gaussian splat from COLMAP (early test):

<div class="my-2">
	<iframe width="480" height="270" src="https://www.youtube.com/embed/sdPILHZ0Buc?si=0b8uXeiv6aXkONA6" title="Gaussian Splat Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Android Digital Twin - Banjo AR Experience

**[Launch Experience](/projects/digital-twin/android-digital-twin.html)**

An augmented reality application that allows users to place and interact with digital twin models of my dog Banjo in real-world environments.

**Technology Stack:** AR Foundation for Unity, Android mobile platform, 3D modeling and photogrammetry, real-time rendering.

**Key Features:** Place 3D model of Banjo in real-world spaces using AR; scale and rotate models in real-time; realistic lighting and shadows; interactive animations and behaviors; mobile-optimized performance.

**Use Cases:** Demonstration of AR technology capabilities; educational tool for understanding spatial computing; prototype for pet adoption AR previews; entertainment and engagement application.

**Technical Highlights:** Photogrammetry-based 3D model creation; AR plane detection and tracking; touch-based interaction controls; cross-platform AR development.


 

### iOS Digital Twin-Banjo viewer

**[Launch Experience](/projects/digital-twin/ios-digital-twin.html)**

An iOS-native augmented reality application bringing digital twin technology to Apple devices with optimized ARKit integration.

**Technology Stack:** ARKit for iOS, Unity with iOS build pipeline, iPhone/iPad platform optimization, real-time 3D rendering.

**Key Features:** Native ARKit integration for superior tracking; iPhone and iPad compatibility; optimized for iOS hardware; seamless AR placement and interaction; high-fidelity 3D models.

**Use Cases:** iOS-specific AR demonstrations; cross-platform AR development comparison; educational tool for mobile AR development; portfolio showcase for iOS AR capabilities.

**Technical Highlights:** ARKit plane detection and tracking; iOS-optimized performance; touch and gesture controls; Metal graphics API integration.

---

### Robot VR viewer

**[Launch Experience](/projects/digital-twin/robot1-universal-viewer.html)**

A universal 3D model viewer that allows users to explore and interact with robotic models in an immersive environment, showcasing mechanical design and functionality.

**Technology Stack:** WebGL-based rendering, Three.js or Unity WebGL, universal device compatibility, cross-platform 3D visualization.

**Key Features:** Interactive 3D robot model viewing; rotate, zoom, and pan controls; exploded view animations; part identification and labeling; universal browser access.

**Use Cases:** Robotics education and demonstration; mechanical design visualization; engineering portfolio showcase; remote collaboration and review.

**Technical Highlights:** High-quality 3D rendering; performance-optimized web delivery; responsive design for all devices; interactive camera controls.

---

### Castle VR Viewer

**[Launch Experience](/projects/digital-twin/castle-vr-viewer.html)**

An immersive virtual reality experience that allows users to explore a detailed castle environment in VR.

**Technology Stack:** Unity VR development, VR headset support, 3D architectural modeling, real-time lighting and physics.

**Key Features:** Fully navigable 3D castle environment; room-scale VR support; realistic architectural details; interactive elements and exploration; optimized for VR performance.

**Use Cases:** Historical education and virtual field trips; architecture and design visualization; VR development showcase; immersive storytelling environment.

**Technical Highlights:** VR locomotion and interaction systems; level of detail (LOD) optimization; spatial audio implementation; comfort-focused VR design.

---

<!-- Condensed page: removed extended background sections for brevity -->
