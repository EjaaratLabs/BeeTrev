import apiUtil from '../utilities/apiHelper'

export function GetCustomersList(data,token) {
  return apiUtil.getApi('transaction/getcustomer', token, data)
}

export function CreateCustomers(data,token) {
  return apiUtil.postApi('transaction/createcustomer', token, data)
}