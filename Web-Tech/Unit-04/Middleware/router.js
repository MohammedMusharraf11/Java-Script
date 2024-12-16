const express = require('express');
const app = express();
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
    console.log('Middleware for /users route');
    next();
});

router.get('/', (req, res) => {
    res.send('User list');
});

router.get('/:id', (req, res) => {
    res.send(`User details for ID: ${req.params.id}`);
});

app.use('/users', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
