<template>
<div class="mui-fixedbottom">
	<div class="mui-bottom__tips"
		v-if="$slots.tips">
		<slot name="tips"></slot>
	</div>
	<slot></slot>
</div>
</template>
<script>
export default {
	name: 'm-footer',
	props: {},
	methods: {}
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-footer/mui-footer";
</style>
