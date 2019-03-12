import createAPI from '../../common/helpers/create-api'

export default function addPageLoading(Vue, PageLoading) {
  createAPI(Vue, PageLoading, [], true)
}
