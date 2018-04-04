import createAPI from '../../common/helpers/create-api'

export default function addActionSheet(Vue, ActionSheet) {
    const actionSheet = createAPI(Vue, ActionSheet, ['select', 'cancel'], true)
}
