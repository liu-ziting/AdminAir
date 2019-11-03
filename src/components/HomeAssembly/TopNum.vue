<template>
	<div class="grid-content bg-purple topCrad">
		<el-card class="box-card" v-bind:style="{ 'background-color': bgcolor }" >
			<span v-bind:class="icon" class="cardimg"></span>
			<h1><countTo :startVal='0' :endVal='number' :duration='5000'></countTo></h1>
			<p>{{titleName}}</p>
		</el-card>
	</div>
</template>

<script>
	import countTo from 'vue-count-to'//数字滚动组件
	export default {
		components: { countTo },
		props:["titleName","bgcolor","number","icon",'bgcolor'],
		data() {
			return {
				
			}
		},
		methods: {
		},
		created() {
	
		},
		mounted() {
	
		},
		updated() {
	
		},
		watch: {
			// 如果路由有变化，会再次执行该方法
			'$route': 'dd'
		},
	}
</script>

<style>
	.grid-content {
		opacity: 0.9;
	}
	.grid-content:hover {
		opacity: 1;
		cursor: pointer;
	}
	.topCrad .el-card__body {
		height: 3.75rem;
		position: relative;
	}
	.topCrad  h1 {
		margin: 0 auto;
		font-weight: normal;
		font-size: 1.875rem;
		color: #FFFFFF;
		position: absolute;
		top:1rem;
		right: 1.5rem;
	}
	
	.topCrad  p {
		margin: 0 auto;
		font-weight: normal;
		font-size: 14px;
		color: #FFFFFF;
		position: absolute;
		top:3.5rem;
		right: 1.5rem;
	}
	
	.topCrad .cardimg {
		width: 3.75rem;
		height: 3.75rem;
		font-size: 18px;
		border-radius: 3.75rem;
		font-size: 3.75rem;
		color: #FFFFFF;
		display: block;
		float: left;
	}
	
</style>
