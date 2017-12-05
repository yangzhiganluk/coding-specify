/**
 * Created by juanl on 2017/5/1.
 */
// 基于准备好的dom，初始化echarts实例
// 性别比例饼图

var myChart1 = echarts.init(document.getElementById('column1'));
var myChart2 = echarts.init(document.getElementById('column2'));
var option1 = {
    series : [
        {
            name: '员工性别',
            type: 'pie',
            radius : '70%',
            center: ['50%', '42%'],
            data: [
                {
                    name: '男性',
                    value: '49',
                    itemStyle: {
                        normal: {
                            color: '#ff6a00',
                            borderColor: "#fff",
                            borderWidth: 2,
                        }
                    }
                },{
                    name: '女性',
                    value: '51',
                    itemStyle: {
                        normal: {
                            color: '#ff9500',
                            borderColor: "#fff",
                            borderWidth: 2,
                        }
                    }
                }
            ],
            itemStyle: {
                normal: {
                    "label": {"show": false},
                    "labelLine": {"show": false}
                },
                color:'#ff9500',
                emphasis: {
                    show: show
                }
            }
        }
    ]

};


// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1,'column1');
var option2 = {
    series : [
        {
            name: '员工学历',
            type: 'pie',
            radius : '70%',
            center: ['50%', '42%'],
            data:[
            {
                value:2,
                name:'博士',
                itemStyle:{
                    normal: {
                        color: '#ff6a00',
                        borderWidth: 2,
                        borderColor:'#fff'
                    }
                }
            },{
                value:22,
                name:'专科',
                itemStyle:{
                    normal: {
                        color: '#ffd91a',
                        borderWidth: 2,
                        borderColor:'#fff'
                    }
                }
            },{
                value:56,
                name:'本科',
                itemStyle:{
                    normal: {
                        color: '#ffb31a',
                        borderWidth: 2,
                        borderColor:'#fff'
                    }
                }
            },{
                value:20,
                name:'硕士',
                itemStyle:{
                    normal: {
                        color: '#ff9500',
                        borderWidth: 2,
                        borderColor:'#fff'
                    }
                }
            }],
            itemStyle: {
                normal: {
                    "label": {"show": false},
                    "labelLine": {"show": false}
                },
                color:'#ff9500',
                emphasis: {
                    show: true
                }
            }
        }
    ]

};


// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2,'column2');