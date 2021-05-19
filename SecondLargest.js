function getSecondLargest(nums) {
    // Complete the function
    let uniq = [...new Set(nums.sort((x,y) => y-x))]
    return uniq[1]
}