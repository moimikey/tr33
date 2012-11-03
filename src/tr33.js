;(function ($, window, undefined) {
    'use strict';
    var tr33     = 'tr33',
        document = window.document,
        defaults = {
          end:  '&#x02ea;',
          stem: '&#x02eb;'

        };

    function Tr33(element, options) {
        this.element   = element;
        this.options   = $.extend( {}, defaults, options) ;
 
        this._defaults = defaults;
        this._name     = tr33;
        
        this.prep();
        this.init();
    }

    Tr33.prototype.prep = function () {
      $.noop();
    };

    Tr33.prototype.init = function () {
        var p = this.element,
            o = this.options,
            e = p.getElementsByTagName('li'),
            i = -1,
            h = document.getElementsByTagName('head')[0],
            s = h.appendChild(document.createElement('style'));


          console.log(e.id);
      s.sheet.insertRule(e.id + ' li:before { content: "+" }', 0);

        if (e) {
          p.marginLeft  = 0;
          p.paddingLeft = 0;
          while (++i < e.length) {
            e[i].setAttribute('style');
            e[i].style.listStyle = 'none';
            e[i].style.paddingLeft ='1em';
            e[i].style.textIndent = '-1em';
          }
        }
    };

    Tr33.prototype.satan = {

    };

    $.fn[tr33] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + tr33)) {
                $.data(this, 'plugin_' + tr33, new Tr33( this, options ));
            }
        });
    };
}(jQuery, window));