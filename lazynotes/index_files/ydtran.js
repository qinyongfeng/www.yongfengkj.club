var _0x8e95=['SHA256','push','log','ajax','20200619000500482','errorCode','translation','length','getTime','1a6aac9941685b97','explains','http://openapi.youdao.com/api','get','post','toString','jsonp','trans_result','substring','basic'];var _0x3f2d=function(_0x8e95f2,_0x3f2d31){_0x8e95f2=_0x8e95f2-0x0;var _0x224fac=_0x8e95[_0x8e95f2];return _0x224fac;};function ydTrans(_0x471a65,_0x141852,_0x5cccd6){var _0x7a5562=_0x3f2d('0x9');var _0x3aa04a='ToGENiDNHrAtS9cekllibMi4g4lYcXen';var _0x4546fa=new Date()[_0x3f2d('0x8')]();var _0x1a1157=Math['round'](new Date()['getTime']()/0x3e8);var _0xe7acdb='zh-CHS';var _0x4b0827='en';var _0x483d51=_0x7a5562+truncate(_0x471a65)+_0x4546fa+_0x1a1157+_0x3aa04a;var _0x18417d='您的用户词表ID';var _0x5e0fca=CryptoJS[_0x3f2d('0x0')](_0x483d51)[_0x3f2d('0xe')](CryptoJS['enc']['Hex']);$[_0x3f2d('0x3')]({'url':_0x3f2d('0xb'),'type':_0x3f2d('0xd'),'dataType':'jsonp','data':{'q':_0x471a65,'appKey':_0x7a5562,'salt':_0x4546fa,'from':_0xe7acdb,'to':_0x4b0827,'sign':_0x5e0fca,'signType':'v3','curtime':_0x1a1157,'vocabId':_0x18417d},'success':function(_0x33ed7a){if(_0x33ed7a==null){return;}console['log'](_0x33ed7a);if(_0x33ed7a[_0x3f2d('0x5')]!=0x0){return;}let _0x400e17='';if(_0x33ed7a['basic']==null){if(_0x33ed7a[_0x3f2d('0x6')]==null){return;}_0x400e17=_0x33ed7a['translation'];}else{if(_0x33ed7a[_0x3f2d('0x6')]!=null){_0x400e17=mergeYDData(_0x33ed7a['basic'][_0x3f2d('0xa')],_0x33ed7a[_0x3f2d('0x6')]);}else{_0x400e17=_0x33ed7a[_0x3f2d('0x12')][_0x3f2d('0xa')];}}if(_0x141852==null){return;}_0x141852(_0x400e17,_0x471a65,_0x5cccd6);}});}function mergeYDData(_0x59284a,_0x513c85){for(let _0x7444dd=0x0;_0x7444dd<_0x513c85['length'];_0x7444dd++){let _0x56a5f2=_0x513c85[_0x7444dd];if(_0x59284a['indexOf'](_0x56a5f2)>=0x0){continue;}_0x59284a[_0x3f2d('0x1')](_0x56a5f2);}return _0x59284a;}function truncate(_0x1d5120){var _0xa856ff=_0x1d5120[_0x3f2d('0x7')];if(_0xa856ff<=0x14)return _0x1d5120;return _0x1d5120['substring'](0x0,0xa)+_0xa856ff+_0x1d5120[_0x3f2d('0x11')](_0xa856ff-0xa,_0xa856ff);}function bdTrans(_0x58edae,_0x302039){var _0x176e4d=_0x3f2d('0x4');var _0x556992='2b3sWLVzytlIWz6jSuZq';var _0x1d7ee7=new Date()['getTime']();var _0x5d299a='zh';var _0x488d15='en';var _0x38c5b8=_0x176e4d+_0x58edae+_0x1d7ee7+_0x556992;var _0x4aa437=MD5(_0x38c5b8);$[_0x3f2d('0x3')]({'url':'http://api.fanyi.baidu.com/api/trans/vip/translate','type':_0x3f2d('0xc'),'dataType':_0x3f2d('0xf'),'data':{'q':_0x58edae,'appid':_0x176e4d,'salt':_0x1d7ee7,'from':_0x5d299a,'to':_0x488d15,'sign':_0x4aa437},'success':function(_0x562b29){console[_0x3f2d('0x2')](_0x562b29);if(_0x562b29[_0x3f2d('0x10')]==null){return;}let _0x50e71c=_0x562b29[_0x3f2d('0x10')];if(_0x302039==null){return;}_0x302039(_0x50e71c);}});}