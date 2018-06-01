<template>
    <ul class="mui-progress_step">
        <li class="mui-progress__item"
            :class="{'cur':index <= curStep}"
            v-for="(item, index) in stepText"
            :key="index">
            <span class="mui-progress__ball">
            <span class="mui-progress__txt">{{item}}</span>
            </span>
        </li>
    </ul>
</template>
<script>
export default {

    name: 'm-step',
    props: ['curStep', 'stepText'],
    data() {
        return {}
    }
}
</script>
