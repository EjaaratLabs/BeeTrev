import apiUtil from '../utilities/apiHelper'

export function createCollaboration(data,token) {
  return apiUtil.postApi('transaction/createcollaboration', token, data)
}

export function GetTourCollaborate(data,token) {
  return apiUtil.getApi('transaction/gettourcollaborate', token, data)
}