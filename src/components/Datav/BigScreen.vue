<template>
	<div class="bigScreen">
		<header>
			<time class="time"><i class="el-icon-time"></i>2019-11-01</time>
			<h1>数据可视化展示大屏页面</h1>
			<span class="logo">admin</span>
		</header>
		<div class="mainBox">
			<div class="left">
				<div class="box">
					<h2>一个标题</h2>
				</div>
				<div class="box">
					<h2>二个标题</h2>
				</div>
			</div>
			<div class="middle">
				
			</div>
			<div class="right">
				<div class="box">
					<h2>三个标题</h2>
				</div>
				<div class="box">
					<h2>四个标题</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.bigScreen{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background: url(../../assets/davavbg.png) no-repeat;
		background-size: 100% 100%;
	}
	.bigScreen header{
		width: 100%;
		height: 8vh;
		margin-top: 2vh;
		background: url(../../assets/datavtopbg.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.bigScreen header h1{
		margin: 0;
		position: absolute;
		width: 100%;
		text-align: center;
		color: #FFFFFF;
		line-height: 5vh;
		font-weight: normal;
		letter-spacing: 0.1875rem;
	}
	.bigScreen header .logo{
		font-size: 1rem;
		color: #52ffff;
		position: absolute;
		right: 13vw;
		line-height: 4vh;
	}
	.bigScreen header .time{
		font-size: 1rem;
		color: #52ffff;
		position: absolute;
		left: 8vw;
		line-height: 4vh;
	}
	.bigScreen header .time i{
		margin-right: 0.3125rem;
	}
	.bigScreen .mainBox{
		width: 100%;
		height: 90vh;
		box-sizing: border-box;
	}
	.bigScreen .mainBox > div{
		float: left;
		padding: 1rem;
		box-sizing: border-box;
	}
	.bigScreen .mainBox .box h2{
		text-align: center;
		font-size: 1.1rem;
		line-height: 1.125rem;
		color: #F1F1F1;
		font-weight: normal;
		margin: 0;
	}
	.bigScreen .mainBox .left{
		width: 25vw;
		height: 100%;
	}
	.bigScreen .mainBox .left .box:first-child{
		height: 37vh;
		margin-bottom: 1.5vh;
	}
	.bigScreen .mainBox .left .box:last-child{
		height: 48vh;
	}
	.bigScreen .mainBox .left .box{
		width: 100%;
		background-size: 100% 100%;
		background: url(../../assets/kbg1.png) no-repeat;
		background-size: 100% 100%;
	}
	.bigScreen .mainBox .middle{
		width: 50vw;
		height: 100%;
	}
	.bigScreen .mainBox .right{
		width: 25vw;
		height: 100%;
	}
	.bigScreen .mainBox .right .box{
		width: 100%;
		height: 42.5vh;
		background-size: 100% 100%;
		margin-bottom: 1.5vh;
		background: url(../../assets/kbg1.png) no-repeat;
		background-size: 100% 100%;
	}
</style>
