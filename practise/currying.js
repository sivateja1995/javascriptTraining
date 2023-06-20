function currying(x){
    return function(a){
        return function(b) {
            return function(c) {
                return x(a,b,c)
            }
        }
    }
}


function calSum(a,b,c){
    return a+b+c;
}

let addition = currying(calSum)

console.log(addition(1)(2)(3));