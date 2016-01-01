// 左侧菜单伸缩
exports.slide=function(currentArray){
	$('#left-bar h3 a').click(function(){
		$(this).toggleClass('active');
		$(this).closest('h3').siblings('h3').find('a').removeClass('active');
		$(this).closest('h3').next('ul').slideToggle();
	})
	if (currentArray && currentArray instanceof Array) {
		var _that=$('#left-bar h3').eq(currentArray[0])
		_that.find('a').addClass('active')
		_that.next('ul').slideToggle();
		_that.next('ul').find('li').eq(currentArray[1]).find('a').addClass('active')
	}
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
