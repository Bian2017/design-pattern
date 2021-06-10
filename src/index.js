class jQuery {
  constructor(selector) {
    // Array.prototype.slice can now convert certain host objects
    // (e.g. NodeList’s) to arrays — something that majority of modern browsers have been able to do for quite a while.
    const slice = Array.prototype.slice;

    // document.querySelectorAll 返回的是 NodeList，但 NodeList 不是一个数组
    // 通过 slice将 NodeList 转成数组
    const doms = slice.call(document.querySelectorAll(selector));
    for (let i = 0; i < doms.length; i++) {
      this[i] = doms[i];
    }
    this.selector = selector || '';
  }

  addClass(name) {}

  append(node) {}

  html(data) {}

  //.... 省略 N 个 API
}

window.$ = function (selector) {
  // 工厂模式
  return new jQuery(selector);
};

var $div = $('div');

console.log($div);
console.log($div.addClass);
