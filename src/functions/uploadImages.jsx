import axios from "axios"



export const uploadImages = async ({formData, path,token}) => {
    try{
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/uploadImages`,formData,{
            headers:{
                'Content-Type':'multipart/form-data',
                Authorization: `bearer ${token}`
            }
        })
        return res;
    }catch(err){
        return err.response.data.message;
    }
}