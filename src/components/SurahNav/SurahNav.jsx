import { useState } from "react";

const SurahNav = (props) => {
    const { suratSebelumnyaNomor, suratSelanjutnyaNomor, sebelumnyaNamaLatin, selanjutnyaNamaLatin, arabFontSize, latinFontSize, fontFamily } = props;

    return(
        <div className="flex flex-col gap-7 justify-center items-center py-7 px-8 bg-gray-100 mb-10 sticky top-0 shadow-md z-[1] font-poppins">
            <div className="grid grid-cols-7 gap-2">
                <a href={suratSebelumnyaNomor ? `/surah/${suratSebelumnyaNomor}` : "/"} className="flex col-span-3 justify-between items-center py-2 px-3 bg-primary rounded-tl-md rounded-bl-md gap-3 transition-all hover:bg-secondary hover:text-primary text-xs md:text-lg">
                    <i className="fa-solid fa-arrow-left"></i>
                    <p>{sebelumnyaNamaLatin || "-"}</p>
                </a>
                <a href="/" className="flex col-span-1 justify-center items-center bg-primary py-2 px-3 gap-3 transition-all hover:bg-secondary hover:text-primary">
                    <i className="fa-solid fa-home"></i>
                </a>
                <a href={suratSelanjutnyaNomor ? `/surah/${suratSelanjutnyaNomor}` : "/"} className="flex col-span-3 justify-between items-center bg-primary rounded-tr-md rounded-br-md py-2 px-3 gap-3 transition-all hover:bg-secondary hover:text-primary text-xs md:text-lg">
                    <p>{selanjutnyaNamaLatin || "-"}</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="flex justify-center items-center gap-5 text-xs md:text-sm">
                <div className="flex flex-col gap-1 text-center">
                    <label htmlFor="fontFam">Font Family</label>
                    <select name="fontFam" id="fontFam" onChange={fontFamily} defaultValue="Lateef" className="px-1 py-2 outline-none cursor-pointer">
                        <option value="Amiri Quran">Amiri - Color</option>
                        <option value="Lateef">Lateef - B&W</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 text-center">
                    <label htmlFor="fontSizeArab">Ukuran Arab</label>
                    <select name="fontSizeArab" id="fontSizeArab" onChange={arabFontSize} defaultValue="40" className="px-1 py-2 outline-none cursor-pointer">
                        <option value="30">Kecil</option>
                        <option value="40">Default</option>
                        <option value="50">Besar</option>
                        <option value="70">Sangat Besar</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 text-center">
                    <label htmlFor="fontSizeLatin">Ukuran Latin</label>
                    <select name="fontSizeLatin" id="fontSizeLatin" onChange={latinFontSize} defaultValue="16" className="px-1 py-2 outline-none cursor-pointer">
                        <option value="14">Kecil</option>
                        <option value="16">Default</option>
                        <option value="20">Besar</option>
                        <option value="22">Sangat Besar</option>
                    </select>
                </div>

            </div>
        </div>
    );
}

export default SurahNav;