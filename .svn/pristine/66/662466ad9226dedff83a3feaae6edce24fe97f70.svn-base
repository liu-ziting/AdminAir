<template>
	<div class="addadmin">
		<el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="角色名称" prop="name">
				<el-input v-model="form.name" placeholder="请输入角色名称"></el-input>
			</el-form-item>
			<el-form-item label="备注">
				<el-input v-model="form.content" placeholder="请输入相关备注"></el-input>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
					name: '',
					content: '',
				},
				rules: {
					name: [{
							required: true,
							message: '请输入角色名称',
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
			            alert('submit!');
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
