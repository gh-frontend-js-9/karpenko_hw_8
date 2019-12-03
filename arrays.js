const arrays = {}
arrays.toArray = (obj) => {
    return Object.entries(obj)
}
arrays.changeEnough = (change, amountDue) => {
    let a = change[0]*0.25;
	a += change[1]*0.1;
	a += change[2]*0.05;
	a += change[3]*0.01;
	return a >= amountDue;
}
arrays.arrayOfMultiples = (num, length) => {
    let array = []
    for(let i = 1; i <= length; ++i) array.push(num*i)
    return array
}
arrays.testJackpot = (result) => {
    return (new Set(result)).size === 1  ? true : false
}
arrays.indexMultiplier = (arr) => {
    let resoult = 0
    arr.map((value, index) => {
        resoult += value*index
    })
    return resoult
}
arrays.progressDays  = (runs) => {
    return runs.filter((e,i,a)=>e<a[i+1]).length;
}
arrays.removeDups = (arr) => {
    return Array.from(new Set(arr))
}
arrays.capMe = (arr) => {
    return arr.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
}
arrays.evenOddTransform = (arr, n) => {
    return arr.map(x => (x % 2 == 0) ? x - 2 * n : x + 2 * n)
}
arrays.flatten = (arr) => {
    return [].concat(...arr)
}
arrays.uniqueSort = (arr) => {
    return Array.from(new Set(arr)).sort((a, b) => { return a - b })
}
arrays.numOfSubbarrays = (arr) => {
    return arr.filter(a => a instanceof Array).length
}
arrays.sumTwoSmallestNums = (arr) => {
    return arr.filter((item) => item >= 0)
        .sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((acc, item) => acc + item);
}
arrays.reverseImage = (image) => {
    return image.map(value => value.map(element => element === 0 ? 1 : 0))
}
arrays.incrementToTop = (arr) => {
    return arr.reduce((accumulator, value) => {
        return accumulator + Math.max(...arr) - value
    }, 0)
}
arrays.generatePalindromes = () => {
    let max = 999999;
    let min = 984000;
    let container = [].toString().split(",");
    let filtered = [];
    
    for (let i=min; i<max; i++) {
    container.push(i);
    }
    for (let x=1; x<container.length; x++) {
     if (container[x].toString() === container[x].toString().split("").reverse().join("")) {
                    filtered.push(container[x]);
    }
    }
    return filtered;
}
arrays.matrix = (x, y, z) => {
    return Array(x).fill().map(value => Array(y).fill(z))
}
arrays.upwardTrend = (array) => {
    return array.some(a => (typeof a) == 'string') ? 'Strings not permitted!'
    : array.every((b, i, array) => i > 0 ? b > array[i - 1] : true)
}
arrays.puzzlePieces = (a1, a2) => {
    let sum = []
    if(a1.length == a2.length){
        for(let i = 0; i < a1.length; ++i){
            sum.push(a1[i] + a2[i])
        }
        if(Array.from(new Set(sum)).length == 1) return true
        else return false
    }else{
        return false
    }
}
arrays.uniqueArr = (arr) => {
    let positive_array = []
    arr.map(value => {
        if(value > 0) positive_array.push(value)
    })
    return Array.from(new Set(positive_array))
}
arrays.wordBuilder = (letters, positions) => {
	res = []
	positions.forEach((p,i) => (res[p] = letters[i]))
	return res.join("");
}
arrays.nextInLine = (arr, num) => {
    return (arr || []).length === 0 ? "No array has been selected" :
	arr.slice(1).concat(num);
}
arrays.sumOfEvens = (arr) => {
    return arr.map(arr => arr.
        filter(n => n%2===0).
        reduce((a,n)=> a+n,0)).
        reduce((a,n) => a+n,0)
}
arrays.removeSmallest = (arr) => {
    let lowest = Math.min(...arr);
    arr.splice(arr.indexOf(lowest), 1);
    return arr;
}
arrays.mapping = (arr) => {
	const obj = {}
	arr.forEach(el => obj[el] = el.toUpperCase())
	return obj
}
arrays.matchLastItem = (arr) => {
    let comparation_element = ''
    arr.map((value, index) => {
        if(index < arr.length - 1){
            comparation_element += value.toString()
        }
    })
    if(arr[arr.length - 1].toString() == comparation_element) return true 
    else return false
}
arrays.concat = (...arr) => {
    return [].concat(...arr)
}
arrays.moveToEnd = (arr, element) => {
    return arr.sort((a)=>a==el?1:-1)
}
arrays.probability = (arr, num) => {
	return +((((arr.filter(a => a >= num).length))
		/(arr.length)*100).toFixed(1));
}
arrays.median = (arr) => {
    let sorted = arr.sort((a,b) => { return a - b })
    let m1 = sorted[Math.floor((this.length+1)/2)-1]
    let m2 = sorted[Math.ceil((this.length+1)/2)-1]
    return +((m1+m2)/2).toFixed(1)
}
arrays.simonsSays = (arr1, arr2) => {
    arr2.slice(1).every((num, i) => num === arr1[i]);
}
arrays.cumulativeSum = (arr) => {
    let sum = 0
    return arr.map(value => sum += value)
}
arrays.digitDistance = (num1, num2) => {
    let a1 = num1.toString().split('')
    let a2 = num2.toString().split('')
    let sum = 0
    if(a1.length == a2.length){
        for(let i = 0; i < a1.length; ++i){
            sum += (a1[i] - a2[i])
        }
    }else{
        return 0
    }
    return Math.abs(sum)
}
arrays.squarePatch = (n) => {
	if(n == 0){ return []; }
	return new Array(n).fill(new Array(n).fill(n));
}
arrays.getDiagonals = (arr) => {
	var d1 = arr.map((x, i) => x[i]);
	var d2 = arr.map((x, i) => x[x.length-1-i]);
	return [d1, d2];
}
arrays.letterCounter = (arr, letter) => {
    return arr.reduce((xi,x)=>xi.concat(x),[])
        .filter(x=>x === letter).length;
}