<template>
	<div class="head">
    <div class="head-top">
			 <div class="logo-header">
		        <a href="#" ><img src="../images/logo.png" /></a>
		    </div>
			
			<div class="nav-header">
				<ul class="nav-list">
					<li>
						<a href="#" class="navbar-link"><img src="../images/img/cart.png"/> 进货单</a>
					</li>
					<li>
						<a href="#" class="navbar-link">用户中心</a>
					</li>
					<li> 
						<a href="#" data-toggle="modal" data-target="#login"><div class="login">登录</div></a>
					</li>
					<li>
						<a href="#" class="navbar-link" data-toggle="modal" data-target="#resiger"><div class="registered">注册</div></a>
					</li>
					
				</ul>
			</div>
		</div>	
		<!--<img src="img/hr.png" class="hr"/>-->
		<div class="head-bottom clearfix">
			<div class="list-left">
				<!-- 在全局中拿到遍历的数组 -->
				<ul class="clearfix">
					<!-- <li><a href="javascript:vold(0)"><img src="../images/img/drop-down.png" class="drop-down"/></a></li>
					<li><a class="active"></a></li>
					<li><a><img src="../images/img/HOT.png" class="hot"/> </a></li> -->
					<li v-for="(item,index) in $store.state.navList" :key="index">
						<img v-if="index=='0'" src="../images/img/drop-down.png" class="drop-down"/>
						<a href="javascript:;">{{item.text}}</a>
					</li>
				</ul>
			</div>
			<div class="list-right" style="float: right;">
				<label>
					<input placeholder="请输入设备/零件关键词" style="text-indent: 10px" />
					
				</label>
			</div>
		</div>
  </div>
</template>

<script lang:'less'>
export default {
	data () {
		return {

			// aa:'222'
			/* navList:[
				{text:'全部导航'},
				{text:'首页'},
				{text:'设备商城'},
				{text:'零件商城'}
			] */
		}
	},
	methods: {
		/* addActive (item) {
      item.show = !item.show
    } */
	}
}
</script>

<style lang="less">
/* 头部样式 */

.head {
	padding: 0;
	background: rgba(0,0,0,.6)
}
.head-top {
  height: 60px;
  border-bottom: 1px solid #2f2a5d;
}
.head-bottom {
  height: 60px;
  .list-left {
		float: left;
		height: 60px;
    ul {
			height: 60px;
      li {
        float: left;
        padding: 0 20px;
				height: 100%;
				position: relative;
        a {
					height: 100%;
					line-height: 60px;
					display: inline-block;
          .hot {
            position: absolute;
            right: 0px;
            top: 5px;
          }
        }
			}
			li:hover a{
				color: #0081cc;
				border-bottom: solid 1px #0081cc;
			}
			
    }
  }
  .list-right {
		float: right;
		margin-right: 20px;
		label{
			display: block;
			width: 260px;
			height: 34px;
			margin-top: 14px;
			input{
				width: 260px;
				height: 34px;
				border-radius: 3px;
				background: url("../images/img/search.png") no-repeat 95% 50%,pink;
			}
		}
  }
}

.active{
	background: red;
	color: #0081cc;
	border-bottom: solid 1px #0081cc;
}
#nav-top {
  padding-right: 20px;
}
#nav-top > div:nth-of-type(1) {
  height: 43px;
  line-height: 43px;
}
.login,
.registered {
  width: 64px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
.login {
  margin-top: 15px;
  background-color: rgba(255, 255, 255, 0.1);
}
.registered {
  margin-top: 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  -webkit-border: 2px solid rgba(255, 255, 255, 0.1);
  line-height: 22px;
}
.navbar-inverse {
}
.head-list {
  width: 100%;
  height: 61px;
  /*margin-top: 5px;*/
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border-top: 1px solid #2f2a5d;
  /*margin-top: -15px;*/
  line-height: 61px;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1000;
}
.head-list > div {
  display: inline-block;
}
.head-list > div:nth-of-type(1) ul {
  position: relative;
}
.head-list > div:nth-of-type(1) ul li {
  display: inline-block;
  margin: 0 21px;
  color: white;
  position: relative;
}
.head-list > div:nth-of-type(1) ul li:nth-of-type(1) {
  margin: 0;
  padding: 0 20px;
}

.head-list > div:nth-of-type(1) ul div {
}
.head-list > div:nth-of-type(2) {
  width: 20%;
  margin-right: 20px;
}
.head-list > div:nth-of-type(2) label {
  width: 100%;
  height: 36px;
  margin-top: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;
}
.head-list > div:nth-of-type(2) label input {
  width: 85%;
  height: 100%;
  background-color: transparent;
  border: 1px solid transparent;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
}
.head-list > div:nth-of-type(2) label i {
  height: 36px;
  vertical-align: middle;
  position: absolute;
  top: -12px;
  right: 10px;
}
.header-top {
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.logo-header {
  float: left;
  line-height: 60px;
  display: inline-block;
  padding-left: 20px;
}
.nav-header {
  height: 60px;
  float: right;
  line-height: 60px;
  display: inline-block;
}
.nav-header ul li {
  float: left;
  padding: 0 20px;
}
.nav-header ul li a {
  color: white;
}
.active {
  color: #0081cc !important;
  /* background: url(../img/active.png) no-repeat  center bottom; */
}
</style>