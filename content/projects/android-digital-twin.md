---
title: "Android Digital Twin - Banjo AR"
date: 2025-10-29
description: "Augmented reality application for Android featuring digital twin models of Banjo"
tags: ["ar", "android", "unity", "digital-twin", "augmented-reality"]
draft: true
---

## Project Overview

An augmented reality application for Android devices that allows users to place and interact with photorealistic digital twin models of my dog Banjo in real-world environments. This project demonstrates the potential of AR technology for creating engaging, interactive experiences.

---

## Live Demo

**🚀 [Launch Android Digital Twin Experience](/projects/digital-twin/android-digital-twin.html)**

**Platform:** Works on any device with a modern web browser  
**Best experienced on:** Android mobile devices with AR support

---

## Key Features

### AR Placement
- Place 3D model of Banjo anywhere in your physical space
- Real-time plane detection for accurate placement
- Persistent anchors maintain position as you move

### Interactive Controls
- Touch to scale the model up or down
- Rotate using two-finger gestures
- Move to different locations with drag controls
- Reset to default position and orientation

### Realistic Rendering
- High-quality photogrammetry-based 3D model
- Real-time lighting that matches environment
- Accurate shadows cast on real-world surfaces
- Smooth animations and natural movements

### Performance
- Optimized for mid-range Android devices
- Consistent 60fps on supported hardware
- Minimal battery impact
- Fast startup and model loading

---

## Technology Stack

**Development Environment:**
- Unity 2022.3 LTS
- AR Foundation 5.x
- ARCore for Android
- C# scripting

**3D Assets:**
- Photogrammetry capture and processing
- Blender for model cleanup and optimization
- Substance Painter for texturing
- FBX model format

**Android Integration:**
- Android SDK and NDK
- Google ARCore SDK
- Target API Level 31+

---

## Technical Implementation

### AR Foundation Setup
Implemented cross-platform AR using Unity's AR Foundation framework with ARCore backend for Android-specific features.

### Plane Detection
Real-time horizontal and vertical plane detection allows users to place the model on floors, tables, walls, and other surfaces.

### Touch Interaction System
Custom gesture recognition system handles:
- Single tap for placement
- Pinch-to-zoom scaling
- Two-finger rotation
- Drag-to-move positioning

### Model Optimization
- LOD (Level of Detail) system for performance
- Texture atlasing to reduce draw calls
- Mesh decimation while preserving quality
- Compressed texture formats (ASTC)

---

## Development Process

### 1. Photogrammetry Capture
- Multiple photo sessions in controlled lighting
- 360-degree coverage from all angles
- High-resolution source images
- Neutral background for clean extraction

### 2. 3D Model Creation
- Photogrammetry processing in RealityCapture
- Mesh cleanup and retopology in Blender
- UV unwrapping for efficient texturing
- Normal map baking for detail preservation

### 3. Unity Integration
- Model import and material setup
- AR Foundation scene configuration
- Script development for interactions
- Testing on multiple Android devices

### 4. Optimization & Testing
- Performance profiling and optimization
- Device compatibility testing
- User experience refinement
- Bug fixing and polishing

---

## Use Cases

### Technology Demonstration
Perfect for showcasing AR capabilities to students, stakeholders, or at STEM events.

### Educational Tool
Teach students about:
- Augmented reality concepts
- 3D modeling and photogrammetry
- Mobile app development
- Spatial computing

### Pet Adoption Preview
Prototype for visualizing pets in your home before adoption—see how Banjo (or any pet) looks in your living space.

### Entertainment
Fun, interactive experience for friends and family to enjoy AR technology.

---

## Challenges & Solutions

### Challenge 1: Lighting Consistency
**Problem:** AR models can look out of place with mismatched lighting  
**Solution:** Implemented environment probes and light estimation from ARCore

### Challenge 2: Model File Size
**Problem:** High-quality photogrammetry models were too large for mobile  
**Solution:** Multi-level LOD system and aggressive texture compression

### Challenge 3: Plane Detection Accuracy
**Problem:** ARCore sometimes struggled with textured surfaces  
**Solution:** Added manual placement option and visual feedback

### Challenge 4: Device Compatibility
**Problem:** Wide variety of Android devices with different capabilities  
**Solution:** Feature detection and graceful degradation for older devices

---

## Performance Metrics

- **Frame Rate:** Consistent 60fps on Snapdragon 700+ series
- **Memory Usage:** ~150MB RAM footprint
- **Battery Impact:** ~10% per 30 minutes of use
- **Startup Time:** <3 seconds from launch to AR ready
- **Model Load Time:** <1 second for initial placement

---

## Future Enhancements

- **Multiple Models:** Add more digital twins and objects
- **Animations:** Implement walking, sitting, and playing animations
- **Photo Mode:** Capture and share AR photos
- **Social Features:** Share placements with friends
- **Cloud Anchors:** Persistent AR experiences across sessions
- **Voice Commands:** "Sit, Banjo!" triggers animations

---

## Screenshots & Media

*Screenshots to be added*

---

## Skills Demonstrated

✅ Unity Development with AR Foundation  
✅ Android Platform Optimization  
✅ 3D Modeling and Photogrammetry  
✅ Touch Interaction Design  
✅ Performance Profiling and Optimization  
✅ Mobile UX Design  

---

## Source Code & Download

**Repository:** GitHub (link to be added)  
**APK Download:** Available upon request  
**Documentation:** Full technical documentation in repository

---

## Contact

Questions about this project or interested in AR development?

**Email:** [stramark@gmail.com](mailto:stramark@gmail.com)

---

[← Back to AR/VR Projects](/projects/ar-vr-projects/)
