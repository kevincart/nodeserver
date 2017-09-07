var request = require("request");
var server = require("../index.js");
var base_url = "http://localhost:5000/";
var maths = 4;

console.log("Now Testing...");

describe("Server Test Suite", function() {
  describe("Fake test", function() {
    it("does the math", function (){
        console.log("fake test log");
        expect(maths).toBe(4);
        done();
    });
  });
  describe("GET /", function() {
    it("returns status code 200", function(done){
      console.log("test 2 log");
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("returns index.html", function(done) {
      console.log("test 3 log");
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("K");
        server.closeServer();
        done();
      });
    });
  });
});
