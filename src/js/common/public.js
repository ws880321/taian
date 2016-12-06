// 左侧菜单伸缩
exports.slide=function(){
	$('#left-bar h3 a').click(function(){
		$(this).toggleClass('active');
		$(this).closest('h3').next('ul').slideToggle();
	})
}
// 全选和美化
exports.checkbox = function(obj) {
    $(obj).each(function() {
        var input = $(this);
        input.wrapAll('<div class="ck-box"></div>')
        input.on('click', function() {
            var _this = $(this);

            if (_this.attr('id') == "selectAll") {
                if (_this.prop("checked")) {
                    $(obj).parent().addClass('active')
                    $(obj).prop("checked", true)
                } else {
                    $(obj).parent().removeClass('active')
                    $(obj).prop("checked", false)
                }


            } else {
                _this.parent().toggleClass('active')
            }

        })


    });
}
