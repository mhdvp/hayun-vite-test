// import { Audiogram, Symbols } from 'hayun'

import { useEffect, createRef } from 'react';
import { AudiogramChart, dims } from '../../../hayun';


function DevAudiogram() {

    const symRef = createRef(null);
    const RAudRef = createRef(null);
    const LAudRef = createRef(null);

    useEffect(() => {
       

        const RAudiogram = new AudiogramChart({
            container:RAudRef.current,
            dims: dims.display,
            side: 'R', x: 0, y: 0,
            width: 700, height: 800, events: true
          })
          
          const LAudiogram = new AudiogramChart({
            container: LAudRef.current,
            dims: dims.display,
            side: 'L', x: 0, y: 0,
            width: 700, height: 800, events: true
          })
          
          RAudiogram.update({
            data: {
              // R_AC_M: { 8000: 25, 2000: 5, 1500: 0, },
              R_AC: { 1000: 25, 500: 15, 750: 20, 250: 10, 6000: 35, 2000: 45 },
              R_AC_NR: { 1500: 85 },
              R_BC_M: { 2000: 25, 6000: 25 },
              R_BC_M_NR: { 3000: 85 },
              R_BC: { 1000: 20, 500: 10, 750: 15, 250: 5, 4000: 20 },
            },
            side: 'R',
          })
          
          LAudiogram.update({
            data: {
              // R_AC_M: { 8000: 25, 2000: 5, 1500: 0, },
              L_AC: { 1000: 25, 500: 15, 750: 20, 250: 10, 6000: 35, 2000: 45 },
              L_AC_NR: { 1500: 85 },
              L_BC_M: { 2000: 25, 6000: 25 },
              L_BC_M_NR: { 3000: 85 },
              L_BC: { 1000: 20, 500: 10, 750: 15, 250: 5, 4000: 20 },
            },
            side: 'L',
          })
    }, [symRef, RAudRef, LAudRef]);

    return (
        <div>
            <p>Mahdi</p>
            <div ref={symRef}></div>
            <div ref={RAudRef}></div>
            <div ref={LAudRef}></div>
        </div>
    );
}

export default DevAudiogram;
