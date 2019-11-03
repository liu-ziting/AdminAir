<template>
	<div class="addadmin">
		<el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="原密码" prop="opassword">
				<el-input v-model="form.opassword" placeholder="请输入原密码"></el-input>
			</el-form-item>
			<el-form-item label="新密码" prop="npassword">
				<el-input v-model="form.npassword" placeholder="请输入新密码"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="nopassword">
				<el-input v-model="form.nopassword" placeholder="请再次输入新密码"></el-input>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					opassword: '',
					npassword: '',
					nopassword: ''
				},
				rules: {
					opassword: [{
							required: true,
							message: '请输入原密码',
							trigger: 'blur'
						}
					],
					npassword: [{
							required: true,
							message: '请输入新密码',
							trigger: 'blur'
						}
					],
					nopassword: [{
							required: true,
							message: '请再次输入新密码',
							trigger: 'blur'
						}
					]
				}
			};
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			submitForm(formName) {
			        this.$refs[formName].validate((valid) => {
			          if (valid) {
						  if(this.form.npassword != this.form.nopassword){
							  this.$message({
								message: '两次密码输入不一致',
								type: 'warning'
							  });
							  this.form.nopassword = "";
							  this.form.npassword = "";
						  }else{
							  alert('submit!');
						  }
			            
			          } else {
			            console.log('error submit!!');
			            return false;
			          }
			        });
			      },
			      resetForm(formName) {
			        this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	.addadmin .el-select {
		width: 100%;
	}
</style>
