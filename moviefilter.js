// by Nubila Levon

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

const arrowmovies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2019, rating: 4.5 },
    { title: 'e', year: 2019, rating: 3.7 },
    { title: 'f', year: 2019, rating: 4.1 },
    { title: 'g', year: 2019, rating: 3.5 },
    { title: 'h', year: 2019, rating: 4.7 },
    { title: 'i', year: 2019, rating: 5.0 },
];

// All movies in 2018 with rating > 4
function showMovies(array) {
    htmlString = '<tr><th>Title</th><th>Year</th><th>Rating</th></tr>';
    for (let i of array)
        htmlString = htmlString + '<tr><td>' + i.title + '</td><td>' + i.year + '</td><td>' + i.rating + '</td></tr>';
    htmlString = htmlString + '';
    return htmlString;
}
moviesFiltered = movies.filter(function (movies) {
    return (movies.year === 2018)
        && (movies.rating > 4);
});



//-----------------------------------------



// Filter movies using the arrow function

// All movies in arrowmovies
function showArrowMovies(array) {
    htmlString = '<tr><th>Title</th><th>Year</th><th>Rating</th></tr>';
    for (let i of array)
        htmlString = htmlString + '<tr><td>' + i.title + '</td><td>' + i.year + '</td><td>' + i.rating + '</td></tr>';
    htmlString = htmlString + '';
    return htmlString;
}
arrowmoviesFiltered = arrowmovies.filter(arrowmovies => (arrowmovies.year === document.getElementById('yearSelect')) && (arrowmovies.rating >= document.getElementById('ratingSelect')));
alert(document.getElementById('yearSelect').innerText);

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

//document.getElementById("allmovielist").innerHTML = showMovies(movies);
// console.log(showMovies(movies));
var mybutton = document.createElement('button');
mybutton.onclick = function () {
    document.getElementById("allmovielist").innerHTML = showMovies(movies);
}
// console.log(showMovies(moviesFiltered));

mybutton.showMovies();
alert("Hi There");
