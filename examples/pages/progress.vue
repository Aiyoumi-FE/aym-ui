<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <div class="progress-step__wrap">
                <m-progress></m-progress>
                <br>
                <m-progress :stepText="['Step0','Step1','Step2']"
                    :curStep="1"></m-progress>
                <br>
                <m-progress :stepText="[0,1,2,3,4,5]"
                    :curStep="3"></m-progress>
            </div>
            <br>
            <br>
            <m-progress type="timeline"
                :stepText="timelineArr"></m-progress>
            <br>
            <m-progress type="timeline"
                :isHalfLine="false"
                :stepText="timelineArr"></m-progress>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-progress',
    data() {
        return {
            timelineArr: [{
                date: '3.28',
                title: '已提交审核',
                desc: '请耐心等待'
            }, {
                date: '3.29',
                title: '审核完成',
                desc: '获得额度'
            }]
        }
    }
}
</script>
<style lang="scss"
    scoped>
.progress-step__wrap {
    padding: 1.6rem 1rem;
}
</style>
