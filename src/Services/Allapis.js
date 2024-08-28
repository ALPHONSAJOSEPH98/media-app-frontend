import { serverUrl } from "./serverURL";
import { commmonAPI} from "./commonAPI";


// add video api call => post => localhost:3000/allVideos

export const addVideoAPI = async(reqBody)=>{
    return await commmonAPI('post',`${serverUrl}/allVideos`,reqBody)
}
// get all videos api call from json server => localhost:3000/allVideos
export const getVideoAPI= async()=>{
    return await commmonAPI('get' , `${serverUrl}/allVideos` ,{})
}
export const getAvideo = async (id)=>{
  return await   commmonAPI('get' ,`${serverUrl}/allVideos/${id}` ,{})
    
}
export const deleteVideoApi = async (id)=>{
    return await commmonAPI('delete' , `${serverUrl}/allVideos/${id}`,{} )
}

export const addHistoryApi = async(videoDetails) =>{
    return await commmonAPI('post' ,`${serverUrl}/watchhistory` , videoDetails)
}

export const watchHistoryApi = async()=>{
    return await commmonAPI('get' ,`${serverUrl}/watchhistory`,{})
}
export const getHistory = async (id)=>{
    return await   commmonAPI('get' ,`${serverUrl}/watchhistory/${id}`,{})
}
export const deleteHistory = async (id)=>{
    return await commmonAPI('delete' , `${serverUrl}/watchhistory/${id}`,"" )
}

export const addCategoryApi = async(category)=> {
    return await commmonAPI('post' , `${serverUrl}/category` , category)
}
export const getCategoryApi = async()=>{
    return await commmonAPI('get',`${serverUrl}/category` ,"")
}
export const getCategory = async (id)=>{
    return await   commmonAPI('get' ,`${serverUrl}/category/${id}`,{})
}
export const deletecategory = async (id)=>{
    return await commmonAPI('delete' , `${serverUrl}/category/${id}`,"" )
}
 export const updateCategory = async(id, category)=>{
    return await commmonAPI('put' ,`${serverUrl}/category/${id}`,category)
 }