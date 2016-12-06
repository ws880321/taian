//引入公共模块
var pb = require('./common/public.js');
// 引入下拉菜单
require('select2');
// 引入日期
require('laydate');
require('pagination');








// 左侧菜单效果
pb.slide();
// 美化checkbox 和全选
pb.checkbox('.ck-input')

// 初始化下拉
$(".s-select").select2({
    minimumResultsForSearch: -1,
});

// 初始化日期
laydate({
    elem: '#start-date'
});
laydate({
    elem: '#end-date'
});


        
// 创建分页
$("#page").pagination(10, {
    num_edge_entries: 1, //边缘页数
    num_display_entries: 4, //主体页数
    // callback: ,
    items_per_page: 1 //每页显示1项
});

