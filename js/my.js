$(function(){

	var onOff = true;
	var offOn = true;
	$(".product span").click(function(){

		if(onOff){
			$(".product ul").stop().slideUp(100);
			$(".product span i").eq(0).css({"transform":"rotate(-90deg)"});
			onOff = false;
		}else{
			$(".product ul").stop().slideDown(100);
			$(".product span i").eq(0).css({"transform":"rotate(0deg)"});
			onOff = true;
		}
	})
	$(".user span").click(function(){
		if(offOn){
			$(".user ul").stop().slideUp(100);
			$(".user span i").eq(0).css({"transform":"rotate(-90deg)"});
			offOn = false;
		}else{
			$(".user ul").stop().slideDown(100);
			$(".user span i").eq(0).css({"transform":"rotate(0deg)"});
			offOn = true;
		}
	})

	var hish = true;
	$(".nav").click(function(){

		if(hish){
			$(".content .left").css({"width":"50px"});
			$(".content .nav").css({"width":50})
			$(".content .nav p").css({"transform":"rotate(90deg)"})
			hish = false;
		}else{
			$(".content .left").css({"width":"180px"});
			$(".content .nav").css({"width":180})
			$(".content .nav p").css({"transform":"rotate(0deg)"})
			hish = true;
		}

	}).bind("click",function(){
		var w1 = $(window).width()
		var w2 = $(".left").width();
		var w3 = w1-w2;
		$(".right").css({"width":w3});
		$(".right .top").css({"width":"100%"})
	})
	
	$(window).resize(function(){
		var w1 = $(window).width()
		var w2 = $(".left").width();
		var w3 = w1-w2;
		$(".right").css({"width":w3});
		$(".right .top").css({"width":"100%"});

	}).trigger("resize");

	var Chart1 = echarts.init(document.getElementById('one'));
	var Chart2 = echarts.init(document.getElementById('two'));
	var Chart3 = echarts.init(document.getElementById('three'));
	var Chart4 = echarts.init(document.getElementById('four'));

    Chart1.setOption ({
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['单身','恋爱','已婚']
        },
        xAxis: [
            {
                type: 'category',
                data: ['吃饭','睡觉','打豆豆','看电影','约会','唱歌','跳舞','看书','写字','画画','弹琴','吹牛']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单身',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {
                type: 'value',
                name: '恋爱',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} ¡ãC'
                }
            }
        ],
        series: [
            {
                name:'已婚',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'丁克',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'性同',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    });

	Chart2.setOption ({
			series:[{
					name:"访问来源",
					type:"pie",
					radius:"55%",
					data:[
						{value:400,name:"搜索引擎"},
						{value:335,name:"直接访问"},
						{value:310,name:"邮件营销"},
						{value:274,name:"联盟广告"},
						{value:235,name:"视频广告"}
				
					]
				}]
		
		});

Chart3.setOption({
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:448, name:'搜索引擎'}
            ]
        }
    ]
});

Chart4.setOption({
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
});

		window.onresize = function(){
			Chart1.resize();
			Chart2.resize();
			Chart3.resize();
			Chart4.resize();
		}

})