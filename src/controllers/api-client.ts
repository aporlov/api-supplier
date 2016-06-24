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
 let client = new Client(req.body);
 Client.findOneAndUpdate( {supplier_inn: client.supplier_inn, cl_id: client.cl_id }, client, {upsert: true}, (err)=>{
 if (err) {
         res.json({success: false , msg: err.toString()});
      } else {
         res.json({success: true , msg: 'Successful created price'});
      }
 });
});
export default router;