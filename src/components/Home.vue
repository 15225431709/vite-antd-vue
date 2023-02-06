<template>
	<a-layout class="content">
		<a-layout-sider class="menu" v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="logo">
				<ICON name="#icon-chart" color="#d81e06" size=".25rem"></ICON>
				<div class="logo-title">测试后台</div>
			</div>
			<a-menu mode="inline" v-model:openKeys="openKeys" :style="{ borderRight: 0 }" theme="dark"
				@openChange="onOpenChange">
				<a-sub-menu v-for="item in menus" :key="item.key">
					<template #icon>
						<ICON :name="item.icon"></ICON>
					</template>
					<template #title>{{ item.title }}</template>
					<a-menu-item v-for="menu in item.subMenus" :key="menu.name"
						@click="selectMenu(menu)">{{ menu.title }}</a-menu-item>
				</a-sub-menu>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header class="header">
				<div class="tools">
					<div class="tools-icon" @click="toggleCollapsed">
						<ICON v-if="!collapsed" name="#icon-hide" color="#303133"></ICON>
						<ICON v-if="collapsed" name="#icon-open" color="#303133"></ICON>
					</div>
					<ICON class="tools-icon" name="#icon-reload" color="#303133"></ICON>
				</div>
			</a-layout-header>
			<a-layout-content>
				<router-view></router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from "vue";
	import {
		useRouter
	} from "vue-router";
	import {
		menu
	} from "../utils/menus";
	export default {
		name: "HOME",
		setup() {
			const router = useRouter();
			const state = reactive({
				collapsed: false,
				openKeys: ["Dashboard"],
				menus: menu
			});
			const toggleCollapsed = () => {
				state.collapsed = !state.collapsed;
			};

			//监听菜单选择
			const onOpenChange = (keys: string[]) => {
				if (keys.length > 0) {
					let obj = []
					obj.push(keys[keys.length - 1])
					state.openKeys = obj
				} else {
					state.openKeys = []
				}
			};
			//子菜单，路由跳转
			const selectMenu = (keys: object) => {
				// console.log(keys)
				router.push({
					name: keys.name,
				});
			};

			return {
				...toRefs(state),
				toggleCollapsed,
				onOpenChange,
				selectMenu
			};
		},
	};
</script>
<style lang="scss" scope>
	.content {
		margin: 0;
		padding: 0;
	}

	.page {
		background: #fafafa;
		padding: 0;
	}

	.menu {
		background: rgb(0, 21, 41);
		min-height: 100vh;

		.logo {
			height: 64px;
			padding: 0 12px;
			display: flex;
			justify-content: left;
			align-items: center;

			.logo-title {
				font-size: 0.2rem;
				font-weight: bolder;
				color: #fff;
				margin-left: 10px;
				max-width: 2rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}

	.header {
		background: #fff;
		display: flex;
		justify-content: space-between;
		box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
		.tools {
			display: flex;
			align-items: center;
		}

		.tools-icon {
			margin: 0 25px;
		}
	}
</style>
