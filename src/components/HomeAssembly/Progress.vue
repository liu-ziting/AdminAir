<template>
	<div class="grid-content bg-purple ListCrad">
		<el-card class="box-card" shadow="hover">
		  <div slot="header" class="clearfix">
		    <span>进度条</span>
		  </div>
		  <ul>
			  <li>
				<span>标题一</span>
				<el-progress class="progress" :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
			  </li>
			  <li>
			  	<span>标题二</span>
				<el-progress class="progress" :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
			  </li>
			  <li>
			  	<span>标题三</span>
				<el-progress class="progress" :text-inside="true" :stroke-width="18" :percentage="80" status="warning"></el-progress>
			  </li>
			  <li>
			  	<span>标题四</span>
				<el-progress class="progress" :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
			  </li>
		  </ul>
		</el-card>
	</div>
</template>

<script>
	export default {
		props:[],
		data() {
			return {}
		},
		methods: {
		},
		created() {
	
		},
		mounted() {
	
		},
		updated() {
	
		}
	}
</script>

<style scoped="scoped">
	.ListCrad ul {
		padding: 0;
		margin: 0;
	}
	.ListCrad ul li{
		list-style: none;
		line-height: 1.875rem;
	}
	.ListCrad ul li span{
		float: left;
		display: block;
		width: 15%;
		font-size: 0.875rem;
		height: 1rem;
		line-height: 1rem;
		margin: 0.75rem 0;
	}
	
	.el-card__body{
		height: 10rem;
		box-sizing: border-box;
	}
	.el-card__header{
		padding: 0.625rem 1.25rem;
	}
	.ListCrad .progress{
		width: 75% !important;
		float: left !important;
		margin: 0.7rem;
	}
</style>
