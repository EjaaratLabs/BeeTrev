import apiUtil from '../utilities/apiHelper'

export function GetCustomersList(data,token) {
  return apiUtil.getApi('transaction/getcustomer', token, data)
}