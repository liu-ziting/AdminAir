<template>
	<div class="tablebox">
		<el-card class="box-card" shadow="hover">
			<div slot="header" class="clearfix">
			  <span>表格组件</span>
				<el-tooltip class="item" effect="dark" content="查看更多" placement="bottom">
				 <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-more-outline"></i></el-button>
				</el-tooltip>
			</div>
		  <template>
		    <el-table
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        type="index"
		        :index="indexMethod">
		      </el-table-column>
		      <el-table-column
		        prop="date"
		        label="日期"
		        width="150">
		      </el-table-column>
		      <el-table-column
		        prop="name"
		        label="姓名"
		        width="150">
		      </el-table-column>
		      <el-table-column
		        prop="address"
		        label="地址">
		      </el-table-column>
		    </el-table>
		  </template>
		</el-card>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        tableData: [{
	          date: '2016-05-02',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1518 弄',
	          zip: 200333,
	          tag: '家'
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1517 弄',
	          zip: 200333,
	          tag: '公司'
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1519 弄',
	          zip: 200333,
	          tag: '家'
	        }, {
	          date: '2016-05-03',
	          name: '王小虎',
	          province: '上海',
	          city: '普陀区',
	          address: '上海市普陀区金沙江路 1516 弄',
	          zip: 200333,
	          tag: '公司'
	        }],
	      }
	    },
	    methods: {
	      indexMethod(index) {
	        return index+1;
	      }
	    }
	  };
</script>

<style>
	.tablebox .el-card__body{
		height: 14.9rem;
	}
</style>