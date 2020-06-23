import axios from 'axios';

const URL = 'https://api.covid19api.com/total/country/';
const TO_DATE = new Date().getFullYear() + '-' + ('0' + (new Date().getMonth()+1)).slice(-2) + '-' + new Date().getDate()    + 'T00:00:00Z';
const FROM_DATE = new Date().getFullYear() + '-' + ('0' + (new Date().getMonth()+1)).slice(-2) + '-' + (new Date().getDate()-1) + 'T00:00:00Z';

console.log(TO_DATE);


export const fetchCorona = async (query) => {
    const q_query = URL + query + '/status/confirmed'
    const { data } = await axios.get(q_query, {
        params: {
            from: FROM_DATE,
            to: TO_DATE,
        }
    });

    return data;
}