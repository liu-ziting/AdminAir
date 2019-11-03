<template>
    <div class="login-container">
		<section>
			<div class="leftimg">
				<img src="../assets/loginLeftimg.png" />
			</div>
        <el-form :model="ruleForm2" :rules="rules2"
         status-icon
         ref="ruleForm2" 
         label-position="left" 
         label-width="0px" 
         class="demo-ruleForm login-page">
            <h3 class="title">AdminAir后台管理系统</h3>
			<p class="tname">基于ElementUI+Vue的通用后台模板</p>
            <el-form-item prop="username">
                <el-input type="text" 
                    v-model="ruleForm2.username" 
                    auto-complete="off" 
					prefix-icon="el-icon-user"
                    placeholder="用户名"
                ></el-input>
            </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" 
                        v-model="ruleForm2.password" 
                        auto-complete="off" 
						prefix-icon="el-icon-lock"
                        placeholder="密码"
                    ></el-input>
                </el-form-item>
            <el-checkbox 
                v-model="checked"
                class="rememberme"
            >记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
		</section>
	</div>
</template>

<script>
import { showLoading, hideLoading } from '../loading';

export default {
    data(){
        return {
            logining: false,
			fullscreenLoading: false,
            ruleForm2: {
                username: 'admin',
                password: '123456',
            },
            rules2: {
                username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}]
            },
            checked: false
        }
    },
    methods: {
        handleSubmit(event){
            this.$refs.ruleForm2.validate((valid) => {
                if(valid){
                    this.logining = true;
                    if(this.ruleForm2.username === 'admin' && 
                       this.ruleForm2.password === '123456'){
						   showLoading("登录中，请稍等...");
                           this.logining = false;
						   this.fullscreenLoading = true;
                           sessionStorage.setItem('user', this.ruleForm2.username);
						   setTimeout(() => {
							 hideLoading();
							 this.$router.push({path: '/'});
						   }, 1000);
                          
                    }else{
                        this.logining = false;
                        this.$alert('用户名或密码错误!', '温馨提示', {
                            confirmButtonText: 'ok'
						})
                    }
                }else{
                    console.log('error submit!');
                    return false;
                }
            })
        },
		created() {
		
		}
    }
};
</script>

<style scoped>
.login-container {
    width: 100%;
    height: 100vh;
	overflow: hidden;
	background: url(../assets/bg.png) no-repeat;
	background-size: 100% 100%;
}
.leftimg {
	width: 50%;
	height: 100%;
	float: left;
	display: flex;
	justify-content: center;
	align-items: center;
}
.leftimg img{
	width: 75%;
	margin-left: 3rem;
}
.login-container section{
	border-radius: 15px;
	width: 50%;
	height: 52%;
	background: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0 0 25px #cac6c6;
	overflow: hidden;
	box-sizing: border-box;
	position: relative;
	left: 25%;
	top: 27%;
}
.el-input{
	width: 92%;
}
.login-page {
   width: 50%;
   float: right;
   padding: 1rem 3rem;
   box-sizing: border-box;
}
label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
.title{
	color: #333333;
	font-weight: normal;
	font-size: 1.375rem;
	margin-bottom: 0.4rem;
}
.tname{
	font-size: 0.6rem;
	color: #a9a9a9;
	margin: 0;
	margin-bottom: 1.875rem;
}
.el-button{
	width: 70% !important;
	display: block;
	border-radius: 25px;
	margin-top: 1rem;
	height: 2.5rem;
}
.el-checkbox{
	color: #666666;
}

@media only screen and (min-width:1920px ) {
	.login-page{
		padding: 3rem;
	}
	.title{
		font-size: 1.5625rem;
	}
	.tname{
		margin-bottom: 4.375rem;
	}
	.el-button{
		height: 3.125rem;
		margin-top: 3rem;
	}
}
</style>