const Ayat = (props) => {
    const { id, ayahNum, arabic, latin, meaning, audioSrc, onClickAction, onPlayAction, onEndedAction, playedIndex, font1, font2, fontFamily } = props;

    const convertToArabicNumbers = (num) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
    }


    return(
        <div key={id} id={`ayat-${id+1}`} className={`py-3 px-3 mx-3 font-inter border-b-2 transition-all cursor-pointer hover:bg-gray-50 ${playedIndex == id ? "bg-gray-100" : "bg-primary"}`} onClick={onClickAction}>
            <p className="py-2 text-right leading-[6rem]" style={{fontSize: font1 + 'px', fontFamily: fontFamily}}>{arabic}<span className="relative right-5 after:content-['\06DD'] after:block after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:text-4xl text-2xl">{convertToArabicNumbers(parseInt(ayahNum))}</span></p>
            <p className="mt-2 text-secondary italic" style={{fontSize: font2 + 'px'}}>{latin}</p>
            <p style={{fontSize: font2 + 'px'}}>{meaning}</p>
            <div className="flex justify-center items-center h-5 overflow-hidden mt-3">
                <audio src={audioSrc} className="w-full" id={`audio-${id}`} onPlay={onPlayAction} onEnded={onEndedAction} preload="none"></audio>
            </div>
        </div>
    );
}

export default Ayat;