function letterCombinations(input_digit) {
  //Complete the function
	let mapping = {
		'0':'0',
		'1': '1',
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz'
	};
	let ans = [];
	combo(0,mapping,ans,input_digit,'');
	ans.sort();
	return ans;
}
function combo(ind,mapping,ans,input_digit,str) {
	if(ind==input_digit.length) {
		ans.push(str);
		return;
	}
	for (let i = 0; i < mapping[input_digit[ind]].length; i++) {
		let mapped =  mapping[input_digit[ind]];
		combo(ind+1,mapping,ans,input_digit,str+mapped[i])';'
	}
}

module.exports = letterCombinations;
