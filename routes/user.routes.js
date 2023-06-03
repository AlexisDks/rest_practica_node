const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { userGet, userPost, userPut, userDelete, userPatch } = require('../controllers/user.controller')
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db_validators')

const router = Router()

router.get('/', userGet)

router.post(
    '/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('correo', 'El correo no es valido').isEmail().custom(emailExiste),
        check('password', 'El password debe de ser mas de 6 letras').isLength({ min: 6 }),
        check('rol').custom(esRoleValido),
        validarCampos
    ],
    userPost
)

router.put(
    '/:id',
    [
        check('id', 'No es un ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        check('rol').custom(esRoleValido),
        validarCampos
    ],
    userPut
)

router.delete(
    '/:id',
    [check('id', 'No es un ID valido').isMongoId(), check('id').custom(existeUsuarioPorId), validarCampos],
    userDelete
)

router.patch('/', userPatch)

module.exports = router
