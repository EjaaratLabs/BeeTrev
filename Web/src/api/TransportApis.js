import apiUtil from '../utilities/apiHelper'

export function GetTransportsList(data,token) {
  return apiUtil.getApi('transaction/gettransportbyuserid', token, {})
}

export function CreateNewTransport(data,token) {
  return apiUtil.postApi('transaction/createtransport', token, data)
}

export function GetTransportDetails(data,token) {
  return apiUtil.getApi('transaction/gettransportdetails', token, data)
}