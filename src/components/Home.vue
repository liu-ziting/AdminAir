<template>
	<div class="contentBox home">
		<el-row :gutter="20" class="topList" >
			<el-col :span="6">
				<top-num class="num" titleName='文章数量' :number='1895' :icon='"el-icon-s-marketing"' :bgcolor='"#67C23A"'></top-num>
			</el-col>
			<el-col :span="6">
				<top-num titleName='留言数量' :number='1589' :icon='"el-icon-s-order"' :bgcolor='"#F56C6C"'></top-num>
			</el-col>
			<el-col :span="6">
				<top-num titleName='点击统计' :number='4996' :icon='"el-icon-s-data"' :bgcolor='"#409EFF"'></top-num>
			</el-col>
			<el-col :span="6">
				<top-num titleName='用户总数' :number='2368' :icon='"el-icon-s-custom"' :bgcolor='"#E6A23C"'></top-num>
			</el-col>
		</el-row>

		<el-row :gutter="20">
			<el-col :span="8">
				<list-crad :titleListName='"文章列表"' ></list-crad>
			</el-col>
			<el-col :span="8">
				<list-crad :titleListName='"这是个列表模块"'></list-crad>
			</el-col>
			<el-col :span="8">
				<progress-list></progress-list>
			</el-col>
		</el-row>
		
		<el-row :gutter="20">
			<el-col :span="16">
				<div class="grid-content bg-purple">
					<line-box></line-box>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<rose-box></rose-box>
				</div>
			</el-col>
		</el-row>
		
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="grid-content bg-purple">
					<table-box></table-box>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple">
					<bar-box></bar-box>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="8">
				<div class="grid-content bg-purple">
					<carousel-box></carousel-box>
				</div>
			</el-col>
			<el-col :span="7">
				<div class="grid-content bg-purple">
					<time-line></time-line>
				</div>
			</el-col>
			<el-col :span="9">
				<div class="grid-content bg-purple">
					<calendar></calendar>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import TopNum from './HomeAssembly/TopNum.vue' //头部显示数量组件
	import ListCrad from './HomeAssembly/ListCrad.vue' //新闻列表类的模块
	import Calendar from './HomeAssembly/Calendar.vue' //日历
	import ProgressList from './HomeAssembly/Progress.vue' //进度条模块
	import TableBox from './HomeAssembly/Table.vue' //表格
	import TimeLine from './HomeAssembly/Timeline.vue' //时间戳
	import CarouselBox from './HomeAssembly/Carousel.vue' //轮播图
	import Empty from './HomeAssembly/Empty.vue' //暂无数据组件
	
	
	import LineBox from './Echarts/line.vue' //折线图
	import RoseBox from './Echarts/rose.vue' //玫瑰图
	import BarBox from './Echarts/bar.vue' //柱状图
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
		    TopNum,
			ListCrad,
			Calendar,
			ProgressList,
			LineBox,
			BarBox,
			RoseBox,
			TableBox,
			TimeLine,
			CarouselBox,
			Empty
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
	.home .el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.home .el-col {
		border-radius: 4px;
	}

	.home .bg-purple-dark {
		background: #99a9bf;
	}

	.home .bg-purple {
		background: #d3dce6;
	}

	.home .bg-purple-light {
		background: #e5e9f2;
	}

	.home .grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.home .row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>
