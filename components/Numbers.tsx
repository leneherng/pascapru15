import { useState } from 'react'
import clsx from 'clsx';
import Diagram from './Diagram';

export default function Numbers() {
    const [number, setNumber] = useState<number>(82);
    const [isPHClicked, setPHIsClicked] = useState<boolean>(true);
    const [isPNClicked, setPNIsClicked] = useState<boolean>(false);
    const [isBNClicked, setBNIsClicked] = useState<boolean>(false);
    const [isGPSClicked, setGPSIsClicked] = useState<boolean>(false);
    const [isGRSClicked, setGRSIsClicked] = useState<boolean>(false);
    const [isOtherClicked, setIsOtherClicked] = useState<boolean>(false);

    function handlePHClick() {
        setPHIsClicked(!isPHClicked);
        isPHClicked ? setNumber(number - 82) : setNumber(number + 82);
    }
    function handlePNClick() {
        setPNIsClicked(!isPNClicked);
        isPNClicked ? setNumber(number - 73) : setNumber(number + 73);
    }
    function handleBNClick() {
        setBNIsClicked(!isBNClicked);
        isBNClicked ? setNumber(number - 30) : setNumber(number + 30);
    }
    function handleGPSClick() {
        setGPSIsClicked(!isGPSClicked);
        isGPSClicked ? setNumber(number - 23) : setNumber(number + 23);
    }
    function handleGRSClick() {
        setGRSIsClicked(!isGRSClicked);
        isGRSClicked ? setNumber(number - 6) : setNumber(number + 6);
    }
    function handleOtherClick() {
        setIsOtherClicked(!isOtherClicked);
        isOtherClicked ? setNumber(number - 7) : setNumber(number + 7);
    }

    return (
        <>
            <div className='grid md:grid-rows-1 grid-rows-2 grid-flow-col-dense justify-center py-4'>
                <Diagram count={number}
                    PH={isPHClicked}
                    PN={isPNClicked}
                    BN={isBNClicked}
                    GPS={isGPSClicked}
                    GRS={isGRSClicked}
                    others={isOtherClicked} />
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
                        isPHClicked ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handlePHClick}>
                    PH
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-[#002255] hover:bg-sky-800 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        isPNClicked ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handlePNClick}>
                    PN
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-[#000080] hover:bg-blue-800 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        isBNClicked ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handleBNClick}>
                    BN
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        isGPSClicked ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handleGPSClick}>
                    GPS
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        isGRSClicked ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handleGRSClick}>
                    GRS
                </button>
                <button className=
                    {clsx("px-2 py-4 bg-purple-900 hover:bg-purple-800 text-white text-sm font-bold text-center uppercase w-[80px] leading-none",
                        isOtherClicked ? 'ring ring-black scale-105' : 'scale-100 opacity-25')} onClick={handleOtherClick}>
                    Others
                </button>
            </div>
        </>
    );
}