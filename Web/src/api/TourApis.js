import apiUtil from '../utilities/apiHelper'

export function GetToursList(data,token) {
  return apiUtil.getApi('transaction/gettour', token, {})
}