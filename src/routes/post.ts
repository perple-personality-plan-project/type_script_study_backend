import {Router,Request, Response } from 'express';
import Posts from '../models/posts'

const router = Router();

router.post('/',async (req:Request, res:Response) => {
    try {
        const {title,content} = req.body;
        await Posts.create({title, content});

        res.json({message: "등록되었습니다."})
    }catch (error){
        console.log(error);
    }
});

router.get('/',async (req:Request, res:Response) => {
    try {
        const result = await Posts.findAll({});
        res.json({data:result});

    }catch (error){
        console.log(error);
    }
});

router.delete('/:postId', async (req:Request, res:Response) => {
    try {
        const {postId} = req.params;
        await Posts.destroy({
            where:{postId}
        });
        res.json({data:"삭제되었습니다."});
    }catch (error){
        console.log(error);
    }
});

router.put('/:postId', async (req:Request, res:Response) => {
    try {
        const {postId} = req.params;
        const {title,content} = req.body;

        await Posts.update(
            { title,content },
            {
                where: {postId},
            }
        )
        res.json({data:"수정되었습니다."});
    }catch (error){
        console.log(error);
    }
});
export default router;
