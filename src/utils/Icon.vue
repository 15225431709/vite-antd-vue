<template>
	<div>
		<svg class="icon" aria-hidden="true" :style="style">
			<use :xlink:href="name"></use>
		</svg>
	</div>
</template>
<script lang="ts">
	import {
		computed
	} from "vue"
	export default {
		props: {
			name: {
				type: String,
				default: "",
			},
			customStyle: {
				type: Object,
				default: {
					'color': '#fff',
					'font-size': '.25rem'
				}
			},
			color: {
				type: String,
				default: "#fff"
			},
			size: {
				type: String,
				default: ".25rem"
			}
		},
		setup(props) {
			const style = computed(() => {
				let val: Object = {
					'color': props.color,
					'font-size': props.size
				}
				return val
			})
			return {
				style
			}
		}
	};
</script>
<style lang="scss" scoped>
	.icon {
		font-size: .25rem;
	}

	.icon:hover {
		cursor: pointer;
	}
</style>
