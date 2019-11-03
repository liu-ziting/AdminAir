<template>
	<div class="EchartsCrad">
		<el-card class="box-card" shadow="hover">
			<div id="myChartline" :style="{width: '100%', height: '17.5rem'}"></div>
		</el-card>
	</div>
</template>

<script>
	// 折线图
	import Empty from '../HomeAssembly/Empty.vue' //暂无数据组件
	export default {
		components: {
			Empty
		},
		data() {
			return {}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChartline'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '折线图示例组件',
						textStyle: {
							align: 'center',
							color: '#666',
							fontSize: 18,
							fontWeight: "normal"
						},
						top: '0',
						left: '0',
					},
					backgroundColor: '#FFF',
					grid: {
						top: '18%',
						bottom: '8%',
						left: '5%',
						right: '0%'
					},
					tooltip: {
						trigger: 'axis',
						label: {
							show: true
						}
					},
					xAxis: {
						boundaryGap: true, //默认，坐标轴留白策略
						axisLine: {
							show: false
						},
						splitLine: {
							show: false
						},
						axisTick: {
							show: false,
							alignWithLabel: true
						},
						data: [
							'武汉', '襄阳', '黄冈', '荆门', '十堰', '随州',
							'鄂州', '恩施', '宜昌', '孝感', '咸宁', '仙桃',
							'潜江', '天门', '黄石', '荆州', '神农架'
						]
					},
					yAxis: {
						axisLine: {
							show: false
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: 'dashed',
								color: 'rgba(33,148,246,0.2)'
							}
						},
						// axisTick: {
						//     show: false
						// },
						// splitArea: {
						//     show: true,
						//     areaStyle: {
						//         color: 'rgb(245,250,254)'
						//     }
						// }
					},
					series: [{
						type: 'line',
						symbol: 'circle',
						symbolSize: 7,
						lineStyle: {
							color: 'rgb(33,148,246)',
							shadowBlur: 12,
							shadowColor: 'rgb(33,148,246,0.9)',
							shadowOffsetX: 1,
							shadowOffsetY: 1
						},
						itemStyle: {
							color: 'rgb(33,148,246)',
							borderWidth: 1,
							borderColor: '#FFF'
						},
						label: {
							show: false,
							distance: 1
						},
						data: [
							2000, 1800, 2800, 900, 1600, 2000,
							3000, 2030, 1356, 1900, 4000, 3000,
							2000, 3000, 4200, 3200, 3800
						]
					}]
				});
			}
		}
	}
</script>

<style>
	.EchartsCrad .el-card__body {
		height: 17.5rem;
	}
</style>
