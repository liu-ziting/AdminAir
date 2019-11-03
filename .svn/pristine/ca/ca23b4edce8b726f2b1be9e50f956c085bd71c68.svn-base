<template>
	<div class="contentBox">
		<div class="topSearch">
			<el-row :gutter="30">
			  <el-col :span="4">
				<div class="grid-content bg-purple">
					<el-input v-model="value0" placeholder="请输入关键词"></el-input>
				</div>
			  </el-col>
			  <el-col :span="4">
				  <div class="grid-content bg-purple">
					    <el-select v-model="value1" placeholder="请选择类别">
					      <el-option
					        v-for="item in options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value">
					      </el-option>
					    </el-select>
				  </div>
			  </el-col>
			  <el-col :span="8">
				  <div class="grid-content bg-purple">
					  <el-button type="primary" icon="el-icon-search">查询</el-button>
					  <el-button @click="addLi" type="warning">添加类别</el-button>
				  </div>
			  </el-col>
			</el-row>
		</div>
		<div class="boxList">
			<el-table
			  :data="tableData"
			  style="width: 100%">
			  <el-table-column
				prop="date"
				label="类别名称"
				width="180">
			  </el-table-column>
			  <el-table-column
				prop="num"
				label="数量"
				width="180">
			  </el-table-column>
			  <el-table-column
				prop="data"
				label="创建时间">
			  </el-table-column>
			  <el-table-column
			    fixed="right"
			    label="操作"
			    width="180">
			    <template slot-scope="scope">
			  	<el-button @click="deleteLi" type="text">删除</el-button>
			    </template>
			  </el-table-column>
			</el-table>
			<!-- 分页 -->
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="100">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '前端',
					num: '17',
					data: '2019-12-29'
				},{
					date: '后端',
					num: '13',
					data: '2019-12-29'
				},{
					date: 'Java',
					num: '12',
					data: '2019-12-29'
				},{
					date: 'html',
					num: '10',
					data: '2019-12-29'
				},{
					date: 'VUE',
					num: '16',
					data: '2019-12-29'
				}],
				options: [{
				  value: '选项1',
				  label: '黄金糕'
				}, {
				  value: '选项2',
				  label: '双皮奶'
				}, {
				  value: '选项3',
				  label: '蚵仔煎'
				}, {
				  value: '选项4',
				  label: '龙须面'
				}, {
				  value: '选项5',
				  label: '北京烤鸭'
				}],
				value0: '',
				value1: ''
			}
		},
		methods: {
			deleteLi() {
			  this.$alert('是否删除这一条数据', '温馨提示', {
				confirmButtonText: '确定',
				callback: action => {
					if(action == 'confirm'){
						this.$message({
							type: 'info',
							message: `删除成功!`
						});
					}
				  
				}
			  });
			},
			addLi() {
				this.$prompt('请输入类别名称', '提示', {
						  confirmButtonText: '确定',
						  cancelButtonText: '取消',
				}).then(({ value }) => {
						this.$message({
							type: 'success',
							message: '成功的添加了类型: ' + value
						});
				}).catch(() => {
						this.$message({
							type: 'info',
							message: '取消添加'
						});       
				});
			}
		},
		created () {
			
		},
		mounted () {
			
		},
		updated (){
			
		}
	}
	
</script>
	
<style>
	
</style>
