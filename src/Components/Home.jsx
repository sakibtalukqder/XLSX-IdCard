import React, { useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import Table from './Table';
import StudentIDCard from '../../IdCard/StudentIDCard';
import { useReactToPrint } from 'react-to-print';

const Home = () => {


    const [data, setData] = useState([])

    const inputData = (e) => {
        const reader = new FileReader()
        reader.readAsBinaryString(e.target.files[0])
        reader.onload = (e) => {
            const data = e.target.result
            const workBook = XLSX.read(data, { type: "binary" })
            const sheetName = workBook.SheetNames[0]
            const sheet = workBook.Sheets[sheetName]
            const parsedData = XLSX.utils.sheet_to_json(sheet)
            setData(parsedData)
        }
    }

    const contentToPrint = useRef(null);
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
    });

    console.log(data);

    return (
        <>
            <h1 className="text-3xl font-bold underline bg-green-100 text-center p-4">
                Input XCEL File
            </h1>

            <div className='flex justify-center items-center gap-4'>
                <input
                    type="file"
                    accept='.xlsx, .xls'
                    onChange={inputData}
                    className="file-input file-input-bordered w-full max-w-xs my-12" />
                <button
                    onClick={() => {
                        handlePrint(null, () => contentToPrint.current);
                    }} className='btn'>Print All Id Card</button>
            </div>


            <div ref={contentToPrint}>
                {
                    data.map((info, index) => (
                        <div className='my-8' ><StudentIDCard student={info} index={index} /></div>
                    ))
                }
            </div>


        </>
    );
};

export default Home;