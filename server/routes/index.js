import express from 'express';
import userRouter from './user.js';

const router = express.Router();



// Index route
router.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});

router.use('/api/user', userRouter);

// 404 route
router.get('*', (req, res) => {
    res.status(404).json(
        {
            message: 'Not found'
        }
    )
});


export default router;
