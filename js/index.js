var app = new Vue({
    el: "#app",
    data: {
        scroll: "",
        hotCityList: ["开封", "新乡", "天津", "杭州", "深圳", "北京"],
        allCityList: [],
        navList: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
        headH:0,
        scrollYList:[],//记录滚动过程中监听的每一个位置
        navContainerList:[],
        // stopIndex:-1
    },
    methods: {
        initBetterScroll() {
            var _this = this;
            this.scroll = new BScroll('.wrapper', {
                scrollY: true,
                click: true,
                probeType:3
            });
            function onScroll(pos) {
                for(var i=0; i<_this.scrollYList.length; i++){
                    if(pos.y <= _this.scrollYList[i]){
                        $(_this.navContainerList).eq(i).addClass("act-li").siblings("li").removeClass("act-li");//当前所在位置添加标记
                    }else{
                        if(i == 0){
                            $(_this.navContainerList).eq(i).removeClass("act-li");
                        }
                    }
                }
            }
            this.scroll.on("scroll",onScroll);
        },
        getCityList() {
            var _this = this;
            this.$http.get("../data/city.json", {
                emulateJSON: true
            }).then(function (res) {
                // console.log(res.data);
                _this.makeCityList(res.data);
            })
        },
        makeCityList(dataList) { //遍历数据，重组城市列表

            var cityArr = [];
            for (var i = 0; i < this.navList.length; i++) {
                var letter = {};
                letter.titleWords = this.navList[i];
                letter.arr = [];
                for (var j = 0; j < dataList.length; j++) {
                    if (this.navList[i] == dataList[j].firstLetter) {
                        letter.arr.push(dataList[j]);
                    }
                }
                cityArr.push(letter);

                if (i == this.navList.length - 1) {
                    this.allCityList = cityArr;
                }
            }
        },
        offset(curEle) {//获取元素距离窗口边缘（上下左右）距离
            var totalLeft = null;
            var totalTop = null;
            var par = curEle.offsetParent;
            //首先把自己本身的相加
            totalLeft += curEle.offsetLeft;
            totalTop += curEle.offsetTop;
            //现在开始一级一级往上查找，只要没有遇到body，我们就把父级参照物的边框和偏移相加
            while (par) {
                if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
                    //不是IE8我们才进行累加父级参照物的边框
                    totalTop += par.clientTop;
                    totalLeft += par.clientLeft;
                }
                //把父级参照物的偏移相加
                totalTop += par.offsetTop;
                totalLeft += par.offsetLeft;
                par = par.offsetParent;
            }
            return {
                left: totalLeft,
                top: totalTop
            };
        },
        getLetterIndex(index){
            $(this.navContainerList).eq(index).addClass("act-li").siblings("li").removeClass("act-li");//当前所在位置添加背景
            $(this.navContainerList).eq(index).find(".letter-p-c").addClass("act-letter-c");
            var y = this.scrollYList[index];
            this.scroll.scrollTo(0,y,0);//操作betterscroll滚动到指定位置
        }
    },
    watch: {
        allCityList: function () {
            var _this = this;
            this.$nextTick(function () {
                if (_this.scroll) {
                    _this.scroll.destroy();
                }
                _this.initBetterScroll();

                _this.navContainerList = $(".nav-container li");

                _this.headH = $(".top-fixd-c").outerHeight();//获取头部固定区域高度
                var totalCityListObj = $(".total-city-list");
                for(var i=0; i<_this.navList.length; i++){
                    var y = -(this.offset($(totalCityListObj).eq(i).get(0)).top - this.headH);//获取每一个字母标题距离顶部的距离
                    _this.scrollYList.push(y);
                }
            })
        }
    },
    created() {
        this.getCityList();
        this.initBetterScroll();
    },
    mounted() {
        var _this = this;
        $(".nav-container").on("touchmove", function (e) {//阻止导航栏穿透滑动
            var e = e || window.event;
            e.preventDefault();
            e.stopPropagation();
        })
        $(".nav-container").on("touchmove", "li", function (e) {//滑动导航栏触发导航栏页签展示，并触发betterscroll滚动到指定位置
            e.preventDefault();
            e.stopPropagation();
            // var top = $(window).scrollTop();
            var ele = document.elementFromPoint(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY);
            if (ele.tagName == "LI") {
                
                // 获取当前页签对应的字母下标
                var index = $(ele).attr("data-index");
                _this.getLetterIndex(index);//操作betterScroll滚动到指定位置

                $(ele).find(".letter-p-c").addClass("act-letter-c");
                $(ele).siblings("li").find(".letter-p-c").removeClass("act-letter-c");
            }
        })
        $(".nav-container").on("touchend", function (e) {//导航栏上滑动结束，隐藏导航栏页签
            e.preventDefault();
            e.stopPropagation();
            $(".nav-container .act-letter-c").animate({
                opacity: 0
            }, 500, function () {
                $(this).attr("style", "").removeClass("act-letter-c");
            })
        })
    },

})