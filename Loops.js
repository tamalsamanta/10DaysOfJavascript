function vowelsAndConsonants(s) {
    let vowels = ['a','e','i','o','u']
    let rem = []
    for(var i in s){
        if(vowels.includes(s[i])){
            console.log(s[i])
        }
        else{
            rem.push(s[i])
        }
    }
    for(i in rem){
        console.log(rem[i])
    }
}