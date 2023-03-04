import React, {FC, } from "react";

type CardProps = {
    upperText: string;
    lowerText: string;
}

export default function Card(props: CardProps) {
    return (
        <p>
            <span className="text-[3rem] font-thin">{ props.upperText }</span>
            <span className="rotate-left text-[.27rem]">{ props.lowerText }</span>
        </p>
    );
}