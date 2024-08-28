// import axios
import axios from 'axios'
// api fetching configuration => get , post put , delete
export const commmonAPI= async(httpMethod,url,reqBody)=>{
    let reqConfig ={
        method: httpMethod ,
        url,
        data:reqBody
    }



return await axios(reqConfig).then((response)=>{
    return response
})
.catch((error)=>{
    return error
})
}