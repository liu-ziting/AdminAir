<template>
	<div class="addadmin">
		<el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="姓名" prop="name">
				<el-input v-model="form.name" placeholder="请输入管理员姓名"></el-input>
			</el-form-item>
			<el-form-item label="性别" prop="sex">
				<el-input v-model="form.sex" placeholder="请输入管理员性别"></el-input>
			</el-form-item>
			<el-form-item label="手机号" prop="iphone">
				<el-input v-model="form.iphone" placeholder="请输入管理员手机号"></el-input>
			</el-form-item>
			<el-form-item label="角色" prop="region">
				<el-select v-model="form.region" placeholder="请选择角色">
					<el-option disabled="" label="超级管理员" value="1"></el-option>
					<el-option label="管理员" value="2"></el-option>
					<el-option label="普通用户" value="3"></el-option>
				</el-select>
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
					sex: '',
					iphone: '',
					region: '',
					content: '',
				},
				rules: {
					name: [{
							required: true,
							message: '请输入管理员姓名',
							trigger: 'blur'
						}
					],
					sex: [{
							required: true,
							message: '请输入管理员性别',
							trigger: 'blur'
						}
					],
					iphone: [{
							required: true,
							message: '请输入管理员手机号',
							trigger: 'blur'
						}
					],
					region: [{
							required: true,
							message: '请选择角色',
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
