// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// Start with an array that hold 10 object to coincide with the 10 questions 
//each object will have a key value pair of
//name: (a string of the person name)
// photo (with a link)
// scores array (10 strings to coincide with the answers options)
// ===============================================================================


var friends = [
  {
      name: "Julia Roberts",
      photo: "https://m.media-amazon.com/images/M/MV5BMTQzNjU3MDczN15BMl5BanBnXkFtZTYwNzY2Njc4._V1_UX214_CR0,0,214,317_AL_.jpg",
      scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]

  },
  {
    name: "Tom Hanks",
    photo: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg",
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  }

];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
