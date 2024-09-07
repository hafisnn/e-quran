import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { getSurahs } from './Hooks/Api';

function App() {
  const [surahs, setSurahs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    function getAllSurahs() {
      getSurahs().then((response) => {
        setSurahs(response.data);
      });
    }

    getAllSurahs();
  }, []);

  const filteredSurahs = surahs.filter((surah) =>
    surah.namaLatin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />

      <div className="grid md:grid-cols-3 my-3 mx-7 font-inter gap-3">
        {filteredSurahs.map((surah, index) => (
          <Card
            key={index} 
            surahName={surah.namaLatin}
            surahMean={surah.arti}
            arabic={surah.nama}
            ayah={surah.jumlahAyat}
            surahNumber={surah.nomor}
          />
        ))}
      </div>
    </>
  )
}

export default App
