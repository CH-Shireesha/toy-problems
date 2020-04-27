function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if((typeof a == "object" && a != null) && (typeof b == "object" && b != null)){
        A = 0;
        B = 0;
        for (let prop in a)
            A += 1;
        for (let props in b) {
            B += 1;
            if (!(props in a) || !deepEqual(a[props], b[props]))
            {
                return false;
            }    
        }
    return A === B;
    }
    else{
        return false;
    }
}
console.log(deepEqual("hello","hello"))
console.log(deepEqual([456],[654]));
console.log(deepEqual({key:"siri"},{key:"miri"}))