import * as express from 'express';
import {default as auth} from '../lib/basicauth';
var router = express.Router();
var Client = require('../models/client');

/* /api/price */
router.use(auth);
router.get('/', (req, res) => {
    res.json({success: true , msg: 'Successful get client'});
});
router.post('/',(req, res)=>{
 let price = new Client(req.body);
 price.save((err)=>{
 if (err) {
         res.json({success: false , msg: 'Error '});
      } else {
         res.json({success: true , msg: 'Successful created price'});
      }
 });
});
export default router;