import { useReducer, useState } from 'react'
import clsx from 'clsx';
import Diagram from './Diagram';

export default function Numbers() {
    const [PH, setPH] = useState<number>(0);
    const [PN, setPN] = useState<number>(0);
    const [BN, setBN] = useState<number>(0);
    const [GPS, setGPS] = useState<number>(0);
    const [GRS, setGRS] = useState<number>(0);
    const [other, setOther] = useState<number>(0);
    const number : number = PH + PN + BN + GPS + GRS + other;

    function handlePHClick() {
        PH ? setPH(0) : setPH(82);
    }
    function handlePNClick() {
        PN ? setPN(0) : setPN(74);
    }
    function handleBNClick() {
        BN ? setBN(0) : setBN(30);
    }
    function handleGPSClick() {
        GPS ? setGPS(0) : setGPS(23);
    }
    function handleGRSClick() {
        GRS ? setGRS(0) : setGRS(6);
    }
    function handleOtherClick() {
        other ? setOther(0) : setOther(7);
    }

    return (
        <>
            <div className='grid md:grid-rows-1 grid-rows-2 grid-flow-col-dense justify-center py-4'>
                <Diagram count={number}
                    PH={PH}
                    PN={PN}
                    BN={BN}
                    GPS={GPS}
                    GRS={GRS}
                    others={other} />
                <div className='font-serif text-white text-center justify-self-center w-60 h-32 p-2 place-self-center'>
                    {number < 112
                        ? <div><p className='font-4xl font-bold'>Minority Government</p>
                            <p className='text-gray-500 text-xs pb-4 italic'>{112-number} {112-number > 1 ? " seats" : " seat"} to majority</p>
                            <p className='text-left text-sm px-2'>May be less stable, as opposition can vote against laws
                                or bring down government with a vote of no confidence.
                            </p>
                        </div>
                        : number > 148
                            ? <div><p className='font-4xl font-bold'>Supermajority</p>
                                <p className='text-gray-500 text-xs pb-4 italic'>Over 2/3 of seats in Parliament</p>
                                <p className='text-left text-sm px-2'>Most stable government. Parliament has the ability to amend the Constitution.
                                </p>
                            </div>
                            : <div><p className='font-4xl font-bold'>Majority Government</p>
                                <p className='text-gray-500 text-xs pb-4 italic'>{149-number}{149-number> 1 ? " seats" : " seat"} to supermajority</p>
                                <p className='text-left text-sm px-2'>Usually stable, with ability to pass laws and achieve manifesto goals.
                                </p>
                            </div>
                    }
                </div>
            </div>

            <p className="px-4 py-4 md:w-[600px] text-xs text-center mx-auto font-serif text-gray-400">
            Try to get the numbers needed to form the government by clicking on the coalitions below.</p>

            <div className='grid grid-rows-2 sm:grid-rows-1 grid-flow-col-dense gap-4 justify-center'>
                <button className=
                    {clsx("px-2 py-4 bg-[#FF2A2A] hover:bg-red-500 text-white text-sm font-bold text-center uppercase w-[80px] leading-none ",
                        PH ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handlePHClick}>
                    PH
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-[#002255] hover:bg-sky-800 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        PN ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handlePNClick}>
                    PN
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-[#000080] hover:bg-blue-800 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        BN ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handleBNClick}>
                    BN
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        GPS ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handleGPSClick}>
                    GPS
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        GRS ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handleGRSClick}>
                    GRS
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-purple-900 hover:bg-purple-800 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        other ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handleOtherClick}>
                    Others
                </button>
            </div>
        </>
    );
}