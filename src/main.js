import axios from 'axios';

const add = (a, b)=>a+b;
const substract = (a, b)=>a-b;
const getData = async(url)=>{
    let res = await axios.get(url);
    return res.data;
};

export {
    add, substract, getData
}
