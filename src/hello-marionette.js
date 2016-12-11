(function($) {
  'use strict';

  /* MV定義(Start)
   * ========================================================================== */

  /**
   * 入力データModel
   */
  var InputData = Backbone.Model.extend({
    defaults : {
      'name' : ''
    }
  });


  /**
   * 入力View
   */
  var InputView = Backbone.Marionette.ItemView.extend({

    // テンプレート展開先
    el : '#input_target',

    // テンプレート
    template : '#input_template',

    // バインドするinput要素とModelのプロパティ名
    bindings : {
      '#input_name' : 'name',
    },

    // コンストラクタ
    initialize : function() {
      _.bindAll(this, 'render');
    },

    // 描画処理・バインド登録処理
    render : function() {
      var args = Array.prototype.slice.apply(arguments);
      var renderDatas = Marionette.ItemView.prototype.render.apply(this, args);

      this.stickit();

      return renderDatas;
    },

  });


  /**
   * 表示View
   */
  var DisplayView = Backbone.Marionette.ItemView.extend({

    // テンプレート展開先
    el : '#display_target',

    // テンプレート
    template : '#display_template',

    // コンストラクタ
    initialize : function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
    },

    // 再描画処理
    render : function() {
      var args = Array.prototype.slice.apply(arguments);
      var renderDatas = Marionette.ItemView.prototype.render.apply(this, args);
      return renderDatas;
    },

  });

  /* MV定義(End)
   * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


  var inputData = new InputData();

  var inputView = new InputView({
    'model' : inputData
  });
  var displayView = new DisplayView({
    'model' : inputData
  });

  inputView.render();
  displayView.render();


})(jQuery);
