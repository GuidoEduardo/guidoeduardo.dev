import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function ElemInit() {
    const firstMusic = useRef<HTMLDivElement>(null);
    const secondMusic = useRef<HTMLDivElement>(null);

    const scrollDefault = {
        trigger: 'html',
        scrub: .25,
    }

    const scrollMusician = (e, dir, start, end) => {
        gsap.timeline({
            scrollTrigger: {
                ...scrollDefault,
                start: start,
                end: end
            }
        })
        .to(e.current, {
            rotation: 15 * dir,
            xPercent: 5 * dir * 5,
            scale: 2,
            duration: 1,
            ease: 'none'
        });

        gsap.timeline({
            scrollTrigger: {
                ...scrollDefault,
                start: end,
                end: end * 2
            }
        })
        .set(e.current, {
            rotation: 15 * dir,
            xPercent: 5 * dir * 5,
            scale: 2,     
        })
        .to(e.current, {
            xPercent: 100 * dir * 3,
            scale: 3,
            filter: 'blur(.5rem)'
        });
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            scrollMusician(firstMusic, -1, 'top top', 1000);
            scrollMusician(secondMusic, 1, 'top top', 1000);
        }, 'html');

        return () => ctx.revert();
    }, []);

    return (
        <div className="h-[300vh]">
             <div className="fixed z-[100] w-[7rem] h-[7rem] bottom-0 left-0 bg-red-500 flex justify-center items-center" ref={firstMusic}>FLAUTISTA 1</div>
             <div className="fixed z-[100] w-[7rem] h-[7rem] bottom-0 right-0 bg-red-500 flex justify-center items-center" ref={secondMusic}>FLAUTISTA 2</div>
        </div>
    );
}