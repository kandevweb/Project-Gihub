import { Router } from 'express';
import CastValidator from '../../middleware/validators/CastValidator';
import castController from '../../controllers/castController';
import Middleware from '../../middleware';
import { tryCatch } from '../../utils/response';

const router = Router();

router.get('/list', 
Middleware.handleValidatorError,
Middleware.verifyToken,
tryCatch(castController.getAllCasts));

router.post(
  '/add',
  CastValidator.checkAddCast(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(castController.addNewCast)
);

router.put(
  '/update/:castId',
  CastValidator.checkAddCast(),
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(castController.updateCast)
);

router.delete(
  '/delete/:castId',
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(castController.deleteCast)
);

router.get(
  '/detail/:castId',
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(castController.castDetail)
)

export default router;
