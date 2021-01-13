const server = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('/', ()=>{
    it('/ should return 200',(done)=>{
        chai.request(server)
        .get('/')
        .end((err, res)=>{
            expect(res).to.have.status(201);
            done();
        });
    });
});


