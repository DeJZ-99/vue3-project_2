import axios from "axios";

export const getApiHomeData = (param) => {
    return axios.request({
        url: "/home/getHomeData",
        method: 'get',
        data: param
    })
}

export const getApiStoreData = (param) => {
    return axios.request({
        url: "/store/getStoreData",
        method: 'get',
        data: param
    })
}