<template>
	<div class="usercenter contentBox">
		<el-form ref="form" :model="form" label-width="80px">
		  <el-form-item label="用户名">
		    <el-input v-model="form.name"></el-input>
		  </el-form-item>
		  <el-form-item label="手机号">
		    <el-input v-model="form.phone"></el-input>
		  </el-form-item>
		  <el-form-item label="性别">
		    <el-select v-model="form.region" placeholder="请选择性别">
		      <el-option label="男" value="1"></el-option>
		      <el-option label="女" value="0"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="邮箱">
		    <el-input v-model="form.mailbox"></el-input>
		  </el-form-item>
		  <el-form-item label="备注">
		    <el-input type="textarea" v-model="form.desc"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">保存</el-button>
		    <el-button @click="dialogVisible = true">修改密码</el-button>
		  </el-form-item>
		</el-form>
		<!-- 修改密码 -->
		<el-dialog title="修改密码" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<password></password>
		</el-dialog>
	</div>
</template>

<script>
	import Password from './Add/password.vue'//修改密码
	export default {
		components:{
			Password
		},
	    data() {
	      return {
			dialogVisible: false,
	        form: {
	          name: '刘子亭',
	          region: '1',
	          desc: '',
			  phone:'15712345678',
			  mailbox:'liuziting2014@163.com'
	        }
	      }
	    },
	    methods: {
	      onSubmit() {
	        console.log('submit!');
	      },
		  handleClose(done) {
		  	done();
		  },
	    }
	  }
</script>

<style>
	.usercenter{
		width: 60%;
	}
	.changePw{
		margin-left: 1.875rem;
	}
</style>
