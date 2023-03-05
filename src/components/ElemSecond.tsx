import { useRef, useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

export default function ElemSecond() {
    const wolf = useRef<HTMLDivElement>(null);
    const moon = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.timeline({
                scrollTrigger: {
                    trigger: 'html',
                    scrub: .25,
                    start: '1500',
                    end: '+=1000'
                }
            })
            .to(wolf.current, {
                yPercent: -100,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: 'html',
                    scrub: .25,
                    start: '2000',
                    end: '+=1000'
                }
            })
            .to(moon.current, {
                scale: 1,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: 'html',
                    scrub: .25,
                    start: '3000',
                    end: '+=2000'
                }
            })
            .to(moon.current, {
                scale: 10,
            });

        }, 'html');

        return () => ctx.revert();
    }, []);

    return (
        <div className='h-[250vh]'>
            <div ref={moon} className='z-[99] flex justify-center items-center fixed top-4 right-4 scale-0 w-[4rem] h-[4rem] rounded-[50%] bg-black'>MOON</div>
            <div ref={wolf} className='z-[98] flex justify-center items-center fixed bottom-[-8rem] left-[5vw] w-[8rem] h-[8rem] bg-green-500'>WOLF</div>
        </div>
    );
}