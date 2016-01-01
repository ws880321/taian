//引入公共模块
var pb = require('./common/public.js');
// 引入下拉菜单
require('select2');
require('pagination');
var layer = require('layer')








// 左侧菜单效果
pb.slide([3, 2]);
// 美化checkbox 和全选
pb.checkbox('.ck-input')

// 初始化下拉
$(".s-select").select2({
    minimumResultsForSearch: -1,
});
// var num = true;

// function createList() {
//     $.ajax({
//         url: './aaa.html',
//         error: function() {
//             if (num) {
//                 $("#page").pagination(22, {
//                     num_edge_entries: 1, //边缘页数
//                     num_display_entries: 5, //主体页数
//                     callback: function(c) {
//                         if (!num && c != 0) {
//                             createList()
//                         }
//                         num = false;
//                         console.log(c)
//                     },
//                     items_per_page: 1 //每页显示1项
//                 });
//             }
//         }
//     })
// }
// createList()
    // 创建分页
$("#page").pagination(22, {
    num_edge_entries: 1, //边缘页数
    num_display_entries: 5, //主体页数
    callback: function(c) {
      
        console.log(c)
    },
    items_per_page: 1 //每页显示1项
});
