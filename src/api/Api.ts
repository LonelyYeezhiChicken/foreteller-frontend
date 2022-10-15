import req from '../utils/axiosPlugin'

/** 測試api */
export const apiTest = (data: any) => {
    return req.get(`/WeatherForecast`, data, undefined)
}

/** 權限相關*/
// 登入
export const apiLogin = (data: any) => {
    return req.post(`/Account`, data, undefined)
}