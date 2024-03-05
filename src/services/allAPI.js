import { commonAPI } from "./commonApi"
import { SERVER_URL } from "./serverURL"

export const addCategoryAPI = async (categoryDetails) =>{
    return await commonAPI("POST",`${SERVER_URL}/category`,categoryDetails)
}
export const getCategoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}
export const uploadPotteryAPI = async (pottery)=>{
    // send response to add component
    return await commonAPI("POST",`${SERVER_URL}/view`,pottery)
}
export const getPotteryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/view`,"")
}
export const removeCardAPI = async (cardId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/view/${cardId}`,{})
} 
export const removeCategoryAPI = async (cardId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${cardId}`,{})
} 