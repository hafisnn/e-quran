import axios from "axios"

export const getSurahs = async () => {
    try {
        const response = await axios.get('https://equran.id/api/v2/surat');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getSurahDetail = async (id) => {
    try {
        const response = await axios.get(`https://equran.id/api/v2/surat/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}