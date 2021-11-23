import React, { useState } from 'react';
import './index.css';



function Mohit() {
  const [text, setText] = useState("Sample Text Here");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [size, setSize] = useState(80);
  const [textColor, setTextColor] = useState("#000");
  const [bgColor, setBgColor] = useState("#fff");

  return (<>
    <div className="grid grid-cols-3 min-h-screen w-screen">
      <div className="h-full bg-gray-50 col-span-2 flex flex-wrap overflow-hidden justify-center items-center border border-t-0 border-b-0 border-l-0">
        <div  className="p-7   shadow-lg text-center   overflow-hidden border flex justify-center flex-wrap content-center" style={{ height: "500px", width: "500px", backgroundColor: bgColor }}>
          <p className={`${bold ? 'font-bold' : null} ${italic ? 'italic' : null} ${underline ? 'underline' : null}`} style={{ fontSize: size, color: textColor }} >{text}</p>
        </div>
      </div>
      <div className="py-5 bg-gray-900 px-3">
        <input type="text" name="text" id="text"  defaultValue={text} className="w-full px-4 py-2 outline-none   bg-gray-800 rounded focus:bg-gray-600 text-white" onChange={(e) => setText(e.target.value)} />

        {/* Font Style */}
        <div className="mt-3 flex justify-start">
          <button onClick={() => setBold(!bold)} className={`px-4 py-2 shadow-lg text-sm font-bold mr-3 ${bold ? 'bg-red-500 text-white ' : 'bg-white'} `}>Bold</button>

          <button onClick={() => setItalic(!italic)} className={`px-4 py-2 shadow-lg text-sm font-bold mr-3  ${italic ? 'bg-red-500 text-white ' : 'bg-white'} `}>Italic</button>


          <button onClick={() => setUnderline(!underline)} className={`px-4 py-2 shadow-lg text-sm font-bold mr-3  ${underline ? 'bg-red-500 text-white ' : 'bg-white'} `}>Underline</button>

        </div>
        {/* decoration */}

        <div className="mt-3 flex">
          <div className="w-1/3">
            <p className="text-sm text-gray-300">Font Size</p>
            <input type="number" defaultValue="80" maxLength="2" onChange={(e) => setSize(parseInt(e.target.value))} className="text-white px-3 py-2 bg-gray-800 w-full mt-2 outline-none" />
          </div>

          <div className="w-1/5">
            <p className="text-sm text-gray-300">Text Color</p>
            <input type="color" defaultValue={textColor} onChange={(e) => setTextColor(e.target.value)} className="text-white  h-10 w-full bg-gray-800 outline-none mt-2" />
          </div>

          <div className="w-1/3">
            <p className="text-sm text-gray-300">Artboard Color</p>
            <input type="color" defaultValue="#ffffff" onChange={(e) => setBgColor(e.target.value)} className="text-white  h-10 w-full bg-gray-800 outline-none mt-2" />
          </div>
        </div>

      </div>


    </div>
  </>
  );
}

export default Mohit;
