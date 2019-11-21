import requestGet from './network.js'

/**
 * 获取文章列表内容
 */
export function getArticleData() {
  return requestGet({
    url: '/article/list/0/json'
  })
}

/**
 * 获取首页banner的数据
 */
export function getArticleBanner() {
  return requestGet({
    url: '/banner/json'
  })
}