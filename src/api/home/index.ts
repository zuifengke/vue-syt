// 统一管理首页模块接口
import request from "@/utils/request";
import { HospitalResponseData,HospitalLevelAndRegionResponseData } from "./type";

enum API {
    // 获取已有医院分页列表数据的接口
    HOSPITAL_URL = '/hosp/hospital/',
    // 获取医院的等级与地区接口
    HOSPITALLEVElANDREGION_URL = '/cmn/dict/findByDictCode/',
}

export const reqHospital = (page: number, limit: number) => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`);

//获取医院的等级或者获取医院地区的数据
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVElANDREGION_URL + dictCode);
