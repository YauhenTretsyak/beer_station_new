import axios from 'axios'

// interface IncomeData {
//     country: string;
//     id: number;
//     name: string;
//     title: string;
//     type: string;
//     vol1: string;
//     vol03: string;
//     vol05: string;
// }



export const getData = (dataLoader, errorLoader, location) => {
    axios.get(`http://localhost:3001/${location}`).
        then(res => {
            dataLoader(res.data)
        }).
        catch(error => {
            errorLoader(error.code)
        })
}
