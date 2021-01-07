import {Router} from 'express';

const router = Router();

// request all whiskeys 
router.get("/whiskeys" , (req,res) => {
    res.json(["happy","hippo"]);
});

export default router;