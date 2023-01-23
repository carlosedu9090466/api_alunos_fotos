import { Router } from 'express';
// importando do home controller
import userController from '../controllers/UserController';

// importando o middlewares
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir num sistema real
// router.get('/', userController.index);
// recebendo um parametro
// router.get('/:id', userController.show);

// criando o user - create ou store
router.post('/', userController.store);
// update
router.put('/', loginRequired, userController.update);
// delete
router.delete('/:id', loginRequired, userController.delete);
export default router;

/*
cada controller - 5 métodos
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH OU PUT
*/
