<template>
	<div class="contentBox">
		<div class="topSearch">
			<el-row :gutter="30">
			  <el-col :span="4">
				<div class="grid-content bg-purple">
					<el-input v-model="value0" placeholder="请输入关键词"></el-input>
				</div>
			  </el-col>
			  <el-col :span="6.5">
				  <div class="grid-content bg-purple">
					  <el-date-picker
						v-model="value2"
						type="daterange"
						align="right"
						unlink-panels
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期"
						:picker-options="pickerOptions">
					  </el-date-picker>
				  </div>
			  </el-col>
			  <el-col :span="4">
				  <div class="grid-content bg-purple">
					    <el-select v-model="value3" placeholder="请选择类别">
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
					  <el-button @click="openAdd" type="warning">添加文章</el-button>
					  <el-button type="danger">批量删除</el-button>
				  </div>
			  </el-col>
			</el-row>
		</div>
		<div class="boxList">
			<el-table
			    ref="multipleTable"
			    :data="tableData"
			    tooltip-effect="dark"
			    style="width: 100%"
				height="70%"
			    @selection-change="handleSelectionChange">
			    <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      prop="title"
			      label="标题"
			      width="280">
			    </el-table-column>
			    <el-table-column
			      prop="category"
			      label="类型"
			      width="180">
			    </el-table-column>
				<el-table-column
				  prop="num"
				  label="留言数"
				  width="120">
				</el-table-column>
				<el-table-column
				  prop="whether"
				  label="是否展示"
				  width="120">
				  <el-switch
				    active-color="#13ce66"
				    inactive-color="#ff4949">
				  </el-switch>
				</el-table-column>
			    <el-table-column
			      prop="data"
			      label="发布时间"
			      show-overflow-tooltip>
			    </el-table-column>
				<el-table-column
				  fixed="right"
				  label="操作"
				  width="180">
				  <template slot-scope="scope">
					<el-button type="text">编辑</el-button>
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
	        pickerOptions: {
	          shortcuts: [{
	            text: '最近一周',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
	              picker.$emit('pick', [start, end]);
	            }
	          }, {
	            text: '最近一个月',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
	              picker.$emit('pick', [start, end]);
	            }
	          }, {
	            text: '最近三个月',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
	              picker.$emit('pick', [start, end]);
	            }
	          }]
	        },
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
			tableData: [{
			  title: '这是一个文章标题这是一个文章标题这是一个文章标题这是一个文章标题',
			  category: '数字尾巴',
			  data: '2019-10-25',
			  num:'15',
			  whether:true
			},{
			  title: '这是一个文章标题这是一个文章标题这是一个文章标题这是一个文章标题',
			  category: '数字尾巴',
			  data: '2019-10-25',
			  num:'15',
			  whether:true
			},{
			  title: '这是一个文章标题这是一个文章标题这是一个文章标题这是一个文章标题',
			  category: '数字尾巴',
			  data: '2019-10-25',
			  num:'15',
			  whether:true
			},{
			  title: '这是一个文章标题这是一个文章标题这是一个文章标题这是一个文章标题',
			  category: '数字尾巴',
			  data: '2019-10-25',
			  num:'15',
			  whether:true
			},{
			  title: '这是一个文章标题这是一个文章标题这是一个文章标题这是一个文章标题',
			  category: '数字尾巴',
			  data: '2019-10-25',
			  num:'15',
			  whether:true
			}],
			multipleSelection: [],
			value0: '',
	        value1: '',
	        value2: '',
			value3: '',
			value4:true,
			dialogVisible: false
	      };
	    },
		methods: {
		  handleSelectionChange(val) {
			this.multipleSelection = val;
		  },
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
		  openAdd(){
			  this.$router.push({path: '/addnews'})
		  }
		}
	  };
</script>
	
<style>
	  .el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
	  .topSearch{
		  width: 100%;
		  background-color: #f2f2f2;
		  height: 4rem;
		  line-height: 4rem;
		  padding-left: 0.9375rem;
		  box-sizing: border-box;
		  border-left: 0.2rem solid #409EFF;
		  overflow: hidden;
		  margin-bottom: 0.9375rem;
	  }
	  .el-pagination{
		  float: right;
		  margin-top: 0.9375rem;
	   }
</style>
