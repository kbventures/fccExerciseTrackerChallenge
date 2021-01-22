const server = require('../app');
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

// describe('/', ()=>{
//     it('/ should return 200',(done)=>{
//         chai.request(server)
//         .get('/')
//         .end((err, res)=>{
        
//             expect(res).to.have.status(200);
//             done();
//         });
//     });
// });

describe('POST username',()=>{
    it('POST response should be a an object with username and _id properties and status 200',(done)=>{
        let newuserpost = {
            username: 'asdf123'
        }
        chai.request(server)
            .post('/api/exercise/new-user')
            .send(newuserpost)
            .end((err,res)=>{
                expect(res).to.have.status(200);
                expect(res).to.be.an('object');
                expect(res.body).that.includes.keys('_id','name');
                done();
            });
    });
});

describe('GET all users',()=>{
    it('GET request to api/exercise/users to get an array of all users. Each element in array is an obect containing a users username and _id',
    (done)=>{
        chai.request(server)
            .get('api/exercise/users')
            .end((err,res)=>{
                expect(res).to.have.status(200);
                expect(res).to.be.array();
                done();
            });
    })
});


// You can make a GET request to api/exercise/users to get an array of all users.
//  Each element in the array is an object containing a user's username and _id.  



// Receives
// { username: 'asdf' }
// Sends back
// {"_id":"600acfa64c5a1a5dcba714d2","name":"asdf","__v":0}

/* 
You should provide your own project, not the example URL.
: Deploy project on digigal ocean
https://www.google.com/search?q=deplying+your+nodejs+app+on+google+cloud&oq=deplying+your+nodejs+app+on+google+cloud&aqs=chrome..69i57j0i13i457j0i13l2j0i22i30j0i22i30i395l3.6037j1j7&sourceid=chrome&ie=UTF-8


You can POST to /api/exercise/new-user with form data username to create a new user.
 The returned response will be an object with username and _id properties.
 DONE

You can make a GET request to api/exercise/users to get an array of all users.
 Each element in the array is an object containing a user's username and _id.

You can POST to /api/exercise/add with form data userId=_id, description, duration,
 and optionally date. If no date is supplied, the current date will be used. 
 The response returned will be the user object with the exercise fields added.

You can make a GET request to /api/exercise/log with a parameter of userId=_id to 
retrieve a full exercise log of any user. The returned response will be the user
 object with a log array of all the exercises added. Each log item has the description, duration, and date properties.

A request to a user's log (/api/exercise/log) returns an object with a count 
property representing the number of exercises returned.

You can add from, to and limit parameters to a /api/exercise/log request to retrieve
 part of the log of any user. from and to are dates in yyyy-mm-dd format. 
 limit is an integer of how many logs to send back.


*/


