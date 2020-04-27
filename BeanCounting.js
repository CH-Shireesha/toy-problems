function countBs(str){
	count = 0;
	for(let  i = 0; i < str.length; i++){
		if(str[i] === 'B'){
            count++;
        }    
	}
	return count;
}
console.log(countBs("BeanCountingb's"))


function countChar(str, char){
    count = 0;
	for(let  i = 0; i < str.length; i++){
		if(str[i] === char){
            count++;
        }    
	}
	return count;
}
console.log(countChar("Shiriesha", 'e'))
