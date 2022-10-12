import axios from 'axios';

const add = (a, b)=>a+b;
const substract = (a, b)=>a-b;

const getAssitanceList = async(url)=>{
    let res = await axios.get(`${url}?type=getAll`);
    return res.data;
};
const postAssitanceVote = async(url, data)=>{
    let axiosConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        }
    };
    try {
        const resp = await axios.post(url, data, axiosConfig)
        return resp.data;
    } catch (err) {
        console.error('check err>>', err);
    }
}
export {
    add, substract, getAssitanceList, postAssitanceVote
}
