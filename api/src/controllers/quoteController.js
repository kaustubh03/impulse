
import mongoose from 'mongoose'
import quoteSchema from '../models/quoteModel'

const Quote = mongoose.model("Quote", quoteSchema);
export function countQuotes(string,callback){
  let total = null;
  Quote.count({}, function(err, count) {
    if(err){
      // console.log(err);
      callback(null);
    }
    callback(count);
  });
  
}
export function getQuotes(req, res) {
  countQuotes({}, function(count) {
    var random = Math.floor(Math.random() * count)

    // Again query all users but only fetch one offset by our random #
    Quote.findOne()
      .skip(random)
      .exec(function(err, quotes) {
        if (err) {
          res.json(err);
        }
        res.json(quotes);
      });
  });
}
export function addQuote(req, res) {
    let insertData = req.body;
    // console.log(insertData);
    
    Quote.create(insertData, (error, quotes) => {
    if (error) {
      let resultant = {
        message: "Error",
        status: "failed",
        error:error
      };      
      res.json(resultant);
      
    }
    let resultant = {
      message: "Added Successfully",
      status: "success"
    };
    res.json(resultant);
  });

}

