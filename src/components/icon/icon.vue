<template>
    <span :class="'mui-icon-'+ type">
        <span v-if="path" v-for="n in path" :class="'path'+n"></span>
    </span>
</template>
<script>
const PATH = {
    'find_sel': 2,
    'repay_sel': 3,
    'fail': 1,
    'success': 1,
    'minus': 2,
    'plus': 2,
    'bakctop': 2,
    'check2': 1,
    'collect': 1,
    'market': 1,
    'service': 1,
    'share': 1,
    'shop': 1,
    'arrow2': 1,
    'ask': 1,
    'attetion': 1,
    'back': 1,
    'back1': 1,
    'check': 1,
    'check1': 2,
    'check1-disabled': 2,
    'uncheck1': 1,
    'close': 1,
    'close1': 1,
    'delete': 1,
    'message': 1,
    'more': 1,
    'scan': 1,
    'search': 1,
    'shop_nor': 1,
    'shop_sel': 2,
    'topic_nor': 1,
    'topic_sel': 5,
    'school_nor': 1,
    'school_sel': 6,
    'money_nor': 1,
    'money_sel': 4,
    'mine_nor': 1,
    'mine_sel': 5
}
export default {
    name: 'm-icon',
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    computed: {
        path() {
            return PATH[this.type] || 1
        }
    }
}
</script>
