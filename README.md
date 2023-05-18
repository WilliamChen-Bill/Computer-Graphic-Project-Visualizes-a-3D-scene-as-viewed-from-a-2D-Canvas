# Mesmerizing Computer Graphics Project: 3D Scene Visualization from a 2D Canvas Perspective

Welcome to my captivating Computer Graphics project where I've built a program that brings 3D scenes to life on a 2D canvas. It offers an immersive visual experience by simulating a movable camera's viewpoint, providing the thrill of exploring a 3D world from a dynamic 2D perspective.

## Purpose and Learnings

This project deepened my understanding of the 3D viewing transformation pipeline, emphasizing camera coordinate system relations with world coordinates and projection transformations.

## Project Specifics

For this immersive project, I've created a hierarchical object incorporating 3D motion and transformations, offering intricate and engaging animations, akin to an airplane performing banked turns along a spirally twisted path.

Another fascinating feature is the visual hiding of polygons based on the camera's viewpoint, giving the objects a lifelike appearance. This effect is achieved by manipulating the normal/perpendicular vector of each polygon face.

The magic happens when the transformations of the 3D Viewing Pipeline are applied to 3D points, converting them into corresponding canvas/viewport coordinates. This allows us to draw intricate 3D lines/shapes/polygons on a 2D canvas, creating the illusion of depth.

## Key Features
1. **Movable Camera:** The camera motion can be automatically controlled or manually adjusted using a slider for a personalized experience.
2. **Hierarchical Model or Parametric Curve:** The 3D world contains either a hierarchical model, a parametric curve, or both, enhancing the depth perception.
3. **True 3D Experience:** The design of the 3D world ensures it doesn't feel like a 2D plane simulation, but a genuinely immersive 3D experience.
4. **Projection Transform:** I've implemented either orthographic or perspective projection transforms via glMatrix to create a realistic visual representation.
