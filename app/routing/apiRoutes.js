// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will 
// also be used to handle the compatibility logic.

var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
        
    });

    //req.body is a form.  When we go to a page with a form, that is how we capture all the input into that form. 
    app.post("/api/friends", function(req, res) {

        friends.push(req.body);
        console.log(req.body)

        currentFriendScore = 0;
        currentFriendArray = req.body.scores.map(Number);
        currentFriendScore = currentFriendArray.reduce(myFunc);
            function myFunc(total, num) {
                return (total + num);
            }
        // console.log("current F Name: " + req.body.name + "\ncurrent FScore " + currentFriendScore + "\n====")

        var absoluteDiff = 0;

        // friends.absoluteDiff = absoluteDiff;


        for (var i = 0; i < friends.length-1; i++) {
            // console.log('friends ',friends[i]);
            //this is taking the score array and turning it into numbers
            var friendScoreArray = friends[i].scores.map(Number);
            //this reduce function is adding all the numbers to give a total score
            friendScore = friendScoreArray.reduce(myFunc);
                function myFunc(total, num) {
                    return (total + num);
                }
            console.log("friend name: " + friends[i].name + "\nfriend score: " + friendScore );

            absoluteDiff = Math.abs(friendScore - currentFriendScore)
            // console.log("absolute Diff" + absoulteDiff + "\n========");
            
            friends[i].absoluteDiff = absoluteDiff

            console.log("absoulte diff: " + absoluteDiff)
            console.log("abs diff i: " + friends[i].absoluteDiff + "\n========");
        };

        var lowestDiff = 50;
        var thisFriendsDiff;
        var currentFriend;

        for (var i = 0; i <friends.length-1; i++) {
            
            thisFriendsDiff = friends[i].absoluteDiff;
            console.log("this friend diff: " + friends[i].absoluteDiff);
            if (thisFriendsDiff < lowestDiff) {
                lowestDiff = thisFriendsDiff;
                currentFriend = friends[i];
                
            }

        

        }
        console.log("best score match: " + lowestDiff)
        console.log(currentFriend)

        res.json(currentFriend)


    });


};






