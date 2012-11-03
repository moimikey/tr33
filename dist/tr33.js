/*! Tr33 - v0.0.1a - 2012-11-02
 * https://github.com/moimikey/tr33.git
 * Copyright (c) 2012 Michael Scott Hertzberg; Licensed MIT
 */

;(function ($, window, undefined) {
    'use strict';
    var tr33     = 'tr33',
        document = window.document,
        defaults = {
          end:   '\ua716', // └
          stem:  '\ua714', // ├
          space: '\u0020'  // 
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
            s = h.appendChild(document.createElement('style')),
            c = o.stem;

        p.classList.add('tr33');

        if (e) {
          p.marginLeft  = 0;
          p.paddingLeft = 0;

          if (!s.stylesheets) {
            if ($.browser.msie && true === $.browser.msie) {
                s.sheet.addRule('ul.tr33 li:before { content: "' + c + o.space + '" }', 0);
                s.sheet.addRule('ul.tr33 li:first-child:before { content: "' + o.end + o.space + '" }', 0);
            } else {
                s.sheet.insertRule('ul.tr33 li:before { content: "' + c + o.space + '" }', 0);
                s.sheet.insertRule('ul.tr33 li:last-child:before { content: "' + o.end + o.space + '" }', 0);
                s.sheet.insertRule('ul.tr33 li + li:last-child:before { content: "' + o.end + o.space + '" }', 0);
            }
          }

          while (++i < e.length) {
            e[i].setAttribute('style');
            e[i].style.listStyle   = 'none';
            e[i].style.paddingLeft = '1em';
            e[i].style.textIndent  = '-1em';

            if (i === e.length - 1) {
               console.log(e[i]);
            }
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