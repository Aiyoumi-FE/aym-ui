<template>
    <ul class="mui-progress_timeline">
        <li class="mui-progress__item"
            v-for="(item, index) in stepText"
            :key="index"
            :class="{'cur':index <= curStep, 'none-halfline':index == curStep && isHalfLine}">
            <div class="mui-progress__time">
                <span>{{item.date}}</span>
                <span class="mui-progress__ball"></span>
            </div>
            <div class="mui-progress__content">
                <p>{{item.title}}</p>
                <p>{{item.desc}}</p>
            </div>
        </li>
    </ul>
</template>
<script>
export default {

    name: 'm-timeline',
    props: ['curStep', 'isHalfLine', 'stepText'],
    data() {
        return {}
    }
}
</script>
<style lang="scss">
</style>
