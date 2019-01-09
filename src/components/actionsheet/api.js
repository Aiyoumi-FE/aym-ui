import createAPI from '../../common/helpers/create-api'

export default function addActionsheet(Vue, Actionsheet) {
    const actionSheet = createAPI(Vue, Actionsheet, ['select', 'cancel'], true)
}
