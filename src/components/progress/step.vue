<template>
    <ul class="mui-progress_step">
        <li class="mui-progress__item"
            :class="{'cur':index <= curStep}"
            v-for="(item, index) in stepText"
            :key="item"
            >
            <span class="mui-progress__ball">
            <span class="mui-progress__txt">{{item}}</span>
            </span>
        </li>
    </ul>
</template>
<script>
export default {

    name: 'm-step',
    props: {
        stepText: {
            type: Array,
            default: function() {
                return ['0', '1', '2']
            },
            validator(value) {
                return value.length >= 1
            }
        },
        curStep: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {}
    }
}
</script>
