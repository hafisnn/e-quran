import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSurahDetail } from "../../Hooks/Api";
import Ayat from "../../components/Ayat/Ayat";
import SurahHeader from "../../components/SurahHeader/SurahHeader";
import SurahNav from "../../components/SurahNav/SurahNav";

function SurahDetail() {
    const {id} = useParams();

    const [surahDetail, setSurahDetail] = useState([]);
    const [descToggle, setDescToggle] = useState(false);
    const [playedIndex, setPlayedIndex] = useState(-1);
    const [fontSizeArab, setFontSizeArab] = useState("40");
    const [fontSizeLatin, setFontSizeLatin] = useState("16");
    const [fontFamily, setFontFamily] = useState("Lateef");

    useEffect(() => {
        function surahDetailGetter() {
            getSurahDetail(id).then((response) => {
                setSurahDetail(response);
                console.log(response);
            })
        }

        surahDetailGetter();
    }, [id]);

    const setDescToggleHandler = () => {
        setDescToggle(!descToggle);
    }

    // Jika audio di play, pause audio lainnya
    const onPlay = (e) => {
        const audios = document.querySelectorAll('audio')
        audios.forEach((audio) => {
        if (audio.src !== e.target.src) {
            audio.pause()
            audio.currentTime = 0
        }
        })
        e.target.play()
    }

    const nextAudio = (index, e) => {
        const audios = document.querySelectorAll('audio')
        const next = audios.item(index + 1)

        if (next) {
            setPlayedIndex(index + 1);
            const a = document.createElement('a')
            a.href = window.location.pathname + '#ayat-' + (index + 1)
            a.click()
            next.play()
        }
    }

    const playAudio = (e) => {
        const audio = document.querySelector(`audio#audio-${e}`);

        if (audio.paused) {
            audio.currentTime = 0;
            audio.play();
            setPlayedIndex(e);
        } else {
            audio.pause();
            setPlayedIndex(-1);
        }
    }


    return(
        <>
        {
            surahDetail.code === 200 ? (
                <>
                    <SurahNav 
                        suratSebelumnyaNomor={surahDetail.data.suratSebelumnya.nomor}
                        suratSelanjutnyaNomor={surahDetail.data.suratSelanjutnya.nomor}
                        sebelumnyaNamaLatin={surahDetail.data.suratSebelumnya.namaLatin}
                        selanjutnyaNamaLatin={surahDetail.data.suratSelanjutnya.namaLatin}
                        arabFontSize={(e) => setFontSizeArab(e.target.value)}
                        latinFontSize={(e) => setFontSizeLatin(e.target.value)}
                        fontFamily={(e) => setFontFamily(e.target.value)}
                    >
                    </SurahNav>

                    <SurahHeader 
                        nama={surahDetail.data.nama}
                        namaLatin={surahDetail.data.namaLatin}
                        tempatTurun={surahDetail.data.tempatTurun}
                        jmlhAyat={surahDetail.data.jumlahAyat}
                        onClickAction={() => setDescToggleHandler()}
                        descToggle={descToggle}
                        deskripsi={surahDetail.data.deskripsi}
                    />
                    
                    {
                        surahDetail.data.ayat.map((ayat, index) => (
                            <Ayat key={index}
                                id={index}
                                ayahNum={ayat.nomorAyat}
                                arabic={ayat.teksArab}
                                meaning={ayat.teksIndonesia}
                                latin={ayat.teksLatin}
                                audioSrc={ayat.audio["05"]}
                                onClickAction={() => playAudio(index)}
                                onPlayAction={onPlay}
                                onEndedAction={() => nextAudio(index)}
                                playedIndex={playedIndex}
                                font1={fontSizeArab}
                                font2={fontSizeLatin}
                                fontFamily={fontFamily}
                            />
                        ))
                    }
                </>
            ) : <p>Loading...</p>
        }
        </>
    );
}

export default SurahDetail;