<template>
	<div class="lockscreen">
		<section>
			<img class="adminImg" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
			<p>admin</p>
			<el-input show-password placeholder="请输入密码解锁" v-model="input" class="input-with-select">
			    <el-button @click='submitBox' type="primary" slot="append" icon="el-icon-key"></el-button>
			</el-input>
		</section>
	</div>
</template>

<script>
	export default {
	  props:["type"],
	  data() {
	    return {
	      input: ''
	    }
	  },
	  methods: {
		  submitBox(){
			  this.$emit("changeComponent",this.input)
		  }
	  },
	  created() {
		console.log(this.type)
	  },
	  mounted() {
	  	
	  },
	  updated() {
	  	
	  },
	}
</script>

<style scoped="scoped">
	.lockscreen{
		width: 100%;
		height: 100%;
		position: fixed;
		background-color: rgba(0,0,0,0.9);
		top: 0;
	}
	.lockscreen section{
		width: 320px;
		height: 170px;
		padding: 20px;
		box-shadow: 1px 1px 50px rgba(0,0,0,.3);
		background-color: #FFFFFF;
		border-radius: 0.2rem;
		position: relative;
		top:50%;
		left: 50%;
		margin-top: -85px;
		margin-left: -160px;
	}
	.lockscreen section .adminImg{
		width: 3.75rem;
		height: 3.75rem;
		border-radius: 100%;
		display: block;
		margin: 0 auto;
	}
	.lockscreen section p{
		text-align: center;
		color: #666;
		width: 100%;
	}
</style>
