<template>
	<div class="grid-content bg-purple ListCrad">
		<el-card class="box-card" shadow="hover">
		  <div slot="header" class="clearfix">
		    <span>{{titleListName}}</span>
			<el-tooltip class="item" effect="dark" content="查看更多" placement="bottom">
			     <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-more-outline"></i></el-button>
			</el-tooltip>
		  </div>
		  <ul>
			  <li><el-link class="textli" :underline="false">医疗资源下沉为贫困群众筑牢“健康长城”</el-link></li>
			  <li><el-link class="textli" :underline="false">前三季度市管国企营收利润双升 “家底儿”达5.4万亿</el-link></li>
			  <li><el-link class="textli" :underline="false">中科院实验室"种"出钻石：7天长1克拉 纯净度不输天然钻石</el-link></li>
			  <li><el-link class="textli" :underline="false">5G正式来了，队友再也不用担心我挂机了</el-link></li>
			  <li><el-link class="textli" :underline="false">美插手台海推恶法 国台办:台当局甘当棋子损害的是地区和平</el-link></li>
		  </ul>
		</el-card>
	</div>
</template>

<script>
	export default {
		props:["titleListName"],
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

<style>
	.ListCrad ul {
		padding: 0;
		margin: 0;
	}
	.ListCrad ul li{
		list-style: none;
		line-height: 2rem;
		overflow: hidden;
	}
	.textli{
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-align: left;
		float: left;
	}
	.el-card__body{
		height: 10rem;
	}
	.el-card__header{
		padding: 10px 20px;
	}
	.news{
		
	}
</style>
