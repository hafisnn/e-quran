

function Header(props) {

    const { setSearchQuery } = props;

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return(
        <header className='bg-secondary flex justify-center'>
            <div className="py-8 text-white w-4/5">
                <div className="hero-content text-center w-full">
                    <img src="quran.png" alt="" className='mx-auto w-48' />
                    <p className='font-poppins my-4 text-sm md:text-lg'>Dari Abu Amamah ra, aku mendengar Rasulullah ﷺ. bersabda, “Bacalah Al-Qur’an, karena sesungguhnya ia akan menjadi syafaat bagi para pembacanya di hari kiamat.” (HR. Muslim);</p>
                    <div className="search-bar my-3 flex justify-center">
                        <form action="" className='flex justify-between items-center bg-primary py-3 px-6 rounded-full w-4/5'>
                            <input type="text" placeholder='Cari surat (contoh: Al-Fatihah)' className='bg-transparent w-full outline-none caret-secondary text-black' onChange={handleSearchChange} />
                            <i className="fa-solid fa-magnifying-glass text-secondary"></i>
                        </form>
                    </div>

                    <p className='font-poppins text-xs'>Biasa dikunjungi :</p>

                    <div className="flex gap-3 justify-center flex-wrap pile mt-3 font-poppins text-sm">
                        <a href='/surah/36' className="px-2 py-1 bg-primary text-black rounded-md hover:text-secondary transition-all">Yasin</a>
                        <a href='/surah/18' className="px-2 py-1 bg-primary text-black rounded-md hover:text-secondary transition-all">Al-Kahf</a>
                        <a href='/surah/56' className="px-2 py-1 bg-primary text-black rounded-md hover:text-secondary transition-all">Al-Waqi'ah</a>
                        <a href='/surah/67' className="px-2 py-1 bg-primary text-black rounded-md hover:text-secondary transition-all">Al-Mulk</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;