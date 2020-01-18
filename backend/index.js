import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/routes';
import multer from 'multer';
import path from 'path';
import '@babel/polyfill';
const storageMulterDiskConfiguration=multer.diskStorage({
    destination:path.join(__dirname,'uploads/images'),
    filename:(req,file,done)=>{
        done(null,file.originalname);//paso el  nombre original del archivo con su extencion
    }
})
class Application{
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    config(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(multer({
            storage:storageMulterDiskConfiguration,
            dest:path.join(__dirname,'uploads/images'),
            limits:2000000
        }).single('archivo'))
    }
    routes(){
        this.app.use(routes);
    }
    start(){
        this.app.listen(5556||process.env.PORT,()=>{
            console.log(`running in port 5556`)
        })
    }
}
new Application().start()
