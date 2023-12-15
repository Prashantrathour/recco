// dataActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from "axios"
import { api } from '../../services/api';

export const getData =  async (dispatch) => {
    dispatch(request())
    try {
        const res=await axios.get(api+"products")
      
        dispatch(get_success(res.data))
    } catch (error) {
       dispatch(fail()) 
    }
 
}
export const updateData =  (id,data)=>async (dispatch) => {
    dispatch(request())
    try {
     
        const res=await axios.patch(api+"products/"+id,data)
       
        dispatch(update_success(res.data))
        return res
    } catch (error) {
       dispatch(fail()) 
       return error
    }
 
}





const request=()=>{
    return {type:"REQUEST"}
}
const get_success=(payload)=>{
    return {type:"GET_SUCCESS",payload}
}
const update_success=(payload)=>{
    return {type:"UPDATE_SUCCESS",payload}
}
const delete_success=(payload)=>{
    return {type:"DELETE_SUCCESS",payload}
}
const fail=()=>{
    return {type:"FAIL"}
}