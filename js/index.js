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
        testData:[
            {
                "code": "150430",
                "name": "敖汉旗",
                "firstLetter": "A"
            },
            {
                "code": "512021",
                "name": "安岳县",
                "firstLetter": "A"
            },
            {
                "code": "513200",
                "name": "阿坝藏族羌族自治州",
                "firstLetter": "A"
            },
            {
                "code": "610900",
                "name": "安康市",
                "firstLetter": "A"
            },
            {
                "code": "360726",
                "name": "安远县",
                "firstLetter": "A"
            },
            {
                "code": "513231",
                "name": "阿坝县",
                "firstLetter": "A"
            },
            {
                "code": "150721",
                "name": "阿荣旗",
                "firstLetter": "A"
            },
            {
                "code": "420982",
                "name": "安陆市",
                "firstLetter": "A"
            },
            {
                "code": "340800",
                "name": "安庆市",
                "firstLetter": "A"
            },
            {
                "code": "360829",
                "name": "安福县",
                "firstLetter": "A"
            },
            {
                "code": "222426",
                "name": "安图县",
                "firstLetter": "A"
            },
            {
                "code": "652901",
                "name": "阿克苏市",
                "firstLetter": "A"
            },
            {
                "code": "652928",
                "name": "阿瓦提县",
                "firstLetter": "A"
            },
            {
                "code": "653001",
                "name": "阿图什市",
                "firstLetter": "A"
            },
            {
                "code": "653022",
                "name": "阿克陶县",
                "firstLetter": "A"
            },
            {
                "code": "653023",
                "name": "阿合奇县",
                "firstLetter": "A"
            },
            {
                "code": "152202",
                "name": "阿尔山市",
                "firstLetter": "A"
            },
            {
                "code": "131125",
                "name": "安平县",
                "firstLetter": "A"
            },
            {
                "code": "410500",
                "name": "安阳市",
                "firstLetter": "A"
            },
            {
                "code": "152522",
                "name": "阿巴嘎旗",
                "firstLetter": "A"
            },
            {
                "code": "410522",
                "name": "安阳县",
                "firstLetter": "A"
            },
            {
                "code": "152900",
                "name": "阿拉善盟",
                "firstLetter": "A"
            },
            {
                "code": "152921",
                "name": "阿拉善左旗",
                "firstLetter": "A"
            },
            {
                "code": "152922",
                "name": "阿拉善右旗",
                "firstLetter": "A"
            },
            {
                "code": "620922",
                "name": "安西县",
                "firstLetter": "A"
            },
            {
                "code": "520400",
                "name": "安顺市",
                "firstLetter": "A"
            },
            {
                "code": "620924",
                "name": "阿克塞哈萨克族自治县",
                "firstLetter": "A"
            },
            {
                "code": "654301",
                "name": "阿勒泰市",
                "firstLetter": "A"
            },
            {
                "code": "659002",
                "name": "阿拉尔市",
                "firstLetter": "A"
            },
            {
                "code": "210300",
                "name": "鞍山市",
                "firstLetter": "A"
            },
            {
                "code": "542327",
                "name": "昂仁县",
                "firstLetter": "A"
            },
            {
                "code": "522328",
                "name": "安龙县",
                "firstLetter": "A"
            },
            {
                "code": "542425",
                "name": "安多县",
                "firstLetter": "A"
            },
            {
                "code": "430721",
                "name": "安乡县",
                "firstLetter": "A"
            },
            {
                "code": "510724",
                "name": "安县",
                "firstLetter": "A"
            },
            {
                "code": "350524",
                "name": "安溪县",
                "firstLetter": "A"
            },
            {
                "code": "370784",
                "name": "安丘市",
                "firstLetter": "A"
            },
            {
                "code": "330523",
                "name": "安吉县",
                "firstLetter": "A"
            },
            {
                "code": "430923",
                "name": "安化县",
                "firstLetter": "A"
            },
            {
                "code": "431028",
                "name": "安仁县",
                "firstLetter": "A"
            },
            {
                "code": "530181",
                "name": "安宁市",
                "firstLetter": "A"
            },
            {
                "code": "141026",
                "name": "安泽县",
                "firstLetter": "A"
            },
            {
                "code": "231281",
                "name": "安达市",
                "firstLetter": "A"
            },
            {
                "code": "360123",
                "name": "安义县",
                "firstLetter": "A"
            },
            {
                "code": "610624",
                "name": "安塞县",
                "firstLetter": "A"
            },
            {
                "code": "130632",
                "name": "安新县",
                "firstLetter": "A"
            },
            {
                "code": "130683",
                "name": "安国市",
                "firstLetter": "A"
            },
            {
                "code": "150421",
                "name": "阿鲁科尔沁旗",
                "firstLetter": "A"
            },
            {
                "code": "451227",
                "name": "巴马瑶族自治县",
                "firstLetter": "B"
            },
            {
                "code": "420626",
                "name": "保康县",
                "firstLetter": "B"
            },
            {
                "code": "220600",
                "name": "白山市",
                "firstLetter": "B"
            },
            {
                "code": "652222",
                "name": "巴里坤哈萨克自治县",
                "firstLetter": "B"
            },
            {
                "code": "610929",
                "name": "白河县",
                "firstLetter": "B"
            },
            {
                "code": "652700",
                "name": "博尔塔拉蒙古自治州",
                "firstLetter": "B"
            },
            {
                "code": "652701",
                "name": "博乐市",
                "firstLetter": "B"
            },
            {
                "code": "220800",
                "name": "白城市",
                "firstLetter": "B"
            },
            {
                "code": "652800",
                "name": "巴音郭楞蒙古自治州",
                "firstLetter": "B"
            },
            {
                "code": "513331",
                "name": "白玉县",
                "firstLetter": "B"
            },
            {
                "code": "150800",
                "name": "巴彦淖尔市",
                "firstLetter": "B"
            },
            {
                "code": "513335",
                "name": "巴塘县",
                "firstLetter": "B"
            },
            {
                "code": "130981",
                "name": "泊头市",
                "firstLetter": "B"
            },
            {
                "code": "469030",
                "name": "白沙黎族自治县",
                "firstLetter": "B"
            },
            {
                "code": "652829",
                "name": "博湖县",
                "firstLetter": "B"
            },
            {
                "code": "469035",
                "name": "保亭黎族苗族自治县",
                "firstLetter": "B"
            },
            {
                "code": "532924",
                "name": "宾川县",
                "firstLetter": "B"
            },
            {
                "code": "652926",
                "name": "拜城县",
                "firstLetter": "B"
            },
            {
                "code": "513429",
                "name": "布拖县",
                "firstLetter": "B"
            },
            {
                "code": "620400",
                "name": "白银市",
                "firstLetter": "B"
            },
            {
                "code": "131081",
                "name": "霸州市",
                "firstLetter": "B"
            },
            {
                "code": "230125",
                "name": "宾县",
                "firstLetter": "B"
            },
            {
                "code": "230126",
                "name": "巴彦县",
                "firstLetter": "B"
            },
            {
                "code": "410421",
                "name": "宝丰县",
                "firstLetter": "B"
            },
            {
                "code": "422823",
                "name": "巴东县",
                "firstLetter": "B"
            },
            {
                "code": "320922",
                "name": "滨海县",
                "firstLetter": "B"
            },
            {
                "code": "653130",
                "name": "巴楚县",
                "firstLetter": "B"
            },
            {
                "code": "441322",
                "name": "博罗县",
                "firstLetter": "B"
            },
            {
                "code": "321023",
                "name": "宝应县",
                "firstLetter": "B"
            },
            {
                "code": "230231",
                "name": "拜泉县",
                "firstLetter": "B"
            },
            {
                "code": "542127",
                "name": "八宿县",
                "firstLetter": "B"
            },
            {
                "code": "542133",
                "name": "边坝县",
                "firstLetter": "B"
            },
            {
                "code": "410822",
                "name": "博爱县",
                "firstLetter": "B"
            },
            {
                "code": "110100",
                "name": "北京市",
                "firstLetter": "B"
            },
            {
                "code": "654321",
                "name": "布尔津县",
                "firstLetter": "B"
            },
            {
                "code": "230523",
                "name": "宝清县",
                "firstLetter": "B"
            },
            {
                "code": "542329",
                "name": "白朗县",
                "firstLetter": "B"
            },
            {
                "code": "522401",
                "name": "毕节市",
                "firstLetter": "B"
            },
            {
                "code": "210500",
                "name": "本溪市",
                "firstLetter": "B"
            },
            {
                "code": "542423",
                "name": "比如县",
                "firstLetter": "B"
            },
            {
                "code": "210521",
                "name": "本溪满族自治县",
                "firstLetter": "B"
            },
            {
                "code": "542428",
                "name": "班戈县",
                "firstLetter": "B"
            },
            {
                "code": "542429",
                "name": "巴青县",
                "firstLetter": "B"
            },
            {
                "code": "450126",
                "name": "宾阳县",
                "firstLetter": "B"
            },
            {
                "code": "510726",
                "name": "北川羌族自治县",
                "firstLetter": "B"
            },
            {
                "code": "210782",
                "name": "北镇市",
                "firstLetter": "B"
            },
            {
                "code": "542625",
                "name": "波密县",
                "firstLetter": "B"
            },
            {
                "code": "230921",
                "name": "勃利县",
                "firstLetter": "B"
            },
            {
                "code": "140931",
                "name": "保德县",
                "firstLetter": "B"
            },
            {
                "code": "231181",
                "name": "北安市",
                "firstLetter": "B"
            },
            {
                "code": "610300",
                "name": "宝鸡市",
                "firstLetter": "B"
            },
            {
                "code": "632622",
                "name": "班玛县",
                "firstLetter": "B"
            },
            {
                "code": "450500",
                "name": "北海市",
                "firstLetter": "B"
            },
            {
                "code": "130524",
                "name": "柏乡县",
                "firstLetter": "B"
            },
            {
                "code": "211381",
                "name": "北票市",
                "firstLetter": "B"
            },
            {
                "code": "530500",
                "name": "保山市",
                "firstLetter": "B"
            },
            {
                "code": "610427",
                "name": "彬县",
                "firstLetter": "B"
            },
            {
                "code": "130600",
                "name": "保定市",
                "firstLetter": "B"
            },
            {
                "code": "433125",
                "name": "保靖县",
                "firstLetter": "B"
            },
            {
                "code": "450923",
                "name": "博白县",
                "firstLetter": "B"
            },
            {
                "code": "610527",
                "name": "白水县",
                "firstLetter": "B"
            },
            {
                "code": "450981",
                "name": "北流市",
                "firstLetter": "B"
            },
            {
                "code": "150200",
                "name": "包头市",
                "firstLetter": "B"
            },
            {
                "code": "451000",
                "name": "百色市",
                "firstLetter": "B"
            },
            {
                "code": "411726",
                "name": "泌阳县",
                "firstLetter": "B"
            },
            {
                "code": "130637",
                "name": "博野县",
                "firstLetter": "B"
            },
            {
                "code": "371600",
                "name": "滨州市",
                "firstLetter": "B"
            },
            {
                "code": "150422",
                "name": "巴林左旗",
                "firstLetter": "B"
            },
            {
                "code": "150423",
                "name": "巴林右旗",
                "firstLetter": "B"
            },
            {
                "code": "340300",
                "name": "蚌埠市",
                "firstLetter": "B"
            },
            {
                "code": "371625",
                "name": "博兴县",
                "firstLetter": "B"
            },
            {
                "code": "511827",
                "name": "宝兴县",
                "firstLetter": "B"
            },
            {
                "code": "511900",
                "name": "巴中市",
                "firstLetter": "B"
            },
            {
                "code": "371721",
                "name": "曹县",
                "firstLetter": "C"
            },
            {
                "code": "530927",
                "name": "沧源佤族自治县",
                "firstLetter": "C"
            },
            {
                "code": "371723",
                "name": "成武县",
                "firstLetter": "C"
            },
            {
                "code": "532300",
                "name": "楚雄彝族自治州",
                "firstLetter": "C"
            },
            {
                "code": "532301",
                "name": "楚雄市",
                "firstLetter": "C"
            },
            {
                "code": "130732",
                "name": "赤城县",
                "firstLetter": "C"
            },
            {
                "code": "130733",
                "name": "崇礼县",
                "firstLetter": "C"
            },
            {
                "code": "320400",
                "name": "常州市",
                "firstLetter": "C"
            },
            {
                "code": "451400",
                "name": "崇左市",
                "firstLetter": "C"
            },
            {
                "code": "130800",
                "name": "承德市",
                "firstLetter": "C"
            },
            {
                "code": "360725",
                "name": "崇义县",
                "firstLetter": "C"
            },
            {
                "code": "130821",
                "name": "承德县",
                "firstLetter": "C"
            },
            {
                "code": "652300",
                "name": "昌吉回族自治州",
                "firstLetter": "C"
            },
            {
                "code": "220623",
                "name": "长白朝鲜族自治县",
                "firstLetter": "C"
            },
            {
                "code": "652301",
                "name": "昌吉市",
                "firstLetter": "C"
            },
            {
                "code": "220722",
                "name": "长岭县",
                "firstLetter": "C"
            },
            {
                "code": "130900",
                "name": "沧州市",
                "firstLetter": "C"
            },
            {
                "code": "150725",
                "name": "陈巴尔虎旗",
                "firstLetter": "C"
            },
            {
                "code": "320581",
                "name": "常熟市",
                "firstLetter": "C"
            },
            {
                "code": "130921",
                "name": "沧县",
                "firstLetter": "C"
            },
            {
                "code": "469027",
                "name": "澄迈县",
                "firstLetter": "C"
            },
            {
                "code": "469031",
                "name": "昌江黎族自治县",
                "firstLetter": "C"
            },
            {
                "code": "150926",
                "name": "察哈尔右翼前旗",
                "firstLetter": "C"
            },
            {
                "code": "150927",
                "name": "察哈尔右翼中旗",
                "firstLetter": "C"
            },
            {
                "code": "341100",
                "name": "滁州市",
                "firstLetter": "C"
            },
            {
                "code": "150928",
                "name": "察哈尔右翼后旗",
                "firstLetter": "C"
            },
            {
                "code": "421223",
                "name": "崇阳县",
                "firstLetter": "C"
            },
            {
                "code": "421281",
                "name": "赤壁市",
                "firstLetter": "C"
            },
            {
                "code": "361024",
                "name": "崇仁县",
                "firstLetter": "C"
            },
            {
                "code": "500229",
                "name": "城口县",
                "firstLetter": "C"
            },
            {
                "code": "430100",
                "name": "长沙市",
                "firstLetter": "C"
            },
            {
                "code": "653225",
                "name": "策勒县",
                "firstLetter": "C"
            },
            {
                "code": "430121",
                "name": "长沙县",
                "firstLetter": "C"
            },
            {
                "code": "542121",
                "name": "昌都县",
                "firstLetter": "C"
            },
            {
                "code": "620823",
                "name": "崇信县",
                "firstLetter": "C"
            },
            {
                "code": "654022",
                "name": "察布查尔锡伯自治县",
                "firstLetter": "C"
            },
            {
                "code": "510100",
                "name": "成都市",
                "firstLetter": "C"
            },
            {
                "code": "542126",
                "name": "察雅县",
                "firstLetter": "C"
            },
            {
                "code": "341700",
                "name": "池州市",
                "firstLetter": "C"
            },
            {
                "code": "410728",
                "name": "长垣县",
                "firstLetter": "C"
            },
            {
                "code": "520381",
                "name": "赤水市",
                "firstLetter": "C"
            },
            {
                "code": "430224",
                "name": "茶陵县",
                "firstLetter": "C"
            },
            {
                "code": "140400",
                "name": "长治市",
                "firstLetter": "C"
            },
            {
                "code": "140421",
                "name": "长治县",
                "firstLetter": "C"
            },
            {
                "code": "542227",
                "name": "措美县",
                "firstLetter": "C"
            },
            {
                "code": "500100",
                "name": "重庆市",
                "firstLetter": "C"
            },
            {
                "code": "210224",
                "name": "长海县",
                "firstLetter": "C"
            },
            {
                "code": "542232",
                "name": "错那县",
                "firstLetter": "C"
            },
            {
                "code": "140428",
                "name": "长子县",
                "firstLetter": "C"
            },
            {
                "code": "510184",
                "name": "崇州市",
                "firstLetter": "C"
            },
            {
                "code": "445100",
                "name": "潮州市",
                "firstLetter": "C"
            },
            {
                "code": "430482",
                "name": "常宁市",
                "firstLetter": "C"
            },
            {
                "code": "445121",
                "name": "潮安县",
                "firstLetter": "C"
            },
            {
                "code": "330127",
                "name": "淳安县",
                "firstLetter": "C"
            },
            {
                "code": "350182",
                "name": "长乐市",
                "firstLetter": "C"
            },
            {
                "code": "621221",
                "name": "成县",
                "firstLetter": "C"
            },
            {
                "code": "522327",
                "name": "册亨县",
                "firstLetter": "C"
            },
            {
                "code": "411082",
                "name": "长葛市",
                "firstLetter": "C"
            },
            {
                "code": "430529",
                "name": "城步苗族自治县",
                "firstLetter": "C"
            },
            {
                "code": "330282",
                "name": "慈溪市",
                "firstLetter": "C"
            },
            {
                "code": "370634",
                "name": "长岛县",
                "firstLetter": "C"
            },
            {
                "code": "430700",
                "name": "常德市",
                "firstLetter": "C"
            },
            {
                "code": "330327",
                "name": "苍南县",
                "firstLetter": "C"
            },
            {
                "code": "522633",
                "name": "从江县",
                "firstLetter": "C"
            },
            {
                "code": "542527",
                "name": "措勤县",
                "firstLetter": "C"
            },
            {
                "code": "370725",
                "name": "昌乐县",
                "firstLetter": "C"
            },
            {
                "code": "430821",
                "name": "慈利县",
                "firstLetter": "C"
            },
            {
                "code": "542626",
                "name": "察隅县",
                "firstLetter": "C"
            },
            {
                "code": "510824",
                "name": "苍溪县",
                "firstLetter": "C"
            },
            {
                "code": "522729",
                "name": "长顺县",
                "firstLetter": "C"
            },
            {
                "code": "370786",
                "name": "昌邑市",
                "firstLetter": "C"
            },
            {
                "code": "330522",
                "name": "长兴县",
                "firstLetter": "C"
            },
            {
                "code": "431000",
                "name": "郴州市",
                "firstLetter": "C"
            },
            {
                "code": "350625",
                "name": "长泰县",
                "firstLetter": "C"
            },
            {
                "code": "130322",
                "name": "昌黎县",
                "firstLetter": "C"
            },
            {
                "code": "530121",
                "name": "呈贡县",
                "firstLetter": "C"
            },
            {
                "code": "130424",
                "name": "成安县",
                "firstLetter": "C"
            },
            {
                "code": "450421",
                "name": "苍梧县",
                "firstLetter": "C"
            },
            {
                "code": "130427",
                "name": "磁县",
                "firstLetter": "C"
            },
            {
                "code": "330822",
                "name": "常山县",
                "firstLetter": "C"
            },
            {
                "code": "350821",
                "name": "长汀县",
                "firstLetter": "C"
            },
            {
                "code": "211224",
                "name": "昌图县",
                "firstLetter": "C"
            },
            {
                "code": "530422",
                "name": "澄江县",
                "firstLetter": "C"
            },
            {
                "code": "632723",
                "name": "称多县",
                "firstLetter": "C"
            },
            {
                "code": "431223",
                "name": "辰溪县",
                "firstLetter": "C"
            },
            {
                "code": "211300",
                "name": "朝阳市",
                "firstLetter": "C"
            },
            {
                "code": "211321",
                "name": "朝阳县",
                "firstLetter": "C"
            },
            {
                "code": "610428",
                "name": "长武县",
                "firstLetter": "C"
            },
            {
                "code": "610430",
                "name": "淳化县",
                "firstLetter": "C"
            },
            {
                "code": "371324",
                "name": "苍山县",
                "firstLetter": "C"
            },
            {
                "code": "530524",
                "name": "昌宁县",
                "firstLetter": "C"
            },
            {
                "code": "511524",
                "name": "长宁县",
                "firstLetter": "C"
            },
            {
                "code": "220100",
                "name": "长春市",
                "firstLetter": "C"
            },
            {
                "code": "610525",
                "name": "澄城县",
                "firstLetter": "C"
            },
            {
                "code": "310230",
                "name": "崇明县",
                "firstLetter": "C"
            },
            {
                "code": "340121",
                "name": "长丰县",
                "firstLetter": "C"
            },
            {
                "code": "341400",
                "name": "巢湖市",
                "firstLetter": "C"
            },
            {
                "code": "440184",
                "name": "从化市",
                "firstLetter": "C"
            },
            {
                "code": "150400",
                "name": "赤峰市",
                "firstLetter": "C"
            },
            {
                "code": "420528",
                "name": "长阳土家族自治县",
                "firstLetter": "C"
            },
            {
                "code": "610722",
                "name": "城固县",
                "firstLetter": "C"
            },
            {
                "code": "371722",
                "name": "单县",
                "firstLetter": "D"
            },
            {
                "code": "451228",
                "name": "都安瑶族自治县",
                "firstLetter": "D"
            },
            {
                "code": "451229",
                "name": "大化瑶族自治县",
                "firstLetter": "D"
            },
            {
                "code": "220421",
                "name": "东丰县",
                "firstLetter": "D"
            },
            {
                "code": "220422",
                "name": "东辽县",
                "firstLetter": "D"
            },
            {
                "code": "371727",
                "name": "定陶县",
                "firstLetter": "D"
            },
            {
                "code": "371728",
                "name": "东明县",
                "firstLetter": "D"
            },
            {
                "code": "610825",
                "name": "定边县",
                "firstLetter": "D"
            },
            {
                "code": "532326",
                "name": "大姚县",
                "firstLetter": "D"
            },
            {
                "code": "150621",
                "name": "达拉特旗",
                "firstLetter": "D"
            },
            {
                "code": "360723",
                "name": "大余县",
                "firstLetter": "D"
            },
            {
                "code": "340521",
                "name": "当涂县",
                "firstLetter": "D"
            },
            {
                "code": "360728",
                "name": "定南县",
                "firstLetter": "D"
            },
            {
                "code": "451424",
                "name": "大新县",
                "firstLetter": "D"
            },
            {
                "code": "410185",
                "name": "登封市",
                "firstLetter": "D"
            },
            {
                "code": "420922",
                "name": "大悟县",
                "firstLetter": "D"
            },
            {
                "code": "513323",
                "name": "丹巴县",
                "firstLetter": "D"
            },
            {
                "code": "513326",
                "name": "道孚县",
                "firstLetter": "D"
            },
            {
                "code": "611022",
                "name": "丹凤县",
                "firstLetter": "D"
            },
            {
                "code": "130923",
                "name": "东光县",
                "firstLetter": "D"
            },
            {
                "code": "513330",
                "name": "德格县",
                "firstLetter": "D"
            },
            {
                "code": "220882",
                "name": "大安市",
                "firstLetter": "D"
            },
            {
                "code": "469007",
                "name": "东方市",
                "firstLetter": "D"
            },
            {
                "code": "469025",
                "name": "定安县",
                "firstLetter": "D"
            },
            {
                "code": "222403",
                "name": "敦化市",
                "firstLetter": "D"
            },
            {
                "code": "513337",
                "name": "稻城县",
                "firstLetter": "D"
            },
            {
                "code": "513338",
                "name": "得荣县",
                "firstLetter": "D"
            },
            {
                "code": "532900",
                "name": "大理白族自治州",
                "firstLetter": "D"
            },
            {
                "code": "532901",
                "name": "大理市",
                "firstLetter": "D"
            },
            {
                "code": "513424",
                "name": "德昌县",
                "firstLetter": "D"
            },
            {
                "code": "131025",
                "name": "大城县",
                "firstLetter": "D"
            },
            {
                "code": "131028",
                "name": "大厂回族自治县",
                "firstLetter": "D"
            },
            {
                "code": "320722",
                "name": "东海县",
                "firstLetter": "D"
            },
            {
                "code": "440923",
                "name": "电白县",
                "firstLetter": "D"
            },
            {
                "code": "341125",
                "name": "定远县",
                "firstLetter": "D"
            },
            {
                "code": "533100",
                "name": "德宏傣族景颇族自治州",
                "firstLetter": "D"
            },
            {
                "code": "441226",
                "name": "德庆县",
                "firstLetter": "D"
            },
            {
                "code": "361029",
                "name": "东乡县",
                "firstLetter": "D"
            },
            {
                "code": "500225",
                "name": "大足县",
                "firstLetter": "D"
            },
            {
                "code": "533400",
                "name": "迪庆藏族自治州",
                "firstLetter": "D"
            },
            {
                "code": "152525",
                "name": "东乌珠穆沁旗",
                "firstLetter": "D"
            },
            {
                "code": "533422",
                "name": "德钦县",
                "firstLetter": "D"
            },
            {
                "code": "500231",
                "name": "垫江县",
                "firstLetter": "D"
            },
            {
                "code": "320981",
                "name": "东台市",
                "firstLetter": "D"
            },
            {
                "code": "320982",
                "name": "大丰市",
                "firstLetter": "D"
            },
            {
                "code": "152531",
                "name": "多伦县",
                "firstLetter": "D"
            },
            {
                "code": "441422",
                "name": "大埔县",
                "firstLetter": "D"
            },
            {
                "code": "540122",
                "name": "当雄县",
                "firstLetter": "D"
            },
            {
                "code": "361181",
                "name": "德兴市",
                "firstLetter": "D"
            },
            {
                "code": "540125",
                "name": "堆龙德庆县",
                "firstLetter": "D"
            },
            {
                "code": "540126",
                "name": "达孜县",
                "firstLetter": "D"
            },
            {
                "code": "140200",
                "name": "大同市",
                "firstLetter": "D"
            },
            {
                "code": "520325",
                "name": "道真仡佬族苗族自治县",
                "firstLetter": "D"
            },
            {
                "code": "542125",
                "name": "丁青县",
                "firstLetter": "D"
            },
            {
                "code": "321181",
                "name": "丹阳市",
                "firstLetter": "D"
            },
            {
                "code": "140227",
                "name": "大同县",
                "firstLetter": "D"
            },
            {
                "code": "341721",
                "name": "东至县",
                "firstLetter": "D"
            },
            {
                "code": "441625",
                "name": "东源县",
                "firstLetter": "D"
            },
            {
                "code": "620982",
                "name": "敦煌市",
                "firstLetter": "D"
            },
            {
                "code": "210200",
                "name": "大连市",
                "firstLetter": "D"
            },
            {
                "code": "510129",
                "name": "大邑县",
                "firstLetter": "D"
            },
            {
                "code": "510181",
                "name": "都江堰市",
                "firstLetter": "D"
            },
            {
                "code": "522227",
                "name": "德江县",
                "firstLetter": "D"
            },
            {
                "code": "621100",
                "name": "定西市",
                "firstLetter": "D"
            },
            {
                "code": "441900",
                "name": "东莞市",
                "firstLetter": "D"
            },
            {
                "code": "542324",
                "name": "定日县",
                "firstLetter": "D"
            },
            {
                "code": "230600",
                "name": "大庆市",
                "firstLetter": "D"
            },
            {
                "code": "542332",
                "name": "定结县",
                "firstLetter": "D"
            },
            {
                "code": "230624",
                "name": "杜尔伯特蒙古族自治县",
                "firstLetter": "D"
            },
            {
                "code": "370500",
                "name": "东营市",
                "firstLetter": "D"
            },
            {
                "code": "430525",
                "name": "洞口县",
                "firstLetter": "D"
            },
            {
                "code": "522422",
                "name": "大方县",
                "firstLetter": "D"
            },
            {
                "code": "510600",
                "name": "德阳市",
                "firstLetter": "D"
            },
            {
                "code": "622926",
                "name": "东乡族自治县",
                "firstLetter": "D"
            },
            {
                "code": "210600",
                "name": "丹东市",
                "firstLetter": "D"
            },
            {
                "code": "330322",
                "name": "洞头县",
                "firstLetter": "D"
            },
            {
                "code": "350425",
                "name": "大田县",
                "firstLetter": "D"
            },
            {
                "code": "623024",
                "name": "迭部县",
                "firstLetter": "D"
            },
            {
                "code": "210681",
                "name": "东港市",
                "firstLetter": "D"
            },
            {
                "code": "522636",
                "name": "丹寨县",
                "firstLetter": "D"
            },
            {
                "code": "522701",
                "name": "都匀市",
                "firstLetter": "D"
            },
            {
                "code": "630121",
                "name": "大通回族土族自治县",
                "firstLetter": "D"
            },
            {
                "code": "522726",
                "name": "独山县",
                "firstLetter": "D"
            },
            {
                "code": "350526",
                "name": "德化县",
                "firstLetter": "D"
            },
            {
                "code": "411381",
                "name": "邓州市",
                "firstLetter": "D"
            },
            {
                "code": "330521",
                "name": "德清县",
                "firstLetter": "D"
            },
            {
                "code": "140921",
                "name": "定襄县",
                "firstLetter": "D"
            },
            {
                "code": "210882",
                "name": "大石桥市",
                "firstLetter": "D"
            },
            {
                "code": "140923",
                "name": "代县",
                "firstLetter": "D"
            },
            {
                "code": "510923",
                "name": "大英县",
                "firstLetter": "D"
            },
            {
                "code": "231024",
                "name": "东宁县",
                "firstLetter": "D"
            },
            {
                "code": "350626",
                "name": "东山县",
                "firstLetter": "D"
            },
            {
                "code": "211081",
                "name": "灯塔市",
                "firstLetter": "D"
            },
            {
                "code": "330783",
                "name": "东阳市",
                "firstLetter": "D"
            },
            {
                "code": "370923",
                "name": "东平县",
                "firstLetter": "D"
            },
            {
                "code": "130425",
                "name": "大名县",
                "firstLetter": "D"
            },
            {
                "code": "431122",
                "name": "东安县",
                "firstLetter": "D"
            },
            {
                "code": "211121",
                "name": "大洼县",
                "firstLetter": "D"
            },
            {
                "code": "431124",
                "name": "道县",
                "firstLetter": "D"
            },
            {
                "code": "141030",
                "name": "大宁县",
                "firstLetter": "D"
            },
            {
                "code": "411625",
                "name": "郸城县",
                "firstLetter": "D"
            },
            {
                "code": "632624",
                "name": "达日县",
                "firstLetter": "D"
            },
            {
                "code": "211281",
                "name": "调兵山市",
                "firstLetter": "D"
            },
            {
                "code": "450681",
                "name": "东兴市",
                "firstLetter": "D"
            },
            {
                "code": "632802",
                "name": "德令哈市",
                "firstLetter": "D"
            },
            {
                "code": "511424",
                "name": "丹棱县",
                "firstLetter": "D"
            },
            {
                "code": "632822",
                "name": "都兰县",
                "firstLetter": "D"
            },
            {
                "code": "371400",
                "name": "德州市",
                "firstLetter": "D"
            },
            {
                "code": "610523",
                "name": "大荔县",
                "firstLetter": "D"
            },
            {
                "code": "530624",
                "name": "大关县",
                "firstLetter": "D"
            },
            {
                "code": "420281",
                "name": "大冶市",
                "firstLetter": "D"
            },
            {
                "code": "220183",
                "name": "德惠市",
                "firstLetter": "D"
            },
            {
                "code": "130626",
                "name": "定兴县",
                "firstLetter": "D"
            },
            {
                "code": "420381",
                "name": "丹江口市",
                "firstLetter": "D"
            },
            {
                "code": "451024",
                "name": "德保县",
                "firstLetter": "D"
            },
            {
                "code": "511700",
                "name": "达州市",
                "firstLetter": "D"
            },
            {
                "code": "511721",
                "name": "达县",
                "firstLetter": "D"
            },
            {
                "code": "150223",
                "name": "达尔罕茂明安联合旗",
                "firstLetter": "D"
            },
            {
                "code": "511724",
                "name": "大竹县",
                "firstLetter": "D"
            },
            {
                "code": "371524",
                "name": "东阿县",
                "firstLetter": "D"
            },
            {
                "code": "130682",
                "name": "定州市",
                "firstLetter": "D"
            },
            {
                "code": "360426",
                "name": "德安县",
                "firstLetter": "D"
            },
            {
                "code": "420582",
                "name": "当阳市",
                "firstLetter": "D"
            },
            {
                "code": "360428",
                "name": "都昌县",
                "firstLetter": "D"
            },
            {
                "code": "451224",
                "name": "东兰县",
                "firstLetter": "D"
            },
            {
                "code": "420700",
                "name": "鄂州市",
                "firstLetter": "E"
            },
            {
                "code": "150600",
                "name": "鄂尔多斯市",
                "firstLetter": "E"
            },
            {
                "code": "150623",
                "name": "鄂托克前旗",
                "firstLetter": "E"
            },
            {
                "code": "150624",
                "name": "鄂托克旗",
                "firstLetter": "E"
            },
            {
                "code": "150723",
                "name": "鄂伦春自治旗",
                "firstLetter": "E"
            },
            {
                "code": "150724",
                "name": "鄂温克族自治旗",
                "firstLetter": "E"
            },
            {
                "code": "150784",
                "name": "额尔古纳市",
                "firstLetter": "E"
            },
            {
                "code": "440785",
                "name": "恩平市",
                "firstLetter": "E"
            },
            {
                "code": "532930",
                "name": "洱源县",
                "firstLetter": "E"
            },
            {
                "code": "422800",
                "name": "恩施土家族苗族自治州",
                "firstLetter": "E"
            },
            {
                "code": "422801",
                "name": "恩施市",
                "firstLetter": "E"
            },
            {
                "code": "152501",
                "name": "二连浩特市",
                "firstLetter": "E"
            },
            {
                "code": "152923",
                "name": "额济纳旗",
                "firstLetter": "E"
            },
            {
                "code": "654221",
                "name": "额敏县",
                "firstLetter": "E"
            },
            {
                "code": "511132",
                "name": "峨边彝族自治县",
                "firstLetter": "E"
            },
            {
                "code": "511181",
                "name": "峨眉山市",
                "firstLetter": "E"
            },
            {
                "code": "530426",
                "name": "峨山彝族自治县",
                "firstLetter": "E"
            },
            {
                "code": "610730",
                "name": "佛坪县",
                "firstLetter": "F"
            },
            {
                "code": "360521",
                "name": "分宜县",
                "firstLetter": "F"
            },
            {
                "code": "610822",
                "name": "府谷县",
                "firstLetter": "F"
            },
            {
                "code": "320321",
                "name": "丰县",
                "firstLetter": "F"
            },
            {
                "code": "340421",
                "name": "凤台县",
                "firstLetter": "F"
            },
            {
                "code": "451421",
                "name": "扶绥县",
                "firstLetter": "F"
            },
            {
                "code": "220621",
                "name": "抚松县",
                "firstLetter": "F"
            },
            {
                "code": "652302",
                "name": "阜康市",
                "firstLetter": "F"
            },
            {
                "code": "130826",
                "name": "丰宁满族自治县",
                "firstLetter": "F"
            },
            {
                "code": "440600",
                "name": "佛山市",
                "firstLetter": "F"
            },
            {
                "code": "220724",
                "name": "扶余县",
                "firstLetter": "F"
            },
            {
                "code": "532628",
                "name": "富宁县",
                "firstLetter": "F"
            },
            {
                "code": "360921",
                "name": "奉新县",
                "firstLetter": "F"
            },
            {
                "code": "360981",
                "name": "丰城市",
                "firstLetter": "F"
            },
            {
                "code": "150981",
                "name": "丰镇市",
                "firstLetter": "F"
            },
            {
                "code": "361000",
                "name": "抚州市",
                "firstLetter": "F"
            },
            {
                "code": "230124",
                "name": "方正县",
                "firstLetter": "F"
            },
            {
                "code": "341126",
                "name": "凤阳县",
                "firstLetter": "F"
            },
            {
                "code": "341200",
                "name": "阜阳市",
                "firstLetter": "F"
            },
            {
                "code": "441225",
                "name": "封开县",
                "firstLetter": "F"
            },
            {
                "code": "533323",
                "name": "福贡县",
                "firstLetter": "F"
            },
            {
                "code": "131128",
                "name": "阜城县",
                "firstLetter": "F"
            },
            {
                "code": "341225",
                "name": "阜南县",
                "firstLetter": "F"
            },
            {
                "code": "320923",
                "name": "阜宁县",
                "firstLetter": "F"
            },
            {
                "code": "500230",
                "name": "丰都县",
                "firstLetter": "F"
            },
            {
                "code": "500236",
                "name": "奉节县",
                "firstLetter": "F"
            },
            {
                "code": "441423",
                "name": "丰顺县",
                "firstLetter": "F"
            },
            {
                "code": "230227",
                "name": "富裕县",
                "firstLetter": "F"
            },
            {
                "code": "520327",
                "name": "凤冈县",
                "firstLetter": "F"
            },
            {
                "code": "410727",
                "name": "封丘县",
                "firstLetter": "F"
            },
            {
                "code": "210124",
                "name": "法库县",
                "firstLetter": "F"
            },
            {
                "code": "441821",
                "name": "佛冈县",
                "firstLetter": "F"
            },
            {
                "code": "654322",
                "name": "富蕴县",
                "firstLetter": "F"
            },
            {
                "code": "654323",
                "name": "福海县",
                "firstLetter": "F"
            },
            {
                "code": "350100",
                "name": "福州市",
                "firstLetter": "F"
            },
            {
                "code": "410926",
                "name": "范县",
                "firstLetter": "F"
            },
            {
                "code": "510322",
                "name": "富顺县",
                "firstLetter": "F"
            },
            {
                "code": "350181",
                "name": "福清市",
                "firstLetter": "F"
            },
            {
                "code": "330183",
                "name": "富阳市",
                "firstLetter": "F"
            },
            {
                "code": "210400",
                "name": "抚顺市",
                "firstLetter": "F"
            },
            {
                "code": "210421",
                "name": "抚顺县",
                "firstLetter": "F"
            },
            {
                "code": "330283",
                "name": "奉化市",
                "firstLetter": "F"
            },
            {
                "code": "210682",
                "name": "凤城市",
                "firstLetter": "F"
            },
            {
                "code": "411322",
                "name": "方城县",
                "firstLetter": "F"
            },
            {
                "code": "230833",
                "name": "抚远县",
                "firstLetter": "F"
            },
            {
                "code": "522702",
                "name": "福泉市",
                "firstLetter": "F"
            },
            {
                "code": "230882",
                "name": "富锦市",
                "firstLetter": "F"
            },
            {
                "code": "140924",
                "name": "繁峙县",
                "firstLetter": "F"
            },
            {
                "code": "210900",
                "name": "阜新市",
                "firstLetter": "F"
            },
            {
                "code": "210921",
                "name": "阜新蒙古族自治县",
                "firstLetter": "F"
            },
            {
                "code": "130323",
                "name": "抚宁县",
                "firstLetter": "F"
            },
            {
                "code": "530124",
                "name": "富民县",
                "firstLetter": "F"
            },
            {
                "code": "370983",
                "name": "肥城市",
                "firstLetter": "F"
            },
            {
                "code": "141027",
                "name": "浮山县",
                "firstLetter": "F"
            },
            {
                "code": "411621",
                "name": "扶沟县",
                "firstLetter": "F"
            },
            {
                "code": "610322",
                "name": "凤翔县",
                "firstLetter": "F"
            },
            {
                "code": "130428",
                "name": "肥乡县",
                "firstLetter": "F"
            },
            {
                "code": "610324",
                "name": "扶风县",
                "firstLetter": "F"
            },
            {
                "code": "530325",
                "name": "富源县",
                "firstLetter": "F"
            },
            {
                "code": "141034",
                "name": "汾西县",
                "firstLetter": "F"
            },
            {
                "code": "610330",
                "name": "凤县",
                "firstLetter": "F"
            },
            {
                "code": "450600",
                "name": "防城港市",
                "firstLetter": "F"
            },
            {
                "code": "141128",
                "name": "方山县",
                "firstLetter": "F"
            },
            {
                "code": "350981",
                "name": "福安市",
                "firstLetter": "F"
            },
            {
                "code": "350982",
                "name": "福鼎市",
                "firstLetter": "F"
            },
            {
                "code": "141182",
                "name": "汾阳市",
                "firstLetter": "F"
            },
            {
                "code": "371325",
                "name": "费县",
                "firstLetter": "F"
            },
            {
                "code": "433123",
                "name": "凤凰县",
                "firstLetter": "F"
            },
            {
                "code": "610528",
                "name": "富平县",
                "firstLetter": "F"
            },
            {
                "code": "130624",
                "name": "阜平县",
                "firstLetter": "F"
            },
            {
                "code": "420325",
                "name": "房县",
                "firstLetter": "F"
            },
            {
                "code": "340122",
                "name": "肥东县",
                "firstLetter": "F"
            },
            {
                "code": "360222",
                "name": "浮梁县",
                "firstLetter": "F"
            },
            {
                "code": "340123",
                "name": "肥西县",
                "firstLetter": "F"
            },
            {
                "code": "610628",
                "name": "富县",
                "firstLetter": "F"
            },
            {
                "code": "340222",
                "name": "繁昌县",
                "firstLetter": "F"
            },
            {
                "code": "451123",
                "name": "富川瑶族自治县",
                "firstLetter": "F"
            },
            {
                "code": "530921",
                "name": "凤庆县",
                "firstLetter": "F"
            },
            {
                "code": "451223",
                "name": "凤山县",
                "firstLetter": "F"
            },
            {
                "code": "530926",
                "name": "耿马傣族佤族自治县",
                "firstLetter": "G"
            },
            {
                "code": "340323",
                "name": "固镇县",
                "firstLetter": "G"
            },
            {
                "code": "420625",
                "name": "谷城县",
                "firstLetter": "G"
            },
            {
                "code": "130724",
                "name": "沽源县",
                "firstLetter": "G"
            },
            {
                "code": "360681",
                "name": "贵溪市",
                "firstLetter": "G"
            },
            {
                "code": "360700",
                "name": "赣州市",
                "firstLetter": "G"
            },
            {
                "code": "360721",
                "name": "赣县",
                "firstLetter": "G"
            },
            {
                "code": "532501",
                "name": "个旧市",
                "firstLetter": "G"
            },
            {
                "code": "410181",
                "name": "巩义市",
                "firstLetter": "G"
            },
            {
                "code": "513300",
                "name": "甘孜藏族自治州",
                "firstLetter": "G"
            },
            {
                "code": "421022",
                "name": "公安县",
                "firstLetter": "G"
            },
            {
                "code": "513328",
                "name": "甘孜县",
                "firstLetter": "G"
            },
            {
                "code": "150785",
                "name": "根河市",
                "firstLetter": "G"
            },
            {
                "code": "532627",
                "name": "广南县",
                "firstLetter": "G"
            },
            {
                "code": "620122",
                "name": "皋兰县",
                "firstLetter": "G"
            },
            {
                "code": "131022",
                "name": "固安县",
                "firstLetter": "G"
            },
            {
                "code": "320721",
                "name": "赣榆县",
                "firstLetter": "G"
            },
            {
                "code": "320723",
                "name": "灌云县",
                "firstLetter": "G"
            },
            {
                "code": "360983",
                "name": "高安市",
                "firstLetter": "G"
            },
            {
                "code": "320724",
                "name": "灌南县",
                "firstLetter": "G"
            },
            {
                "code": "440981",
                "name": "高州市",
                "firstLetter": "G"
            },
            {
                "code": "513435",
                "name": "甘洛县",
                "firstLetter": "G"
            },
            {
                "code": "421381",
                "name": "广水市",
                "firstLetter": "G"
            },
            {
                "code": "441223",
                "name": "广宁县",
                "firstLetter": "G"
            },
            {
                "code": "520100",
                "name": "贵阳市",
                "firstLetter": "G"
            },
            {
                "code": "131126",
                "name": "故城县",
                "firstLetter": "G"
            },
            {
                "code": "441283",
                "name": "高要市",
                "firstLetter": "G"
            },
            {
                "code": "620523",
                "name": "甘谷县",
                "firstLetter": "G"
            },
            {
                "code": "361030",
                "name": "广昌县",
                "firstLetter": "G"
            },
            {
                "code": "533324",
                "name": "贡山独龙族怒族自治县",
                "firstLetter": "G"
            },
            {
                "code": "361122",
                "name": "广丰县",
                "firstLetter": "G"
            },
            {
                "code": "620622",
                "name": "古浪县",
                "firstLetter": "G"
            },
            {
                "code": "230225",
                "name": "甘南县",
                "firstLetter": "G"
            },
            {
                "code": "620724",
                "name": "高台县",
                "firstLetter": "G"
            },
            {
                "code": "140181",
                "name": "古交市",
                "firstLetter": "G"
            },
            {
                "code": "321084",
                "name": "高邮市",
                "firstLetter": "G"
            },
            {
                "code": "542123",
                "name": "贡觉县",
                "firstLetter": "G"
            },
            {
                "code": "654024",
                "name": "巩留县",
                "firstLetter": "G"
            },
            {
                "code": "140223",
                "name": "广灵县",
                "firstLetter": "G"
            },
            {
                "code": "520424",
                "name": "关岭布依族苗族自治县",
                "firstLetter": "G"
            },
            {
                "code": "542223",
                "name": "贡嘎县",
                "firstLetter": "G"
            },
            {
                "code": "341822",
                "name": "广德县",
                "firstLetter": "G"
            },
            {
                "code": "370322",
                "name": "高青县",
                "firstLetter": "G"
            },
            {
                "code": "140581",
                "name": "高平市",
                "firstLetter": "G"
            },
            {
                "code": "542338",
                "name": "岗巴县",
                "firstLetter": "G"
            },
            {
                "code": "370523",
                "name": "广饶县",
                "firstLetter": "G"
            },
            {
                "code": "510525",
                "name": "古蔺县",
                "firstLetter": "G"
            },
            {
                "code": "622924",
                "name": "广河县",
                "firstLetter": "G"
            },
            {
                "code": "130127",
                "name": "高邑县",
                "firstLetter": "G"
            },
            {
                "code": "510681",
                "name": "广汉市",
                "firstLetter": "G"
            },
            {
                "code": "623000",
                "name": "甘南藏族自治州",
                "firstLetter": "G"
            },
            {
                "code": "542523",
                "name": "噶尔县",
                "firstLetter": "G"
            },
            {
                "code": "542525",
                "name": "革吉县",
                "firstLetter": "G"
            },
            {
                "code": "542526",
                "name": "改则县",
                "firstLetter": "G"
            },
            {
                "code": "542622",
                "name": "工布江达县",
                "firstLetter": "G"
            },
            {
                "code": "510800",
                "name": "广元市",
                "firstLetter": "G"
            },
            {
                "code": "522723",
                "name": "贵定县",
                "firstLetter": "G"
            },
            {
                "code": "370785",
                "name": "高密市",
                "firstLetter": "G"
            },
            {
                "code": "210881",
                "name": "盖州市",
                "firstLetter": "G"
            },
            {
                "code": "450300",
                "name": "桂林市",
                "firstLetter": "G"
            },
            {
                "code": "431021",
                "name": "桂阳县",
                "firstLetter": "G"
            },
            {
                "code": "632224",
                "name": "刚察县",
                "firstLetter": "G"
            },
            {
                "code": "610126",
                "name": "高陵县",
                "firstLetter": "G"
            },
            {
                "code": "450327",
                "name": "灌阳县",
                "firstLetter": "G"
            },
            {
                "code": "411522",
                "name": "光山县",
                "firstLetter": "G"
            },
            {
                "code": "431027",
                "name": "桂东县",
                "firstLetter": "G"
            },
            {
                "code": "411525",
                "name": "固始县",
                "firstLetter": "G"
            },
            {
                "code": "450332",
                "name": "恭城瑶族自治县",
                "firstLetter": "G"
            },
            {
                "code": "632521",
                "name": "共和县",
                "firstLetter": "G"
            },
            {
                "code": "350723",
                "name": "光泽县",
                "firstLetter": "G"
            },
            {
                "code": "632523",
                "name": "贵德县",
                "firstLetter": "G"
            },
            {
                "code": "141025",
                "name": "古县",
                "firstLetter": "G"
            },
            {
                "code": "632525",
                "name": "贵南县",
                "firstLetter": "G"
            },
            {
                "code": "632600",
                "name": "果洛藏族自治州",
                "firstLetter": "G"
            },
            {
                "code": "632623",
                "name": "甘德县",
                "firstLetter": "G"
            },
            {
                "code": "130432",
                "name": "广平县",
                "firstLetter": "G"
            },
            {
                "code": "130433",
                "name": "馆陶县",
                "firstLetter": "G"
            },
            {
                "code": "350922",
                "name": "古田县",
                "firstLetter": "G"
            },
            {
                "code": "632801",
                "name": "格尔木市",
                "firstLetter": "G"
            },
            {
                "code": "450800",
                "name": "贵港市",
                "firstLetter": "G"
            },
            {
                "code": "130531",
                "name": "广宗县",
                "firstLetter": "G"
            },
            {
                "code": "450881",
                "name": "桂平市",
                "firstLetter": "G"
            },
            {
                "code": "511525",
                "name": "高县",
                "firstLetter": "G"
            },
            {
                "code": "433126",
                "name": "古丈县",
                "firstLetter": "G"
            },
            {
                "code": "511600",
                "name": "广安市",
                "firstLetter": "G"
            },
            {
                "code": "440100",
                "name": "广州市",
                "firstLetter": "G"
            },
            {
                "code": "130628",
                "name": "高阳县",
                "firstLetter": "G"
            },
            {
                "code": "640400",
                "name": "固原市",
                "firstLetter": "G"
            },
            {
                "code": "150222",
                "name": "固阳县",
                "firstLetter": "G"
            },
            {
                "code": "610627",
                "name": "甘泉县",
                "firstLetter": "G"
            },
            {
                "code": "371525",
                "name": "冠县",
                "firstLetter": "G"
            },
            {
                "code": "371526",
                "name": "高唐县",
                "firstLetter": "G"
            },
            {
                "code": "320125",
                "name": "高淳县",
                "firstLetter": "G"
            },
            {
                "code": "130684",
                "name": "高碑店市",
                "firstLetter": "G"
            },
            {
                "code": "220381",
                "name": "公主岭市",
                "firstLetter": "G"
            },
            {
                "code": "340321",
                "name": "怀远县",
                "firstLetter": "H"
            },
            {
                "code": "451226",
                "name": "环江毛南族自治县",
                "firstLetter": "H"
            },
            {
                "code": "340400",
                "name": "淮南市",
                "firstLetter": "H"
            },
            {
                "code": "610823",
                "name": "横山县",
                "firstLetter": "H"
            },
            {
                "code": "130728",
                "name": "怀安县",
                "firstLetter": "H"
            },
            {
                "code": "130730",
                "name": "怀来县",
                "firstLetter": "H"
            },
            {
                "code": "150581",
                "name": "霍林郭勒市",
                "firstLetter": "H"
            },
            {
                "code": "220523",
                "name": "辉南县",
                "firstLetter": "H"
            },
            {
                "code": "451381",
                "name": "合山市",
                "firstLetter": "H"
            },
            {
                "code": "532500",
                "name": "红河哈尼族彝族自治州",
                "firstLetter": "H"
            },
            {
                "code": "652201",
                "name": "哈密市",
                "firstLetter": "H"
            },
            {
                "code": "513228",
                "name": "黑水县",
                "firstLetter": "H"
            },
            {
                "code": "150625",
                "name": "杭锦旗",
                "firstLetter": "H"
            },
            {
                "code": "341423",
                "name": "含山县",
                "firstLetter": "H"
            },
            {
                "code": "610921",
                "name": "汉阴县",
                "firstLetter": "H"
            },
            {
                "code": "341424",
                "name": "和县",
                "firstLetter": "H"
            },
            {
                "code": "340600",
                "name": "淮北市",
                "firstLetter": "H"
            },
            {
                "code": "150700",
                "name": "呼伦贝尔市",
                "firstLetter": "H"
            },
            {
                "code": "513233",
                "name": "红原县",
                "firstLetter": "H"
            },
            {
                "code": "652323",
                "name": "呼图壁县",
                "firstLetter": "H"
            },
            {
                "code": "360733",
                "name": "会昌县",
                "firstLetter": "H"
            },
            {
                "code": "460100",
                "name": "海口市",
                "firstLetter": "H"
            },
            {
                "code": "532529",
                "name": "红河县",
                "firstLetter": "H"
            },
            {
                "code": "420984",
                "name": "汉川市",
                "firstLetter": "H"
            },
            {
                "code": "532532",
                "name": "河口瑶族自治县",
                "firstLetter": "H"
            },
            {
                "code": "130924",
                "name": "海兴县",
                "firstLetter": "H"
            },
            {
                "code": "340822",
                "name": "怀宁县",
                "firstLetter": "H"
            },
            {
                "code": "421083",
                "name": "洪湖市",
                "firstLetter": "H"
            },
            {
                "code": "421100",
                "name": "黄冈市",
                "firstLetter": "H"
            },
            {
                "code": "440784",
                "name": "鹤山市",
                "firstLetter": "H"
            },
            {
                "code": "652827",
                "name": "和静县",
                "firstLetter": "H"
            },
            {
                "code": "320621",
                "name": "海安县",
                "firstLetter": "H"
            },
            {
                "code": "421122",
                "name": "红安县",
                "firstLetter": "H"
            },
            {
                "code": "652828",
                "name": "和硕县",
                "firstLetter": "H"
            },
            {
                "code": "130983",
                "name": "黄骅市",
                "firstLetter": "H"
            },
            {
                "code": "130984",
                "name": "河间市",
                "firstLetter": "H"
            },
            {
                "code": "150826",
                "name": "杭锦后旗",
                "firstLetter": "H"
            },
            {
                "code": "222406",
                "name": "和龙市",
                "firstLetter": "H"
            },
            {
                "code": "341000",
                "name": "黄山市",
                "firstLetter": "H"
            },
            {
                "code": "320684",
                "name": "海门市",
                "firstLetter": "H"
            },
            {
                "code": "421127",
                "name": "黄梅县",
                "firstLetter": "H"
            },
            {
                "code": "150922",
                "name": "化德县",
                "firstLetter": "H"
            },
            {
                "code": "230100",
                "name": "哈尔滨市",
                "firstLetter": "H"
            },
            {
                "code": "513425",
                "name": "会理县",
                "firstLetter": "H"
            },
            {
                "code": "513426",
                "name": "会东县",
                "firstLetter": "H"
            },
            {
                "code": "532932",
                "name": "鹤庆县",
                "firstLetter": "H"
            },
            {
                "code": "440982",
                "name": "化州市",
                "firstLetter": "H"
            },
            {
                "code": "320800",
                "name": "淮安市",
                "firstLetter": "H"
            },
            {
                "code": "131100",
                "name": "衡水市",
                "firstLetter": "H"
            },
            {
                "code": "620422",
                "name": "会宁县",
                "firstLetter": "H"
            },
            {
                "code": "320829",
                "name": "洪泽县",
                "firstLetter": "H"
            },
            {
                "code": "441224",
                "name": "怀集县",
                "firstLetter": "H"
            },
            {
                "code": "441300",
                "name": "惠州市",
                "firstLetter": "H"
            },
            {
                "code": "422828",
                "name": "鹤峰县",
                "firstLetter": "H"
            },
            {
                "code": "410526",
                "name": "滑县",
                "firstLetter": "H"
            },
            {
                "code": "441323",
                "name": "惠东县",
                "firstLetter": "H"
            },
            {
                "code": "361125",
                "name": "横峰县",
                "firstLetter": "H"
            },
            {
                "code": "653201",
                "name": "和田市",
                "firstLetter": "H"
            },
            {
                "code": "653221",
                "name": "和田县",
                "firstLetter": "H"
            },
            {
                "code": "410600",
                "name": "鹤壁市",
                "firstLetter": "H"
            },
            {
                "code": "341522",
                "name": "霍邱县",
                "firstLetter": "H"
            },
            {
                "code": "341525",
                "name": "霍山县",
                "firstLetter": "H"
            },
            {
                "code": "441521",
                "name": "海丰县",
                "firstLetter": "H"
            },
            {
                "code": "620824",
                "name": "华亭县",
                "firstLetter": "H"
            },
            {
                "code": "654023",
                "name": "霍城县",
                "firstLetter": "H"
            },
            {
                "code": "410724",
                "name": "获嘉县",
                "firstLetter": "H"
            },
            {
                "code": "441600",
                "name": "河源市",
                "firstLetter": "H"
            },
            {
                "code": "140225",
                "name": "浑源县",
                "firstLetter": "H"
            },
            {
                "code": "230381",
                "name": "虎林市",
                "firstLetter": "H"
            },
            {
                "code": "410782",
                "name": "辉县市",
                "firstLetter": "H"
            },
            {
                "code": "441624",
                "name": "和平县",
                "firstLetter": "H"
            },
            {
                "code": "230400",
                "name": "鹤岗市",
                "firstLetter": "H"
            },
            {
                "code": "654226",
                "name": "和布克赛尔蒙古自治县",
                "firstLetter": "H"
            },
            {
                "code": "621022",
                "name": "环县",
                "firstLetter": "H"
            },
            {
                "code": "621023",
                "name": "华池县",
                "firstLetter": "H"
            },
            {
                "code": "430400",
                "name": "衡阳市",
                "firstLetter": "H"
            },
            {
                "code": "621024",
                "name": "合水县",
                "firstLetter": "H"
            },
            {
                "code": "140427",
                "name": "壶关县",
                "firstLetter": "H"
            },
            {
                "code": "654324",
                "name": "哈巴河县",
                "firstLetter": "H"
            },
            {
                "code": "330100",
                "name": "杭州市",
                "firstLetter": "H"
            },
            {
                "code": "430421",
                "name": "衡阳县",
                "firstLetter": "H"
            },
            {
                "code": "430422",
                "name": "衡南县",
                "firstLetter": "H"
            },
            {
                "code": "430423",
                "name": "衡山县",
                "firstLetter": "H"
            },
            {
                "code": "430424",
                "name": "衡东县",
                "firstLetter": "H"
            },
            {
                "code": "370321",
                "name": "桓台县",
                "firstLetter": "H"
            },
            {
                "code": "210381",
                "name": "海城市",
                "firstLetter": "H"
            },
            {
                "code": "445224",
                "name": "惠来县",
                "firstLetter": "H"
            },
            {
                "code": "621227",
                "name": "徽县",
                "firstLetter": "H"
            },
            {
                "code": "510522",
                "name": "合江县",
                "firstLetter": "H"
            },
            {
                "code": "140624",
                "name": "怀仁县",
                "firstLetter": "H"
            },
            {
                "code": "522428",
                "name": "赫章县",
                "firstLetter": "H"
            },
            {
                "code": "622925",
                "name": "和政县",
                "firstLetter": "H"
            },
            {
                "code": "522622",
                "name": "黄平县",
                "firstLetter": "H"
            },
            {
                "code": "140723",
                "name": "和顺县",
                "firstLetter": "H"
            },
            {
                "code": "430623",
                "name": "华容县",
                "firstLetter": "H"
            },
            {
                "code": "210522",
                "name": "桓仁满族自治县",
                "firstLetter": "H"
            },
            {
                "code": "623001",
                "name": "合作市",
                "firstLetter": "H"
            },
            {
                "code": "370687",
                "name": "海阳市",
                "firstLetter": "H"
            },
            {
                "code": "430722",
                "name": "汉寿县",
                "firstLetter": "H"
            },
            {
                "code": "450127",
                "name": "横县",
                "firstLetter": "H"
            },
            {
                "code": "210726",
                "name": "黑山县",
                "firstLetter": "H"
            },
            {
                "code": "330424",
                "name": "海盐县",
                "firstLetter": "H"
            },
            {
                "code": "330481",
                "name": "海宁市",
                "firstLetter": "H"
            },
            {
                "code": "350521",
                "name": "惠安县",
                "firstLetter": "H"
            },
            {
                "code": "140882",
                "name": "河津市",
                "firstLetter": "H"
            },
            {
                "code": "330500",
                "name": "湖州市",
                "firstLetter": "H"
            },
            {
                "code": "522731",
                "name": "惠水县",
                "firstLetter": "H"
            },
            {
                "code": "632126",
                "name": "互助土族自治县",
                "firstLetter": "H"
            },
            {
                "code": "632127",
                "name": "化隆回族自治县",
                "firstLetter": "H"
            },
            {
                "code": "632200",
                "name": "海北藏族自治州",
                "firstLetter": "H"
            },
            {
                "code": "632223",
                "name": "海晏县",
                "firstLetter": "H"
            },
            {
                "code": "140930",
                "name": "河曲县",
                "firstLetter": "H"
            },
            {
                "code": "231083",
                "name": "海林市",
                "firstLetter": "H"
            },
            {
                "code": "610125",
                "name": "户县",
                "firstLetter": "H"
            },
            {
                "code": "632300",
                "name": "黄南藏族自治州",
                "firstLetter": "H"
            },
            {
                "code": "350629",
                "name": "华安县",
                "firstLetter": "H"
            },
            {
                "code": "231100",
                "name": "黑河市",
                "firstLetter": "H"
            },
            {
                "code": "130400",
                "name": "邯郸市",
                "firstLetter": "H"
            },
            {
                "code": "632324",
                "name": "河南蒙古族自治县",
                "firstLetter": "H"
            },
            {
                "code": "632500",
                "name": "海南藏族自治州",
                "firstLetter": "H"
            },
            {
                "code": "411527",
                "name": "淮滨县",
                "firstLetter": "H"
            },
            {
                "code": "130421",
                "name": "邯郸县",
                "firstLetter": "H"
            },
            {
                "code": "141024",
                "name": "洪洞县",
                "firstLetter": "H"
            },
            {
                "code": "530326",
                "name": "会泽县",
                "firstLetter": "H"
            },
            {
                "code": "411626",
                "name": "淮阳县",
                "firstLetter": "H"
            },
            {
                "code": "141081",
                "name": "侯马市",
                "firstLetter": "H"
            },
            {
                "code": "141082",
                "name": "霍州市",
                "firstLetter": "H"
            },
            {
                "code": "231283",
                "name": "海伦市",
                "firstLetter": "H"
            },
            {
                "code": "431200",
                "name": "怀化市",
                "firstLetter": "H"
            },
            {
                "code": "450521",
                "name": "合浦县",
                "firstLetter": "H"
            },
            {
                "code": "232721",
                "name": "呼玛县",
                "firstLetter": "H"
            },
            {
                "code": "530424",
                "name": "华宁县",
                "firstLetter": "H"
            },
            {
                "code": "431225",
                "name": "会同县",
                "firstLetter": "H"
            },
            {
                "code": "632800",
                "name": "海西蒙古族藏族自治州",
                "firstLetter": "H"
            },
            {
                "code": "511423",
                "name": "洪雅县",
                "firstLetter": "H"
            },
            {
                "code": "431281",
                "name": "洪江市",
                "firstLetter": "H"
            },
            {
                "code": "211400",
                "name": "葫芦岛市",
                "firstLetter": "H"
            },
            {
                "code": "150100",
                "name": "呼和浩特市",
                "firstLetter": "H"
            },
            {
                "code": "420200",
                "name": "黄石市",
                "firstLetter": "H"
            },
            {
                "code": "610521",
                "name": "华县",
                "firstLetter": "H"
            },
            {
                "code": "640122",
                "name": "贺兰县",
                "firstLetter": "H"
            },
            {
                "code": "610524",
                "name": "合阳县",
                "firstLetter": "H"
            },
            {
                "code": "150123",
                "name": "和林格尔县",
                "firstLetter": "H"
            },
            {
                "code": "433124",
                "name": "花垣县",
                "firstLetter": "H"
            },
            {
                "code": "340100",
                "name": "合肥市",
                "firstLetter": "H"
            },
            {
                "code": "610581",
                "name": "韩城市",
                "firstLetter": "H"
            },
            {
                "code": "610582",
                "name": "华阴市",
                "firstLetter": "H"
            },
            {
                "code": "511681",
                "name": "华蓥市",
                "firstLetter": "H"
            },
            {
                "code": "530723",
                "name": "华坪县",
                "firstLetter": "H"
            },
            {
                "code": "610631",
                "name": "黄龙县",
                "firstLetter": "H"
            },
            {
                "code": "451100",
                "name": "贺州市",
                "firstLetter": "H"
            },
            {
                "code": "610632",
                "name": "黄陵县",
                "firstLetter": "H"
            },
            {
                "code": "610700",
                "name": "汉中市",
                "firstLetter": "H"
            },
            {
                "code": "640522",
                "name": "海原县",
                "firstLetter": "H"
            },
            {
                "code": "371621",
                "name": "惠民县",
                "firstLetter": "H"
            },
            {
                "code": "511823",
                "name": "汉源县",
                "firstLetter": "H"
            },
            {
                "code": "451200",
                "name": "河池市",
                "firstLetter": "H"
            },
            {
                "code": "360429",
                "name": "湖口县",
                "firstLetter": "H"
            },
            {
                "code": "371700",
                "name": "菏泽市",
                "firstLetter": "H"
            },
            {
                "code": "371724",
                "name": "巨野县",
                "firstLetter": "J"
            },
            {
                "code": "512081",
                "name": "简阳市",
                "firstLetter": "J"
            },
            {
                "code": "610824",
                "name": "靖边县",
                "firstLetter": "J"
            },
            {
                "code": "451324",
                "name": "金秀瑶族自治县",
                "firstLetter": "J"
            },
            {
                "code": "610828",
                "name": "佳县",
                "firstLetter": "J"
            },
            {
                "code": "420800",
                "name": "荆门市",
                "firstLetter": "J"
            },
            {
                "code": "220582",
                "name": "集安市",
                "firstLetter": "J"
            },
            {
                "code": "513225",
                "name": "九寨沟县",
                "firstLetter": "J"
            },
            {
                "code": "513226",
                "name": "金川县",
                "firstLetter": "J"
            },
            {
                "code": "420821",
                "name": "京山县",
                "firstLetter": "J"
            },
            {
                "code": "220622",
                "name": "靖宇县",
                "firstLetter": "J"
            },
            {
                "code": "532524",
                "name": "建水县",
                "firstLetter": "J"
            },
            {
                "code": "320482",
                "name": "金坛市",
                "firstLetter": "J"
            },
            {
                "code": "532530",
                "name": "金平苗族瑶族傣族自治县",
                "firstLetter": "J"
            },
            {
                "code": "652327",
                "name": "吉木萨尔县",
                "firstLetter": "J"
            },
            {
                "code": "513324",
                "name": "九龙县",
                "firstLetter": "J"
            },
            {
                "code": "421000",
                "name": "荆州市",
                "firstLetter": "J"
            },
            {
                "code": "360800",
                "name": "吉安市",
                "firstLetter": "J"
            },
            {
                "code": "652722",
                "name": "精河县",
                "firstLetter": "J"
            },
            {
                "code": "421023",
                "name": "监利县",
                "firstLetter": "J"
            },
            {
                "code": "440700",
                "name": "江门市",
                "firstLetter": "J"
            },
            {
                "code": "360821",
                "name": "吉安县",
                "firstLetter": "J"
            },
            {
                "code": "421024",
                "name": "江陵县",
                "firstLetter": "J"
            },
            {
                "code": "360822",
                "name": "吉水县",
                "firstLetter": "J"
            },
            {
                "code": "532801",
                "name": "景洪市",
                "firstLetter": "J"
            },
            {
                "code": "360881",
                "name": "井冈山市",
                "firstLetter": "J"
            },
            {
                "code": "620200",
                "name": "嘉峪关市",
                "firstLetter": "J"
            },
            {
                "code": "360925",
                "name": "靖安县",
                "firstLetter": "J"
            },
            {
                "code": "620300",
                "name": "金昌市",
                "firstLetter": "J"
            },
            {
                "code": "421221",
                "name": "嘉鱼县",
                "firstLetter": "J"
            },
            {
                "code": "513430",
                "name": "金阳县",
                "firstLetter": "J"
            },
            {
                "code": "532931",
                "name": "剑川县",
                "firstLetter": "J"
            },
            {
                "code": "620421",
                "name": "靖远县",
                "firstLetter": "J"
            },
            {
                "code": "620423",
                "name": "景泰县",
                "firstLetter": "J"
            },
            {
                "code": "361027",
                "name": "金溪县",
                "firstLetter": "J"
            },
            {
                "code": "320831",
                "name": "金湖县",
                "firstLetter": "J"
            },
            {
                "code": "131127",
                "name": "景县",
                "firstLetter": "J"
            },
            {
                "code": "422822",
                "name": "建始县",
                "firstLetter": "J"
            },
            {
                "code": "131181",
                "name": "冀州市",
                "firstLetter": "J"
            },
            {
                "code": "341282",
                "name": "界首市",
                "firstLetter": "J"
            },
            {
                "code": "320925",
                "name": "建湖县",
                "firstLetter": "J"
            },
            {
                "code": "410621",
                "name": "浚县",
                "firstLetter": "J"
            },
            {
                "code": "441427",
                "name": "蕉岭县",
                "firstLetter": "J"
            },
            {
                "code": "370100",
                "name": "济南市",
                "firstLetter": "J"
            },
            {
                "code": "321088",
                "name": "江都市",
                "firstLetter": "J"
            },
            {
                "code": "341524",
                "name": "金寨县",
                "firstLetter": "J"
            },
            {
                "code": "230300",
                "name": "鸡西市",
                "firstLetter": "J"
            },
            {
                "code": "542122",
                "name": "江达县",
                "firstLetter": "J"
            },
            {
                "code": "620826",
                "name": "静宁县",
                "firstLetter": "J"
            },
            {
                "code": "370125",
                "name": "济阳县",
                "firstLetter": "J"
            },
            {
                "code": "620900",
                "name": "酒泉市",
                "firstLetter": "J"
            },
            {
                "code": "230321",
                "name": "鸡东县",
                "firstLetter": "J"
            },
            {
                "code": "321183",
                "name": "句容市",
                "firstLetter": "J"
            },
            {
                "code": "620921",
                "name": "金塔县",
                "firstLetter": "J"
            },
            {
                "code": "410800",
                "name": "焦作市",
                "firstLetter": "J"
            },
            {
                "code": "321282",
                "name": "靖江市",
                "firstLetter": "J"
            },
            {
                "code": "321284",
                "name": "姜堰市",
                "firstLetter": "J"
            },
            {
                "code": "510121",
                "name": "金堂县",
                "firstLetter": "J"
            },
            {
                "code": "341824",
                "name": "绩溪县",
                "firstLetter": "J"
            },
            {
                "code": "370281",
                "name": "胶州市",
                "firstLetter": "J"
            },
            {
                "code": "370282",
                "name": "即墨市",
                "firstLetter": "J"
            },
            {
                "code": "522222",
                "name": "江口县",
                "firstLetter": "J"
            },
            {
                "code": "370284",
                "name": "胶南市",
                "firstLetter": "J"
            },
            {
                "code": "542229",
                "name": "加查县",
                "firstLetter": "J"
            },
            {
                "code": "654326",
                "name": "吉木乃县",
                "firstLetter": "J"
            },
            {
                "code": "230521",
                "name": "集贤县",
                "firstLetter": "J"
            },
            {
                "code": "542323",
                "name": "江孜县",
                "firstLetter": "J"
            },
            {
                "code": "140500",
                "name": "晋城市",
                "firstLetter": "J"
            },
            {
                "code": "330182",
                "name": "建德市",
                "firstLetter": "J"
            },
            {
                "code": "445200",
                "name": "揭阳市",
                "firstLetter": "J"
            },
            {
                "code": "120223",
                "name": "静海县",
                "firstLetter": "J"
            },
            {
                "code": "120225",
                "name": "蓟县",
                "firstLetter": "J"
            },
            {
                "code": "445221",
                "name": "揭东县",
                "firstLetter": "J"
            },
            {
                "code": "445222",
                "name": "揭西县",
                "firstLetter": "J"
            },
            {
                "code": "542335",
                "name": "吉隆县",
                "firstLetter": "J"
            },
            {
                "code": "522424",
                "name": "金沙县",
                "firstLetter": "J"
            },
            {
                "code": "542422",
                "name": "嘉黎县",
                "firstLetter": "J"
            },
            {
                "code": "130121",
                "name": "井陉县",
                "firstLetter": "J"
            },
            {
                "code": "140700",
                "name": "晋中市",
                "firstLetter": "J"
            },
            {
                "code": "622927",
                "name": "积石山保安族东乡族撒拉族自治县",
                "firstLetter": "J"
            },
            {
                "code": "230722",
                "name": "嘉荫县",
                "firstLetter": "J"
            },
            {
                "code": "522628",
                "name": "锦屏县",
                "firstLetter": "J"
            },
            {
                "code": "522629",
                "name": "剑河县",
                "firstLetter": "J"
            },
            {
                "code": "140781",
                "name": "介休市",
                "firstLetter": "J"
            },
            {
                "code": "230800",
                "name": "佳木斯市",
                "firstLetter": "J"
            },
            {
                "code": "350428",
                "name": "将乐县",
                "firstLetter": "J"
            },
            {
                "code": "130183",
                "name": "晋州市",
                "firstLetter": "J"
            },
            {
                "code": "350430",
                "name": "建宁县",
                "firstLetter": "J"
            },
            {
                "code": "210700",
                "name": "锦州市",
                "firstLetter": "J"
            },
            {
                "code": "330400",
                "name": "嘉兴市",
                "firstLetter": "J"
            },
            {
                "code": "430781",
                "name": "津市市",
                "firstLetter": "J"
            },
            {
                "code": "510781",
                "name": "江油市",
                "firstLetter": "J"
            },
            {
                "code": "330421",
                "name": "嘉善县",
                "firstLetter": "J"
            },
            {
                "code": "350527",
                "name": "金门县",
                "firstLetter": "J"
            },
            {
                "code": "510823",
                "name": "剑阁县",
                "firstLetter": "J"
            },
            {
                "code": "350582",
                "name": "晋江市",
                "firstLetter": "J"
            },
            {
                "code": "370800",
                "name": "济宁市",
                "firstLetter": "J"
            },
            {
                "code": "140926",
                "name": "静乐县",
                "firstLetter": "J"
            },
            {
                "code": "370828",
                "name": "金乡县",
                "firstLetter": "J"
            },
            {
                "code": "370829",
                "name": "嘉祥县",
                "firstLetter": "J"
            },
            {
                "code": "330700",
                "name": "金华市",
                "firstLetter": "J"
            },
            {
                "code": "431024",
                "name": "嘉禾县",
                "firstLetter": "J"
            },
            {
                "code": "530122",
                "name": "晋宁县",
                "firstLetter": "J"
            },
            {
                "code": "632322",
                "name": "尖扎县",
                "firstLetter": "J"
            },
            {
                "code": "511124",
                "name": "井研县",
                "firstLetter": "J"
            },
            {
                "code": "511126",
                "name": "夹江县",
                "firstLetter": "J"
            },
            {
                "code": "141028",
                "name": "吉县",
                "firstLetter": "J"
            },
            {
                "code": "350783",
                "name": "建瓯市",
                "firstLetter": "J"
            },
            {
                "code": "350784",
                "name": "建阳市",
                "firstLetter": "J"
            },
            {
                "code": "431125",
                "name": "江永县",
                "firstLetter": "J"
            },
            {
                "code": "130431",
                "name": "鸡泽县",
                "firstLetter": "J"
            },
            {
                "code": "330881",
                "name": "江山市",
                "firstLetter": "J"
            },
            {
                "code": "632625",
                "name": "久治县",
                "firstLetter": "J"
            },
            {
                "code": "431129",
                "name": "江华瑶族自治县",
                "firstLetter": "J"
            },
            {
                "code": "530421",
                "name": "江川县",
                "firstLetter": "J"
            },
            {
                "code": "141122",
                "name": "交城县",
                "firstLetter": "J"
            },
            {
                "code": "211322",
                "name": "建平县",
                "firstLetter": "J"
            },
            {
                "code": "431229",
                "name": "靖州苗族侗族自治县",
                "firstLetter": "J"
            },
            {
                "code": "141130",
                "name": "交口县",
                "firstLetter": "J"
            },
            {
                "code": "130529",
                "name": "巨鹿县",
                "firstLetter": "J"
            },
            {
                "code": "211422",
                "name": "建昌县",
                "firstLetter": "J"
            },
            {
                "code": "511523",
                "name": "江安县",
                "firstLetter": "J"
            },
            {
                "code": "433101",
                "name": "吉首市",
                "firstLetter": "J"
            },
            {
                "code": "331127",
                "name": "景宁畲族自治县",
                "firstLetter": "J"
            },
            {
                "code": "360124",
                "name": "进贤县",
                "firstLetter": "J"
            },
            {
                "code": "220181",
                "name": "九台市",
                "firstLetter": "J"
            },
            {
                "code": "360200",
                "name": "景德镇市",
                "firstLetter": "J"
            },
            {
                "code": "451025",
                "name": "靖西县",
                "firstLetter": "J"
            },
            {
                "code": "419001",
                "name": "济源市",
                "firstLetter": "J"
            },
            {
                "code": "220200",
                "name": "吉林市",
                "firstLetter": "J"
            },
            {
                "code": "530823",
                "name": "景东彝族自治县",
                "firstLetter": "J"
            },
            {
                "code": "530824",
                "name": "景谷傣族彝族自治县",
                "firstLetter": "J"
            },
            {
                "code": "360400",
                "name": "九江市",
                "firstLetter": "J"
            },
            {
                "code": "530826",
                "name": "江城哈尼族彝族自治县",
                "firstLetter": "J"
            },
            {
                "code": "360421",
                "name": "九江县",
                "firstLetter": "J"
            },
            {
                "code": "320281",
                "name": "江阴市",
                "firstLetter": "J"
            },
            {
                "code": "130723",
                "name": "康保县",
                "firstLetter": "K"
            },
            {
                "code": "650200",
                "name": "克拉玛依市",
                "firstLetter": "K"
            },
            {
                "code": "150521",
                "name": "科尔沁左翼中旗",
                "firstLetter": "K"
            },
            {
                "code": "150522",
                "name": "科尔沁左翼后旗",
                "firstLetter": "K"
            },
            {
                "code": "150523",
                "name": "开鲁县",
                "firstLetter": "K"
            },
            {
                "code": "150524",
                "name": "库伦旗",
                "firstLetter": "K"
            },
            {
                "code": "532502",
                "name": "开远市",
                "firstLetter": "K"
            },
            {
                "code": "130827",
                "name": "宽城满族自治县",
                "firstLetter": "K"
            },
            {
                "code": "513321",
                "name": "康定县",
                "firstLetter": "K"
            },
            {
                "code": "410200",
                "name": "开封市",
                "firstLetter": "K"
            },
            {
                "code": "320583",
                "name": "昆山市",
                "firstLetter": "K"
            },
            {
                "code": "410224",
                "name": "开封县",
                "firstLetter": "K"
            },
            {
                "code": "652801",
                "name": "库尔勒市",
                "firstLetter": "K"
            },
            {
                "code": "440783",
                "name": "开平市",
                "firstLetter": "K"
            },
            {
                "code": "652923",
                "name": "库车县",
                "firstLetter": "K"
            },
            {
                "code": "652929",
                "name": "柯坪县",
                "firstLetter": "K"
            },
            {
                "code": "653000",
                "name": "克孜勒苏柯尔克孜自治州",
                "firstLetter": "K"
            },
            {
                "code": "152221",
                "name": "科尔沁右翼前旗",
                "firstLetter": "K"
            },
            {
                "code": "152222",
                "name": "科尔沁右翼中旗",
                "firstLetter": "K"
            },
            {
                "code": "653101",
                "name": "喀什市",
                "firstLetter": "K"
            },
            {
                "code": "520121",
                "name": "开阳县",
                "firstLetter": "K"
            },
            {
                "code": "500234",
                "name": "开县",
                "firstLetter": "K"
            },
            {
                "code": "230229",
                "name": "克山县",
                "firstLetter": "K"
            },
            {
                "code": "230230",
                "name": "克东县",
                "firstLetter": "K"
            },
            {
                "code": "654003",
                "name": "奎屯市",
                "firstLetter": "K"
            },
            {
                "code": "210123",
                "name": "康平县",
                "firstLetter": "K"
            },
            {
                "code": "542331",
                "name": "康马县",
                "firstLetter": "K"
            },
            {
                "code": "621224",
                "name": "康县",
                "firstLetter": "K"
            },
            {
                "code": "370521",
                "name": "垦利县",
                "firstLetter": "K"
            },
            {
                "code": "622922",
                "name": "康乐县",
                "firstLetter": "K"
            },
            {
                "code": "522601",
                "name": "凯里市",
                "firstLetter": "K"
            },
            {
                "code": "210624",
                "name": "宽甸满族自治县",
                "firstLetter": "K"
            },
            {
                "code": "530100",
                "name": "昆明市",
                "firstLetter": "K"
            },
            {
                "code": "330824",
                "name": "开化县",
                "firstLetter": "K"
            },
            {
                "code": "211282",
                "name": "开原市",
                "firstLetter": "K"
            },
            {
                "code": "211324",
                "name": "喀喇沁左翼蒙古族自治县",
                "firstLetter": "K"
            },
            {
                "code": "511723",
                "name": "开江县",
                "firstLetter": "K"
            },
            {
                "code": "150425",
                "name": "克什克腾旗",
                "firstLetter": "K"
            },
            {
                "code": "150428",
                "name": "喀喇沁旗",
                "firstLetter": "K"
            },
            {
                "code": "220400",
                "name": "辽源市",
                "firstLetter": "L"
            },
            {
                "code": "420682",
                "name": "老河口市",
                "firstLetter": "L"
            },
            {
                "code": "451300",
                "name": "来宾市",
                "firstLetter": "L"
            },
            {
                "code": "512022",
                "name": "乐至县",
                "firstLetter": "L"
            },
            {
                "code": "513222",
                "name": "理县",
                "firstLetter": "L"
            },
            {
                "code": "220524",
                "name": "柳河县",
                "firstLetter": "L"
            },
            {
                "code": "532331",
                "name": "禄丰县",
                "firstLetter": "L"
            },
            {
                "code": "360727",
                "name": "龙南县",
                "firstLetter": "L"
            },
            {
                "code": "451423",
                "name": "龙州县",
                "firstLetter": "L"
            },
            {
                "code": "130824",
                "name": "滦平县",
                "firstLetter": "L"
            },
            {
                "code": "220681",
                "name": "临江市",
                "firstLetter": "L"
            },
            {
                "code": "130825",
                "name": "隆化县",
                "firstLetter": "L"
            },
            {
                "code": "532531",
                "name": "绿春县",
                "firstLetter": "L"
            },
            {
                "code": "611021",
                "name": "洛南县",
                "firstLetter": "L"
            },
            {
                "code": "513327",
                "name": "炉霍县",
                "firstLetter": "L"
            },
            {
                "code": "410225",
                "name": "兰考县",
                "firstLetter": "L"
            },
            {
                "code": "652822",
                "name": "轮台县",
                "firstLetter": "L"
            },
            {
                "code": "410300",
                "name": "洛阳市",
                "firstLetter": "L"
            },
            {
                "code": "513334",
                "name": "理塘县",
                "firstLetter": "L"
            },
            {
                "code": "620100",
                "name": "兰州市",
                "firstLetter": "L"
            },
            {
                "code": "469028",
                "name": "临高县",
                "firstLetter": "L"
            },
            {
                "code": "222405",
                "name": "龙井市",
                "firstLetter": "L"
            },
            {
                "code": "421123",
                "name": "罗田县",
                "firstLetter": "L"
            },
            {
                "code": "469033",
                "name": "乐东黎族自治县",
                "firstLetter": "L"
            },
            {
                "code": "469034",
                "name": "陵水黎族自治县",
                "firstLetter": "L"
            },
            {
                "code": "513400",
                "name": "凉山彝族自治州",
                "firstLetter": "L"
            },
            {
                "code": "131000",
                "name": "廊坊市",
                "firstLetter": "L"
            },
            {
                "code": "440881",
                "name": "廉江市",
                "firstLetter": "L"
            },
            {
                "code": "320700",
                "name": "连云港市",
                "firstLetter": "L"
            },
            {
                "code": "440882",
                "name": "雷州市",
                "firstLetter": "L"
            },
            {
                "code": "410328",
                "name": "洛宁县",
                "firstLetter": "L"
            },
            {
                "code": "150925",
                "name": "凉城县",
                "firstLetter": "L"
            },
            {
                "code": "341122",
                "name": "来安县",
                "firstLetter": "L"
            },
            {
                "code": "361022",
                "name": "黎川县",
                "firstLetter": "L"
            },
            {
                "code": "513437",
                "name": "雷波县",
                "firstLetter": "L"
            },
            {
                "code": "533103",
                "name": "潞西市",
                "firstLetter": "L"
            },
            {
                "code": "533122",
                "name": "梁河县",
                "firstLetter": "L"
            },
            {
                "code": "410423",
                "name": "鲁山县",
                "firstLetter": "L"
            },
            {
                "code": "320826",
                "name": "涟水县",
                "firstLetter": "L"
            },
            {
                "code": "361025",
                "name": "乐安县",
                "firstLetter": "L"
            },
            {
                "code": "533124",
                "name": "陇川县",
                "firstLetter": "L"
            },
            {
                "code": "422802",
                "name": "利川市",
                "firstLetter": "L"
            },
            {
                "code": "341221",
                "name": "临泉县",
                "firstLetter": "L"
            },
            {
                "code": "533325",
                "name": "兰坪白族普米族自治县",
                "firstLetter": "L"
            },
            {
                "code": "422827",
                "name": "来凤县",
                "firstLetter": "L"
            },
            {
                "code": "500228",
                "name": "梁平县",
                "firstLetter": "L"
            },
            {
                "code": "441324",
                "name": "龙门县",
                "firstLetter": "L"
            },
            {
                "code": "410581",
                "name": "林州市",
                "firstLetter": "L"
            },
            {
                "code": "520200",
                "name": "六盘水市",
                "firstLetter": "L"
            },
            {
                "code": "341323",
                "name": "灵璧县",
                "firstLetter": "L"
            },
            {
                "code": "540100",
                "name": "拉萨市",
                "firstLetter": "L"
            },
            {
                "code": "230221",
                "name": "龙江县",
                "firstLetter": "L"
            },
            {
                "code": "540121",
                "name": "林周县",
                "firstLetter": "L"
            },
            {
                "code": "341500",
                "name": "六安市",
                "firstLetter": "L"
            },
            {
                "code": "653224",
                "name": "洛浦县",
                "firstLetter": "L"
            },
            {
                "code": "620723",
                "name": "临泽县",
                "firstLetter": "L"
            },
            {
                "code": "140123",
                "name": "娄烦县",
                "firstLetter": "L"
            },
            {
                "code": "620822",
                "name": "灵台县",
                "firstLetter": "L"
            },
            {
                "code": "441523",
                "name": "陆河县",
                "firstLetter": "L"
            },
            {
                "code": "441581",
                "name": "陆丰市",
                "firstLetter": "L"
            },
            {
                "code": "542124",
                "name": "类乌齐县",
                "firstLetter": "L"
            },
            {
                "code": "140224",
                "name": "灵丘县",
                "firstLetter": "L"
            },
            {
                "code": "341623",
                "name": "利辛县",
                "firstLetter": "L"
            },
            {
                "code": "210122",
                "name": "辽中县",
                "firstLetter": "L"
            },
            {
                "code": "441622",
                "name": "龙川县",
                "firstLetter": "L"
            },
            {
                "code": "441623",
                "name": "连平县",
                "firstLetter": "L"
            },
            {
                "code": "542132",
                "name": "洛隆县",
                "firstLetter": "L"
            },
            {
                "code": "341821",
                "name": "郎溪县",
                "firstLetter": "L"
            },
            {
                "code": "230421",
                "name": "萝北县",
                "firstLetter": "L"
            },
            {
                "code": "542228",
                "name": "洛扎县",
                "firstLetter": "L"
            },
            {
                "code": "140426",
                "name": "黎城县",
                "firstLetter": "L"
            },
            {
                "code": "370285",
                "name": "莱西市",
                "firstLetter": "L"
            },
            {
                "code": "542231",
                "name": "隆子县",
                "firstLetter": "L"
            },
            {
                "code": "441825",
                "name": "连山壮族瑶族自治县",
                "firstLetter": "L"
            },
            {
                "code": "441826",
                "name": "连南瑶族自治县",
                "firstLetter": "L"
            },
            {
                "code": "542233",
                "name": "浪卡子县",
                "firstLetter": "L"
            },
            {
                "code": "441882",
                "name": "连州市",
                "firstLetter": "L"
            },
            {
                "code": "140481",
                "name": "潞城市",
                "firstLetter": "L"
            },
            {
                "code": "621122",
                "name": "陇西县",
                "firstLetter": "L"
            },
            {
                "code": "350122",
                "name": "连江县",
                "firstLetter": "L"
            },
            {
                "code": "621124",
                "name": "临洮县",
                "firstLetter": "L"
            },
            {
                "code": "350123",
                "name": "罗源县",
                "firstLetter": "L"
            },
            {
                "code": "542326",
                "name": "拉孜县",
                "firstLetter": "L"
            },
            {
                "code": "621200",
                "name": "陇南市",
                "firstLetter": "L"
            },
            {
                "code": "140524",
                "name": "陵川县",
                "firstLetter": "L"
            },
            {
                "code": "330185",
                "name": "临安市",
                "firstLetter": "L"
            },
            {
                "code": "230623",
                "name": "林甸县",
                "firstLetter": "L"
            },
            {
                "code": "430524",
                "name": "隆回县",
                "firstLetter": "L"
            },
            {
                "code": "621226",
                "name": "礼县",
                "firstLetter": "L"
            },
            {
                "code": "621228",
                "name": "两当县",
                "firstLetter": "L"
            },
            {
                "code": "622900",
                "name": "临夏回族自治州",
                "firstLetter": "L"
            },
            {
                "code": "370522",
                "name": "利津县",
                "firstLetter": "L"
            },
            {
                "code": "622901",
                "name": "临夏市",
                "firstLetter": "L"
            },
            {
                "code": "622921",
                "name": "临夏县",
                "firstLetter": "L"
            },
            {
                "code": "445381",
                "name": "罗定市",
                "firstLetter": "L"
            },
            {
                "code": "411122",
                "name": "临颍县",
                "firstLetter": "L"
            },
            {
                "code": "130126",
                "name": "灵寿县",
                "firstLetter": "L"
            },
            {
                "code": "510626",
                "name": "罗江县",
                "firstLetter": "L"
            },
            {
                "code": "370681",
                "name": "龙口市",
                "firstLetter": "L"
            },
            {
                "code": "430682",
                "name": "临湘市",
                "firstLetter": "L"
            },
            {
                "code": "623021",
                "name": "临潭县",
                "firstLetter": "L"
            },
            {
                "code": "370682",
                "name": "莱阳市",
                "firstLetter": "L"
            },
            {
                "code": "411224",
                "name": "卢氏县",
                "firstLetter": "L"
            },
            {
                "code": "140729",
                "name": "灵石县",
                "firstLetter": "L"
            },
            {
                "code": "370683",
                "name": "莱州市",
                "firstLetter": "L"
            },
            {
                "code": "411282",
                "name": "灵宝市",
                "firstLetter": "L"
            },
            {
                "code": "450123",
                "name": "隆安县",
                "firstLetter": "L"
            },
            {
                "code": "522631",
                "name": "黎平县",
                "firstLetter": "L"
            },
            {
                "code": "623026",
                "name": "碌曲县",
                "firstLetter": "L"
            },
            {
                "code": "140821",
                "name": "临猗县",
                "firstLetter": "L"
            },
            {
                "code": "330382",
                "name": "乐清市",
                "firstLetter": "L"
            },
            {
                "code": "522634",
                "name": "雷山县",
                "firstLetter": "L"
            },
            {
                "code": "130185",
                "name": "鹿泉市",
                "firstLetter": "L"
            },
            {
                "code": "430724",
                "name": "临澧县",
                "firstLetter": "L"
            },
            {
                "code": "450200",
                "name": "柳州市",
                "firstLetter": "L"
            },
            {
                "code": "542621",
                "name": "林芝县",
                "firstLetter": "L"
            },
            {
                "code": "370724",
                "name": "临朐县",
                "firstLetter": "L"
            },
            {
                "code": "210781",
                "name": "凌海市",
                "firstLetter": "L"
            },
            {
                "code": "522722",
                "name": "荔波县",
                "firstLetter": "L"
            },
            {
                "code": "450221",
                "name": "柳江县",
                "firstLetter": "L"
            },
            {
                "code": "450222",
                "name": "柳城县",
                "firstLetter": "L"
            },
            {
                "code": "130223",
                "name": "滦县",
                "firstLetter": "L"
            },
            {
                "code": "450223",
                "name": "鹿寨县",
                "firstLetter": "L"
            },
            {
                "code": "542627",
                "name": "朗县",
                "firstLetter": "L"
            },
            {
                "code": "130224",
                "name": "滦南县",
                "firstLetter": "L"
            },
            {
                "code": "130225",
                "name": "乐亭县",
                "firstLetter": "L"
            },
            {
                "code": "522728",
                "name": "罗甸县",
                "firstLetter": "L"
            },
            {
                "code": "522730",
                "name": "龙里县",
                "firstLetter": "L"
            },
            {
                "code": "632123",
                "name": "乐都县",
                "firstLetter": "L"
            },
            {
                "code": "231025",
                "name": "林口县",
                "firstLetter": "L"
            },
            {
                "code": "450322",
                "name": "临桂县",
                "firstLetter": "L"
            },
            {
                "code": "450323",
                "name": "灵川县",
                "firstLetter": "L"
            },
            {
                "code": "610122",
                "name": "蓝田县",
                "firstLetter": "L"
            },
            {
                "code": "370832",
                "name": "梁山县",
                "firstLetter": "L"
            },
            {
                "code": "130324",
                "name": "卢龙县",
                "firstLetter": "L"
            },
            {
                "code": "211000",
                "name": "辽阳市",
                "firstLetter": "L"
            },
            {
                "code": "411521",
                "name": "罗山县",
                "firstLetter": "L"
            },
            {
                "code": "431025",
                "name": "临武县",
                "firstLetter": "L"
            },
            {
                "code": "511028",
                "name": "隆昌县",
                "firstLetter": "L"
            },
            {
                "code": "350681",
                "name": "龙海市",
                "firstLetter": "L"
            },
            {
                "code": "450328",
                "name": "龙胜各族自治县",
                "firstLetter": "L"
            },
            {
                "code": "141000",
                "name": "临汾市",
                "firstLetter": "L"
            },
            {
                "code": "511100",
                "name": "乐山市",
                "firstLetter": "L"
            },
            {
                "code": "450331",
                "name": "荔浦县",
                "firstLetter": "L"
            },
            {
                "code": "530128",
                "name": "禄劝彝族苗族自治县",
                "firstLetter": "L"
            },
            {
                "code": "330781",
                "name": "兰溪市",
                "firstLetter": "L"
            },
            {
                "code": "211021",
                "name": "辽阳县",
                "firstLetter": "L"
            },
            {
                "code": "130423",
                "name": "临漳县",
                "firstLetter": "L"
            },
            {
                "code": "530322",
                "name": "陆良县",
                "firstLetter": "L"
            },
            {
                "code": "231222",
                "name": "兰西县",
                "firstLetter": "L"
            },
            {
                "code": "530324",
                "name": "罗平县",
                "firstLetter": "L"
            },
            {
                "code": "330825",
                "name": "龙游县",
                "firstLetter": "L"
            },
            {
                "code": "350800",
                "name": "龙岩市",
                "firstLetter": "L"
            },
            {
                "code": "431127",
                "name": "蓝山县",
                "firstLetter": "L"
            },
            {
                "code": "610327",
                "name": "陇县",
                "firstLetter": "L"
            },
            {
                "code": "411628",
                "name": "鹿邑县",
                "firstLetter": "L"
            },
            {
                "code": "141100",
                "name": "吕梁市",
                "firstLetter": "L"
            },
            {
                "code": "350825",
                "name": "连城县",
                "firstLetter": "L"
            },
            {
                "code": "371200",
                "name": "莱芜市",
                "firstLetter": "L"
            },
            {
                "code": "141124",
                "name": "临县",
                "firstLetter": "L"
            },
            {
                "code": "130522",
                "name": "临城县",
                "firstLetter": "L"
            },
            {
                "code": "141125",
                "name": "柳林县",
                "firstLetter": "L"
            },
            {
                "code": "371300",
                "name": "临沂市",
                "firstLetter": "L"
            },
            {
                "code": "610425",
                "name": "礼泉县",
                "firstLetter": "L"
            },
            {
                "code": "130525",
                "name": "隆尧县",
                "firstLetter": "L"
            },
            {
                "code": "211382",
                "name": "凌源市",
                "firstLetter": "L"
            },
            {
                "code": "450721",
                "name": "灵山县",
                "firstLetter": "L"
            },
            {
                "code": "331082",
                "name": "临海市",
                "firstLetter": "L"
            },
            {
                "code": "431300",
                "name": "娄底市",
                "firstLetter": "L"
            },
            {
                "code": "530523",
                "name": "龙陵县",
                "firstLetter": "L"
            },
            {
                "code": "331100",
                "name": "丽水市",
                "firstLetter": "L"
            },
            {
                "code": "431381",
                "name": "冷水江市",
                "firstLetter": "L"
            },
            {
                "code": "431382",
                "name": "涟源市",
                "firstLetter": "L"
            },
            {
                "code": "371329",
                "name": "临沭县",
                "firstLetter": "L"
            },
            {
                "code": "530621",
                "name": "鲁甸县",
                "firstLetter": "L"
            },
            {
                "code": "130535",
                "name": "临西县",
                "firstLetter": "L"
            },
            {
                "code": "640181",
                "name": "灵武市",
                "firstLetter": "L"
            },
            {
                "code": "371421",
                "name": "陵县",
                "firstLetter": "L"
            },
            {
                "code": "331181",
                "name": "龙泉市",
                "firstLetter": "L"
            },
            {
                "code": "450922",
                "name": "陆川县",
                "firstLetter": "L"
            },
            {
                "code": "371424",
                "name": "临邑县",
                "firstLetter": "L"
            },
            {
                "code": "433130",
                "name": "龙山县",
                "firstLetter": "L"
            },
            {
                "code": "511623",
                "name": "邻水县",
                "firstLetter": "L"
            },
            {
                "code": "530700",
                "name": "丽江市",
                "firstLetter": "L"
            },
            {
                "code": "371481",
                "name": "乐陵市",
                "firstLetter": "L"
            },
            {
                "code": "360281",
                "name": "乐平市",
                "firstLetter": "L"
            },
            {
                "code": "371500",
                "name": "聊城市",
                "firstLetter": "L"
            },
            {
                "code": "451027",
                "name": "凌云县",
                "firstLetter": "L"
            },
            {
                "code": "451028",
                "name": "乐业县",
                "firstLetter": "L"
            },
            {
                "code": "640423",
                "name": "隆德县",
                "firstLetter": "L"
            },
            {
                "code": "360321",
                "name": "莲花县",
                "firstLetter": "L"
            },
            {
                "code": "341421",
                "name": "庐江县",
                "firstLetter": "L"
            },
            {
                "code": "610629",
                "name": "洛川县",
                "firstLetter": "L"
            },
            {
                "code": "360323",
                "name": "芦溪县",
                "firstLetter": "L"
            },
            {
                "code": "451031",
                "name": "隆林各族自治县",
                "firstLetter": "L"
            },
            {
                "code": "371581",
                "name": "临清市",
                "firstLetter": "L"
            },
            {
                "code": "530828",
                "name": "澜沧拉祜族自治县",
                "firstLetter": "L"
            },
            {
                "code": "530900",
                "name": "临沧市",
                "firstLetter": "L"
            },
            {
                "code": "511826",
                "name": "芦山县",
                "firstLetter": "L"
            },
            {
                "code": "150424",
                "name": "林西县",
                "firstLetter": "L"
            },
            {
                "code": "220322",
                "name": "梨树县",
                "firstLetter": "L"
            },
            {
                "code": "610727",
                "name": "略阳县",
                "firstLetter": "L"
            },
            {
                "code": "440281",
                "name": "乐昌市",
                "firstLetter": "L"
            },
            {
                "code": "451225",
                "name": "罗城仫佬族自治县",
                "firstLetter": "L"
            },
            {
                "code": "610729",
                "name": "留坝县",
                "firstLetter": "L"
            },
            {
                "code": "532323",
                "name": "牟定县",
                "firstLetter": "M"
            },
            {
                "code": "610827",
                "name": "米脂县",
                "firstLetter": "M"
            },
            {
                "code": "340500",
                "name": "马鞍山市",
                "firstLetter": "M"
            },
            {
                "code": "513223",
                "name": "茂县",
                "firstLetter": "M"
            },
            {
                "code": "220581",
                "name": "梅河口市",
                "firstLetter": "M"
            },
            {
                "code": "513229",
                "name": "马尔康县",
                "firstLetter": "M"
            },
            {
                "code": "532522",
                "name": "蒙自县",
                "firstLetter": "M"
            },
            {
                "code": "532526",
                "name": "弥勒县",
                "firstLetter": "M"
            },
            {
                "code": "652303",
                "name": "米泉市",
                "firstLetter": "M"
            },
            {
                "code": "652324",
                "name": "玛纳斯县",
                "firstLetter": "M"
            },
            {
                "code": "150722",
                "name": "莫力达瓦达斡尔族自治旗",
                "firstLetter": "M"
            },
            {
                "code": "652328",
                "name": "木垒哈萨克自治县",
                "firstLetter": "M"
            },
            {
                "code": "150781",
                "name": "满洲里市",
                "firstLetter": "M"
            },
            {
                "code": "532624",
                "name": "麻栗坡县",
                "firstLetter": "M"
            },
            {
                "code": "532625",
                "name": "马关县",
                "firstLetter": "M"
            },
            {
                "code": "130930",
                "name": "孟村回族自治县",
                "firstLetter": "M"
            },
            {
                "code": "410322",
                "name": "孟津县",
                "firstLetter": "M"
            },
            {
                "code": "513422",
                "name": "木里藏族自治县",
                "firstLetter": "M"
            },
            {
                "code": "421181",
                "name": "麻城市",
                "firstLetter": "M"
            },
            {
                "code": "532925",
                "name": "弥渡县",
                "firstLetter": "M"
            },
            {
                "code": "440900",
                "name": "茂名市",
                "firstLetter": "M"
            },
            {
                "code": "513433",
                "name": "冕宁县",
                "firstLetter": "M"
            },
            {
                "code": "513436",
                "name": "美姑县",
                "firstLetter": "M"
            },
            {
                "code": "230127",
                "name": "木兰县",
                "firstLetter": "M"
            },
            {
                "code": "341182",
                "name": "明光市",
                "firstLetter": "M"
            },
            {
                "code": "653127",
                "name": "麦盖提县",
                "firstLetter": "M"
            },
            {
                "code": "620621",
                "name": "民勤县",
                "firstLetter": "M"
            },
            {
                "code": "441400",
                "name": "梅州市",
                "firstLetter": "M"
            },
            {
                "code": "653222",
                "name": "墨玉县",
                "firstLetter": "M"
            },
            {
                "code": "441421",
                "name": "梅县",
                "firstLetter": "M"
            },
            {
                "code": "620722",
                "name": "民乐县",
                "firstLetter": "M"
            },
            {
                "code": "653227",
                "name": "民丰县",
                "firstLetter": "M"
            },
            {
                "code": "540127",
                "name": "墨竹工卡县",
                "firstLetter": "M"
            },
            {
                "code": "341622",
                "name": "蒙城县",
                "firstLetter": "M"
            },
            {
                "code": "542129",
                "name": "芒康县",
                "firstLetter": "M"
            },
            {
                "code": "230382",
                "name": "密山市",
                "firstLetter": "M"
            },
            {
                "code": "110228",
                "name": "密云县",
                "firstLetter": "M"
            },
            {
                "code": "410883",
                "name": "孟州市",
                "firstLetter": "M"
            },
            {
                "code": "350121",
                "name": "闽侯县",
                "firstLetter": "M"
            },
            {
                "code": "350124",
                "name": "闽清县",
                "firstLetter": "M"
            },
            {
                "code": "510421",
                "name": "米易县",
                "firstLetter": "M"
            },
            {
                "code": "350421",
                "name": "明溪县",
                "firstLetter": "M"
            },
            {
                "code": "510683",
                "name": "绵竹市",
                "firstLetter": "M"
            },
            {
                "code": "510700",
                "name": "绵阳市",
                "firstLetter": "M"
            },
            {
                "code": "623025",
                "name": "玛曲县",
                "firstLetter": "M"
            },
            {
                "code": "450124",
                "name": "马山县",
                "firstLetter": "M"
            },
            {
                "code": "522635",
                "name": "麻江县",
                "firstLetter": "M"
            },
            {
                "code": "542623",
                "name": "米林县",
                "firstLetter": "M"
            },
            {
                "code": "542624",
                "name": "墨脱县",
                "firstLetter": "M"
            },
            {
                "code": "632122",
                "name": "民和回族土族自治县",
                "firstLetter": "M"
            },
            {
                "code": "231000",
                "name": "牡丹江市",
                "firstLetter": "M"
            },
            {
                "code": "411421",
                "name": "民权县",
                "firstLetter": "M"
            },
            {
                "code": "632221",
                "name": "门源回族自治县",
                "firstLetter": "M"
            },
            {
                "code": "231085",
                "name": "穆棱市",
                "firstLetter": "M"
            },
            {
                "code": "530321",
                "name": "马龙县",
                "firstLetter": "M"
            },
            {
                "code": "511133",
                "name": "马边彝族自治县",
                "firstLetter": "M"
            },
            {
                "code": "632621",
                "name": "玛沁县",
                "firstLetter": "M"
            },
            {
                "code": "450423",
                "name": "蒙山县",
                "firstLetter": "M"
            },
            {
                "code": "610326",
                "name": "眉县",
                "firstLetter": "M"
            },
            {
                "code": "231225",
                "name": "明水县",
                "firstLetter": "M"
            },
            {
                "code": "632626",
                "name": "玛多县",
                "firstLetter": "M"
            },
            {
                "code": "232723",
                "name": "漠河县",
                "firstLetter": "M"
            },
            {
                "code": "431226",
                "name": "麻阳苗族自治县",
                "firstLetter": "M"
            },
            {
                "code": "511400",
                "name": "眉山市",
                "firstLetter": "M"
            },
            {
                "code": "371328",
                "name": "蒙阴县",
                "firstLetter": "M"
            },
            {
                "code": "130621",
                "name": "满城县",
                "firstLetter": "M"
            },
            {
                "code": "530822",
                "name": "墨江哈尼族自治县",
                "firstLetter": "M"
            },
            {
                "code": "511821",
                "name": "名山县",
                "firstLetter": "M"
            },
            {
                "code": "530827",
                "name": "孟连傣族拉祜族佤族自治县",
                "firstLetter": "M"
            },
            {
                "code": "610725",
                "name": "勉县",
                "firstLetter": "M"
            },
            {
                "code": "440282",
                "name": "南雄市",
                "firstLetter": "N"
            },
            {
                "code": "511922",
                "name": "南江县",
                "firstLetter": "N"
            },
            {
                "code": "420624",
                "name": "南漳县",
                "firstLetter": "N"
            },
            {
                "code": "532324",
                "name": "南华县",
                "firstLetter": "N"
            },
            {
                "code": "150525",
                "name": "奈曼旗",
                "firstLetter": "N"
            },
            {
                "code": "451422",
                "name": "宁明县",
                "firstLetter": "N"
            },
            {
                "code": "610923",
                "name": "宁陕县",
                "firstLetter": "N"
            },
            {
                "code": "360730",
                "name": "宁都县",
                "firstLetter": "N"
            },
            {
                "code": "440523",
                "name": "南澳县",
                "firstLetter": "N"
            },
            {
                "code": "360782",
                "name": "南康市",
                "firstLetter": "N"
            },
            {
                "code": "130927",
                "name": "南皮县",
                "firstLetter": "N"
            },
            {
                "code": "320600",
                "name": "南通市",
                "firstLetter": "N"
            },
            {
                "code": "469038",
                "name": "南沙群岛",
                "firstLetter": "N"
            },
            {
                "code": "513427",
                "name": "宁南县",
                "firstLetter": "N"
            },
            {
                "code": "532926",
                "name": "南涧彝族自治县",
                "firstLetter": "N"
            },
            {
                "code": "361021",
                "name": "南城县",
                "firstLetter": "N"
            },
            {
                "code": "361023",
                "name": "南丰县",
                "firstLetter": "N"
            },
            {
                "code": "533300",
                "name": "怒江傈僳族自治州",
                "firstLetter": "N"
            },
            {
                "code": "410527",
                "name": "内黄县",
                "firstLetter": "N"
            },
            {
                "code": "540123",
                "name": "尼木县",
                "firstLetter": "N"
            },
            {
                "code": "430124",
                "name": "宁乡县",
                "firstLetter": "N"
            },
            {
                "code": "654028",
                "name": "尼勒克县",
                "firstLetter": "N"
            },
            {
                "code": "542221",
                "name": "乃东县",
                "firstLetter": "N"
            },
            {
                "code": "341881",
                "name": "宁国市",
                "firstLetter": "N"
            },
            {
                "code": "621026",
                "name": "宁县",
                "firstLetter": "N"
            },
            {
                "code": "410923",
                "name": "南乐县",
                "firstLetter": "N"
            },
            {
                "code": "542322",
                "name": "南木林县",
                "firstLetter": "N"
            },
            {
                "code": "120221",
                "name": "宁河县",
                "firstLetter": "N"
            },
            {
                "code": "330200",
                "name": "宁波市",
                "firstLetter": "N"
            },
            {
                "code": "542336",
                "name": "聂拉木县",
                "firstLetter": "N"
            },
            {
                "code": "522426",
                "name": "纳雍县",
                "firstLetter": "N"
            },
            {
                "code": "542421",
                "name": "那曲县",
                "firstLetter": "N"
            },
            {
                "code": "330226",
                "name": "宁海县",
                "firstLetter": "N"
            },
            {
                "code": "542424",
                "name": "聂荣县",
                "firstLetter": "N"
            },
            {
                "code": "450100",
                "name": "南宁市",
                "firstLetter": "N"
            },
            {
                "code": "411300",
                "name": "南阳市",
                "firstLetter": "N"
            },
            {
                "code": "542430",
                "name": "尼玛县",
                "firstLetter": "N"
            },
            {
                "code": "350424",
                "name": "宁化县",
                "firstLetter": "N"
            },
            {
                "code": "411321",
                "name": "南召县",
                "firstLetter": "N"
            },
            {
                "code": "411325",
                "name": "内乡县",
                "firstLetter": "N"
            },
            {
                "code": "350583",
                "name": "南安市",
                "firstLetter": "N"
            },
            {
                "code": "430921",
                "name": "南县",
                "firstLetter": "N"
            },
            {
                "code": "411423",
                "name": "宁陵县",
                "firstLetter": "N"
            },
            {
                "code": "140925",
                "name": "宁武县",
                "firstLetter": "N"
            },
            {
                "code": "511000",
                "name": "内江市",
                "firstLetter": "N"
            },
            {
                "code": "231084",
                "name": "宁安市",
                "firstLetter": "N"
            },
            {
                "code": "350627",
                "name": "南靖县",
                "firstLetter": "N"
            },
            {
                "code": "231121",
                "name": "嫩江县",
                "firstLetter": "N"
            },
            {
                "code": "350700",
                "name": "南平市",
                "firstLetter": "N"
            },
            {
                "code": "370921",
                "name": "宁阳县",
                "firstLetter": "N"
            },
            {
                "code": "431126",
                "name": "宁远县",
                "firstLetter": "N"
            },
            {
                "code": "511300",
                "name": "南充市",
                "firstLetter": "N"
            },
            {
                "code": "511321",
                "name": "南部县",
                "firstLetter": "N"
            },
            {
                "code": "350900",
                "name": "宁德市",
                "firstLetter": "N"
            },
            {
                "code": "632725",
                "name": "囊谦县",
                "firstLetter": "N"
            },
            {
                "code": "130523",
                "name": "内丘县",
                "firstLetter": "N"
            },
            {
                "code": "130527",
                "name": "南和县",
                "firstLetter": "N"
            },
            {
                "code": "130528",
                "name": "宁晋县",
                "firstLetter": "N"
            },
            {
                "code": "360100",
                "name": "南昌市",
                "firstLetter": "N"
            },
            {
                "code": "511522",
                "name": "南溪县",
                "firstLetter": "N"
            },
            {
                "code": "130581",
                "name": "南宫市",
                "firstLetter": "N"
            },
            {
                "code": "360121",
                "name": "南昌县",
                "firstLetter": "N"
            },
            {
                "code": "371422",
                "name": "宁津县",
                "firstLetter": "N"
            },
            {
                "code": "220122",
                "name": "农安县",
                "firstLetter": "N"
            },
            {
                "code": "320100",
                "name": "南京市",
                "firstLetter": "N"
            },
            {
                "code": "530724",
                "name": "宁蒗彝族自治县",
                "firstLetter": "N"
            },
            {
                "code": "451026",
                "name": "那坡县",
                "firstLetter": "N"
            },
            {
                "code": "530821",
                "name": "宁洱哈尼族彝族自治县",
                "firstLetter": "N"
            },
            {
                "code": "610721",
                "name": "南郑县",
                "firstLetter": "N"
            },
            {
                "code": "340223",
                "name": "南陵县",
                "firstLetter": "N"
            },
            {
                "code": "451221",
                "name": "南丹县",
                "firstLetter": "N"
            },
            {
                "code": "610726",
                "name": "宁强县",
                "firstLetter": "N"
            },
            {
                "code": "150429",
                "name": "宁城县",
                "firstLetter": "N"
            },
            {
                "code": "511923",
                "name": "平昌县",
                "firstLetter": "P"
            },
            {
                "code": "320322",
                "name": "沛县",
                "firstLetter": "P"
            },
            {
                "code": "532523",
                "name": "屏边苗族自治县",
                "firstLetter": "P"
            },
            {
                "code": "130823",
                "name": "平泉县",
                "firstLetter": "P"
            },
            {
                "code": "451481",
                "name": "凭祥市",
                "firstLetter": "P"
            },
            {
                "code": "610926",
                "name": "平利县",
                "firstLetter": "P"
            },
            {
                "code": "513428",
                "name": "普格县",
                "firstLetter": "P"
            },
            {
                "code": "410400",
                "name": "平顶山市",
                "firstLetter": "P"
            },
            {
                "code": "653223",
                "name": "皮山县",
                "firstLetter": "P"
            },
            {
                "code": "520222",
                "name": "盘县",
                "firstLetter": "P"
            },
            {
                "code": "441426",
                "name": "平远县",
                "firstLetter": "P"
            },
            {
                "code": "620800",
                "name": "平凉市",
                "firstLetter": "P"
            },
            {
                "code": "500243",
                "name": "彭水苗族土家族自治县",
                "firstLetter": "P"
            },
            {
                "code": "370124",
                "name": "平阴县",
                "firstLetter": "P"
            },
            {
                "code": "520421",
                "name": "平坝县",
                "firstLetter": "P"
            },
            {
                "code": "520422",
                "name": "普定县",
                "firstLetter": "P"
            },
            {
                "code": "140321",
                "name": "平定县",
                "firstLetter": "P"
            },
            {
                "code": "510131",
                "name": "蒲江县",
                "firstLetter": "P"
            },
            {
                "code": "370283",
                "name": "平度市",
                "firstLetter": "P"
            },
            {
                "code": "140425",
                "name": "平顺县",
                "firstLetter": "P"
            },
            {
                "code": "510182",
                "name": "彭州市",
                "firstLetter": "P"
            },
            {
                "code": "210282",
                "name": "普兰店市",
                "firstLetter": "P"
            },
            {
                "code": "522323",
                "name": "普安县",
                "firstLetter": "P"
            },
            {
                "code": "350128",
                "name": "平潭县",
                "firstLetter": "P"
            },
            {
                "code": "510400",
                "name": "攀枝花市",
                "firstLetter": "P"
            },
            {
                "code": "445281",
                "name": "普宁市",
                "firstLetter": "P"
            },
            {
                "code": "350300",
                "name": "莆田市",
                "firstLetter": "P"
            },
            {
                "code": "430626",
                "name": "平江县",
                "firstLetter": "P"
            },
            {
                "code": "130131",
                "name": "平山县",
                "firstLetter": "P"
            },
            {
                "code": "140728",
                "name": "平遥县",
                "firstLetter": "P"
            },
            {
                "code": "330326",
                "name": "平阳县",
                "firstLetter": "P"
            },
            {
                "code": "542521",
                "name": "普兰县",
                "firstLetter": "P"
            },
            {
                "code": "370684",
                "name": "蓬莱市",
                "firstLetter": "P"
            },
            {
                "code": "510727",
                "name": "平武县",
                "firstLetter": "P"
            },
            {
                "code": "140829",
                "name": "平陆县",
                "firstLetter": "P"
            },
            {
                "code": "330482",
                "name": "平湖市",
                "firstLetter": "P"
            },
            {
                "code": "522727",
                "name": "平塘县",
                "firstLetter": "P"
            },
            {
                "code": "632121",
                "name": "平安县",
                "firstLetter": "P"
            },
            {
                "code": "510921",
                "name": "蓬溪县",
                "firstLetter": "P"
            },
            {
                "code": "140932",
                "name": "偏关县",
                "firstLetter": "P"
            },
            {
                "code": "350628",
                "name": "平和县",
                "firstLetter": "P"
            },
            {
                "code": "330726",
                "name": "浦江县",
                "firstLetter": "P"
            },
            {
                "code": "450330",
                "name": "平乐县",
                "firstLetter": "P"
            },
            {
                "code": "330727",
                "name": "磐安县",
                "firstLetter": "P"
            },
            {
                "code": "350722",
                "name": "浦城县",
                "firstLetter": "P"
            },
            {
                "code": "211100",
                "name": "盘锦市",
                "firstLetter": "P"
            },
            {
                "code": "211122",
                "name": "盘山县",
                "firstLetter": "P"
            },
            {
                "code": "141033",
                "name": "蒲县",
                "firstLetter": "P"
            },
            {
                "code": "511323",
                "name": "蓬安县",
                "firstLetter": "P"
            },
            {
                "code": "350923",
                "name": "屏南县",
                "firstLetter": "P"
            },
            {
                "code": "511422",
                "name": "彭山县",
                "firstLetter": "P"
            },
            {
                "code": "450722",
                "name": "浦北县",
                "firstLetter": "P"
            },
            {
                "code": "371326",
                "name": "平邑县",
                "firstLetter": "P"
            },
            {
                "code": "130532",
                "name": "平乡县",
                "firstLetter": "P"
            },
            {
                "code": "450821",
                "name": "平南县",
                "firstLetter": "P"
            },
            {
                "code": "511529",
                "name": "屏山县",
                "firstLetter": "P"
            },
            {
                "code": "610526",
                "name": "蒲城县",
                "firstLetter": "P"
            },
            {
                "code": "640221",
                "name": "平罗县",
                "firstLetter": "P"
            },
            {
                "code": "371426",
                "name": "平原县",
                "firstLetter": "P"
            },
            {
                "code": "411723",
                "name": "平舆县",
                "firstLetter": "P"
            },
            {
                "code": "451023",
                "name": "平果县",
                "firstLetter": "P"
            },
            {
                "code": "360300",
                "name": "萍乡市",
                "firstLetter": "P"
            },
            {
                "code": "530800",
                "name": "普洱市",
                "firstLetter": "P"
            },
            {
                "code": "640425",
                "name": "彭阳县",
                "firstLetter": "P"
            },
            {
                "code": "220284",
                "name": "磐石市",
                "firstLetter": "P"
            },
            {
                "code": "360430",
                "name": "彭泽县",
                "firstLetter": "P"
            },
            {
                "code": "610830",
                "name": "清涧县",
                "firstLetter": "Q"
            },
            {
                "code": "360729",
                "name": "全南县",
                "firstLetter": "Q"
            },
            {
                "code": "652325",
                "name": "奇台县",
                "firstLetter": "Q"
            },
            {
                "code": "220721",
                "name": "前郭尔罗斯蒙古族自治县",
                "firstLetter": "Q"
            },
            {
                "code": "220723",
                "name": "乾安县",
                "firstLetter": "Q"
            },
            {
                "code": "130922",
                "name": "青县",
                "firstLetter": "Q"
            },
            {
                "code": "469002",
                "name": "琼海市",
                "firstLetter": "Q"
            },
            {
                "code": "532626",
                "name": "丘北县",
                "firstLetter": "Q"
            },
            {
                "code": "340824",
                "name": "潜山县",
                "firstLetter": "Q"
            },
            {
                "code": "652825",
                "name": "且末县",
                "firstLetter": "Q"
            },
            {
                "code": "320681",
                "name": "启东市",
                "firstLetter": "Q"
            },
            {
                "code": "469036",
                "name": "琼中黎族苗族自治县",
                "firstLetter": "Q"
            },
            {
                "code": "341024",
                "name": "祁门县",
                "firstLetter": "Q"
            },
            {
                "code": "341124",
                "name": "全椒县",
                "firstLetter": "Q"
            },
            {
                "code": "620521",
                "name": "清水县",
                "firstLetter": "Q"
            },
            {
                "code": "620522",
                "name": "秦安县",
                "firstLetter": "Q"
            },
            {
                "code": "230200",
                "name": "齐齐哈尔市",
                "firstLetter": "Q"
            },
            {
                "code": "520181",
                "name": "清镇市",
                "firstLetter": "Q"
            },
            {
                "code": "361124",
                "name": "铅山县",
                "firstLetter": "Q"
            },
            {
                "code": "429005",
                "name": "潜江市",
                "firstLetter": "Q"
            },
            {
                "code": "140121",
                "name": "清徐县",
                "firstLetter": "Q"
            },
            {
                "code": "540124",
                "name": "曲水县",
                "firstLetter": "Q"
            },
            {
                "code": "370200",
                "name": "青岛市",
                "firstLetter": "Q"
            },
            {
                "code": "341723",
                "name": "青阳县",
                "firstLetter": "Q"
            },
            {
                "code": "621000",
                "name": "庆阳市",
                "firstLetter": "Q"
            },
            {
                "code": "542225",
                "name": "琼结县",
                "firstLetter": "Q"
            },
            {
                "code": "621021",
                "name": "庆城县",
                "firstLetter": "Q"
            },
            {
                "code": "542226",
                "name": "曲松县",
                "firstLetter": "Q"
            },
            {
                "code": "441800",
                "name": "清远市",
                "firstLetter": "Q"
            },
            {
                "code": "410882",
                "name": "沁阳市",
                "firstLetter": "Q"
            },
            {
                "code": "654325",
                "name": "青河县",
                "firstLetter": "Q"
            },
            {
                "code": "410922",
                "name": "清丰县",
                "firstLetter": "Q"
            },
            {
                "code": "441827",
                "name": "清新县",
                "firstLetter": "Q"
            },
            {
                "code": "140430",
                "name": "沁县",
                "firstLetter": "Q"
            },
            {
                "code": "140431",
                "name": "沁源县",
                "firstLetter": "Q"
            },
            {
                "code": "430426",
                "name": "祁东县",
                "firstLetter": "Q"
            },
            {
                "code": "522300",
                "name": "黔西南布依族苗族自治州",
                "firstLetter": "Q"
            },
            {
                "code": "522324",
                "name": "晴隆县",
                "firstLetter": "Q"
            },
            {
                "code": "140521",
                "name": "沁水县",
                "firstLetter": "Q"
            },
            {
                "code": "522423",
                "name": "黔西县",
                "firstLetter": "Q"
            },
            {
                "code": "210423",
                "name": "清原满族自治县",
                "firstLetter": "Q"
            },
            {
                "code": "522600",
                "name": "黔东南苗族侗族自治州",
                "firstLetter": "Q"
            },
            {
                "code": "140727",
                "name": "祁县",
                "firstLetter": "Q"
            },
            {
                "code": "350423",
                "name": "清流县",
                "firstLetter": "Q"
            },
            {
                "code": "370686",
                "name": "栖霞市",
                "firstLetter": "Q"
            },
            {
                "code": "350500",
                "name": "泉州市",
                "firstLetter": "Q"
            },
            {
                "code": "522700",
                "name": "黔南布依族苗族自治州",
                "firstLetter": "Q"
            },
            {
                "code": "370781",
                "name": "青州市",
                "firstLetter": "Q"
            },
            {
                "code": "230900",
                "name": "七台河市",
                "firstLetter": "Q"
            },
            {
                "code": "510822",
                "name": "青川县",
                "firstLetter": "Q"
            },
            {
                "code": "130227",
                "name": "迁西县",
                "firstLetter": "Q"
            },
            {
                "code": "130283",
                "name": "迁安市",
                "firstLetter": "Q"
            },
            {
                "code": "130300",
                "name": "秦皇岛市",
                "firstLetter": "Q"
            },
            {
                "code": "632222",
                "name": "祁连县",
                "firstLetter": "Q"
            },
            {
                "code": "130321",
                "name": "青龙满族自治县",
                "firstLetter": "Q"
            },
            {
                "code": "450324",
                "name": "全州县",
                "firstLetter": "Q"
            },
            {
                "code": "370881",
                "name": "曲阜市",
                "firstLetter": "Q"
            },
            {
                "code": "141021",
                "name": "曲沃县",
                "firstLetter": "Q"
            },
            {
                "code": "530300",
                "name": "曲靖市",
                "firstLetter": "Q"
            },
            {
                "code": "431121",
                "name": "祁阳县",
                "firstLetter": "Q"
            },
            {
                "code": "231223",
                "name": "青冈县",
                "firstLetter": "Q"
            },
            {
                "code": "231224",
                "name": "庆安县",
                "firstLetter": "Q"
            },
            {
                "code": "130430",
                "name": "邱县",
                "firstLetter": "Q"
            },
            {
                "code": "610328",
                "name": "千阳县",
                "firstLetter": "Q"
            },
            {
                "code": "130435",
                "name": "曲周县",
                "firstLetter": "Q"
            },
            {
                "code": "632726",
                "name": "曲麻莱县",
                "firstLetter": "Q"
            },
            {
                "code": "610424",
                "name": "乾县",
                "firstLetter": "Q"
            },
            {
                "code": "450700",
                "name": "钦州市",
                "firstLetter": "Q"
            },
            {
                "code": "511425",
                "name": "青神县",
                "firstLetter": "Q"
            },
            {
                "code": "331121",
                "name": "青田县",
                "firstLetter": "Q"
            },
            {
                "code": "130534",
                "name": "清河县",
                "firstLetter": "Q"
            },
            {
                "code": "530622",
                "name": "巧家县",
                "firstLetter": "Q"
            },
            {
                "code": "331126",
                "name": "庆元县",
                "firstLetter": "Q"
            },
            {
                "code": "150124",
                "name": "清水河县",
                "firstLetter": "Q"
            },
            {
                "code": "371423",
                "name": "庆云县",
                "firstLetter": "Q"
            },
            {
                "code": "371425",
                "name": "齐河县",
                "firstLetter": "Q"
            },
            {
                "code": "130622",
                "name": "清苑县",
                "firstLetter": "Q"
            },
            {
                "code": "411725",
                "name": "确山县",
                "firstLetter": "Q"
            },
            {
                "code": "640381",
                "name": "青铜峡市",
                "firstLetter": "Q"
            },
            {
                "code": "511725",
                "name": "渠县",
                "firstLetter": "Q"
            },
            {
                "code": "130634",
                "name": "曲阳县",
                "firstLetter": "Q"
            },
            {
                "code": "513230",
                "name": "壤塘县",
                "firstLetter": "R"
            },
            {
                "code": "513232",
                "name": "若尔盖县",
                "firstLetter": "R"
            },
            {
                "code": "360781",
                "name": "瑞金市",
                "firstLetter": "R"
            },
            {
                "code": "652824",
                "name": "若羌县",
                "firstLetter": "R"
            },
            {
                "code": "130982",
                "name": "任丘市",
                "firstLetter": "R"
            },
            {
                "code": "320623",
                "name": "如东县",
                "firstLetter": "R"
            },
            {
                "code": "410326",
                "name": "汝阳县",
                "firstLetter": "R"
            },
            {
                "code": "533102",
                "name": "瑞丽市",
                "firstLetter": "R"
            },
            {
                "code": "131124",
                "name": "饶阳县",
                "firstLetter": "R"
            },
            {
                "code": "410482",
                "name": "汝州市",
                "firstLetter": "R"
            },
            {
                "code": "500226",
                "name": "荣昌县",
                "firstLetter": "R"
            },
            {
                "code": "520382",
                "name": "仁怀市",
                "firstLetter": "R"
            },
            {
                "code": "542301",
                "name": "日喀则市",
                "firstLetter": "R"
            },
            {
                "code": "230524",
                "name": "饶河县",
                "firstLetter": "R"
            },
            {
                "code": "510321",
                "name": "荣县",
                "firstLetter": "R"
            },
            {
                "code": "445122",
                "name": "饶平县",
                "firstLetter": "R"
            },
            {
                "code": "542330",
                "name": "仁布县",
                "firstLetter": "R"
            },
            {
                "code": "542524",
                "name": "日土县",
                "firstLetter": "R"
            },
            {
                "code": "330381",
                "name": "瑞安市",
                "firstLetter": "R"
            },
            {
                "code": "450224",
                "name": "融安县",
                "firstLetter": "R"
            },
            {
                "code": "450225",
                "name": "融水苗族自治县",
                "firstLetter": "R"
            },
            {
                "code": "431026",
                "name": "汝城县",
                "firstLetter": "R"
            },
            {
                "code": "371082",
                "name": "荣成市",
                "firstLetter": "R"
            },
            {
                "code": "371083",
                "name": "乳山市",
                "firstLetter": "R"
            },
            {
                "code": "371100",
                "name": "日照市",
                "firstLetter": "R"
            },
            {
                "code": "511421",
                "name": "仁寿县",
                "firstLetter": "R"
            },
            {
                "code": "130526",
                "name": "任县",
                "firstLetter": "R"
            },
            {
                "code": "450921",
                "name": "容县",
                "firstLetter": "R"
            },
            {
                "code": "411727",
                "name": "汝南县",
                "firstLetter": "R"
            },
            {
                "code": "411727",
                "name": "汝南县",
                "firstLetter": "R"
            },
            {
                "code": "130629",
                "name": "容城县",
                "firstLetter": "R"
            },
            {
                "code": "440224",
                "name": "仁化县",
                "firstLetter": "R"
            },
            {
                "code": "440232",
                "name": "乳源瑶族自治县",
                "firstLetter": "R"
            },
            {
                "code": "360481",
                "name": "瑞昌市",
                "firstLetter": "R"
            },
            {
                "code": "440300",
                "name": "深圳市",
                "firstLetter": "S"
            },
            {
                "code": "610821",
                "name": "神木县",
                "firstLetter": "S"
            },
            {
                "code": "130725",
                "name": "尚义县",
                "firstLetter": "S"
            },
            {
                "code": "532322",
                "name": "双柏县",
                "firstLetter": "S"
            },
            {
                "code": "610826",
                "name": "绥德县",
                "firstLetter": "S"
            },
            {
                "code": "513224",
                "name": "松潘县",
                "firstLetter": "S"
            },
            {
                "code": "360724",
                "name": "上犹县",
                "firstLetter": "S"
            },
            {
                "code": "420822",
                "name": "沙洋县",
                "firstLetter": "S"
            },
            {
                "code": "440500",
                "name": "汕头市",
                "firstLetter": "S"
            },
            {
                "code": "610922",
                "name": "石泉县",
                "firstLetter": "S"
            },
            {
                "code": "532525",
                "name": "石屏县",
                "firstLetter": "S"
            },
            {
                "code": "320500",
                "name": "苏州市",
                "firstLetter": "S"
            },
            {
                "code": "220700",
                "name": "松原市",
                "firstLetter": "S"
            },
            {
                "code": "360735",
                "name": "石城县",
                "firstLetter": "S"
            },
            {
                "code": "611000",
                "name": "商洛市",
                "firstLetter": "S"
            },
            {
                "code": "460200",
                "name": "三亚市",
                "firstLetter": "S"
            },
            {
                "code": "611023",
                "name": "商南县",
                "firstLetter": "S"
            },
            {
                "code": "611024",
                "name": "山阳县",
                "firstLetter": "S"
            },
            {
                "code": "421081",
                "name": "石首市",
                "firstLetter": "S"
            },
            {
                "code": "130926",
                "name": "肃宁县",
                "firstLetter": "S"
            },
            {
                "code": "513332",
                "name": "石渠县",
                "firstLetter": "S"
            },
            {
                "code": "421087",
                "name": "松滋市",
                "firstLetter": "S"
            },
            {
                "code": "513333",
                "name": "色达县",
                "firstLetter": "S"
            },
            {
                "code": "340826",
                "name": "宿松县",
                "firstLetter": "S"
            },
            {
                "code": "360827",
                "name": "遂川县",
                "firstLetter": "S"
            },
            {
                "code": "440823",
                "name": "遂溪县",
                "firstLetter": "S"
            },
            {
                "code": "652924",
                "name": "沙雅县",
                "firstLetter": "S"
            },
            {
                "code": "150923",
                "name": "商都县",
                "firstLetter": "S"
            },
            {
                "code": "360923",
                "name": "上高县",
                "firstLetter": "S"
            },
            {
                "code": "150929",
                "name": "四子王旗",
                "firstLetter": "S"
            },
            {
                "code": "131082",
                "name": "三河市",
                "firstLetter": "S"
            },
            {
                "code": "421300",
                "name": "随州市",
                "firstLetter": "S"
            },
            {
                "code": "653121",
                "name": "疏附县",
                "firstLetter": "S"
            },
            {
                "code": "653122",
                "name": "疏勒县",
                "firstLetter": "S"
            },
            {
                "code": "230182",
                "name": "双城市",
                "firstLetter": "S"
            },
            {
                "code": "230183",
                "name": "尚志市",
                "firstLetter": "S"
            },
            {
                "code": "653125",
                "name": "莎车县",
                "firstLetter": "S"
            },
            {
                "code": "441284",
                "name": "四会市",
                "firstLetter": "S"
            },
            {
                "code": "131182",
                "name": "深州市",
                "firstLetter": "S"
            },
            {
                "code": "152523",
                "name": "苏尼特左旗",
                "firstLetter": "S"
            },
            {
                "code": "361100",
                "name": "上饶市",
                "firstLetter": "S"
            },
            {
                "code": "152524",
                "name": "苏尼特右旗",
                "firstLetter": "S"
            },
            {
                "code": "361121",
                "name": "上饶县",
                "firstLetter": "S"
            },
            {
                "code": "341300",
                "name": "宿州市",
                "firstLetter": "S"
            },
            {
                "code": "320924",
                "name": "射阳县",
                "firstLetter": "S"
            },
            {
                "code": "520221",
                "name": "水城县",
                "firstLetter": "S"
            },
            {
                "code": "620721",
                "name": "肃南裕固族自治县",
                "firstLetter": "S"
            },
            {
                "code": "341521",
                "name": "寿县",
                "firstLetter": "S"
            },
            {
                "code": "500240",
                "name": "石柱土家族自治县",
                "firstLetter": "S"
            },
            {
                "code": "620725",
                "name": "山丹县",
                "firstLetter": "S"
            },
            {
                "code": "341523",
                "name": "舒城县",
                "firstLetter": "S"
            },
            {
                "code": "210100",
                "name": "沈阳市",
                "firstLetter": "S"
            },
            {
                "code": "441500",
                "name": "汕尾市",
                "firstLetter": "S"
            },
            {
                "code": "520323",
                "name": "绥阳县",
                "firstLetter": "S"
            },
            {
                "code": "370126",
                "name": "商河县",
                "firstLetter": "S"
            },
            {
                "code": "341722",
                "name": "石台县",
                "firstLetter": "S"
            },
            {
                "code": "620923",
                "name": "肃北蒙古族自治县",
                "firstLetter": "S"
            },
            {
                "code": "654223",
                "name": "沙湾县",
                "firstLetter": "S"
            },
            {
                "code": "510122",
                "name": "双流县",
                "firstLetter": "S"
            },
            {
                "code": "542224",
                "name": "桑日县",
                "firstLetter": "S"
            },
            {
                "code": "321300",
                "name": "宿迁市",
                "firstLetter": "S"
            },
            {
                "code": "430382",
                "name": "韶山市",
                "firstLetter": "S"
            },
            {
                "code": "230422",
                "name": "绥滨县",
                "firstLetter": "S"
            },
            {
                "code": "230500",
                "name": "双鸭山市",
                "firstLetter": "S"
            },
            {
                "code": "522224",
                "name": "石阡县",
                "firstLetter": "S"
            },
            {
                "code": "310100",
                "name": "上海市",
                "firstLetter": "S"
            },
            {
                "code": "522225",
                "name": "思南县",
                "firstLetter": "S"
            },
            {
                "code": "522229",
                "name": "松桃苗族自治县",
                "firstLetter": "S"
            },
            {
                "code": "659001",
                "name": "石河子市",
                "firstLetter": "S"
            },
            {
                "code": "542325",
                "name": "萨迦县",
                "firstLetter": "S"
            },
            {
                "code": "430500",
                "name": "邵阳市",
                "firstLetter": "S"
            },
            {
                "code": "430521",
                "name": "邵东县",
                "firstLetter": "S"
            },
            {
                "code": "430523",
                "name": "邵阳县",
                "firstLetter": "S"
            },
            {
                "code": "140600",
                "name": "朔州市",
                "firstLetter": "S"
            },
            {
                "code": "130100",
                "name": "石家庄市",
                "firstLetter": "S"
            },
            {
                "code": "430527",
                "name": "绥宁县",
                "firstLetter": "S"
            },
            {
                "code": "542337",
                "name": "萨嘎县",
                "firstLetter": "S"
            },
            {
                "code": "140621",
                "name": "山阴县",
                "firstLetter": "S"
            },
            {
                "code": "411200",
                "name": "三门峡市",
                "firstLetter": "S"
            },
            {
                "code": "542426",
                "name": "申扎县",
                "firstLetter": "S"
            },
            {
                "code": "350400",
                "name": "三明市",
                "firstLetter": "S"
            },
            {
                "code": "522623",
                "name": "施秉县",
                "firstLetter": "S"
            },
            {
                "code": "542427",
                "name": "索县",
                "firstLetter": "S"
            },
            {
                "code": "522624",
                "name": "三穗县",
                "firstLetter": "S"
            },
            {
                "code": "130128",
                "name": "深泽县",
                "firstLetter": "S"
            },
            {
                "code": "140725",
                "name": "寿阳县",
                "firstLetter": "S"
            },
            {
                "code": "510682",
                "name": "什邡市",
                "firstLetter": "S"
            },
            {
                "code": "411222",
                "name": "陕县",
                "firstLetter": "S"
            },
            {
                "code": "350427",
                "name": "沙县",
                "firstLetter": "S"
            },
            {
                "code": "510722",
                "name": "三台县",
                "firstLetter": "S"
            },
            {
                "code": "411400",
                "name": "商丘市",
                "firstLetter": "S"
            },
            {
                "code": "450125",
                "name": "上林县",
                "firstLetter": "S"
            },
            {
                "code": "430726",
                "name": "石门县",
                "firstLetter": "S"
            },
            {
                "code": "411327",
                "name": "社旗县",
                "firstLetter": "S"
            },
            {
                "code": "430822",
                "name": "桑植县",
                "firstLetter": "S"
            },
            {
                "code": "370783",
                "name": "寿光市",
                "firstLetter": "S"
            },
            {
                "code": "350581",
                "name": "石狮市",
                "firstLetter": "S"
            },
            {
                "code": "450226",
                "name": "三江侗族自治县",
                "firstLetter": "S"
            },
            {
                "code": "510900",
                "name": "遂宁市",
                "firstLetter": "S"
            },
            {
                "code": "522732",
                "name": "三都水族自治县",
                "firstLetter": "S"
            },
            {
                "code": "330600",
                "name": "绍兴市",
                "firstLetter": "S"
            },
            {
                "code": "510922",
                "name": "射洪县",
                "firstLetter": "S"
            },
            {
                "code": "140927",
                "name": "神池县",
                "firstLetter": "S"
            },
            {
                "code": "231081",
                "name": "绥芬河市",
                "firstLetter": "S"
            },
            {
                "code": "530126",
                "name": "石林彝族自治县",
                "firstLetter": "S"
            },
            {
                "code": "411524",
                "name": "商城县",
                "firstLetter": "S"
            },
            {
                "code": "231124",
                "name": "孙吴县",
                "firstLetter": "S"
            },
            {
                "code": "350721",
                "name": "顺昌县",
                "firstLetter": "S"
            },
            {
                "code": "350724",
                "name": "松溪县",
                "firstLetter": "S"
            },
            {
                "code": "231200",
                "name": "绥化市",
                "firstLetter": "S"
            },
            {
                "code": "350781",
                "name": "邵武市",
                "firstLetter": "S"
            },
            {
                "code": "130426",
                "name": "涉县",
                "firstLetter": "S"
            },
            {
                "code": "431123",
                "name": "双牌县",
                "firstLetter": "S"
            },
            {
                "code": "530323",
                "name": "师宗县",
                "firstLetter": "S"
            },
            {
                "code": "411623",
                "name": "商水县",
                "firstLetter": "S"
            },
            {
                "code": "411624",
                "name": "沈丘县",
                "firstLetter": "S"
            },
            {
                "code": "231226",
                "name": "绥棱县",
                "firstLetter": "S"
            },
            {
                "code": "350823",
                "name": "上杭县",
                "firstLetter": "S"
            },
            {
                "code": "450621",
                "name": "上思县",
                "firstLetter": "S"
            },
            {
                "code": "610422",
                "name": "三原县",
                "firstLetter": "S"
            },
            {
                "code": "141126",
                "name": "石楼县",
                "firstLetter": "S"
            },
            {
                "code": "331022",
                "name": "三门县",
                "firstLetter": "S"
            },
            {
                "code": "350924",
                "name": "寿宁县",
                "firstLetter": "S"
            },
            {
                "code": "530521",
                "name": "施甸县",
                "firstLetter": "S"
            },
            {
                "code": "431321",
                "name": "双峰县",
                "firstLetter": "S"
            },
            {
                "code": "211421",
                "name": "绥中县",
                "firstLetter": "S"
            },
            {
                "code": "331123",
                "name": "遂昌县",
                "firstLetter": "S"
            },
            {
                "code": "331124",
                "name": "松阳县",
                "firstLetter": "S"
            },
            {
                "code": "130582",
                "name": "沙河市",
                "firstLetter": "S"
            },
            {
                "code": "640200",
                "name": "石嘴山市",
                "firstLetter": "S"
            },
            {
                "code": "530626",
                "name": "绥江县",
                "firstLetter": "S"
            },
            {
                "code": "420300",
                "name": "十堰市",
                "firstLetter": "S"
            },
            {
                "code": "530630",
                "name": "水富县",
                "firstLetter": "S"
            },
            {
                "code": "411722",
                "name": "上蔡县",
                "firstLetter": "S"
            },
            {
                "code": "411728",
                "name": "遂平县",
                "firstLetter": "S"
            },
            {
                "code": "360322",
                "name": "上栗县",
                "firstLetter": "S"
            },
            {
                "code": "130636",
                "name": "顺平县",
                "firstLetter": "S"
            },
            {
                "code": "220283",
                "name": "舒兰市",
                "firstLetter": "S"
            },
            {
                "code": "440200",
                "name": "韶关市",
                "firstLetter": "S"
            },
            {
                "code": "511824",
                "name": "石棉县",
                "firstLetter": "S"
            },
            {
                "code": "220300",
                "name": "四平市",
                "firstLetter": "S"
            },
            {
                "code": "440222",
                "name": "始兴县",
                "firstLetter": "S"
            },
            {
                "code": "220382",
                "name": "双辽市",
                "firstLetter": "S"
            },
            {
                "code": "530925",
                "name": "双江拉祜族佤族布朗族傣族自治县",
                "firstLetter": "S"
            },
            {
                "code": "120100",
                "name": "天津市",
                "firstLetter": "T"
            },
            {
                "code": "150500",
                "name": "通辽市",
                "firstLetter": "T"
            },
            {
                "code": "220500",
                "name": "通化市",
                "firstLetter": "T"
            },
            {
                "code": "320323",
                "name": "铜山县",
                "firstLetter": "T"
            },
            {
                "code": "220521",
                "name": "通化县",
                "firstLetter": "T"
            },
            {
                "code": "652101",
                "name": "吐鲁番市",
                "firstLetter": "T"
            },
            {
                "code": "652123",
                "name": "托克逊县",
                "firstLetter": "T"
            },
            {
                "code": "451425",
                "name": "天等县",
                "firstLetter": "T"
            },
            {
                "code": "340700",
                "name": "铜陵市",
                "firstLetter": "T"
            },
            {
                "code": "340721",
                "name": "铜陵县",
                "firstLetter": "T"
            },
            {
                "code": "410222",
                "name": "通许县",
                "firstLetter": "T"
            },
            {
                "code": "220822",
                "name": "通榆县",
                "firstLetter": "T"
            },
            {
                "code": "320585",
                "name": "太仓市",
                "firstLetter": "T"
            },
            {
                "code": "440781",
                "name": "台山市",
                "firstLetter": "T"
            },
            {
                "code": "469026",
                "name": "屯昌县",
                "firstLetter": "T"
            },
            {
                "code": "340825",
                "name": "太湖县",
                "firstLetter": "T"
            },
            {
                "code": "360826",
                "name": "泰和县",
                "firstLetter": "T"
            },
            {
                "code": "222402",
                "name": "图们市",
                "firstLetter": "T"
            },
            {
                "code": "421121",
                "name": "团风县",
                "firstLetter": "T"
            },
            {
                "code": "340881",
                "name": "桐城市",
                "firstLetter": "T"
            },
            {
                "code": "320683",
                "name": "通州市",
                "firstLetter": "T"
            },
            {
                "code": "360926",
                "name": "铜鼓县",
                "firstLetter": "T"
            },
            {
                "code": "421222",
                "name": "通城县",
                "firstLetter": "T"
            },
            {
                "code": "421224",
                "name": "通山县",
                "firstLetter": "T"
            },
            {
                "code": "341181",
                "name": "天长市",
                "firstLetter": "T"
            },
            {
                "code": "230128",
                "name": "通河县",
                "firstLetter": "T"
            },
            {
                "code": "620500",
                "name": "天水市",
                "firstLetter": "T"
            },
            {
                "code": "152224",
                "name": "突泉县",
                "firstLetter": "T"
            },
            {
                "code": "341222",
                "name": "太和县",
                "firstLetter": "T"
            },
            {
                "code": "500224",
                "name": "铜梁县",
                "firstLetter": "T"
            },
            {
                "code": "140100",
                "name": "太原市",
                "firstLetter": "T"
            },
            {
                "code": "410523",
                "name": "汤阴县",
                "firstLetter": "T"
            },
            {
                "code": "653131",
                "name": "塔什库尔干塔吉克自治县",
                "firstLetter": "T"
            },
            {
                "code": "152527",
                "name": "太仆寺旗",
                "firstLetter": "T"
            },
            {
                "code": "620623",
                "name": "天祝藏族自治县",
                "firstLetter": "T"
            },
            {
                "code": "429006",
                "name": "天门市",
                "firstLetter": "T"
            },
            {
                "code": "230224",
                "name": "泰来县",
                "firstLetter": "T"
            },
            {
                "code": "520322",
                "name": "桐梓县",
                "firstLetter": "T"
            },
            {
                "code": "140222",
                "name": "天镇县",
                "firstLetter": "T"
            },
            {
                "code": "654027",
                "name": "特克斯县",
                "firstLetter": "T"
            },
            {
                "code": "321200",
                "name": "泰州市",
                "firstLetter": "T"
            },
            {
                "code": "654201",
                "name": "塔城市",
                "firstLetter": "T"
            },
            {
                "code": "321283",
                "name": "泰兴市",
                "firstLetter": "T"
            },
            {
                "code": "654224",
                "name": "托里县",
                "firstLetter": "T"
            },
            {
                "code": "522201",
                "name": "铜仁市",
                "firstLetter": "T"
            },
            {
                "code": "140424",
                "name": "屯留县",
                "firstLetter": "T"
            },
            {
                "code": "621121",
                "name": "通渭县",
                "firstLetter": "T"
            },
            {
                "code": "410927",
                "name": "台前县",
                "firstLetter": "T"
            },
            {
                "code": "659003",
                "name": "图木舒克市",
                "firstLetter": "T"
            },
            {
                "code": "330122",
                "name": "桐庐县",
                "firstLetter": "T"
            },
            {
                "code": "210321",
                "name": "台安县",
                "firstLetter": "T"
            },
            {
                "code": "140726",
                "name": "太谷县",
                "firstLetter": "T"
            },
            {
                "code": "522627",
                "name": "天柱县",
                "firstLetter": "T"
            },
            {
                "code": "230781",
                "name": "铁力市",
                "firstLetter": "T"
            },
            {
                "code": "522630",
                "name": "台江县",
                "firstLetter": "T"
            },
            {
                "code": "330329",
                "name": "泰顺县",
                "firstLetter": "T"
            },
            {
                "code": "350429",
                "name": "泰宁县",
                "firstLetter": "T"
            },
            {
                "code": "430725",
                "name": "桃源县",
                "firstLetter": "T"
            },
            {
                "code": "130200",
                "name": "唐山市",
                "firstLetter": "T"
            },
            {
                "code": "230828",
                "name": "汤原县",
                "firstLetter": "T"
            },
            {
                "code": "230881",
                "name": "同江市",
                "firstLetter": "T"
            },
            {
                "code": "411328",
                "name": "唐河县",
                "firstLetter": "T"
            },
            {
                "code": "330483",
                "name": "桐乡市",
                "firstLetter": "T"
            },
            {
                "code": "411330",
                "name": "桐柏县",
                "firstLetter": "T"
            },
            {
                "code": "130230",
                "name": "唐海县",
                "firstLetter": "T"
            },
            {
                "code": "430922",
                "name": "桃江县",
                "firstLetter": "T"
            },
            {
                "code": "632321",
                "name": "同仁县",
                "firstLetter": "T"
            },
            {
                "code": "610200",
                "name": "铜川市",
                "firstLetter": "T"
            },
            {
                "code": "370900",
                "name": "泰安市",
                "firstLetter": "T"
            },
            {
                "code": "632522",
                "name": "同德县",
                "firstLetter": "T"
            },
            {
                "code": "450422",
                "name": "藤县",
                "firstLetter": "T"
            },
            {
                "code": "211200",
                "name": "铁岭市",
                "firstLetter": "T"
            },
            {
                "code": "411627",
                "name": "太康县",
                "firstLetter": "T"
            },
            {
                "code": "211221",
                "name": "铁岭县",
                "firstLetter": "T"
            },
            {
                "code": "610331",
                "name": "太白县",
                "firstLetter": "T"
            },
            {
                "code": "232722",
                "name": "塔河县",
                "firstLetter": "T"
            },
            {
                "code": "530423",
                "name": "通海县",
                "firstLetter": "T"
            },
            {
                "code": "331000",
                "name": "台州市",
                "firstLetter": "T"
            },
            {
                "code": "331023",
                "name": "天台县",
                "firstLetter": "T"
            },
            {
                "code": "431230",
                "name": "通道侗族自治县",
                "firstLetter": "T"
            },
            {
                "code": "632823",
                "name": "天峻县",
                "firstLetter": "T"
            },
            {
                "code": "530522",
                "name": "腾冲县",
                "firstLetter": "T"
            },
            {
                "code": "150121",
                "name": "土默特左旗",
                "firstLetter": "T"
            },
            {
                "code": "150122",
                "name": "托克托县",
                "firstLetter": "T"
            },
            {
                "code": "451021",
                "name": "田阳县",
                "firstLetter": "T"
            },
            {
                "code": "451022",
                "name": "田东县",
                "firstLetter": "T"
            },
            {
                "code": "640324",
                "name": "同心县",
                "firstLetter": "T"
            },
            {
                "code": "130627",
                "name": "唐县",
                "firstLetter": "T"
            },
            {
                "code": "150221",
                "name": "土默特右旗",
                "firstLetter": "T"
            },
            {
                "code": "451029",
                "name": "田林县",
                "firstLetter": "T"
            },
            {
                "code": "511825",
                "name": "天全县",
                "firstLetter": "T"
            },
            {
                "code": "451222",
                "name": "天峨县",
                "firstLetter": "T"
            },
            {
                "code": "511921",
                "name": "通江县",
                "firstLetter": "T"
            },
            {
                "code": "340322",
                "name": "五河县",
                "firstLetter": "W"
            },
            {
                "code": "650121",
                "name": "乌鲁木齐县",
                "firstLetter": "W"
            },
            {
                "code": "130726",
                "name": "蔚县",
                "firstLetter": "W"
            },
            {
                "code": "130729",
                "name": "万全县",
                "firstLetter": "W"
            },
            {
                "code": "451323",
                "name": "武宣县",
                "firstLetter": "W"
            },
            {
                "code": "532329",
                "name": "武定县",
                "firstLetter": "W"
            },
            {
                "code": "610829",
                "name": "吴堡县",
                "firstLetter": "W"
            },
            {
                "code": "150626",
                "name": "乌审旗",
                "firstLetter": "W"
            },
            {
                "code": "130828",
                "name": "围场满族蒙古族自治县",
                "firstLetter": "W"
            },
            {
                "code": "532600",
                "name": "文山壮族苗族自治州",
                "firstLetter": "W"
            },
            {
                "code": "469001",
                "name": "五指山市",
                "firstLetter": "W"
            },
            {
                "code": "532621",
                "name": "文山县",
                "firstLetter": "W"
            },
            {
                "code": "652723",
                "name": "温泉县",
                "firstLetter": "W"
            },
            {
                "code": "320584",
                "name": "吴江市",
                "firstLetter": "W"
            },
            {
                "code": "410223",
                "name": "尉氏县",
                "firstLetter": "W"
            },
            {
                "code": "469005",
                "name": "文昌市",
                "firstLetter": "W"
            },
            {
                "code": "469006",
                "name": "万宁市",
                "firstLetter": "W"
            },
            {
                "code": "652823",
                "name": "尉犁县",
                "firstLetter": "W"
            },
            {
                "code": "130928",
                "name": "吴桥县",
                "firstLetter": "W"
            },
            {
                "code": "150821",
                "name": "五原县",
                "firstLetter": "W"
            },
            {
                "code": "150823",
                "name": "乌拉特前旗",
                "firstLetter": "W"
            },
            {
                "code": "340827",
                "name": "望江县",
                "firstLetter": "W"
            },
            {
                "code": "360828",
                "name": "万安县",
                "firstLetter": "W"
            },
            {
                "code": "150824",
                "name": "乌拉特中旗",
                "firstLetter": "W"
            },
            {
                "code": "150825",
                "name": "乌拉特后旗",
                "firstLetter": "W"
            },
            {
                "code": "222424",
                "name": "汪清县",
                "firstLetter": "W"
            },
            {
                "code": "150900",
                "name": "乌兰察布市",
                "firstLetter": "W"
            },
            {
                "code": "652922",
                "name": "温宿县",
                "firstLetter": "W"
            },
            {
                "code": "360922",
                "name": "万载县",
                "firstLetter": "W"
            },
            {
                "code": "421182",
                "name": "武穴市",
                "firstLetter": "W"
            },
            {
                "code": "440883",
                "name": "吴川市",
                "firstLetter": "W"
            },
            {
                "code": "532927",
                "name": "巍山彝族回族自治县",
                "firstLetter": "W"
            },
            {
                "code": "652927",
                "name": "乌什县",
                "firstLetter": "W"
            },
            {
                "code": "131026",
                "name": "文安县",
                "firstLetter": "W"
            },
            {
                "code": "152201",
                "name": "乌兰浩特市",
                "firstLetter": "W"
            },
            {
                "code": "653024",
                "name": "乌恰县",
                "firstLetter": "W"
            },
            {
                "code": "131122",
                "name": "武邑县",
                "firstLetter": "W"
            },
            {
                "code": "131123",
                "name": "武强县",
                "firstLetter": "W"
            },
            {
                "code": "410481",
                "name": "舞钢市",
                "firstLetter": "W"
            },
            {
                "code": "230184",
                "name": "五常市",
                "firstLetter": "W"
            },
            {
                "code": "620524",
                "name": "武山县",
                "firstLetter": "W"
            },
            {
                "code": "620600",
                "name": "武威市",
                "firstLetter": "W"
            },
            {
                "code": "533423",
                "name": "维西傈僳族自治县",
                "firstLetter": "W"
            },
            {
                "code": "500232",
                "name": "武隆县",
                "firstLetter": "W"
            },
            {
                "code": "361129",
                "name": "万年县",
                "firstLetter": "W"
            },
            {
                "code": "500237",
                "name": "巫山县",
                "firstLetter": "W"
            },
            {
                "code": "441424",
                "name": "五华县",
                "firstLetter": "W"
            },
            {
                "code": "500238",
                "name": "巫溪县",
                "firstLetter": "W"
            },
            {
                "code": "430122",
                "name": "望城县",
                "firstLetter": "W"
            },
            {
                "code": "520326",
                "name": "务川仡佬族苗族自治县",
                "firstLetter": "W"
            },
            {
                "code": "341621",
                "name": "涡阳县",
                "firstLetter": "W"
            },
            {
                "code": "410781",
                "name": "卫辉市",
                "firstLetter": "W"
            },
            {
                "code": "654202",
                "name": "乌苏市",
                "firstLetter": "W"
            },
            {
                "code": "410823",
                "name": "武陟县",
                "firstLetter": "W"
            },
            {
                "code": "410825",
                "name": "温县",
                "firstLetter": "W"
            },
            {
                "code": "140429",
                "name": "武乡县",
                "firstLetter": "W"
            },
            {
                "code": "210281",
                "name": "瓦房店市",
                "firstLetter": "W"
            },
            {
                "code": "621123",
                "name": "渭源县",
                "firstLetter": "W"
            },
            {
                "code": "659004",
                "name": "五家渠市",
                "firstLetter": "W"
            },
            {
                "code": "522326",
                "name": "望谟县",
                "firstLetter": "W"
            },
            {
                "code": "621222",
                "name": "文县",
                "firstLetter": "W"
            },
            {
                "code": "430581",
                "name": "武冈市",
                "firstLetter": "W"
            },
            {
                "code": "522427",
                "name": "威宁彝族回族苗族自治县",
                "firstLetter": "W"
            },
            {
                "code": "411121",
                "name": "舞阳县",
                "firstLetter": "W"
            },
            {
                "code": "330300",
                "name": "温州市",
                "firstLetter": "W"
            },
            {
                "code": "130130",
                "name": "无极县",
                "firstLetter": "W"
            },
            {
                "code": "450122",
                "name": "武鸣县",
                "firstLetter": "W"
            },
            {
                "code": "330328",
                "name": "文成县",
                "firstLetter": "W"
            },
            {
                "code": "140822",
                "name": "万荣县",
                "firstLetter": "W"
            },
            {
                "code": "370700",
                "name": "潍坊市",
                "firstLetter": "W"
            },
            {
                "code": "140823",
                "name": "闻喜县",
                "firstLetter": "W"
            },
            {
                "code": "522725",
                "name": "瓮安县",
                "firstLetter": "W"
            },
            {
                "code": "510821",
                "name": "旺苍县",
                "firstLetter": "W"
            },
            {
                "code": "140922",
                "name": "五台县",
                "firstLetter": "W"
            },
            {
                "code": "140928",
                "name": "五寨县",
                "firstLetter": "W"
            },
            {
                "code": "511024",
                "name": "威远县",
                "firstLetter": "W"
            },
            {
                "code": "330723",
                "name": "武义县",
                "firstLetter": "W"
            },
            {
                "code": "231182",
                "name": "五大连池市",
                "firstLetter": "W"
            },
            {
                "code": "450400",
                "name": "梧州市",
                "firstLetter": "W"
            },
            {
                "code": "231221",
                "name": "望奎县",
                "firstLetter": "W"
            },
            {
                "code": "350782",
                "name": "武夷山市",
                "firstLetter": "W"
            },
            {
                "code": "371000",
                "name": "威海市",
                "firstLetter": "W"
            },
            {
                "code": "371081",
                "name": "文登市",
                "firstLetter": "W"
            },
            {
                "code": "130434",
                "name": "魏县",
                "firstLetter": "W"
            },
            {
                "code": "350824",
                "name": "武平县",
                "firstLetter": "W"
            },
            {
                "code": "371121",
                "name": "五莲县",
                "firstLetter": "W"
            },
            {
                "code": "130481",
                "name": "武安市",
                "firstLetter": "W"
            },
            {
                "code": "420100",
                "name": "武汉市",
                "firstLetter": "W"
            },
            {
                "code": "141121",
                "name": "文水县",
                "firstLetter": "W"
            },
            {
                "code": "632821",
                "name": "乌兰县",
                "firstLetter": "W"
            },
            {
                "code": "331081",
                "name": "温岭市",
                "firstLetter": "W"
            },
            {
                "code": "610431",
                "name": "武功县",
                "firstLetter": "W"
            },
            {
                "code": "610500",
                "name": "渭南市",
                "firstLetter": "W"
            },
            {
                "code": "130533",
                "name": "威县",
                "firstLetter": "W"
            },
            {
                "code": "150125",
                "name": "武川县",
                "firstLetter": "W"
            },
            {
                "code": "530629",
                "name": "威信县",
                "firstLetter": "W"
            },
            {
                "code": "640300",
                "name": "吴忠市",
                "firstLetter": "W"
            },
            {
                "code": "511622",
                "name": "武胜县",
                "firstLetter": "W"
            },
            {
                "code": "371428",
                "name": "武城县",
                "firstLetter": "W"
            },
            {
                "code": "610626",
                "name": "吴起县",
                "firstLetter": "W"
            },
            {
                "code": "130631",
                "name": "望都县",
                "firstLetter": "W"
            },
            {
                "code": "150300",
                "name": "乌海市",
                "firstLetter": "W"
            },
            {
                "code": "340200",
                "name": "芜湖市",
                "firstLetter": "W"
            },
            {
                "code": "511781",
                "name": "万源市",
                "firstLetter": "W"
            },
            {
                "code": "320200",
                "name": "无锡市",
                "firstLetter": "W"
            },
            {
                "code": "340221",
                "name": "芜湖县",
                "firstLetter": "W"
            },
            {
                "code": "420529",
                "name": "五峰土家族自治县",
                "firstLetter": "W"
            },
            {
                "code": "360423",
                "name": "武宁县",
                "firstLetter": "W"
            },
            {
                "code": "650100",
                "name": "乌鲁木齐市",
                "firstLetter": "W"
            },
            {
                "code": "371623",
                "name": "无棣县",
                "firstLetter": "W"
            },
            {
                "code": "341422",
                "name": "无为县",
                "firstLetter": "W"
            },
            {
                "code": "440229",
                "name": "翁源县",
                "firstLetter": "W"
            },
            {
                "code": "150426",
                "name": "翁牛特旗",
                "firstLetter": "W"
            },
            {
                "code": "130721",
                "name": "宣化县",
                "firstLetter": "X"
            },
            {
                "code": "320300",
                "name": "徐州市",
                "firstLetter": "X"
            },
            {
                "code": "360500",
                "name": "新余市",
                "firstLetter": "X"
            },
            {
                "code": "451321",
                "name": "忻城县",
                "firstLetter": "X"
            },
            {
                "code": "451322",
                "name": "象州县",
                "firstLetter": "X"
            },
            {
                "code": "320381",
                "name": "新沂市",
                "firstLetter": "X"
            },
            {
                "code": "360722",
                "name": "信丰县",
                "firstLetter": "X"
            },
            {
                "code": "513227",
                "name": "小金县",
                "firstLetter": "X"
            },
            {
                "code": "130822",
                "name": "兴隆县",
                "firstLetter": "X"
            },
            {
                "code": "410183",
                "name": "新密市",
                "firstLetter": "X"
            },
            {
                "code": "420900",
                "name": "孝感市",
                "firstLetter": "X"
            },
            {
                "code": "410184",
                "name": "新郑市",
                "firstLetter": "X"
            },
            {
                "code": "420921",
                "name": "孝昌县",
                "firstLetter": "X"
            },
            {
                "code": "360732",
                "name": "兴国县",
                "firstLetter": "X"
            },
            {
                "code": "360734",
                "name": "寻乌县",
                "firstLetter": "X"
            },
            {
                "code": "610928",
                "name": "旬阳县",
                "firstLetter": "X"
            },
            {
                "code": "150726",
                "name": "新巴尔虎左旗",
                "firstLetter": "X"
            },
            {
                "code": "150727",
                "name": "新巴尔虎右旗",
                "firstLetter": "X"
            },
            {
                "code": "513329",
                "name": "新龙县",
                "firstLetter": "X"
            },
            {
                "code": "532623",
                "name": "西畴县",
                "firstLetter": "X"
            },
            {
                "code": "360823",
                "name": "峡江县",
                "firstLetter": "X"
            },
            {
                "code": "360824",
                "name": "新干县",
                "firstLetter": "X"
            },
            {
                "code": "130929",
                "name": "献县",
                "firstLetter": "X"
            },
            {
                "code": "513336",
                "name": "乡城县",
                "firstLetter": "X"
            },
            {
                "code": "532800",
                "name": "西双版纳傣族自治州",
                "firstLetter": "X"
            },
            {
                "code": "513401",
                "name": "西昌市",
                "firstLetter": "X"
            },
            {
                "code": "410323",
                "name": "新安县",
                "firstLetter": "X"
            },
            {
                "code": "469037",
                "name": "西沙群岛",
                "firstLetter": "X"
            },
            {
                "code": "440825",
                "name": "徐闻县",
                "firstLetter": "X"
            },
            {
                "code": "532923",
                "name": "祥云县",
                "firstLetter": "X"
            },
            {
                "code": "341022",
                "name": "休宁县",
                "firstLetter": "X"
            },
            {
                "code": "652925",
                "name": "新和县",
                "firstLetter": "X"
            },
            {
                "code": "131024",
                "name": "香河县",
                "firstLetter": "X"
            },
            {
                "code": "150924",
                "name": "兴和县",
                "firstLetter": "X"
            },
            {
                "code": "421200",
                "name": "咸宁市",
                "firstLetter": "X"
            },
            {
                "code": "513432",
                "name": "喜德县",
                "firstLetter": "X"
            },
            {
                "code": "152200",
                "name": "兴安盟",
                "firstLetter": "X"
            },
            {
                "code": "440983",
                "name": "信宜市",
                "firstLetter": "X"
            },
            {
                "code": "152500",
                "name": "锡林郭勒盟",
                "firstLetter": "X"
            },
            {
                "code": "152502",
                "name": "锡林浩特市",
                "firstLetter": "X"
            },
            {
                "code": "422825",
                "name": "宣恩县",
                "firstLetter": "X"
            },
            {
                "code": "422826",
                "name": "咸丰县",
                "firstLetter": "X"
            },
            {
                "code": "320921",
                "name": "响水县",
                "firstLetter": "X"
            },
            {
                "code": "520122",
                "name": "息烽县",
                "firstLetter": "X"
            },
            {
                "code": "520123",
                "name": "修文县",
                "firstLetter": "X"
            },
            {
                "code": "533421",
                "name": "香格里拉县",
                "firstLetter": "X"
            },
            {
                "code": "152526",
                "name": "西乌珠穆沁旗",
                "firstLetter": "X"
            },
            {
                "code": "429004",
                "name": "仙桃市",
                "firstLetter": "X"
            },
            {
                "code": "152528",
                "name": "镶黄旗",
                "firstLetter": "X"
            },
            {
                "code": "341322",
                "name": "萧县",
                "firstLetter": "X"
            },
            {
                "code": "500241",
                "name": "秀山土家族苗族自治县",
                "firstLetter": "X"
            },
            {
                "code": "410700",
                "name": "新乡市",
                "firstLetter": "X"
            },
            {
                "code": "441481",
                "name": "兴宁市",
                "firstLetter": "X"
            },
            {
                "code": "410721",
                "name": "新乡县",
                "firstLetter": "X"
            },
            {
                "code": "654025",
                "name": "新源县",
                "firstLetter": "X"
            },
            {
                "code": "520330",
                "name": "习水县",
                "firstLetter": "X"
            },
            {
                "code": "210181",
                "name": "新民市",
                "firstLetter": "X"
            },
            {
                "code": "321281",
                "name": "兴化市",
                "firstLetter": "X"
            },
            {
                "code": "341800",
                "name": "宣城市",
                "firstLetter": "X"
            },
            {
                "code": "430300",
                "name": "湘潭市",
                "firstLetter": "X"
            },
            {
                "code": "410821",
                "name": "修武县",
                "firstLetter": "X"
            },
            {
                "code": "430321",
                "name": "湘潭县",
                "firstLetter": "X"
            },
            {
                "code": "430381",
                "name": "湘乡市",
                "firstLetter": "X"
            },
            {
                "code": "140423",
                "name": "襄垣县",
                "firstLetter": "X"
            },
            {
                "code": "510132",
                "name": "新津县",
                "firstLetter": "X"
            },
            {
                "code": "411000",
                "name": "许昌市",
                "firstLetter": "X"
            },
            {
                "code": "522301",
                "name": "兴义市",
                "firstLetter": "X"
            },
            {
                "code": "522322",
                "name": "兴仁县",
                "firstLetter": "X"
            },
            {
                "code": "542328",
                "name": "谢通门县",
                "firstLetter": "X"
            },
            {
                "code": "350200",
                "name": "厦门市",
                "firstLetter": "X"
            },
            {
                "code": "430522",
                "name": "新邵县",
                "firstLetter": "X"
            },
            {
                "code": "621225",
                "name": "西和县",
                "firstLetter": "X"
            },
            {
                "code": "411023",
                "name": "许昌县",
                "firstLetter": "X"
            },
            {
                "code": "411025",
                "name": "襄城县",
                "firstLetter": "X"
            },
            {
                "code": "430528",
                "name": "新宁县",
                "firstLetter": "X"
            },
            {
                "code": "210422",
                "name": "新宾满族自治县",
                "firstLetter": "X"
            },
            {
                "code": "330225",
                "name": "象山县",
                "firstLetter": "X"
            },
            {
                "code": "445321",
                "name": "新兴县",
                "firstLetter": "X"
            },
            {
                "code": "510524",
                "name": "叙永县",
                "firstLetter": "X"
            },
            {
                "code": "350322",
                "name": "仙游县",
                "firstLetter": "X"
            },
            {
                "code": "130125",
                "name": "行唐县",
                "firstLetter": "X"
            },
            {
                "code": "140724",
                "name": "昔阳县",
                "firstLetter": "X"
            },
            {
                "code": "430624",
                "name": "湘阴县",
                "firstLetter": "X"
            },
            {
                "code": "130181",
                "name": "辛集市",
                "firstLetter": "X"
            },
            {
                "code": "623027",
                "name": "夏河县",
                "firstLetter": "X"
            },
            {
                "code": "130184",
                "name": "新乐市",
                "firstLetter": "X"
            },
            {
                "code": "630100",
                "name": "西宁市",
                "firstLetter": "X"
            },
            {
                "code": "411323",
                "name": "西峡县",
                "firstLetter": "X"
            },
            {
                "code": "140825",
                "name": "新绛县",
                "firstLetter": "X"
            },
            {
                "code": "140828",
                "name": "夏县",
                "firstLetter": "X"
            },
            {
                "code": "411329",
                "name": "新野县",
                "firstLetter": "X"
            },
            {
                "code": "140900",
                "name": "忻州市",
                "firstLetter": "X"
            },
            {
                "code": "411500",
                "name": "信阳市",
                "firstLetter": "X"
            },
            {
                "code": "610100",
                "name": "西安市",
                "firstLetter": "X"
            },
            {
                "code": "632128",
                "name": "循化撒拉族自治县",
                "firstLetter": "X"
            },
            {
                "code": "330624",
                "name": "新昌县",
                "firstLetter": "X"
            },
            {
                "code": "411426",
                "name": "夏邑县",
                "firstLetter": "X"
            },
            {
                "code": "450325",
                "name": "兴安县",
                "firstLetter": "X"
            },
            {
                "code": "411523",
                "name": "新县",
                "firstLetter": "X"
            },
            {
                "code": "231123",
                "name": "逊克县",
                "firstLetter": "X"
            },
            {
                "code": "530129",
                "name": "寻甸回族彝族自治县",
                "firstLetter": "X"
            },
            {
                "code": "141023",
                "name": "襄汾县",
                "firstLetter": "X"
            },
            {
                "code": "411528",
                "name": "息县",
                "firstLetter": "X"
            },
            {
                "code": "370982",
                "name": "新泰市",
                "firstLetter": "X"
            },
            {
                "code": "632524",
                "name": "兴海县",
                "firstLetter": "X"
            },
            {
                "code": "141029",
                "name": "乡宁县",
                "firstLetter": "X"
            },
            {
                "code": "411622",
                "name": "西华县",
                "firstLetter": "X"
            },
            {
                "code": "431128",
                "name": "新田县",
                "firstLetter": "X"
            },
            {
                "code": "530381",
                "name": "宣威市",
                "firstLetter": "X"
            },
            {
                "code": "211223",
                "name": "西丰县",
                "firstLetter": "X"
            },
            {
                "code": "411681",
                "name": "项城市",
                "firstLetter": "X"
            },
            {
                "code": "610400",
                "name": "咸阳市",
                "firstLetter": "X"
            },
            {
                "code": "130500",
                "name": "邢台市",
                "firstLetter": "X"
            },
            {
                "code": "511325",
                "name": "西充县",
                "firstLetter": "X"
            },
            {
                "code": "141123",
                "name": "兴县",
                "firstLetter": "X"
            },
            {
                "code": "130521",
                "name": "邢台县",
                "firstLetter": "X"
            },
            {
                "code": "350921",
                "name": "霞浦县",
                "firstLetter": "X"
            },
            {
                "code": "431227",
                "name": "新晃侗族自治县",
                "firstLetter": "X"
            },
            {
                "code": "530427",
                "name": "新平彝族傣族自治县",
                "firstLetter": "X"
            },
            {
                "code": "331024",
                "name": "仙居县",
                "firstLetter": "X"
            },
            {
                "code": "610429",
                "name": "旬邑县",
                "firstLetter": "X"
            },
            {
                "code": "141181",
                "name": "孝义市",
                "firstLetter": "X"
            },
            {
                "code": "130530",
                "name": "新河县",
                "firstLetter": "X"
            },
            {
                "code": "610481",
                "name": "兴平市",
                "firstLetter": "X"
            },
            {
                "code": "431322",
                "name": "新化县",
                "firstLetter": "X"
            },
            {
                "code": "211481",
                "name": "兴城市",
                "firstLetter": "X"
            },
            {
                "code": "433100",
                "name": "湘西土家族苗族自治州",
                "firstLetter": "X"
            },
            {
                "code": "360122",
                "name": "新建县",
                "firstLetter": "X"
            },
            {
                "code": "511528",
                "name": "兴文县",
                "firstLetter": "X"
            },
            {
                "code": "450924",
                "name": "兴业县",
                "firstLetter": "X"
            },
            {
                "code": "411721",
                "name": "西平县",
                "firstLetter": "X"
            },
            {
                "code": "371427",
                "name": "夏津县",
                "firstLetter": "X"
            },
            {
                "code": "130625",
                "name": "徐水县",
                "firstLetter": "X"
            },
            {
                "code": "411729",
                "name": "新蔡县",
                "firstLetter": "X"
            },
            {
                "code": "511722",
                "name": "宣汉县",
                "firstLetter": "X"
            },
            {
                "code": "640422",
                "name": "西吉县",
                "firstLetter": "X"
            },
            {
                "code": "451030",
                "name": "西林县",
                "firstLetter": "X"
            },
            {
                "code": "420526",
                "name": "兴山县",
                "firstLetter": "X"
            },
            {
                "code": "130638",
                "name": "雄县",
                "firstLetter": "X"
            },
            {
                "code": "530829",
                "name": "西盟佤族自治县",
                "firstLetter": "X"
            },
            {
                "code": "360424",
                "name": "修水县",
                "firstLetter": "X"
            },
            {
                "code": "610724",
                "name": "西乡县",
                "firstLetter": "X"
            },
            {
                "code": "360427",
                "name": "星子县",
                "firstLetter": "X"
            },
            {
                "code": "420600",
                "name": "襄阳市",
                "firstLetter": "X"
            },
            {
                "code": "440233",
                "name": "新丰县",
                "firstLetter": "X"
            },
            {
                "code": "610800",
                "name": "榆林市",
                "firstLetter": "Y"
            },
            {
                "code": "451281",
                "name": "宜州市",
                "firstLetter": "Y"
            },
            {
                "code": "360600",
                "name": "鹰潭市",
                "firstLetter": "Y"
            },
            {
                "code": "420684",
                "name": "宜城市",
                "firstLetter": "Y"
            },
            {
                "code": "130727",
                "name": "阳原县",
                "firstLetter": "Y"
            },
            {
                "code": "360622",
                "name": "余江县",
                "firstLetter": "Y"
            },
            {
                "code": "532325",
                "name": "姚安县",
                "firstLetter": "Y"
            },
            {
                "code": "532327",
                "name": "永仁县",
                "firstLetter": "Y"
            },
            {
                "code": "532328",
                "name": "元谋县",
                "firstLetter": "Y"
            },
            {
                "code": "652223",
                "name": "伊吾县",
                "firstLetter": "Y"
            },
            {
                "code": "150627",
                "name": "伊金霍洛旗",
                "firstLetter": "Y"
            },
            {
                "code": "360731",
                "name": "于都县",
                "firstLetter": "Y"
            },
            {
                "code": "420923",
                "name": "云梦县",
                "firstLetter": "Y"
            },
            {
                "code": "532528",
                "name": "元阳县",
                "firstLetter": "Y"
            },
            {
                "code": "420981",
                "name": "应城市",
                "firstLetter": "Y"
            },
            {
                "code": "513325",
                "name": "雅江县",
                "firstLetter": "Y"
            },
            {
                "code": "150782",
                "name": "牙克石市",
                "firstLetter": "Y"
            },
            {
                "code": "532622",
                "name": "砚山县",
                "firstLetter": "Y"
            },
            {
                "code": "130925",
                "name": "盐山县",
                "firstLetter": "Y"
            },
            {
                "code": "222400",
                "name": "延边朝鲜族自治州",
                "firstLetter": "Y"
            },
            {
                "code": "360825",
                "name": "永丰县",
                "firstLetter": "Y"
            },
            {
                "code": "222401",
                "name": "延吉市",
                "firstLetter": "Y"
            },
            {
                "code": "652826",
                "name": "焉耆回族自治县",
                "firstLetter": "Y"
            },
            {
                "code": "340828",
                "name": "岳西县",
                "firstLetter": "Y"
            },
            {
                "code": "360830",
                "name": "永新县",
                "firstLetter": "Y"
            },
            {
                "code": "421124",
                "name": "英山县",
                "firstLetter": "Y"
            },
            {
                "code": "620121",
                "name": "永登县",
                "firstLetter": "Y"
            },
            {
                "code": "360900",
                "name": "宜春市",
                "firstLetter": "Y"
            },
            {
                "code": "620123",
                "name": "榆中县",
                "firstLetter": "Y"
            },
            {
                "code": "513423",
                "name": "盐源县",
                "firstLetter": "Y"
            },
            {
                "code": "532922",
                "name": "漾濞彝族自治县",
                "firstLetter": "Y"
            },
            {
                "code": "131023",
                "name": "永清县",
                "firstLetter": "Y"
            },
            {
                "code": "410327",
                "name": "宜阳县",
                "firstLetter": "Y"
            },
            {
                "code": "620321",
                "name": "永昌县",
                "firstLetter": "Y"
            },
            {
                "code": "360924",
                "name": "宜丰县",
                "firstLetter": "Y"
            },
            {
                "code": "410329",
                "name": "伊川县",
                "firstLetter": "Y"
            },
            {
                "code": "532928",
                "name": "永平县",
                "firstLetter": "Y"
            },
            {
                "code": "532929",
                "name": "云龙县",
                "firstLetter": "Y"
            },
            {
                "code": "620321",
                "name": "永昌县",
                "firstLetter": "Y"
            },
            {
                "code": "230123",
                "name": "依兰县",
                "firstLetter": "Y"
            },
            {
                "code": "513434",
                "name": "越西县",
                "firstLetter": "Y"
            },
            {
                "code": "410422",
                "name": "叶县",
                "firstLetter": "Y"
            },
            {
                "code": "533123",
                "name": "盈江县",
                "firstLetter": "Y"
            },
            {
                "code": "230129",
                "name": "延寿县",
                "firstLetter": "Y"
            },
            {
                "code": "361026",
                "name": "宜黄县",
                "firstLetter": "Y"
            },
            {
                "code": "653123",
                "name": "英吉沙县",
                "firstLetter": "Y"
            },
            {
                "code": "320900",
                "name": "盐城市",
                "firstLetter": "Y"
            },
            {
                "code": "653126",
                "name": "叶城县",
                "firstLetter": "Y"
            },
            {
                "code": "653128",
                "name": "岳普湖县",
                "firstLetter": "Y"
            },
            {
                "code": "361123",
                "name": "玉山县",
                "firstLetter": "Y"
            },
            {
                "code": "361127",
                "name": "余干县",
                "firstLetter": "Y"
            },
            {
                "code": "230223",
                "name": "依安县",
                "firstLetter": "Y"
            },
            {
                "code": "321000",
                "name": "扬州市",
                "firstLetter": "Y"
            },
            {
                "code": "500235",
                "name": "云阳县",
                "firstLetter": "Y"
            },
            {
                "code": "140122",
                "name": "阳曲县",
                "firstLetter": "Y"
            },
            {
                "code": "653226",
                "name": "于田县",
                "firstLetter": "Y"
            },
            {
                "code": "321081",
                "name": "仪征市",
                "firstLetter": "Y"
            },
            {
                "code": "500242",
                "name": "酉阳土家族苗族自治县",
                "firstLetter": "Y"
            },
            {
                "code": "654000",
                "name": "伊犁哈萨克自治州",
                "firstLetter": "Y"
            },
            {
                "code": "654002",
                "name": "伊宁市",
                "firstLetter": "Y"
            },
            {
                "code": "654021",
                "name": "伊宁县",
                "firstLetter": "Y"
            },
            {
                "code": "140221",
                "name": "阳高县",
                "firstLetter": "Y"
            },
            {
                "code": "410725",
                "name": "原阳县",
                "firstLetter": "Y"
            },
            {
                "code": "410726",
                "name": "延津县",
                "firstLetter": "Y"
            },
            {
                "code": "520329",
                "name": "余庆县",
                "firstLetter": "Y"
            },
            {
                "code": "321182",
                "name": "扬中市",
                "firstLetter": "Y"
            },
            {
                "code": "140300",
                "name": "阳泉市",
                "firstLetter": "Y"
            },
            {
                "code": "430225",
                "name": "炎陵县",
                "firstLetter": "Y"
            },
            {
                "code": "620981",
                "name": "玉门市",
                "firstLetter": "Y"
            },
            {
                "code": "441700",
                "name": "阳江市",
                "firstLetter": "Y"
            },
            {
                "code": "140322",
                "name": "盂县",
                "firstLetter": "Y"
            },
            {
                "code": "441721",
                "name": "阳西县",
                "firstLetter": "Y"
            },
            {
                "code": "654225",
                "name": "裕民县",
                "firstLetter": "Y"
            },
            {
                "code": "441723",
                "name": "阳东县",
                "firstLetter": "Y"
            },
            {
                "code": "110229",
                "name": "延庆县",
                "firstLetter": "Y"
            },
            {
                "code": "441781",
                "name": "阳春市",
                "firstLetter": "Y"
            },
            {
                "code": "522223",
                "name": "玉屏侗族自治县",
                "firstLetter": "Y"
            },
            {
                "code": "441823",
                "name": "阳山县",
                "firstLetter": "Y"
            },
            {
                "code": "522226",
                "name": "印江土家族苗族自治县",
                "firstLetter": "Y"
            },
            {
                "code": "441881",
                "name": "英德市",
                "firstLetter": "Y"
            },
            {
                "code": "522228",
                "name": "沿河土家族自治县",
                "firstLetter": "Y"
            },
            {
                "code": "230522",
                "name": "友谊县",
                "firstLetter": "Y"
            },
            {
                "code": "370323",
                "name": "沂源县",
                "firstLetter": "Y"
            },
            {
                "code": "350125",
                "name": "永泰县",
                "firstLetter": "Y"
            },
            {
                "code": "140522",
                "name": "阳城县",
                "firstLetter": "Y"
            },
            {
                "code": "510422",
                "name": "盐边县",
                "firstLetter": "Y"
            },
            {
                "code": "542334",
                "name": "亚东县",
                "firstLetter": "Y"
            },
            {
                "code": "230700",
                "name": "伊春市",
                "firstLetter": "Y"
            },
            {
                "code": "411081",
                "name": "禹州市",
                "firstLetter": "Y"
            },
            {
                "code": "140622",
                "name": "应县",
                "firstLetter": "Y"
            },
            {
                "code": "445300",
                "name": "云浮市",
                "firstLetter": "Y"
            },
            {
                "code": "140623",
                "name": "右玉县",
                "firstLetter": "Y"
            },
            {
                "code": "430600",
                "name": "岳阳市",
                "firstLetter": "Y"
            },
            {
                "code": "445322",
                "name": "郁南县",
                "firstLetter": "Y"
            },
            {
                "code": "330281",
                "name": "余姚市",
                "firstLetter": "Y"
            },
            {
                "code": "445323",
                "name": "云安县",
                "firstLetter": "Y"
            },
            {
                "code": "622923",
                "name": "永靖县",
                "firstLetter": "Y"
            },
            {
                "code": "140721",
                "name": "榆社县",
                "firstLetter": "Y"
            },
            {
                "code": "370600",
                "name": "烟台市",
                "firstLetter": "Y"
            },
            {
                "code": "430621",
                "name": "岳阳县",
                "firstLetter": "Y"
            },
            {
                "code": "330324",
                "name": "永嘉县",
                "firstLetter": "Y"
            },
            {
                "code": "130132",
                "name": "元氏县",
                "firstLetter": "Y"
            },
            {
                "code": "411281",
                "name": "义马市",
                "firstLetter": "Y"
            },
            {
                "code": "350426",
                "name": "尤溪县",
                "firstLetter": "Y"
            },
            {
                "code": "140800",
                "name": "运城市",
                "firstLetter": "Y"
            },
            {
                "code": "510723",
                "name": "盐亭县",
                "firstLetter": "Y"
            },
            {
                "code": "350481",
                "name": "永安市",
                "firstLetter": "Y"
            },
            {
                "code": "140827",
                "name": "垣曲县",
                "firstLetter": "Y"
            },
            {
                "code": "210727",
                "name": "义县",
                "firstLetter": "Y"
            },
            {
                "code": "140881",
                "name": "永济市",
                "firstLetter": "Y"
            },
            {
                "code": "210800",
                "name": "营口市",
                "firstLetter": "Y"
            },
            {
                "code": "350525",
                "name": "永春县",
                "firstLetter": "Y"
            },
            {
                "code": "430900",
                "name": "益阳市",
                "firstLetter": "Y"
            },
            {
                "code": "130229",
                "name": "玉田县",
                "firstLetter": "Y"
            },
            {
                "code": "350622",
                "name": "云霄县",
                "firstLetter": "Y"
            },
            {
                "code": "370827",
                "name": "鱼台县",
                "firstLetter": "Y"
            },
            {
                "code": "411425",
                "name": "虞城县",
                "firstLetter": "Y"
            },
            {
                "code": "450321",
                "name": "阳朔县",
                "firstLetter": "Y"
            },
            {
                "code": "411481",
                "name": "永城市",
                "firstLetter": "Y"
            },
            {
                "code": "431022",
                "name": "宜章县",
                "firstLetter": "Y"
            },
            {
                "code": "431023",
                "name": "永兴县",
                "firstLetter": "Y"
            },
            {
                "code": "450326",
                "name": "永福县",
                "firstLetter": "Y"
            },
            {
                "code": "140981",
                "name": "原平市",
                "firstLetter": "Y"
            },
            {
                "code": "530125",
                "name": "宜良县",
                "firstLetter": "Y"
            },
            {
                "code": "141022",
                "name": "翼城县",
                "firstLetter": "Y"
            },
            {
                "code": "610222",
                "name": "宜君县",
                "firstLetter": "Y"
            },
            {
                "code": "330782",
                "name": "义乌市",
                "firstLetter": "Y"
            },
            {
                "code": "431100",
                "name": "永州市",
                "firstLetter": "Y"
            },
            {
                "code": "330784",
                "name": "永康市",
                "firstLetter": "Y"
            },
            {
                "code": "130429",
                "name": "永年县",
                "firstLetter": "Y"
            },
            {
                "code": "141032",
                "name": "永和县",
                "firstLetter": "Y"
            },
            {
                "code": "350822",
                "name": "永定县",
                "firstLetter": "Y"
            },
            {
                "code": "530400",
                "name": "玉溪市",
                "firstLetter": "Y"
            },
            {
                "code": "632700",
                "name": "玉树藏族自治州",
                "firstLetter": "Y"
            },
            {
                "code": "511322",
                "name": "营山县",
                "firstLetter": "Y"
            },
            {
                "code": "632721",
                "name": "玉树县",
                "firstLetter": "Y"
            },
            {
                "code": "511324",
                "name": "仪陇县",
                "firstLetter": "Y"
            },
            {
                "code": "530425",
                "name": "易门县",
                "firstLetter": "Y"
            },
            {
                "code": "331021",
                "name": "玉环县",
                "firstLetter": "Y"
            },
            {
                "code": "530428",
                "name": "元江哈尼族彝族傣族自治县",
                "firstLetter": "Y"
            },
            {
                "code": "610426",
                "name": "永寿县",
                "firstLetter": "Y"
            },
            {
                "code": "371321",
                "name": "沂南县",
                "firstLetter": "Y"
            },
            {
                "code": "371323",
                "name": "沂水县",
                "firstLetter": "Y"
            },
            {
                "code": "511500",
                "name": "宜宾市",
                "firstLetter": "Y"
            },
            {
                "code": "640100",
                "name": "银川市",
                "firstLetter": "Y"
            },
            {
                "code": "511521",
                "name": "宜宾县",
                "firstLetter": "Y"
            },
            {
                "code": "640121",
                "name": "永宁县",
                "firstLetter": "Y"
            },
            {
                "code": "331125",
                "name": "云和县",
                "firstLetter": "Y"
            },
            {
                "code": "450900",
                "name": "玉林市",
                "firstLetter": "Y"
            },
            {
                "code": "530623",
                "name": "盐津县",
                "firstLetter": "Y"
            },
            {
                "code": "420222",
                "name": "阳新县",
                "firstLetter": "Y"
            },
            {
                "code": "530625",
                "name": "永善县",
                "firstLetter": "Y"
            },
            {
                "code": "530628",
                "name": "彝良县",
                "firstLetter": "Y"
            },
            {
                "code": "433127",
                "name": "永顺县",
                "firstLetter": "Y"
            },
            {
                "code": "420321",
                "name": "郧县",
                "firstLetter": "Y"
            },
            {
                "code": "511621",
                "name": "岳池县",
                "firstLetter": "Y"
            },
            {
                "code": "420322",
                "name": "郧西县",
                "firstLetter": "Y"
            },
            {
                "code": "610600",
                "name": "延安市",
                "firstLetter": "Y"
            },
            {
                "code": "220182",
                "name": "榆树市",
                "firstLetter": "Y"
            },
            {
                "code": "640323",
                "name": "盐池县",
                "firstLetter": "Y"
            },
            {
                "code": "530721",
                "name": "玉龙纳西族自治县",
                "firstLetter": "Y"
            },
            {
                "code": "610621",
                "name": "延长县",
                "firstLetter": "Y"
            },
            {
                "code": "371482",
                "name": "禹城市",
                "firstLetter": "Y"
            },
            {
                "code": "530722",
                "name": "永胜县",
                "firstLetter": "Y"
            },
            {
                "code": "610622",
                "name": "延川县",
                "firstLetter": "Y"
            },
            {
                "code": "420500",
                "name": "宜昌市",
                "firstLetter": "Y"
            },
            {
                "code": "371521",
                "name": "阳谷县",
                "firstLetter": "Y"
            },
            {
                "code": "130633",
                "name": "易县",
                "firstLetter": "Y"
            },
            {
                "code": "610630",
                "name": "宜川县",
                "firstLetter": "Y"
            },
            {
                "code": "420525",
                "name": "远安县",
                "firstLetter": "Y"
            },
            {
                "code": "220221",
                "name": "永吉县",
                "firstLetter": "Y"
            },
            {
                "code": "511800",
                "name": "雅安市",
                "firstLetter": "Y"
            },
            {
                "code": "371622",
                "name": "阳信县",
                "firstLetter": "Y"
            },
            {
                "code": "360425",
                "name": "永修县",
                "firstLetter": "Y"
            },
            {
                "code": "420581",
                "name": "宜都市",
                "firstLetter": "Y"
            },
            {
                "code": "610723",
                "name": "洋县",
                "firstLetter": "Y"
            },
            {
                "code": "530922",
                "name": "云县",
                "firstLetter": "Y"
            },
            {
                "code": "220323",
                "name": "伊通满族自治县",
                "firstLetter": "Y"
            },
            {
                "code": "530923",
                "name": "永德县",
                "firstLetter": "Y"
            },
            {
                "code": "320282",
                "name": "宜兴市",
                "firstLetter": "Y"
            },
            {
                "code": "130722",
                "name": "张北县",
                "firstLetter": "Z"
            },
            {
                "code": "512000",
                "name": "资阳市",
                "firstLetter": "Z"
            },
            {
                "code": "371725",
                "name": "郓城县",
                "firstLetter": "Z"
            },
            {
                "code": "371726",
                "name": "鄄城县",
                "firstLetter": "Z"
            },
            {
                "code": "420683",
                "name": "枣阳市",
                "firstLetter": "Z"
            },
            {
                "code": "150526",
                "name": "扎鲁特旗",
                "firstLetter": "Z"
            },
            {
                "code": "320324",
                "name": "睢宁县",
                "firstLetter": "Z"
            },
            {
                "code": "410100",
                "name": "郑州市",
                "firstLetter": "Z"
            },
            {
                "code": "440400",
                "name": "珠海市",
                "firstLetter": "Z"
            },
            {
                "code": "513221",
                "name": "汶川县",
                "firstLetter": "Z"
            },
            {
                "code": "130731",
                "name": "涿鹿县",
                "firstLetter": "Z"
            },
            {
                "code": "652122",
                "name": "鄯善县",
                "firstLetter": "Z"
            },
            {
                "code": "320382",
                "name": "邳州市",
                "firstLetter": "Z"
            },
            {
                "code": "610831",
                "name": "子洲县",
                "firstLetter": "Z"
            },
            {
                "code": "150622",
                "name": "准格尔旗",
                "firstLetter": "Z"
            },
            {
                "code": "410122",
                "name": "中牟县",
                "firstLetter": "Z"
            },
            {
                "code": "420881",
                "name": "钟祥市",
                "firstLetter": "Z"
            },
            {
                "code": "410182",
                "name": "荥阳市",
                "firstLetter": "Z"
            },
            {
                "code": "320481",
                "name": "溧阳市",
                "firstLetter": "Z"
            },
            {
                "code": "610924",
                "name": "紫阳县",
                "firstLetter": "Z"
            },
            {
                "code": "610925",
                "name": "岚皋县",
                "firstLetter": "Z"
            },
            {
                "code": "532527",
                "name": "泸西县",
                "firstLetter": "Z"
            },
            {
                "code": "340621",
                "name": "濉溪县",
                "firstLetter": "Z"
            },
            {
                "code": "610927",
                "name": "镇坪县",
                "firstLetter": "Z"
            },
            {
                "code": "513322",
                "name": "泸定县",
                "firstLetter": "Z"
            },
            {
                "code": "320582",
                "name": "张家港市",
                "firstLetter": "Z"
            },
            {
                "code": "410221",
                "name": "杞县",
                "firstLetter": "Z"
            },
            {
                "code": "150783",
                "name": "扎兰屯市",
                "firstLetter": "Z"
            },
            {
                "code": "220821",
                "name": "镇赉县",
                "firstLetter": "Z"
            },
            {
                "code": "469003",
                "name": "儋州市",
                "firstLetter": "Z"
            },
            {
                "code": "611025",
                "name": "镇安县",
                "firstLetter": "Z"
            },
            {
                "code": "220881",
                "name": "洮南市",
                "firstLetter": "Z"
            },
            {
                "code": "611026",
                "name": "柞水县",
                "firstLetter": "Z"
            },
            {
                "code": "340823",
                "name": "枞阳县",
                "firstLetter": "Z"
            },
            {
                "code": "150822",
                "name": "磴口县",
                "firstLetter": "Z"
            },
            {
                "code": "222404",
                "name": "珲春市",
                "firstLetter": "Z"
            },
            {
                "code": "440800",
                "name": "湛江市",
                "firstLetter": "Z"
            },
            {
                "code": "532822",
                "name": "勐海县",
                "firstLetter": "Z"
            },
            {
                "code": "532823",
                "name": "勐腊县",
                "firstLetter": "Z"
            },
            {
                "code": "421125",
                "name": "浠水县",
                "firstLetter": "Z"
            },
            {
                "code": "421126",
                "name": "蕲春县",
                "firstLetter": "Z"
            },
            {
                "code": "410324",
                "name": "栾川县",
                "firstLetter": "Z"
            },
            {
                "code": "150921",
                "name": "卓资县",
                "firstLetter": "Z"
            },
            {
                "code": "410325",
                "name": "嵩县",
                "firstLetter": "Z"
            },
            {
                "code": "341021",
                "name": "歙县",
                "firstLetter": "Z"
            },
            {
                "code": "469039",
                "name": "中沙群岛的岛礁及其海域",
                "firstLetter": "Z"
            },
            {
                "code": "341023",
                "name": "黟县",
                "firstLetter": "Z"
            },
            {
                "code": "410381",
                "name": "偃师市",
                "firstLetter": "Z"
            },
            {
                "code": "360982",
                "name": "樟树市",
                "firstLetter": "Z"
            },
            {
                "code": "513431",
                "name": "昭觉县",
                "firstLetter": "Z"
            },
            {
                "code": "441200",
                "name": "肇庆市",
                "firstLetter": "Z"
            },
            {
                "code": "131121",
                "name": "枣强县",
                "firstLetter": "Z"
            },
            {
                "code": "152223",
                "name": "扎赉特旗",
                "firstLetter": "Z"
            },
            {
                "code": "410425",
                "name": "郏县",
                "firstLetter": "Z"
            },
            {
                "code": "320830",
                "name": "盱眙县",
                "firstLetter": "Z"
            },
            {
                "code": "361028",
                "name": "资溪县",
                "firstLetter": "Z"
            },
            {
                "code": "500222",
                "name": "綦江县",
                "firstLetter": "Z"
            },
            {
                "code": "533321",
                "name": "泸水县",
                "firstLetter": "Z"
            },
            {
                "code": "653124",
                "name": "泽普县",
                "firstLetter": "Z"
            },
            {
                "code": "500223",
                "name": "潼南县",
                "firstLetter": "Z"
            },
            {
                "code": "620525",
                "name": "张家川回族自治县",
                "firstLetter": "Z"
            },
            {
                "code": "341226",
                "name": "颍上县",
                "firstLetter": "Z"
            },
            {
                "code": "500227",
                "name": "璧山县",
                "firstLetter": "Z"
            },
            {
                "code": "653129",
                "name": "伽师县",
                "firstLetter": "Z"
            },
            {
                "code": "341321",
                "name": "砀山县",
                "firstLetter": "Z"
            },
            {
                "code": "152529",
                "name": "正镶白旗",
                "firstLetter": "Z"
            },
            {
                "code": "152530",
                "name": "正蓝旗",
                "firstLetter": "Z"
            },
            {
                "code": "361126",
                "name": "弋阳县",
                "firstLetter": "Z"
            },
            {
                "code": "500233",
                "name": "忠县",
                "firstLetter": "Z"
            },
            {
                "code": "620700",
                "name": "张掖市",
                "firstLetter": "Z"
            },
            {
                "code": "341324",
                "name": "泗县",
                "firstLetter": "Z"
            },
            {
                "code": "361128",
                "name": "鄱阳县",
                "firstLetter": "Z"
            },
            {
                "code": "361130",
                "name": "婺源县",
                "firstLetter": "Z"
            },
            {
                "code": "520300",
                "name": "遵义市",
                "firstLetter": "Z"
            },
            {
                "code": "410622",
                "name": "淇县",
                "firstLetter": "Z"
            },
            {
                "code": "520321",
                "name": "遵义县",
                "firstLetter": "Z"
            },
            {
                "code": "230281",
                "name": "讷河市",
                "firstLetter": "Z"
            },
            {
                "code": "620821",
                "name": "泾川县",
                "firstLetter": "Z"
            },
            {
                "code": "430181",
                "name": "浏阳市",
                "firstLetter": "Z"
            },
            {
                "code": "520324",
                "name": "正安县",
                "firstLetter": "Z"
            },
            {
                "code": "321100",
                "name": "镇江市",
                "firstLetter": "Z"
            },
            {
                "code": "341600",
                "name": "亳州市",
                "firstLetter": "Z"
            },
            {
                "code": "430200",
                "name": "株洲市",
                "firstLetter": "Z"
            },
            {
                "code": "620825",
                "name": "庄浪县",
                "firstLetter": "Z"
            },
            {
                "code": "520328",
                "name": "湄潭县",
                "firstLetter": "Z"
            },
            {
                "code": "654026",
                "name": "昭苏县",
                "firstLetter": "Z"
            },
            {
                "code": "140226",
                "name": "左云县",
                "firstLetter": "Z"
            },
            {
                "code": "370181",
                "name": "章丘市",
                "firstLetter": "Z"
            },
            {
                "code": "430221",
                "name": "株洲县",
                "firstLetter": "Z"
            },
            {
                "code": "441621",
                "name": "紫金县",
                "firstLetter": "Z"
            },
            {
                "code": "542128",
                "name": "左贡县",
                "firstLetter": "Z"
            },
            {
                "code": "430223",
                "name": "攸县",
                "firstLetter": "Z"
            },
            {
                "code": "430281",
                "name": "醴陵市",
                "firstLetter": "Z"
            },
            {
                "code": "520423",
                "name": "镇宁布依族苗族自治县",
                "firstLetter": "Z"
            },
            {
                "code": "542222",
                "name": "扎囊县",
                "firstLetter": "Z"
            },
            {
                "code": "520425",
                "name": "紫云苗族布依族自治县",
                "firstLetter": "Z"
            },
            {
                "code": "341823",
                "name": "泾县",
                "firstLetter": "Z"
            },
            {
                "code": "510124",
                "name": "郫县",
                "firstLetter": "Z"
            },
            {
                "code": "341825",
                "name": "旌德县",
                "firstLetter": "Z"
            },
            {
                "code": "321322",
                "name": "沭阳县",
                "firstLetter": "Z"
            },
            {
                "code": "321323",
                "name": "泗阳县",
                "firstLetter": "Z"
            },
            {
                "code": "621025",
                "name": "正宁县",
                "firstLetter": "Z"
            },
            {
                "code": "321324",
                "name": "泗洪县",
                "firstLetter": "Z"
            },
            {
                "code": "410900",
                "name": "濮阳市",
                "firstLetter": "Z"
            },
            {
                "code": "510183",
                "name": "邛崃市",
                "firstLetter": "Z"
            },
            {
                "code": "621027",
                "name": "镇原县",
                "firstLetter": "Z"
            },
            {
                "code": "370300",
                "name": "淄博市",
                "firstLetter": "Z"
            },
            {
                "code": "510300",
                "name": "自贡市",
                "firstLetter": "Z"
            },
            {
                "code": "210283",
                "name": "庄河市",
                "firstLetter": "Z"
            },
            {
                "code": "410928",
                "name": "濮阳县",
                "firstLetter": "Z"
            },
            {
                "code": "442000",
                "name": "中山市",
                "firstLetter": "Z"
            },
            {
                "code": "430481",
                "name": "耒阳市",
                "firstLetter": "Z"
            },
            {
                "code": "621125",
                "name": "漳县",
                "firstLetter": "Z"
            },
            {
                "code": "621126",
                "name": "岷县",
                "firstLetter": "Z"
            },
            {
                "code": "370400",
                "name": "枣庄市",
                "firstLetter": "Z"
            },
            {
                "code": "522325",
                "name": "贞丰县",
                "firstLetter": "Z"
            },
            {
                "code": "210323",
                "name": "岫岩满族自治县",
                "firstLetter": "Z"
            },
            {
                "code": "230621",
                "name": "肇州县",
                "firstLetter": "Z"
            },
            {
                "code": "140525",
                "name": "泽州县",
                "firstLetter": "Z"
            },
            {
                "code": "230622",
                "name": "肇源县",
                "firstLetter": "Z"
            },
            {
                "code": "621223",
                "name": "宕昌县",
                "firstLetter": "Z"
            },
            {
                "code": "411100",
                "name": "漯河市",
                "firstLetter": "Z"
            },
            {
                "code": "542333",
                "name": "仲巴县",
                "firstLetter": "Z"
            },
            {
                "code": "370481",
                "name": "滕州市",
                "firstLetter": "Z"
            },
            {
                "code": "510500",
                "name": "泸州市",
                "firstLetter": "Z"
            },
            {
                "code": "411024",
                "name": "鄢陵县",
                "firstLetter": "Z"
            },
            {
                "code": "510521",
                "name": "泸县",
                "firstLetter": "Z"
            },
            {
                "code": "522425",
                "name": "织金县",
                "firstLetter": "Z"
            },
            {
                "code": "130123",
                "name": "正定县",
                "firstLetter": "Z"
            },
            {
                "code": "130124",
                "name": "栾城县",
                "firstLetter": "Z"
            },
            {
                "code": "140722",
                "name": "左权县",
                "firstLetter": "Z"
            },
            {
                "code": "510623",
                "name": "中江县",
                "firstLetter": "Z"
            },
            {
                "code": "522625",
                "name": "镇远县",
                "firstLetter": "Z"
            },
            {
                "code": "130129",
                "name": "赞皇县",
                "firstLetter": "Z"
            },
            {
                "code": "411221",
                "name": "渑池县",
                "firstLetter": "Z"
            },
            {
                "code": "430681",
                "name": "汨罗市",
                "firstLetter": "Z"
            },
            {
                "code": "522626",
                "name": "岑巩县",
                "firstLetter": "Z"
            },
            {
                "code": "623022",
                "name": "卓尼县",
                "firstLetter": "Z"
            },
            {
                "code": "623023",
                "name": "舟曲县",
                "firstLetter": "Z"
            },
            {
                "code": "130133",
                "name": "赵县",
                "firstLetter": "Z"
            },
            {
                "code": "542522",
                "name": "札达县",
                "firstLetter": "Z"
            },
            {
                "code": "370685",
                "name": "招远市",
                "firstLetter": "Z"
            },
            {
                "code": "130182",
                "name": "藁城市",
                "firstLetter": "Z"
            },
            {
                "code": "522632",
                "name": "榕江县",
                "firstLetter": "Z"
            },
            {
                "code": "430723",
                "name": "澧县",
                "firstLetter": "Z"
            },
            {
                "code": "510725",
                "name": "梓潼县",
                "firstLetter": "Z"
            },
            {
                "code": "140824",
                "name": "稷山县",
                "firstLetter": "Z"
            },
            {
                "code": "230822",
                "name": "桦南县",
                "firstLetter": "Z"
            },
            {
                "code": "230826",
                "name": "桦川县",
                "firstLetter": "Z"
            },
            {
                "code": "411324",
                "name": "镇平县",
                "firstLetter": "Z"
            },
            {
                "code": "140826",
                "name": "绛县",
                "firstLetter": "Z"
            },
            {
                "code": "411326",
                "name": "淅川县",
                "firstLetter": "Z"
            },
            {
                "code": "430800",
                "name": "张家界市",
                "firstLetter": "Z"
            },
            {
                "code": "630122",
                "name": "湟中县",
                "firstLetter": "Z"
            },
            {
                "code": "140830",
                "name": "芮城县",
                "firstLetter": "Z"
            },
            {
                "code": "630123",
                "name": "湟源县",
                "firstLetter": "Z"
            },
            {
                "code": "370782",
                "name": "诸城市",
                "firstLetter": "Z"
            },
            {
                "code": "130281",
                "name": "遵化市",
                "firstLetter": "Z"
            },
            {
                "code": "350600",
                "name": "漳州市",
                "firstLetter": "Z"
            },
            {
                "code": "411422",
                "name": "睢县",
                "firstLetter": "Z"
            },
            {
                "code": "430981",
                "name": "沅江市",
                "firstLetter": "Z"
            },
            {
                "code": "411424",
                "name": "柘城县",
                "firstLetter": "Z"
            },
            {
                "code": "350623",
                "name": "漳浦县",
                "firstLetter": "Z"
            },
            {
                "code": "330681",
                "name": "诸暨市",
                "firstLetter": "Z"
            },
            {
                "code": "350624",
                "name": "诏安县",
                "firstLetter": "Z"
            },
            {
                "code": "140929",
                "name": "岢岚县",
                "firstLetter": "Z"
            },
            {
                "code": "370830",
                "name": "汶上县",
                "firstLetter": "Z"
            },
            {
                "code": "330683",
                "name": "嵊州市",
                "firstLetter": "Z"
            },
            {
                "code": "370831",
                "name": "泗水县",
                "firstLetter": "Z"
            },
            {
                "code": "411600",
                "name": "周口市",
                "firstLetter": "Z"
            },
            {
                "code": "610124",
                "name": "周至县",
                "firstLetter": "Z"
            },
            {
                "code": "210922",
                "name": "彰武县",
                "firstLetter": "Z"
            },
            {
                "code": "511025",
                "name": "资中县",
                "firstLetter": "Z"
            },
            {
                "code": "370882",
                "name": "兖州市",
                "firstLetter": "Z"
            },
            {
                "code": "370883",
                "name": "邹城市",
                "firstLetter": "Z"
            },
            {
                "code": "632323",
                "name": "泽库县",
                "firstLetter": "Z"
            },
            {
                "code": "450329",
                "name": "资源县",
                "firstLetter": "Z"
            },
            {
                "code": "530127",
                "name": "嵩明县",
                "firstLetter": "Z"
            },
            {
                "code": "431081",
                "name": "资兴市",
                "firstLetter": "Z"
            },
            {
                "code": "411526",
                "name": "潢川县",
                "firstLetter": "Z"
            },
            {
                "code": "511123",
                "name": "犍为县",
                "firstLetter": "Z"
            },
            {
                "code": "350725",
                "name": "政和县",
                "firstLetter": "Z"
            },
            {
                "code": "411700",
                "name": "驻马店市",
                "firstLetter": "Z"
            },
            {
                "code": "330800",
                "name": "衢州市",
                "firstLetter": "Z"
            },
            {
                "code": "511129",
                "name": "沐川县",
                "firstLetter": "Z"
            },
            {
                "code": "610323",
                "name": "岐山县",
                "firstLetter": "Z"
            },
            {
                "code": "141031",
                "name": "隰县",
                "firstLetter": "Z"
            },
            {
                "code": "450481",
                "name": "岑溪市",
                "firstLetter": "Z"
            },
            {
                "code": "530328",
                "name": "沾益县",
                "firstLetter": "Z"
            },
            {
                "code": "610329",
                "name": "麟游县",
                "firstLetter": "Z"
            },
            {
                "code": "231282",
                "name": "肇东市",
                "firstLetter": "Z"
            },
            {
                "code": "330900",
                "name": "舟山市",
                "firstLetter": "Z"
            },
            {
                "code": "330921",
                "name": "岱山县",
                "firstLetter": "Z"
            },
            {
                "code": "371122",
                "name": "莒县",
                "firstLetter": "Z"
            },
            {
                "code": "431221",
                "name": "中方县",
                "firstLetter": "Z"
            },
            {
                "code": "632722",
                "name": "杂多县",
                "firstLetter": "Z"
            },
            {
                "code": "330922",
                "name": "嵊泗县",
                "firstLetter": "Z"
            },
            {
                "code": "350881",
                "name": "漳平市",
                "firstLetter": "Z"
            },
            {
                "code": "431222",
                "name": "沅陵县",
                "firstLetter": "Z"
            },
            {
                "code": "632724",
                "name": "治多县",
                "firstLetter": "Z"
            },
            {
                "code": "431224",
                "name": "溆浦县",
                "firstLetter": "Z"
            },
            {
                "code": "511381",
                "name": "阆中市",
                "firstLetter": "Z"
            },
            {
                "code": "610423",
                "name": "泾阳县",
                "firstLetter": "Z"
            },
            {
                "code": "431228",
                "name": "芷江侗族自治县",
                "firstLetter": "Z"
            },
            {
                "code": "141127",
                "name": "岚县",
                "firstLetter": "Z"
            },
            {
                "code": "350925",
                "name": "周宁县",
                "firstLetter": "Z"
            },
            {
                "code": "141129",
                "name": "中阳县",
                "firstLetter": "Z"
            },
            {
                "code": "350926",
                "name": "柘荣县",
                "firstLetter": "Z"
            },
            {
                "code": "371322",
                "name": "郯城县",
                "firstLetter": "Z"
            },
            {
                "code": "371327",
                "name": "莒南县",
                "firstLetter": "Z"
            },
            {
                "code": "530600",
                "name": "昭通市",
                "firstLetter": "Z"
            },
            {
                "code": "331122",
                "name": "缙云县",
                "firstLetter": "Z"
            },
            {
                "code": "610522",
                "name": "潼关县",
                "firstLetter": "Z"
            },
            {
                "code": "511526",
                "name": "珙县",
                "firstLetter": "Z"
            },
            {
                "code": "433122",
                "name": "泸溪县",
                "firstLetter": "Z"
            },
            {
                "code": "511527",
                "name": "筠连县",
                "firstLetter": "Z"
            },
            {
                "code": "530627",
                "name": "镇雄县",
                "firstLetter": "Z"
            },
            {
                "code": "130623",
                "name": "涞水县",
                "firstLetter": "Z"
            },
            {
                "code": "420323",
                "name": "竹山县",
                "firstLetter": "Z"
            },
            {
                "code": "411724",
                "name": "正阳县",
                "firstLetter": "Z"
            },
            {
                "code": "420324",
                "name": "竹溪县",
                "firstLetter": "Z"
            },
            {
                "code": "610623",
                "name": "子长县",
                "firstLetter": "Z"
            },
            {
                "code": "610625",
                "name": "志丹县",
                "firstLetter": "Z"
            },
            {
                "code": "130630",
                "name": "涞源县",
                "firstLetter": "Z"
            },
            {
                "code": "371522",
                "name": "莘县",
                "firstLetter": "Z"
            },
            {
                "code": "371523",
                "name": "茌平县",
                "firstLetter": "Z"
            },
            {
                "code": "640424",
                "name": "泾源县",
                "firstLetter": "Z"
            },
            {
                "code": "130635",
                "name": "蠡县",
                "firstLetter": "Z"
            },
            {
                "code": "440183",
                "name": "增城市",
                "firstLetter": "Z"
            },
            {
                "code": "640500",
                "name": "中卫市",
                "firstLetter": "Z"
            },
            {
                "code": "320124",
                "name": "溧水县",
                "firstLetter": "Z"
            },
            {
                "code": "530825",
                "name": "镇沅彝族哈尼族拉祜族自治县",
                "firstLetter": "Z"
            },
            {
                "code": "220281",
                "name": "蛟河市",
                "firstLetter": "Z"
            },
            {
                "code": "420527",
                "name": "秭归县",
                "firstLetter": "Z"
            },
            {
                "code": "640521",
                "name": "中宁县",
                "firstLetter": "Z"
            },
            {
                "code": "220282",
                "name": "桦甸市",
                "firstLetter": "Z"
            },
            {
                "code": "451121",
                "name": "昭平县",
                "firstLetter": "Z"
            },
            {
                "code": "130681",
                "name": "涿州市",
                "firstLetter": "Z"
            },
            {
                "code": "451122",
                "name": "钟山县",
                "firstLetter": "Z"
            },
            {
                "code": "511822",
                "name": "荥经县",
                "firstLetter": "Z"
            },
            {
                "code": "371624",
                "name": "沾化县",
                "firstLetter": "Z"
            },
            {
                "code": "420583",
                "name": "枝江市",
                "firstLetter": "Z"
            },
            {
                "code": "130700",
                "name": "张家口市",
                "firstLetter": "Z"
            },
            {
                "code": "371626",
                "name": "邹平县",
                "firstLetter": "Z"
            },
            {
                "code": "530924",
                "name": "镇康县",
                "firstLetter": "Z"
            },
            {
                "code": "610728",
                "name": "镇巴县",
                "firstLetter": "Z"
            }
        ]
        
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
        // getCityList() {
        //     var _this = this;
        //     this.$http.get("../data/city.json", {
        //         emulateJSON: true
        //     }).then(function (res) {
        //         _this.makeCityList(res.data);
        //     })
        // },
        makeCityList() { //遍历数据，重组城市列表

            var cityArr = [];
            for (var i = 0; i < this.navList.length; i++) {
                var letter = {};
                letter.titleWords = this.navList[i];
                letter.arr = [];
                for (var j = 0; j < this.testData.length; j++) {
                    if (this.navList[i] == this.testData[j].firstLetter) {
                        letter.arr.push(this.testData[j]);
                    }
                }
                cityArr.push(letter);

                if (i == this.navList.length - 1) {
                    this.allCityList = cityArr;
                }
            }
        },
        // makeCityList(dataList) { //遍历数据，重组城市列表

        //     var cityArr = [];
        //     for (var i = 0; i < this.navList.length; i++) {
        //         var letter = {};
        //         letter.titleWords = this.navList[i];
        //         letter.arr = [];
        //         for (var j = 0; j < dataList.length; j++) {
        //             if (this.navList[i] == dataList[j].firstLetter) {
        //                 letter.arr.push(dataList[j]);
        //             }
        //         }
        //         cityArr.push(letter);

        //         if (i == this.navList.length - 1) {
        //             this.allCityList = cityArr;
        //         }
        //     }
        // },
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
        // this.getCityList();
        this.makeCityList();
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