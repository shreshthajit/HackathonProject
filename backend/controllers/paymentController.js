const SSLCommerzPayment = require('sslcommerz-lts');


  module.exports.sslRequest = async (req, res, next) => {
    try {
        const data = {
            // INIT INFORMATION
            tran_id: 'REF123',
            currency: 'BDT',
      
            // URL
            success_url: "http://localhost:5000/api/payment/payment-success",
            fail_url: "http://localhost:5000/api/payment/payment-fail",
            cancel_url: "http://localhost:5000/api/payment/payment-cancel",
      
            // SHIPMENT INFORMATION
            shipping_method: 'No',
      
            // PRODUCT INFORMATION
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
      
            total_amount: 100,
      
            // CUSTOMER INFORMATION
            cus_name: 'Customer Name',
            cus_email: 'cust@yahoo.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
      
            // OPTIONAL PARAMETERS
            value_a: 'ref001_A',
            value_b: 'ref002_B',
            value_c: 'ref003_C',
            value_d: 'ref004_D',
      
            // CARD PARAMETERS(mastercard,visacard,amexcard)
            multi_card_name: 'mastercard',
          };
      
          const sslcommerz = new SSLCommerzPayment("rajit5ff856c334e58","rajit5ff856c334e58@ssl",false);
      
          sslcommerz.init(data).then((data) => {
            if (data?.GatewayPageURL && data?.GatewayPageURL !== '') {
            //   return res.status(200).redirect(data?.GatewayPageURL);//for testing purpose
            return res.status(200).json({url:data?.GatewayPageURL});//it will work in the frontend
            } else {
              return res.status(400).json({
                message: 'Initiating an SSL payment session failed.',
              });
            }
          });
    } catch (ex) {
      next(ex);
    }
  };

  module.exports.paymentSuccess= async (req, res, next) => {
    try {
      
      return res.status(200).redirect('http://localhost:3000');
    } catch (ex) {
      next(ex);
    }
  };

  module.exports.paymentFail = async (req, res, next) => {
    try {
        return res.status(400).json({
            data: req.body,
            message: 'Payment Failed',
          });
    } catch (ex) {
      next(ex);
    }
  };

  module.exports.paymentCancel = async (req, res, next) => {
    try {
        return res.status(400).json({
            data: req.body,
            message: 'Payment Cancelled',
          });
    } catch (ex) {
      next(ex);
    }
  };














 