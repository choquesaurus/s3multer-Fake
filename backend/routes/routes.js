import {Router} from 'express';
import path from 'path';
const router=Router();
router.post('/file',(req,res,next)=>{
    return res.send({ruta:{upload:path.join(__dirname,`../uploads/images/${req.file.originalname}`)}})
    //return  resp.send(Object.assign({path:req.file},{upload:path.join(__dirname,'../uploads/images')}))
});
router.get('/go',(req,res)=>{return  res.send({message:'Goin'})})
export default router;