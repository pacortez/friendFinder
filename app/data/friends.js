// 5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

// ```json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }
// ```


var friendsArray = [
    {
        name: "Pau",
        photo: "image",
        scores: [
            1, 
            2, 
            3, 
            4, 
            5, 
            1, 
            2, 
            3, 
            4, 
            5],
        totalScore: 30
    },
    {
        name: "twos",
        photo: "image",
        scores: [
            2, 
            2, 
            2, 
            2, 
            2, 
            2, 
            2, 
            2, 
            2, 
            2],
    },
    {
        name: "threes",
        photo: "image",
        scores: [
            3, 
            3, 
            3, 
            3, 
            3, 
            3, 
            3, 
            3, 
            3, 
            3],
    },
];


module.exports = friendsArray;


    