// Write your cade below:
function GuessNumber(inputs) {
    function Compare(input1,input2) {
        if(input1===input2){
            return (input1.length.toString()) + "A0B";
        }
        var a_num = 0;//统计数字位置都猜对的数量
        var b_num=0;//统计数字才对位置不对的数量
        for(var i=0;i<input1.length;i++){
            for(var j=0;j<input2.length;j++){
                if(input2[j]===input1[i]){
                    if(j===i){
                        a_num += 1;
                    }
                    else {
                        b_num += 1;
                    }
                    break;
                }
            }
        }
        return (a_num.toString()) + 'A' + (b_num.toString()) +'B';
    }
    var result = Compare(inputs[0], inputs[1]);
    console.log(result);
    return result;
}
module.exports=GuessNumber;