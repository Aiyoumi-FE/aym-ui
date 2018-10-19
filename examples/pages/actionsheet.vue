<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <m-cell-group>
                <m-cell title="学校"
                    :value="school.name"
                    is-link
                    @click="fnClick"></m-cell>
                <m-cell title="学历"
                    :value="education.name"
                    is-link
                    @click="fnClick1"></m-cell>
            </m-cell-group>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-actionsheet',
    data() {
        return {
            school: {
                name: '请选择',
                code: ''
            },
            education: {
                name: '请选择',
                code: ''
            },
            schoolData: ['北京大学', '浙江大学', '财经大学'],
            schoolSelectItem: {
                isSelect: true,
                index: 1
            },
            decucationData: ['本科', '专科', '研究生', '博士'],
            decucationSelectItem: {
                isSelect: true,
                index: 0
            }
        }
    },
    methods: {
        fnClick() {
            this.actionsheet = this.$createActionSheet({
                data: this.schoolData,
                // isBottomBtn: false,
                selectItem: this.schoolSelectItem,
                onSelect: (item, index) => {
                    this.schoolSelectItem.index = index
                    this.school.name = item
                }
            }).show()
        },
        fnClick1() {
            this.actionsheet = this.$createActionSheet({
                data: this.decucationData,
                isBottomBtn: false,
                selectItem: this.decucationSelectItem,
                onSelect: (item, index) => {
                    this.decucationSelectItem.index = index
                    this.education.name = item
                }
            }).show()
        }
    }
}
</script>
<style lang="scss"
    scoped>
</style>
