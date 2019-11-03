<template>
	<div class="contentBox">
		<div class="topSearch">
			<el-row :gutter="30">
				<el-col :span="4">
					<div class="grid-content bg-purple">
						<el-input v-model="value0" placeholder="请输入关键词"></el-input>
					</div>
				</el-col>
				<el-col :span="8">
					<div class="grid-content bg-purple">
						<el-button type="primary" icon="el-icon-search">查询</el-button>
						<el-button @click="dialogVisible = true" type="warning">添加管理员</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="leftBox">
			<el-card class="box-card" shadow="hover">
				<h4><i class="el-icon-user-solid"></i>部门列表</h4>
				<el-input placeholder="输入关键字搜索..." v-model="filterText">
				</el-input>
				<div class="clearfix"></div>
				<el-divider></el-divider>
				<el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode"
				 ref="tree">
				</el-tree>
			</el-card>
		</div>
		<div class="rightTable">
			<el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
				<el-table-column type="index">
				</el-table-column>
				<el-table-column prop="name" label="姓名" sortable width="100">
				</el-table-column>
				<el-table-column prop="role" width="80" label="角色">
				</el-table-column>
				<el-table-column prop="phone" width="120" label="手机号">
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="90">
				</el-table-column>
				<el-table-column prop="date" label="创建日期" sortable width="120">
				</el-table-column>
				<el-table-column prop="address" label="备注" width="100" :formatter="formatter">
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页 -->
			<el-pagination background layout="prev, pager, next" :total="100">
			</el-pagination>
		</div>
		<!-- 添加用户 -->
		<el-dialog title="添加管理员" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<add-admin></add-admin>
			<!-- <span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span> -->
		</el-dialog>

	</div>
</template>

<script>
	import AddAdmin  from "./Add/addadmin"//添加管理员
	
	export default {
		components:{
			AddAdmin
		},
		watch: {
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		},
		data() {
			return {
				value0: '',
				dialogVisible: false,
				filterText: '',
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					role: '管理员',
					sex: '男',
					phone: '15747859685',
					address: '上海市'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					role: '管理员',
					sex: '男',
					phone: '15747859685',
					address: '上海市'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					role: '管理员',
					sex: '男',
					phone: '15747859685',
					address: '上海市'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					role: '管理员',
					sex: '男',
					phone: '15747859685',
					address: '上海市'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					role: '管理员',
					sex: '男',
					phone: '15747859685',
					address: '上海市'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					role: '管理员',
					sex: '男',
					phone: '15747859685',
					address: '上海市'
				}, ],
				data: [{
					id: 1,
					label: '一级部门 1',
					children: [{
						id: 4,
						label: '二级部门 1-1',
						children: [{
							id: 9,
							label: '三级部门 1-1-1'
						}, {
							id: 10,
							label: '三级部门 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: '一级部门 2',
					children: [{
						id: 5,
						label: '二级部门 2-1'
					}, {
						id: 6,
						label: '二级部门 2-2'
					}]
				}, {
					id: 3,
					label: '一级部门 3',
					children: [{
						id: 7,
						label: '二级部门 3-1'
					}, {
						id: 8,
						label: '二级部门 3-2'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},
		methods: {
			formatter(row, column) {
				return row.address;
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleClose(done) {
				done();
			},
			handleNodeClick(data) {
				console.log(data);
			},
			filterNode(value, data) {
				if (!value) return true;
				return data.label.indexOf(value) !== -1;
			}
		},
		created() {

		},
		mounted() {

		}
	}
</script>

<style>
	.leftBox {
		width: 25%;
		margin-right: 5%;
		float: left;
	}

	.leftBox .el-card__body {
		height: 400px;
	}

	.leftBox h4 {
		margin: 0;
		float: left;
		height: 2.5rem;
		line-height: 2.5rem;
	}
	.leftBox .el-input{
		float: right;
		width: 50%;
		padding: 0;
		
	}
	.leftBox .el-input__inner{
		border: none !important;
		border-radius: inherit;
	}
	.el-divider--horizontal{
			margin-top: 0;
	}
	.leftBox h4 i {
		margin-right: 10px
	}

	.rightTable {
		width: 70%;
		float: right;
	}
	.clearfix{
		clear: both;
	}
</style>
