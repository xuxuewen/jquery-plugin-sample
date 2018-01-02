/**
 * @desc 这是一个用来修改dom的jquery插件
 * @example
 * $('div').helloWorld({
 *  text:'修改的内容',
 *  color:'red',
 *  fontStyle:'blod',
 *  complete:function(){alert('hello')}
 * })
 * @version 1.0.1
 * @todo 测试用例未完成
 * @return {jquery}         jquery dom 对象
 */
function helloWorldPlugin($) {
  return $.fn.helloWorld = function(options) {
    var settings = $.extend({
      text: 'Hello World',
      color: null,
      fontStyle: null,
      complete: null
    }, options);
    return this.each(function() {
      $(this).text(settings.text);
      if (settings.color) {
        $(this).css('color', settings.color);
      }
      if (settings.fontStyle) {
        $(this).css('font-style', settings.fontStyle);
      }
      if ($.isFunction(settings.complete)) {
        settings.complete.call(this);
      }
    })
  }
}

helloWorldPlugin(jQuery);
export default helloWorldPlugin;
