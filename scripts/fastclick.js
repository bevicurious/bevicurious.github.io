/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.0
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
var a4_0x2c4d=['preventDefault','test','onTouchEnd','focus','needsFocus','propagationStopped','apply','changedTouches','type','getSelection','time','content','mouseup','fastClickScrollParent','getElementById','lastClickTime','stopImmediatePropagation','tagName','touchstart','toLowerCase','length','file','function','disabled','destroy','69428gmFIlS','style','fastClickLastScrollTop','onTouchMove','trackingClick','amd','7EaJXIK','top','1XppCBu','image','parentNode','mouseover','click','scrollTop','radio','85697FemGxz','select','call','pageY','timeStamp','prototype','1743BYjYtR','removeEventListener','msTouchAction','control','pageYOffset','touchBoundary','screenY','23109dEClbK','touchend','readOnly','findControl','textarea','cancelNextClick','nodeName','parentElement','identifier','targetElement','exports','pageX','setSelectionRange','209weNfts','screenX','layer','84rFmGkb','button,\x20input:not([type=hidden]),\x20keygen,\x20meter,\x20output,\x20progress,\x20select,\x20textarea','innerWidth','2KMRelc','FastClick','sendClick','cancelable','blur','targetTouches','addEventListener','indexOf','mousedown','activeElement','htmlFor','Android','touchStartX','onTouchStart','value','userAgent','touchStartY','onMouse','notNeeded','onClick','MouseEvents','submit','1082ijnhzu','trackingClickStart','1JZXknc','clientX','attach','forwardedTouchEvent','touchmove','dispatchEvent','100907eKczOJ','createEvent','determineEventType','scrollHeight','target','onclick','initMouseEvent','contains','button','elementFromPoint','touchcancel','querySelector','needsClick','lastTouchIdentifier','updateScrollParent','getTargetElementFromEventTarget','input','abs','checkbox','144429WkFJRQ','offsetHeight','video','onTouchCancel','hijacked','user-scalable=no','screen','undefined'];var a4_0x666ef2=a4_0x16d0;(function(_0x2dd206,_0x5679f6){var _0xe0b1a=a4_0x16d0;while(!![]){try{var _0x1ae949=parseInt(_0xe0b1a(0x129))*parseInt(_0xe0b1a(0xae))+parseInt(_0xe0b1a(0x127))*parseInt(_0xe0b1a(0x10b))+-parseInt(_0xe0b1a(0x10e))*-parseInt(_0xe0b1a(0xf7))+parseInt(_0xe0b1a(0xfe))*-parseInt(_0xe0b1a(0xe8))+-parseInt(_0xe0b1a(0xea))*parseInt(_0xe0b1a(0xc1))+-parseInt(_0xe0b1a(0x111))*parseInt(_0xe0b1a(0xe2))+parseInt(_0xe0b1a(0xf1));if(_0x1ae949===_0x5679f6)break;else _0x2dd206['push'](_0x2dd206['shift']());}catch(_0x48b661){_0x2dd206['push'](_0x2dd206['shift']());}}}(a4_0x2c4d,0x1bdba));function a4_0x16d0(_0x4272a8,_0x36b8f9){_0x4272a8=_0x4272a8-0xad;var _0x2c4d0a=a4_0x2c4d[_0x4272a8];return _0x2c4d0a;}function FastClick(_0x3df5a2){'use strict';var _0x295ede=a4_0x16d0;var _0x39bc1f;this[_0x295ede(0xe6)]=![],this[_0x295ede(0x128)]=0x0,this[_0x295ede(0x107)]=null,this['touchStartX']=0x0,this[_0x295ede(0x121)]=0x0,this['lastTouchIdentifier']=0x0,this[_0x295ede(0xfc)]=0xa,this[_0x295ede(0x10d)]=_0x3df5a2;if(FastClick[_0x295ede(0x123)](_0x3df5a2))return;function _0x1961ec(_0x4ea424,_0x1f956d){return function(){var _0x47110e=a4_0x16d0;return _0x4ea424[_0x47110e(0xcf)](_0x1f956d,arguments);};}deviceIsAndroid&&(_0x3df5a2[_0x295ede(0x117)](_0x295ede(0xed),_0x1961ec(this[_0x295ede(0x122)],this),!![]),_0x3df5a2['addEventListener'](_0x295ede(0x119),_0x1961ec(this['onMouse'],this),!![]),_0x3df5a2[_0x295ede(0x117)](_0x295ede(0xd5),_0x1961ec(this[_0x295ede(0x122)],this),!![])),_0x3df5a2[_0x295ede(0x117)](_0x295ede(0xee),_0x1961ec(this[_0x295ede(0x124)],this),!![]),_0x3df5a2[_0x295ede(0x117)](_0x295ede(0xdb),_0x1961ec(this[_0x295ede(0x11e)],this),![]),_0x3df5a2[_0x295ede(0x117)](_0x295ede(0x12d),_0x1961ec(this[_0x295ede(0xe5)],this),![]),_0x3df5a2['addEventListener'](_0x295ede(0xff),_0x1961ec(this['onTouchEnd'],this),![]),_0x3df5a2['addEventListener'](_0x295ede(0xb8),_0x1961ec(this[_0x295ede(0xc4)],this),![]),!Event['prototype'][_0x295ede(0xd9)]&&(_0x3df5a2[_0x295ede(0xf8)]=function(_0x2bacb6,_0x3eab13,_0x77ca53){var _0x5df0e5=_0x295ede,_0x31505d=Node[_0x5df0e5(0xf6)][_0x5df0e5(0xf8)];_0x2bacb6===_0x5df0e5(0xee)?_0x31505d[_0x5df0e5(0xf3)](_0x3df5a2,_0x2bacb6,_0x3eab13['hijacked']||_0x3eab13,_0x77ca53):_0x31505d['call'](_0x3df5a2,_0x2bacb6,_0x3eab13,_0x77ca53);},_0x3df5a2['addEventListener']=function(_0x433fd6,_0x41a1b3,_0x1c4460){var _0x58b1ad=_0x295ede,_0x4f17b9=Node[_0x58b1ad(0xf6)][_0x58b1ad(0x117)];_0x433fd6===_0x58b1ad(0xee)?_0x4f17b9['call'](_0x3df5a2,_0x433fd6,_0x41a1b3[_0x58b1ad(0xc5)]||(_0x41a1b3[_0x58b1ad(0xc5)]=function(_0x3b80fb){var _0x4fa1ca=_0x58b1ad;!_0x3b80fb[_0x4fa1ca(0xce)]&&_0x41a1b3(_0x3b80fb);}),_0x1c4460):_0x4f17b9[_0x58b1ad(0xf3)](_0x3df5a2,_0x433fd6,_0x41a1b3,_0x1c4460);}),typeof _0x3df5a2[_0x295ede(0xb3)]===_0x295ede(0xdf)&&(_0x39bc1f=_0x3df5a2['onclick'],_0x3df5a2[_0x295ede(0x117)](_0x295ede(0xee),function(_0x3cd98c){_0x39bc1f(_0x3cd98c);},![]),_0x3df5a2['onclick']=null);}var deviceIsAndroid=navigator['userAgent'][a4_0x666ef2(0x118)](a4_0x666ef2(0x11c))>0x0,deviceIsIOS=/iP(ad|hone|od)/['test'](navigator['userAgent']),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/[a4_0x666ef2(0xca)](navigator['userAgent']),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/[a4_0x666ef2(0xca)](navigator[a4_0x666ef2(0x120)]);FastClick[a4_0x666ef2(0xf6)]['needsClick']=function(_0x2de957){'use strict';var _0x221552=a4_0x666ef2;switch(_0x2de957[_0x221552(0x104)][_0x221552(0xdc)]()){case'button':case'select':case _0x221552(0x102):if(_0x2de957['disabled'])return!![];break;case _0x221552(0xbe):if(deviceIsIOS&&_0x2de957[_0x221552(0xd1)]===_0x221552(0xde)||_0x2de957['disabled'])return!![];break;case'label':case _0x221552(0xc3):return!![];}return/\bneedsclick\b/['test'](_0x2de957['className']);},FastClick['prototype'][a4_0x666ef2(0xcd)]=function(_0x1c86cb){'use strict';var _0x1c2a1b=a4_0x666ef2;switch(_0x1c86cb['nodeName'][_0x1c2a1b(0xdc)]()){case'textarea':return!![];case'select':return!deviceIsAndroid;case'input':switch(_0x1c86cb[_0x1c2a1b(0xd1)]){case _0x1c2a1b(0xb6):case _0x1c2a1b(0xc0):case _0x1c2a1b(0xde):case _0x1c2a1b(0xeb):case _0x1c2a1b(0xf0):case _0x1c2a1b(0x126):return![];}return!_0x1c86cb[_0x1c2a1b(0xe0)]&&!_0x1c86cb[_0x1c2a1b(0x100)];default:return/\bneedsfocus\b/[_0x1c2a1b(0xca)](_0x1c86cb['className']);}},FastClick[a4_0x666ef2(0xf6)][a4_0x666ef2(0x113)]=function(_0x2d855d,_0x29c0da){'use strict';var _0x16c25b=a4_0x666ef2;var _0x185747,_0x1a1465;document[_0x16c25b(0x11a)]&&document[_0x16c25b(0x11a)]!==_0x2d855d&&document[_0x16c25b(0x11a)][_0x16c25b(0x115)](),_0x1a1465=_0x29c0da[_0x16c25b(0xd0)][0x0],_0x185747=document[_0x16c25b(0xaf)](_0x16c25b(0x125)),_0x185747[_0x16c25b(0xb4)](this[_0x16c25b(0xb0)](_0x2d855d),!![],!![],window,0x1,_0x1a1465[_0x16c25b(0x10c)],_0x1a1465[_0x16c25b(0xfd)],_0x1a1465[_0x16c25b(0x12a)],_0x1a1465['clientY'],![],![],![],![],0x0,null),_0x185747[_0x16c25b(0x12c)]=!![],_0x2d855d[_0x16c25b(0xad)](_0x185747);},FastClick[a4_0x666ef2(0xf6)][a4_0x666ef2(0xb0)]=function(_0x460a80){'use strict';var _0x24dbc6=a4_0x666ef2;if(deviceIsAndroid&&_0x460a80[_0x24dbc6(0xda)][_0x24dbc6(0xdc)]()===_0x24dbc6(0xf2))return _0x24dbc6(0x119);return _0x24dbc6(0xee);},FastClick[a4_0x666ef2(0xf6)]['focus']=function(_0x292a88){'use strict';var _0x5b3853=a4_0x666ef2;var _0x5cfae8;deviceIsIOS&&_0x292a88[_0x5b3853(0x10a)]&&_0x292a88[_0x5b3853(0xd1)][_0x5b3853(0x118)]('date')!==0x0&&_0x292a88['type']!==_0x5b3853(0xd3)?(_0x5cfae8=_0x292a88[_0x5b3853(0x11f)][_0x5b3853(0xdd)],_0x292a88[_0x5b3853(0x10a)](_0x5cfae8,_0x5cfae8)):_0x292a88['focus']();},FastClick['prototype'][a4_0x666ef2(0xbc)]=function(_0x1cc435){'use strict';var _0x5527d7=a4_0x666ef2;var _0x42f57b,_0x4f1e28;_0x42f57b=_0x1cc435[_0x5527d7(0xd6)];if(!_0x42f57b||!_0x42f57b[_0x5527d7(0xb5)](_0x1cc435)){_0x4f1e28=_0x1cc435;do{if(_0x4f1e28[_0x5527d7(0xb1)]>_0x4f1e28[_0x5527d7(0xc2)]){_0x42f57b=_0x4f1e28,_0x1cc435[_0x5527d7(0xd6)]=_0x4f1e28;break;}_0x4f1e28=_0x4f1e28[_0x5527d7(0x105)];}while(_0x4f1e28);}_0x42f57b&&(_0x42f57b[_0x5527d7(0xe4)]=_0x42f57b[_0x5527d7(0xef)]);},FastClick['prototype'][a4_0x666ef2(0xbd)]=function(_0x48ccdc){'use strict';var _0x3c5cae=a4_0x666ef2;if(_0x48ccdc['nodeType']===Node['TEXT_NODE'])return _0x48ccdc[_0x3c5cae(0xec)];return _0x48ccdc;},FastClick[a4_0x666ef2(0xf6)]['onTouchStart']=function(_0x401555){'use strict';var _0x418492=a4_0x666ef2;var _0x49c04b,_0x360948,_0x29abb7;if(_0x401555['targetTouches'][_0x418492(0xdd)]>0x1)return!![];_0x49c04b=this['getTargetElementFromEventTarget'](_0x401555[_0x418492(0xb2)]),_0x360948=_0x401555[_0x418492(0x116)][0x0];if(deviceIsIOS){_0x29abb7=window[_0x418492(0xd2)]();if(_0x29abb7['rangeCount']&&!_0x29abb7['isCollapsed'])return!![];if(!deviceIsIOS4){if(_0x360948[_0x418492(0x106)]===this[_0x418492(0xbb)])return _0x401555[_0x418492(0xc9)](),![];this[_0x418492(0xbb)]=_0x360948[_0x418492(0x106)],this[_0x418492(0xbc)](_0x49c04b);}}return this[_0x418492(0xe6)]=!![],this[_0x418492(0x128)]=_0x401555[_0x418492(0xf5)],this[_0x418492(0x107)]=_0x49c04b,this[_0x418492(0x11d)]=_0x360948[_0x418492(0x109)],this[_0x418492(0x121)]=_0x360948[_0x418492(0xf4)],_0x401555[_0x418492(0xf5)]-this[_0x418492(0xd8)]<0xc8&&_0x401555[_0x418492(0xc9)](),!![];},FastClick[a4_0x666ef2(0xf6)]['touchHasMoved']=function(_0x27db39){'use strict';var _0x35da57=a4_0x666ef2;var _0x44b0e3=_0x27db39[_0x35da57(0xd0)][0x0],_0x3a5552=this[_0x35da57(0xfc)];if(Math[_0x35da57(0xbf)](_0x44b0e3['pageX']-this[_0x35da57(0x11d)])>_0x3a5552||Math[_0x35da57(0xbf)](_0x44b0e3[_0x35da57(0xf4)]-this[_0x35da57(0x121)])>_0x3a5552)return!![];return![];},FastClick[a4_0x666ef2(0xf6)][a4_0x666ef2(0xe5)]=function(_0x151e28){'use strict';var _0x23f6a9=a4_0x666ef2;if(!this[_0x23f6a9(0xe6)])return!![];return(this[_0x23f6a9(0x107)]!==this[_0x23f6a9(0xbd)](_0x151e28[_0x23f6a9(0xb2)])||this['touchHasMoved'](_0x151e28))&&(this['trackingClick']=![],this[_0x23f6a9(0x107)]=null),!![];},FastClick[a4_0x666ef2(0xf6)][a4_0x666ef2(0x101)]=function(_0x49b665){'use strict';var _0x719be4=a4_0x666ef2;if(_0x49b665['control']!==undefined)return _0x49b665[_0x719be4(0xfa)];if(_0x49b665[_0x719be4(0x11b)])return document[_0x719be4(0xd7)](_0x49b665[_0x719be4(0x11b)]);return _0x49b665[_0x719be4(0xb9)](_0x719be4(0x10f));},FastClick['prototype'][a4_0x666ef2(0xcb)]=function(_0x19cbba){'use strict';var _0x1a4242=a4_0x666ef2;var _0x487c0c,_0x282e90,_0x1fc131,_0x32e4ae,_0x139b9c,_0x5356da=this[_0x1a4242(0x107)];if(!this[_0x1a4242(0xe6)])return!![];if(_0x19cbba[_0x1a4242(0xf5)]-this[_0x1a4242(0xd8)]<0xc8)return this[_0x1a4242(0x103)]=!![],!![];this[_0x1a4242(0x103)]=![],this[_0x1a4242(0xd8)]=_0x19cbba['timeStamp'],_0x282e90=this[_0x1a4242(0x128)],this[_0x1a4242(0xe6)]=![],this['trackingClickStart']=0x0;deviceIsIOSWithBadTarget&&(_0x139b9c=_0x19cbba[_0x1a4242(0xd0)][0x0],_0x5356da=document[_0x1a4242(0xb7)](_0x139b9c[_0x1a4242(0x109)]-window['pageXOffset'],_0x139b9c[_0x1a4242(0xf4)]-window[_0x1a4242(0xfb)])||_0x5356da,_0x5356da[_0x1a4242(0xd6)]=this[_0x1a4242(0x107)][_0x1a4242(0xd6)]);_0x1fc131=_0x5356da['tagName'][_0x1a4242(0xdc)]();if(_0x1fc131==='label'){_0x487c0c=this[_0x1a4242(0x101)](_0x5356da);if(_0x487c0c){this[_0x1a4242(0xcc)](_0x5356da);if(deviceIsAndroid)return![];_0x5356da=_0x487c0c;}}else{if(this[_0x1a4242(0xcd)](_0x5356da)){if(_0x19cbba[_0x1a4242(0xf5)]-_0x282e90>0x64||deviceIsIOS&&window[_0x1a4242(0xe9)]!==window&&_0x1fc131===_0x1a4242(0xbe))return this[_0x1a4242(0x107)]=null,![];return this[_0x1a4242(0xcc)](_0x5356da),this[_0x1a4242(0x113)](_0x5356da,_0x19cbba),(!deviceIsIOS4||_0x1fc131!=='select')&&(this['targetElement']=null,_0x19cbba[_0x1a4242(0xc9)]()),![];}}if(deviceIsIOS&&!deviceIsIOS4){_0x32e4ae=_0x5356da['fastClickScrollParent'];if(_0x32e4ae&&_0x32e4ae[_0x1a4242(0xe4)]!==_0x32e4ae[_0x1a4242(0xef)])return!![];}return!this[_0x1a4242(0xba)](_0x5356da)&&(_0x19cbba[_0x1a4242(0xc9)](),this['sendClick'](_0x5356da,_0x19cbba)),![];},FastClick[a4_0x666ef2(0xf6)][a4_0x666ef2(0xc4)]=function(){'use strict';var _0x26b7a3=a4_0x666ef2;this[_0x26b7a3(0xe6)]=![],this['targetElement']=null;},FastClick[a4_0x666ef2(0xf6)][a4_0x666ef2(0x122)]=function(_0x2a711e){'use strict';var _0x47a5fd=a4_0x666ef2;if(!this[_0x47a5fd(0x107)])return!![];if(_0x2a711e[_0x47a5fd(0x12c)])return!![];if(!_0x2a711e[_0x47a5fd(0x114)])return!![];if(!this[_0x47a5fd(0xba)](this[_0x47a5fd(0x107)])||this['cancelNextClick'])return _0x2a711e[_0x47a5fd(0xd9)]?_0x2a711e[_0x47a5fd(0xd9)]():_0x2a711e[_0x47a5fd(0xce)]=!![],_0x2a711e['stopPropagation'](),_0x2a711e[_0x47a5fd(0xc9)](),![];return!![];},FastClick[a4_0x666ef2(0xf6)]['onClick']=function(_0x4d712b){'use strict';var _0x5f1b8e=a4_0x666ef2;var _0xe752b5;if(this[_0x5f1b8e(0xe6)])return this[_0x5f1b8e(0x107)]=null,this[_0x5f1b8e(0xe6)]=![],!![];if(_0x4d712b['target'][_0x5f1b8e(0xd1)]===_0x5f1b8e(0x126)&&_0x4d712b['detail']===0x0)return!![];return _0xe752b5=this[_0x5f1b8e(0x122)](_0x4d712b),!_0xe752b5&&(this[_0x5f1b8e(0x107)]=null),_0xe752b5;},FastClick[a4_0x666ef2(0xf6)][a4_0x666ef2(0xe1)]=function(){'use strict';var _0x498b94=a4_0x666ef2;var _0x250e55=this[_0x498b94(0x10d)];deviceIsAndroid&&(_0x250e55[_0x498b94(0xf8)](_0x498b94(0xed),this['onMouse'],!![]),_0x250e55['removeEventListener']('mousedown',this[_0x498b94(0x122)],!![]),_0x250e55[_0x498b94(0xf8)](_0x498b94(0xd5),this[_0x498b94(0x122)],!![])),_0x250e55['removeEventListener'](_0x498b94(0xee),this[_0x498b94(0x124)],!![]),_0x250e55[_0x498b94(0xf8)]('touchstart',this[_0x498b94(0x11e)],![]),_0x250e55['removeEventListener'](_0x498b94(0x12d),this[_0x498b94(0xe5)],![]),_0x250e55[_0x498b94(0xf8)]('touchend',this[_0x498b94(0xcb)],![]),_0x250e55[_0x498b94(0xf8)]('touchcancel',this['onTouchCancel'],![]);},FastClick[a4_0x666ef2(0x123)]=function(_0x47b38d){'use strict';var _0x1f9608=a4_0x666ef2;var _0x2da2f6,_0x442f06;if(typeof window['ontouchstart']==='undefined')return!![];_0x442f06=+(/Chrome\/([0-9]+)/['exec'](navigator[_0x1f9608(0x120)])||[,0x0])[0x1];if(_0x442f06){if(deviceIsAndroid){_0x2da2f6=document[_0x1f9608(0xb9)]('meta[name=viewport]');if(_0x2da2f6){if(_0x2da2f6[_0x1f9608(0xd4)][_0x1f9608(0x118)](_0x1f9608(0xc6))!==-0x1)return!![];if(_0x442f06>0x1f&&window[_0x1f9608(0x110)]<=window[_0x1f9608(0xc7)]['width'])return!![];}}else return!![];}if(_0x47b38d[_0x1f9608(0xe3)][_0x1f9608(0xf9)]==='none')return!![];return![];},FastClick[a4_0x666ef2(0x12b)]=function(_0x5e033e){'use strict';return new FastClick(_0x5e033e);};if(typeof define!=='undefined'&&define[a4_0x666ef2(0xe7)])define(function(){'use strict';return FastClick;});else typeof module!==a4_0x666ef2(0xc8)&&module['exports']?(module[a4_0x666ef2(0x108)]=FastClick[a4_0x666ef2(0x12b)],module[a4_0x666ef2(0x108)][a4_0x666ef2(0x112)]=FastClick):window[a4_0x666ef2(0x112)]=FastClick;