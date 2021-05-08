function getLetter(s) {
    let letter;
    // Write your code here
    let A = ['a','e','i','o','u']
    let B = ['b','c','d','f','g']
    let C = ['h','j','k','l','m']
    let D = ['n','p','q','r','s','t','v','w','x','y','z']
    
    switch(true){
        case A.includes(s[0]) : 
            letter = 'A'
            break
        case B.includes(s[0]):
            letter = 'B'
            break
        case C.includes(s[0]):
            letter = 'C'
            break
        case D.includes(s[0]):
            letter = 'D'
            break
        default:
            letter = "rekt"
    }
    
    return letter;