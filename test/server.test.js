const server = require('../app');
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const chaiHttp = require('chai-http');
const { get } = require('../api/routes/usersApi');
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

describe('POST NEW username',()=>{
    it('POST NEW response should be a an object with username and _id properties and status 200',(done)=>{
        let newUserPost = {
            username: 'id' + (new Date()).getTime()
        }
        chai.request(server)
            .post('/api/exercise/new-user')
            .send(newUserPost)
            .end((err,res)=>{
                expect(res).to.have.status(200);
                expect(res).to.be.an('object');
                expect(res.body).that.includes.keys('_id','username');
                expect(res.body.username).to.equals(newUserPost.username);
                done();
            });
    });
});


// describe('POST NEW username which already exists',()=>{
//     it('POST NEW response is Username already taken',(done)=>{
//         let newuserpost = {
//             username: 'asd45345saf66aadf7878zzz0'
//         }
//         chai.request(server)
//             .post('/api/exercise/new-user')
//             .send(newuserpost)
//             .end((err,res)=>{
//                 expect(res).to.have.status(400);
//                 expect(res).to.be.an('object');
//                 expect(res.body).that.includes.keys('error');
//                 expect(res.body.error).to.equals("Username already taken");
//                 done();
//             });
//     });
// });




// describe('GET all users',()=>{
//     it('GET request to api/exercise/users to get an array of all users. Each element in array is an obect containing a users username and _id',
//     (done)=>{
//         chai.request(server)
//             .get('/api/exercise/users')
//             .end((err,res)=>{
//                 expect(res).to.have.status(200);
//                 done();
//             });
//     })
// });


// {"_id":"5ffd82a8c5b5cf05d0805d5d","username":"kbzzz","date":"Tue Jan 26 2021","duration":60,"description":"ffffff"}
// {"_id":"60301e42e2f17305e4681ab2","username":"tizzy1234","date":"Fri Feb 19 2021","duration":60,"description":"testing"}

// describe('POST /api/exercise/add', ()=>{
//     it('POST /api/exercise/add with form data userId=_id, description, duration and optionally date', (done)=>{
//     let newExercise = {
//         userId:'5ffd82a8c5b5cf05d0805d5d',
//         description:'Math Exam',
//         duration:'60',
//         date: ''
//     }
//     chai.request(server)
//         .post('/api/exercise/add')
//         .send(newExercise)
//         .end((err,res)=>{
//             // console.log(res.body);
//             expect(res).to.have.status(200);
//             // expect(res).to.be.an('object');
//             // expect(res.body).that.includes.keys("_id","description","duration","date");
//             // expect(res.body._id).to.equals("60302b2525572038b674b402");
//             done();
//         });
//     });
// });




// https://stackoverflow.com/questions/58745945/mongoose-unique-field-error-message-handling

/*

https://github.com/academind/node-restful-api-tutorial/blob/05-add-mongodb-and-mongoose/api/routes/products.js
https://zellwk.com/blog/mongoose-subdocuments/
https://zellwk.com/blog/mongoose/
https://stackoverflow.com/questions/58745945/mongoose-unique-field-error-message-handling
https://zellwk.com/blog/mongoose-population/

*/



/* 
You can POST to /api/exercise/add with form data userId=_id, description, duration,
 and optionally date. If no date is supplied, the current date will be used. 
 The response returned will be the user object with the exercise fields added.


You can make a GET request to api/exercise/users to get an array of all users.
 Each element in the array is an object containing a user's username and _id.  


You should provide your own project, not the example URL.
: Deploy project on digigal ocean
https://www.google.com/search?q=deplying+your+nodejs+app+on+google+cloud&oq=deplying+your+nodejs+app+on+google+cloud&aqs=chrome..69i57j0i13i457j0i13l2j0i22i30j0i22i30i395l3.6037j1j7&sourceid=chrome&ie=UTF-8
FInish this at the end. 

 You can POST to /api/exercise/new-user with form data username to create a new user.
 The returned response will be an object with username and _id properties.
 DONE
 Refactoring in progress to en casuplate processes. 

 You can make a GET request to api/exercise/users to get an array of all users.
 Each element in the array is an object containing a user's username and _id.
 DONE.(Test again)

You can POST to /api/exercise/add with form data userId=_id, description, duration,
 and optionally date. If no date is supplied, the current date will be used. 
 The response returned will be the user object with the exercise fields added.
DONE: IN PROGRESS

You can make a GET request to /api/exercise/log with a parameter of userId=_id to 
retrieve a full exercise log of any user. The returned response will be the user
 object with a log array of all the exercises added. Each log item has the description, duration, and date properties.
DONE: NO

A request to a user's log (/api/exercise/log) returns an object with a count 
property representing the number of exercises returned.
DONE: NO


 You can add from, to and limit parameters to a /api/exercise/log request to retrieve
 part of the log of any user. from and to are dates in yyyy-mm-dd format. 
 limit is an integer of how many logs to send back.
 DONE: NO


 TESTING: 
 Testing create new user in progress

 Testing for GET all users:
 DONE: IN PROGRESS
*/


