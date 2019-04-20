
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const QuoteSchema = new Schema({
  file: {
    type: String,
    required: "File Path required"
  },
  quote: {
    type: String,
    required: "Quote is required."
  },
  style: {
    type: String,
    
  }
});

export default QuoteSchema;