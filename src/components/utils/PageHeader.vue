<template>
	<div class="page-header">
		<div class="title" :class="margin?'margin':''">{{text}}</div>
		<slot name="content"></slot>
	</div>
</template>
<script lang="ts">
	import {
		defineComponent
	} from "vue";
	export default defineComponent({
		props: {
			text: {
				type: String,
				default: ""
			},
			margin: {
				type: Boolean,
				default: true
			}
		}
	});
</script>
<style scoped>
	.page-header {
		width: 100%;
		padding: .1rem .25rem;
		background: #fff;
	}

	.margin {
		margin-bottom: .25rem;
	}

	.title {
		height: .5rem;
		line-height: .5rem;
		font-size: .25rem;
		font-weight: 550;
		color: #333;
		margin: 10px;
	}
</style>
