/**
 * Animation setup - dynamically imports GSAP and ScrollTrigger
 * This allows us to defer loading these heavier animation libraries
 * until after the critical content is rendered
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Export configured gsap for use in other components
export { gsap, ScrollTrigger }; 