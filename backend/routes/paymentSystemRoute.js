const { sslRequest,paymentSuccess,paymentFail,paymentCancel} =require('../controllers/paymentController');

const paymentRouter = require("express").Router();

paymentRouter.post('/ssl-request',sslRequest);
paymentRouter.post('/payment-success',paymentSuccess);
paymentRouter.post('/payment-fail',paymentFail);
paymentRouter.post('/payment-cancel',paymentCancel);





module.exports = paymentRouter;
