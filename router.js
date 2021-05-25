const router = require('express').Router();

const pasajeroRouter = require('./routers/pasajero.Router');
const navesRourter = require('./routers/nave.Router');

router.use('/pasajeros', pasajeroRouter);
router.use('/naves', navesRourter);



module.exports = router;