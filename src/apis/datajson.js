import request from "@/axios/index";

/* dataJson */
export function dataJson( meetid ){
    return request({
        url:`http://81.68.129.135/api/get-wn-meeting-data?meeting_id=${meetid}`,
    })
}
