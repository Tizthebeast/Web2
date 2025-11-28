"use client";

import {useState} from "react";
import Link from "next/link";

function Add(Number1:number,Number2:number){

    return Number1+Number2;
}

function Mul(Number1:number,Number2:number){

    return Number1*Number2;
}



export default function Calculator() {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [result, setResult] =  useState<number | null>(null);

    return(
        <div className="w-screen h-screen bg-indigo-600 overflow-hidden">
        
            {/* TOP BAR */}
            <div className="fixed top-0 left-0 w-full h-12 bg-white z-10 text-center">
                <Link className="p-3.5 bg-emerald-600 text-3xl text-white " href="/">Dashboard</Link>
            </div>

            {/* SIDEBAR */}
            <div className="fixed top-16 left-1 w-[20%] h-[calc(100vh-4rem)]
                bg-slate-900 rounded-lg text-white p-4 overflow-y-auto"
            >
                sidebar<br /><br />

            </div>

            {/* MAIN CONTENT */}
            <div className="fixed top-16 left-[23%] w-[75%] h-[calc(100vh-4rem)]
                bg-slate-800 rounded-lg text-white p-6 overflow-y-auto">
                <h1 className="text-3xl text-center">Main</h1>
                <p className="text-xl text-white"> This is the calculator page!</p>
                <div>
                <label className="block mt-4 text-lg">Number 1:</label>
                <input
                type="number"
                className="w-36 mt-1 p-2 rounded-md bg-slate-700 text-white border border-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                id="N1"
                onChange={(e) => setN1(Number(e.target.value))}
                />
                </div>
                <div>
                <label className="block mt-4 text-lg">Number 2:</label>
                <input
                type="number"
                className="w-36 mt-1 p-2 rounded-md bg-slate-700 text-white border border-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={(e) => setN2(Number(e.target.value))}
                />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full max-w-sm mx-auto mt-6">
                <button className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg" onClick={() => setResult(Add(n1, n2))}>Add</button>
                <button className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg" onClick={() => setResult(Mul(n1, n2))}>Mul</button>
                 
                {result !== null &&(
                    <p className="m-6 text-2xl text-center">Result: {result}</p>
                )}
                
                </div>
            </div>

        </div>

    )





}