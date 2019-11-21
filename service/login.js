import {
  requestGet,
  requestPost
} from './network.js'

export function requestLogin(obj) {
  return requestPost({
    url: "/user/login",
    data:obj
  })
}