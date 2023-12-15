// dataActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from "axios"
import { api } from '../../services/api';
import { data } from '../../data';
export const getData =  async (dispatch) => {
    dispatch(request())
    try {
        dispatch(get_success(data))
    } catch (error) {
       dispatch(fail()) 
    }
 
}
export const updateData =  (id,data)=>async (dispatch) => {
    dispatch(request())
    try {
        dispatch(get_success(data))
    } catch (error) {
       dispatch(fail()) 
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