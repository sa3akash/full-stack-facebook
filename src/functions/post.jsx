import axios from "axios"



export const createPost = async ({type,background, text,images,user, token,path}) => {
    try{
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/createPost`,{type, background,text,images,user,path},{
            headers:{
                Authorization: `bearer ${token}`
            }
        })
        return res;
    }catch(err){
        return err.response.data.message;
    }
}

export const reactPost = async ({postId,selectReact,token}) => {
    try{
        const res = await axios.put(`${import.meta.env.VITE_API_URL}/reactPost`,{postId:postId,react:selectReact},{
            headers:{
                Authorization: `bearer ${token}`
            }
        })
        return res;
    }catch(err){
        return err.response.data.message;
    }
}

export const getReactById = async ({postId,token}) => {
    try{
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/getReactsById/${postId}`,{
            headers:{
                Authorization: `bearer ${token}`
            }
        })
        return res;
    }catch(err){
        return err.response.data.message;
    }
}

export const comment = async ({postId,message,image,token,path}) => {
    let commentAt = new Date()
    try{
        const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/comment`,{postId,message,image,commentAt},{
            headers:{
                Authorization: `bearer ${token}`
            }
        })
        return data;
    }catch(err){
        return err.response.data.message;
    }
}

export const savedPost = async ({postId,token}) => {
    let savedAt = new Date()
    try{
        const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/savedPost/${postId}`,{savedAt:savedAt},{
            headers:{
                Authorization: `bearer ${token}`
            }
        })
        return data;
    }catch(err){
        return err.response.data.message;
    }
}

export const deletePost = async ({postId,token}) => {

    try{
        const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/deletePost/${postId}`,{
            headers:{
                Authorization: `bearer ${token}`
            }
        })
        return data;
    }catch(err){
        return err.response.data.message;
    }
}