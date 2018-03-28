<template>
    <div class="content-wrap">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'demo-content',
    props: {}
}
</script>
<style lang="scss">
.content-wrap {
    padding-top: 1.6rem;
}
</style>
