function Card(props) {
    const {surahName, surahMean, arabic, ayah, surahNumber} = props;

    return(
        <a href={`/surah/${surahNumber}`} className="card col-span-1 flex justify-between py-5 px-7 border hover:border-secondary hover:bg-secondary hover:bg-opacity-5 rounded-sm group cursor-pointer transition-all">
            <div className='flex items-center gap-3'>
                <h2 className='text-black w-9 h-9 flex justify-center items-center relative z-[2] group-hover:text-white transition-all'>
                {surahNumber}
                <span className='absolute bg-gray-100 group-hover:bg-secondary w-full h-full top-0 left-0 rotate-45 z-[-1] rounded-sm transition-all'></span>
                </h2>
                <div className='mx-3'>
                <h3 className='font-bold'>{surahName}</h3>
                <p className='text-xs group-hover:text-secondary transition-all'>{surahMean}</p>
                </div>
            </div>
            <div>
                <p className='text-sm font-semibold text-right'>{arabic}</p>
                <p className='text-xs group-hover:text-secondary transition-all'>{ayah} Ayat</p>
            </div>
        </a>
    );
}

export default Card;