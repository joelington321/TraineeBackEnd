const express = require('express');

const router = express.Router();

const taskController = require('./controllers/taskController');
const quadroController = require('./controllers/quadroController');
const userController = require('./controllers/userController');


//===============ROTAS DO TASK==================
router.post('/task', taskController.create);
router.get('/task', taskController.index);
router.delete('/task/:id', taskController.destroy);
router.put('/task/:id', taskController.update);
router.get('/task/:id', taskController.show);


//===============ROTAS DO QUADRO==================
router.post('/quadro', quadroController.create);
router.get('/quadro', quadroController.index);
router.delete('/quadro/:id', quadroController.destroy);
router.put('/quadro/:id', quadroController.update);
router.get('/quadro/:id', quadroController.show);
router.get('/quadrolist/:idQuadro', quadroController.showTasks);

//===============ROTAS DO LOGIN==================
router.post('/user', userController.create);
router.get('/user', userController.index);
router.delete('/user/:id', userController.destroy);
router.get('/user/:id', userController.show);
router.put('/user/:id', userController.update);

module.exports = router;