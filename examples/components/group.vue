<template>
    <div class="group">
        <h3>{{title}}</h3>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'group',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss">
.group {
    background-color: #fff;
    h3 {
        padding: 0 0.64rem;
        font-size: 1rem;
    }
}
</style>
