import apiUtil from '../utilities/apiHelper'

export function GetUserDetail(data,token) {
  return apiUtil.getApi('transaction/myprofile', token, {})
}
