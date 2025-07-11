import React from "react";

type IntroBodyProps = {
    title: string;
    content: string;
    content2?: string;
    content3?: string;
    imageSrc: string;
    altText: string;
    whiteBg?: boolean;
    link1?: string;
    link2?: string;
    link3?: string;
    link4?: string;
};
export default function Hero({
    title, content, content2, content3, imageSrc, altText, whiteBg, link1, link2, link3, link4}: IntroBodyProps) {
    return (
        <>
            <style>{`
                .sectionbody {
                    display: flex;
                    align-items: stretch;
                    justify-content: center;
                    
                    }
            `}</style>

           
        </>


    );
}