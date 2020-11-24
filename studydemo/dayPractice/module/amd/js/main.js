require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC) {
  //some code here.
})

require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "underscore": "underscore-min",
    "backbone": "backbone-min"
  }
})

//实际例子
require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
  //some code here.
})
// require.js会先加载jQuery、underscore和backbone，然后再运行回调函数。主模块的代码就写在回调函数中

//加载math.js
require(['math'], function (math) {
  alert(math.add(1, 1))
})