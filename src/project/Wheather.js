import axios from "axios";




const API_KEY="b0241b536e30c6e8d2ff1ceeea569d24"
const URL="https://api.openweathermap.org/data/2.5/weather"


const Wheather=async(query)=>{
 let data=await axios.get(URL,{
    params:{
        q:query, //city name
        units:"metric",
        APPID:API_KEY
    }
 })
 return data
}
export default Wheather;