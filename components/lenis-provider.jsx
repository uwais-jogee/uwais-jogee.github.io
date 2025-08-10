"use client";

import {ReactLenis, useLenis} from "lenis/react";

function LenisProvider({children}) {
    const lenis = useLenis(({scroll}) => {
        // console.log('Current scroll position:', scroll)
    });

    return (
        <>
            <ReactLenis root/>
            {children}
        </>
    )
}

export default LenisProvider;