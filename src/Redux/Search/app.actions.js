// https://qr1zme.sse.codesandbox.io/funds

import axios from "axios"
import * as types from "./app.actionTypes"

export const getdatarequest=()=>{
    return{
            type:types.GET_DATA_REQUEST
    }
}

export const getdatafailure=()=>{
    return{
        type:types.GET_DATA_FAILURE
    }
}
export const getdatasuccess=(payload)=>{
    return{
        type:types.GET_DATA_SUCCESS,
        payload
    }
}
export const getdata=(filter="",limit=10)=>(dispatch)=>{
    dispatch(getdatarequest())
    return axios.get(`https://qr1zme.sse.codesandbox.io/funds?_limit=${limit}`).then((res)=>{
        console.log(res.data)
        dispatch(getdatasuccess(res.data))
    }).catch((err)=>{
        console.log(err)
        dispatch(getdatafailure())
    })
}