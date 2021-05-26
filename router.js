const router = require('express').Router();

const pasajeroRouter = require('./routers/pasajero.Router');
const navesRourter = require('./routers/nave.Router');
const loginRourter = require('./routers/login.Router');

router.use('/pasajeros', pasajeroRouter);
router.use('/naves', navesRourter);
router.use('/login', loginRourter);



module.exports = router;