import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

import CursorToggler from "../utils/cursorToggler";

const cursorToggler = new CursorToggler('main', '.cursor', '.coords__handler');
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
});

gsap.ticker.lagSmoothing(0);

window.onmousemove = (event) => {
    cursorToggler.handleCursor(event);
};