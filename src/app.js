window.getScalarProductOfVectors = function () {

var arr = [ 
			['0', '0', '0', '0', 'x'], 
			['0', '0', '0', 'x', 'x'], 
			['x', '0', '0', 'x', '0'],
			['0', 'x', 'x', 'x', 'x'],
			['x', '0', 'x', '0', '0']  
		  ];
console.log(arr)

function getWinner (array) {
	var row = [];
	var leftToRight = [];
	var rightToLeft = [];
	var result = null;
	function callback (data) {
		return(data === 'x')
	}
	function callback2 (data) {
		return(data === '0')
	}
	function instruction (data) {
		if (data.every(callback)) {
			result = 'win x'
		} else if (data.every(callback2)) {
			result = 'win 0'
		}
	}
	for(var i = 0; i < array.length;i++){
		instruction(array[i])
	}
	for(var j = 0;j < array.length;j++){
		row = [];
		for(var i = 0;i < array.length;i++){
			row.push(array[i][j])
		}
		instruction(row)
	}
	for (var i = 0, j = 0; i < array.length; i++, j++) {
     leftToRight.push(array[i][j]);
    }
     instruction(leftToRight)
 
    for (var i = 0, j = array.length -1; i < array.length-1; i++, j--) {
     rightToLeft.push(array[i][j]);
    }
     instruction(rightToLeft)
return result
}
console.log(getWinner(arr))



};
