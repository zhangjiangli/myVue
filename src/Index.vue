<template>
    <div id="app">
        
            <!-- 公共头部 -->
            <app-header></app-header>
                <!-- <router-view></router-view> -->
            <div class="main">
                <div class="block">
                    <el-carousel trigger="click" height="622px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <img src="./images/img/banner.png" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            
            <!-- 公共底部 -->
            <app-footer></app-footer>   
        
    </div>
</template>

<script>
import appHeader from "./components/Header";
import appFooter from "./components/Footer.vue";
export default {
  data() {
    return {
      navList: [
        { text: "全部导航" },
        { text: "首页" },
        { text: "设备商城" },
        { text: "零件商城" }
      ]
    };
  },
  methods: {
    addActive(item) {
      item.show = !item.show;
    }
  },
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style lang="less">
.main {
  width: 100%;
  height: 622px;
  //   padding-top: 122px;
  .block {
    margin-top: -120px;
    .el-carousel-item {
      div {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}
.active {
  background: red;
  color: #0081cc;
  border-bottom: solid 1px #0081cc;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>