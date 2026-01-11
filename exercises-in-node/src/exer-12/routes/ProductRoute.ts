import express,{ Request, Response } from "express";

const router = express.Router();

interface Query{
    page?: string;
    limit?: string;
}

router.get('/product',(req:Request<{}, {}, {}, Query>, res:Response)=>{
    const {page, limit} = req.query;

    res.status(200).json({
        message: `Products requested on page ${page} with limit ${limit}`
    });
});

router.get('/:id',(req:Request<{id:string}>, res)=>{
    const {id} = req.params;
    res.status(200).json({
        message: `Product with ID ${id} requested`
    });
});

interface params{
    id: string;
}
interface body{
    name?: string;
    price?: number;
}

router.put('/:id',(req:Request<params, {}, body>, res:Response)=>{
    const {id} = req.params;
    const {name, price} = req.body;
    res.status(200).json({
        message: `Product with ID ${id} updated with name: ${name} and price: ${price}`
    });
});

export default router;