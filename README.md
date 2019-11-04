# AdminAir

## 项目介绍

> AdminAir后台管理系统通用版1.0

该项目基于vue+ElementUi构建，页面基本包含常规操作的增删改查页面、权限管理和登录页面，
主页展示类包含常规组件有：头部名称与数量展示组件、文章列表top显示组件、进度条组件、
表格展示组件、时间线组件、日历组件，图表类组件：折线图、柱状图、饼图、玫瑰图等；
数据可视化页面目前是H5模式，组件真正构建中，将在2.0版本更新大屏页面相关组件。


 - [Demo演示点这里][15]


![主页截图][1]

### 产品依赖于:
 - [Vue][2]
 - [Vue CLi][3]
 - [Vue Router][4]
 - [Element][5]
 - [Echarts][6]
 - [Core-js][7]
 - [Vue CountTo][8]

## 项目运行

    # 克隆到本地
    git https://git.dev.tencent.com/liuziting/AdminAirElUI.git
    svn svn+ssh://svn@svn.dev.tencent.com/liuziting/AdminAirElUI
    
    # 进入文件夹
    cd AdminAirElUI
    
    # 安装依赖
    npm install 
    
    # 开启本地服务器localhost:8088
    npm run dev
    
    # 发布环境
    npm run build

## 项目目录结构
```
adminAirELUI
│  babel.config.js
│  package-lock.json
│  package.json			
│  README.md
│  vue.config.js
│  
├─public
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue				跟组件
    │  loading.js			加载中动画封装
    │  main.js				入口js文件
    │  route.js				路由
    │  
    ├─assets				资源目录，这里的资源会被wabpack构建
    │      logo.png
    │      no.png
    │      
    └─components			公共组件目录
        │  Addnews.vue			文章管理-文章添加-->>(添加组件可用于各类表单提交功能页面)
        │  Category.vue			文章管理-类别添加-->>(列表,搜索，弹窗添加基本内容功能组件)
        │  Edit.vue				
        │  Home.vue			后台主页-->>(继承各类展示类组件的调用，具体组件查看HomeAssembly)
        │  Login.vue			登陆页面
        │  Main.vue			框架主体-->>(包含头部，左侧导航，底部和中间路由模块)
        │  NewList.vue			文章管理-新闻列表-->>(可用于列表展示搜索查询等功能组件)
        │  Role.vue			权限管理-角色管理
        │  User.vue			权限管理-用户管理-->>(左侧树导航右侧表格类组件)
        │  Welcome.vue			欢迎页面-->>(用于当主页没什么内容可直接用欢迎页面作为主页)
        │  UserCenter.vue			我的设置-个人中心
        │  
        ├─Add				添加类组件目录
        │      addadmin.vue		权限管理-用户管理-管理员添加（用于弹窗表单提交的组件）
        │      addrole.vue		权限管理-用户管理-角色添加（用于弹窗表单提交的组件）
        │      password.vue		我的设置-个人中心-修改密码（用于弹窗表单提交的组件）
        ├─Datav				数据可视化页面目录
        │      BigScreen.vue		数据可视化主页
        │      
        ├─Echarts			图表组件目录
        │      bar.vue			折线图
        │      line.vue			双柱状图
        │      rose.vue			南丁格尔玫瑰图
        │      
        └─HomeAssembly			主页展示类组件目录
                Calendar.vue		日历
                Carousel.vue		轮播图
                Empty.vue		暂无数据
                ListCrad.vue		列表类的模块
                Progress.vue		进度条集合
                Table.vue		表格
                Timeline.vue		时间戳
                TopNum.vue		统计类
```		

## 项目部分截图

![登录页面][9]

![列表页面][10]

![添加页面][11]

![角色页面][13]

![角色页面][14]

#### 大屏页面模板
![大屏页面][12]


  [1]: http://tc.lihail.cn/adminAir.png
  [2]: https://cn.vuejs.org/
  [3]: https://cli.vuejs.org/zh/
  [4]: https://router.vuejs.org/zh/
  [5]: https://element.eleme.cn/2.0/#/zh-CN
  [6]: https://echarts.apache.org/zh/index.html
  [7]: https://github.com/zloirock/core-js#readme
  [8]: http://panjiachen.github.io/countTo/demo/
  [9]: http://tc.lihail.cn/adminLogin.png
  [10]: http://tc.lihail.cn/adminnewList.png
  [11]: http://tc.lihail.cn/adminuser.png
  [12]: http://tc.lihail.cn/adminbig.png
  [13]: http://tc.lihail.cn/adminjs.png
  [14]: http://tc.lihail.cn/admin123.png
  [15]: http://adminair.zhangs.ink/adminAirDemo/index.html#/Login
  
