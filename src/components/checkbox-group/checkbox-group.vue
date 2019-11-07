<template>
	<div class="mui-checkbox-group">
		<slot></slot>
	</div>
</template>
<script>
import { ParentMixin } from '../../common/mixins/nested.js'
export default {
  name: 'm-checkbox-group',
  mixins: [ParentMixin('checkboxGroup')],
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: {
		checked: {
			type: Array,
			default() {
				return []
			}
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		toggleAll(model) {
			this.children.forEach(item => {
        item.toggle(model)
			})
		}
	}
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
</style>
