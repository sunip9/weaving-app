const mongoose = require('mongoose');

const programSchema = mongoose.Schema(
    {    
          buyername: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
          },
          designname:{
            type: String,           
            required: false,           
          },
          type:{
            type: String,           
            required: false,           
          },
          cminch:{
            type: String,           
            required: false,           
          },
          readcount:{
            type: String,           
            required: false,           
          },
          ppi:{
            type: String,           
            required: false,           
          },
          totalend:{
            type: String,           
            required: false,           
          },
          totalpick:{
            type: String,           
            required: false,           
          },
          weftyarn:{
            type: String,           
            required: false,           
          },
          fancyyarn:{
            type: String,           
            required: false,           
          },
          fancycam:{
            type: String,           
            required: false,           
          },
          campile:{
            type: String,           
            required: false,           
          },
          piletopile:{
            type: String,           
            required: false,           
          },
          cuttingborder:{
            type: String,           
            required: false,           
          },
          hemyarn:{
            type: String,           
            required: false,           
          },
          pieceweight:{
            type: String,           
            required: false,           
          },
          onthetable:{
            type: String,           
            required: false,           
          },
          pileratio:{
            type: String,           
            required: false,           
          },
          loomno:{
            type: String,           
            required: false,           
          },
          shed:{
            type: String,           
            required: false,           
          },
          // po: {
          //   type: String,           
          //   required: false,           
          // },
          gsm: {
            type: String,
            trim: true,
            required: false,
            maxlength: 32,
          }, 
          image: {
            type: String,
            required: false,
          },
          size: {
            type: String,
            required: false
          },       
          status: {
            type: Boolean,
            required: false,
          },         
          pileyarn: {
            type: String,
            required: false
          },
          design: {
            type: String,
            required: false,
            default: 000
          },
          groundyarn: {
            type: String,
            required: false
          },
          
          sl: {
            type: Number,
            required: false
          },
          date: {
            type: Date,
            required: false
          },
          cuttingborderplain: {
            type: String,
            required: false
          },
          cuttingbordertotal: {
            type: String,
            required: false
          },
          weftyarnfancy1:{
            type: String,
            required: false
          },
          weftyarnfancyhem:{
            type: String,
            required: false
          },
          note:{
            type: String,
            required: false
          }
        },
        {
            timestamps: true
        } 
)  
            

  
  
  
  module.exports= mongoose.model('Program', programSchema);