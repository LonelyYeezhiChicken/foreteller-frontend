import req from '../utils/axiosPlugin'

/** 測試api */
export const apiTest = (data: any) => {
    return req.get(`/WeatherForecast`, data, undefined)
}

/** 權限相關*/
// 登入
export const apiLogin = (data: any) => {
    return req.post(`/Account`, { ...data }, undefined)
}

// 取得角色資訊
export const apiClaims = () => {
    return req.get(`/claims`, null, undefined)
}

/** 車種資料維護*/
// 查詢
export const apiCarKindGet = (data: any) => {
    return req.get(`/CarKind`, { ...data }, undefined)
}
// 新增
export const apiCarKindPost = (data: any) => {
    return req.post(`/CarKind`, { ...data }, undefined)
}
// 修改
export const apiCarKindPut = (data: any) => {
    return req.put(`/CarKind`, { ...data }, undefined)
}
// 刪除
export const apiCarKindDelete = (data: any) => {
    return req.delete(`/CarKind`, { ...data }, undefined)
}