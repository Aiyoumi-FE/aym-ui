<template>
    <m-page>
        <m-cell-group v-for="group in navs"
            :key="group.title">
            <h4>{{group.title}}</h4>
            <!--  <m-cell v-for="item in group.list" :title="寒冰永垂不朽"
                    is-link> -->
            <m-cell v-for="item in group.list"
                :key="item.name"
                :is-link="true"
                :title="item.name"
                :link="item.path"></m-cell>
            </m-cell>
        </m-cell-group>
    </m-page>
</template>
<script>
import group from './components/group'
import {
    navs
} from './router'
export default {

    name: 'demo-index',

    data() {
        return {
            navs: []
        }
    },
    created() {
        this.navs = navs
    },
    components: {
        group
    }
}
</script>
<style scoped
    lang="scss">
</style>
