import React, { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";

if (typeof window !== "undefined") gsap.registerPlugin(MotionPathPlugin);

export default function Card() {
    const ref = useRef<HTMLDivElement>(null);
    const path = useRef<SVGSVGElement>(null);

    useLayoutEffect(() => {
        gsap.to(ref.current, {
            duration: 5,
            repeat: 12,
            repeatDelay: 3,
            yoyo: true,
            ease: "power1.inOut",
            motionPath: {
                path: path.current?.id,
                align:  path.current?.id,
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            }
        });
    }, []);

    return (
        <div>
            <svg width="100%" height="100%" viewBox="-20 0 557 190" ref={path} id="#path" className="invisible">
                <path id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
            </svg>
            <div ref={ref}>
                UNDER CONSTRUCTION
            </div>
        </div>
    );
}