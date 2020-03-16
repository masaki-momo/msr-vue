import request from '@/utils/request'
const api_name = '/edu/teacher'
export default {
  getTeacherList() {
    return request({
      url: `${api_name}`,
      method: 'get'
    })
  },
  getById(teacherId) {
    return request({
      url: `${api_name}/${teacherId}`,
      method: 'get'
    })
  },
  getPageList(page, limit) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get'
    })
  }

}
