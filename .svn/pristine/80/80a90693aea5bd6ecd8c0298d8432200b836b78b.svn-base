<template>
	<div class="EchartsCrad">
		<el-card class="box-card" shadow="hover">
			<div id="myChartrose" :style="{width: '100%', height: '17.5rem'}"></div>
		</el-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChartrose'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: '南丁格尔玫瑰图示例组件',
						textStyle: {
							align: 'center',
							color: '#666',
							fontSize: 18,
							fontWeight: "normal"
						},
						top: '0',
						left: '0',
					},
					grid: {
						top: '0%',
						bottom: '0%',
						left: '0%',
						right: '0%'
					},
					tooltip: {
						trigger: 'item',
						formatter: "{b} : {c} ({d}%)"
					},

					visualMap: {
						show: false,
						min: 500,
						max: 600,
						inRange: {
							//colorLightness: [0, 1]
						}
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '70%',
						center: ['50%', '50%'],
						color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'],
						data: [{
								value: 285,
								name: '黑名单查询'
							},
							{
								value: 410,
								name: '红名单查询'
							},
							{
								value: 274,
								name: '法人行政处罚'
							},
							{
								value: 235,
								name: '其它查询'
							}
						].sort(function(a, b) {
							return a.value - b.value
						}),
						roseType: 'radius',
						label: {
							normal: {
								formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
								rich: {
									c: {
										color: '#F56C6C',
										fontSize: 16,
										fontWeight: 'bold',
										lineHeight: 5
									},
									b: {
										color: 'rgb(98,137,169)',
										fontSize: 12,
										height: 40
									},
								},
							}
						},
						labelLine: {
							normal: {
								lineStyle: {
									color: 'rgb(98,137,169)',
								},
								smooth: 0.2,
								length: 10,
								length2: 20,
							}
						}
					}]


				});
			}
		}
	}
</script>

<style>

</style>
