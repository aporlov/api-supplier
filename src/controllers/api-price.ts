import * as express from 'express';
import {default as auth} from '../lib/basicauth';
var router = express.Router();
var Price = require('../models/price');

/* /api/price */
router.use(auth);
router.get('/', (req, res) => {
   res.json({success: true , msg: 'Successful get price'});
});
router.post('/',(req, res)=>{
 let price = new Price(req.body);
 Price.findOneAndUpdate( {code:price.code, supplier_inn:price.supplier_inn, price_name:price.price_name},price,{upsert:true},(err)=>{
 if (err) {
         res.json({success: false , msg: err.toString()});
      } else {
         res.json({success: true , msg: 'Successful created price'});
      } 
 });
});
/*POST for creating account. For test only 
router.post('/signup', (req, res) => {
  if (!req.body.name || !req.body.password) {
    res.json({success: false , msg: 'Please pass name password'});
  } else {
    let newUser = new User({
      name: req.body.name,
      password: req.body.password
    });
    newUser.save( (err)=>{
      if (err) {
         res.json({success: false , msg: 'Username already exists'});
      } else {
         res.json({success: true , msg: 'Successful created user'});
      }
    })

  }
}); */
export default router;