<template>
	<div class="mui-checkbox"
		:class="[{
			'mui-checkbox_disabled': isDisabled,
			'mui-checkbox_checked': model,
			'mui-checkbox_unchecked': !model
		}]"
		@click="handleClick">
		<slot name="icon" :checked="model">
			<m-icon :type="model ? 'checkbox_checked' : 'checkbox_unchecked'" />
		</slot>
		<div class="mui-checkbox__label"><slot :checked="model"></slot></div>
	</div>
</template>
<script>
import { ChildrenMixin } from '../../common/mixins/nested.js'
export default {
	name: 'm-checkbox',
	mixins: [ChildrenMixin('checkboxGroup')],
	model: {
    prop: 'checked',
    event: 'change'
  },
	props: {
		checked: {
			type: Boolean,
			default: false
		},
		value: {
      type: String,
      default: ''
    },
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		childrenId() {
			return this
		},
		model: {
			get() {
        return this.parent ? this.parent.checked.indexOf(this.value) !== -1 : this.checked
      },
      set(val) {
        if (this.parent) {
          this.setParentValue(val)
        } else {
          this.$emit('change', val)
        }
      }
		},
		isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled
    }
	},
	destroyed() {
		if (this.parent) {
			this.parent.children = this.parent.children.filter((item) => item !== this)
		}
	},
	methods: {
		handleClick(event) {
			if (!this.isDisabled) {
				this.toggle()
			}
			this.$emit('click', event)
		},

		toggle(model = !this.model) {
			if (this.isDisabled) {
				return
			}
			clearTimeout(this.toggleTask)
      this.toggleTask = setTimeout(() => {
        this.model = model
      })
		},

		setParentValue(val) {
      const { parent } = this
      const checked = parent.checked.slice()
      if (val) {
        if (checked.indexOf(this.value) === -1) {
          checked.push(this.value)
          parent.$emit('change', checked)
        }
      } else {
        const index = checked.indexOf(this.value)

        if (index !== -1) {
          checked.splice(index, 1)
          parent.$emit('change', checked)
        }
      }
		}
		// bindRelation() {
		// 	if (!this.parent || this.parent.children.indexOf(this) !== -1) {
		// 		return
		// 	}
		// 	const children = [...this.parent.children, this]
		// 	this.parent.children = children
		// }
	}
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-form/mui-form";
</style>
