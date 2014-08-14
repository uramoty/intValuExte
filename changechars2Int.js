/*
 数字以外の接頭字句を持つもの、数字から始まる文字列を数値かします
 
 intValu は、数字以外の文字から始まる文字列を数値に変換できません。
 この小さなJavaScriptは、その例外を解消します。
 
 使用例　var _int = changechars2Int("abc1234");  // 戻り値は1234
 作者　浦本勝久
 　　　株式会社エクスファ
 　　　http://x-fer.info
 　　　uramoto@x-fer.info
 
*/

// intValu パッチ
function changechars2Int(_str){
	var _go = true;
	while(_go){
		var _test = _str.substr(0,1);
		if(parseInt(_test,10)){
			_go = false;
		}else{
			_str = _str.substring(1,_str.length);
		}
	}
	if(_str == ""){
		_str = "0";
	}
	return _str;
}
