import { request } from '@/utils/request'

export function test() {
    return request({
        url: '/meun',
        params: {}
    }).then(res => {
        console.log(res)
    })
}