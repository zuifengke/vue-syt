// 统一管理首页模块接口
import request from "@/utils/request";

enum API {
    // 获取已有医院分页列表数据的接口
    HOSPITAL_URL = '/hosp/hospital/',
}

export const reqHospital = (page: number, limit: number) => request.get(API.HOSPITAL_URL + `${page}/${limit}`);