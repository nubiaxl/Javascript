// by Nubila Levon

//showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++)
        console.log(i, (i % 2 === 0) ? 'EVEN' : 'ODD');

}

const array = [0, null, undefined, '', NaN, false, 1, 2, 3];

// console.log(countTruthy(array));
//FALSY Values = undefined, null, '', false, 0, NaN

function countTruthy(array) {

    let count = 0;
    for (let arrayElement of array)
        if (arrayElement)
            count++;

    return count;
}

const movie = {
    title: 'a',
    releaseYear: 2019,
    rating: 4.5,
    director: 'Spielberg'
};
showProperties(movie);

function showProperties(obj) {
    for (let elementProperty in obj)
        if (typeof obj[elementProperty] == 'string')
            console.log(elementProperty, obj[elementProperty]);
}

console.log(sum(10));
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
//          Total: 33

function sum(limit) {
    let sumThreeValue = 0;
    let sumFiveValue = 0;
    for (i = 3; i <= limit; i += 3)
        sumThreeValue = sumThreeValue + i;
    for (i = 5; i <= limit; i += 5)
        sumFiveValue = sumFiveValue + i;
    return sumThreeValue + sumFiveValue;

}

const marks = [80, 137, 50];

// Average = 70
// 1-59: F
// 60-69: D
// 70-79; C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let average = 0;
    let sumvalue = 0;
    let avalue = 0;
    for (avalue of marks)
        sumvalue = sumvalue + avalue;
    average = sumvalue / marks.length;
    if (average >= 0 && average <= 59)
        return 'F';
    else if (average >= 60 && average <= 69)
        return 'D';
    else if (average >= 70 && average <= 79)
        return 'C';
    else if (average >= 80 && average <= 89)
        return 'B';
    else if (average >= 90 && average <= 100)
        return 'A';

}

showStars(10);

function showStars(rows) {

    for (let i = 1; i <= rows; i++) {
        let starString = '';
        for (let j = 1; j <= i; j++)
            starString = starString + '*';

        console.log(starString);

    }
}

showPrimes(20);
// Prime (factors are only 1 and itself)
// 12 = 1, 2, 3, 4, 6, 12
// can be divided evenly  by its factors
// 11 = 1, 11
// 13 = 1, 13

function showPrimes(limit) {
    let primefactors = [];
    for (let i = 1; i <= limit; i++) {
        for (let j = 1; j <= limit; j++) {
            if (i % j === 0 && i !== j && j !== 1) {
                primefactors[i] = 'no';
                break;
            }

        }

    }
    for (let i = 2; i <= limit; i++)
        if (primefactors[i] !== 'no')
            console.log(i);
}

// street
// city
// zip
// function showAddress(address)


const address = {
    street: '1 Pine',
    city: 'Phoenix',
    zip: '85008'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);

// Factory Function
function createAddress(street, city, zip) {
    return {
        street,
        city,
        zip
    };
}
const address1 = createAddress('1 Oak', 'Phoenix', '85016');
console.log(address1);

// Constructor Function
function Address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;

}
const address2 = new Address('1 A', 'Phx', '85006');
const address2b = new Address('1 A', 'Phx', '85006');
console.log(address2);
areEqual(address2, address2b);
areSame(address2, address2b);

function areEqual(address2, address2b) {
    for (let key in address2, address2b)
        if (address2[key] === address2b[key])
            console.log("They are equal in properties");
        else
            console.log("They are not equal in properties");
}

function areSame(address2, address2b) {
    if (address2 === address2b)
        console.log('They are the same objects');
    else
        console.log('They are not same objects');
}


//Blog Post Object Literal
// Constructor Function
function Blog(title, body, author, views, commentArray, isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = commentArray;
    this.isLive = isLive;
    return this;

}

function Comments(author, cbody) {
    this.author = author;
    this.cbody = cbody;
}

let commentArray = [];
commentArray[0] = new Comments('Enrique L.', 'All the way live');
commentArray[1] = new Comments('Pat B.', 'Thats what Im talking about');


let blogArray = [
    'The Best Blog',
    'Lorem Ipsum Hiptip Wig big fig in the lip',
    'Nubila L.',
    38000,
    commentArray,
    false
];

let aBlog = new Blog('The Best Blog',
    'Lorem Ipsum Hiptip Wig big fig in the lip',
    'Nubila L.',
    38000,
    commentArray,
    false);

const myBlog = Blog.apply({}, blogArray);
console.log(blogArray);
console.log(aBlog);
console.log(myBlog);

const numbers = arrayFromRange(-10, 4);
console.log(numbers);
function arrayFromRange(min, max) {
    let myArray = [];
    let num = 0;
    for (num = min; num <= max; num++)
        myArray.push(num);
    return myArray;
}

const myNumbers = [1, 2, 3, 4];
console.log(myNumbers.includes(1));
console.log(includes(myNumbers, 5));
function includes(array, searchElement) {
    if (array.find(elem => elem === searchElement))
        return true
    else
        return false;
}


const anumbers = [1, 2, 3, 3, 4, 1, 1, 5];
const output = except(anumbers, [3, 1, 2]);
console.log(output);
function except(array, excluded) {
    const output = [...array];
    for (let j = 0; j <= excluded.length; j++) {
        while (output.includes(excluded[j])) {
            aIndex = output.indexOf(excluded[j]);
            output.splice(aIndex, 1);
        }
    }
    return output;
}

const output2 = except2(anumbers, [3, 1, 2]);
console.log(output2);

function except2(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

const bnumbers = [1, 2, 3, 4];
const newbnumbers = move(bnumbers, 2, 1);
console.log(newbnumbers);

function move(array, index, offset) {
    const position = offset + index;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    const outputa = [...array];
    newelement = outputa[index];
    outputa.splice(index, 1);
    outputa.splice(index + offset, 0, newelement);

    return outputa;
}

const cnumbers = [1, 2, 3, 4, 1, 1];
const count = countOccurrences(cnumbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
    let count = 0;
    for (let element of array)
        if (element === searchElement)
            count++;
    return count;
}

const dnumbers = [1, 2, 3, 5, 4];
const max = getMax(dnumbers);
console.log(max);

function getMax(array) {

    if (array.length === 0) return undefined;
    // const output = Math.max(...array);

    const output = array.reduce((accumulator, currentValue) => {
        if (currentValue > accumulator) return currentValue;
        else return accumulator
    }, 0);
    return output;

    //otherwise
    // return array.reduce((a,b) => (a > b) ? a : b );

}

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// All movies in 2018 with rating > 4
// Sort by rating in desc order
// Pick their title

/*
moviesFiltered = arrayFilter(movies, 2018, 4);
for( let i of moviesFiltered)
    console.log(i.title);
function arrayFilter(movies, searchYear, minRating) {
    const output = movies.filter( movies => (movies.year === searchYear) && (movies.rating > minRating ));
    output.sort(function (a,b) {
        if(a.rating > b.rating) return -1;
        if(a.rating < b.rating) return 1;
        return 0;
    });
    return output;
}
*/
const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles);