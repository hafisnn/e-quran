const SurahHeader = (props) => {
    const { nama, namaLatin, jmlhAyat, tempatTurun, onClickAction, descToggle, deskripsi } = props;

    return(
        <>
            <h1 className="text-4xl text-center font-bold font-lateef">{nama}</h1>
            <h1 className="text-3xl text-center font-bold font-poppins">{namaLatin}</h1>
            <div className="text-center font-poppins text-xs my-2">
                <p>{tempatTurun == 'Madinah' ? 'Madaniyah' : 'Makkiyah'} · {jmlhAyat + ' Ayat'}</p>
            </div>
            <div className="flex justify-center mb-5">
                <div className="flex items-center font-poppins text-sm cursor-pointer hover:text-secondary" id="description" onClick={onClickAction}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Deskripsi
                </div>
            </div>
            <div className={descToggle ? "fixed top-[30%] mx-10 max-w-[600px] bg-primary shadow-2xl rounded-md scale-100 transition-all z-[1]" : "max-w-[600px] absolute scale-0 transition-allz-[1]"}>
                <div>
                    <div className="flex justify-between items-center py-3 px-7 border-b bg-secondary text-white rounded-tr-md rounded-tl-md">
                        <p className="text-xl font-bold">Deskripsi Surat {namaLatin}</p>
                        <span className="text-xl font-bold text-white cursor-pointer" onClick={onClickAction}>✕</span>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto py-3">
                        <p className="px-8 py-3" dangerouslySetInnerHTML={{__html: deskripsi}}></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SurahHeader;