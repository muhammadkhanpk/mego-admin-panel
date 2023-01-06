import React from "react";
import GooglePayButton from "@google-pay/button-react";
function RTQ() {
  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: "100.00",
          currencyCode: "USD",
          countryCode: "US",
        },
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log("load payment data", paymentRequest);
      }}
    />
  );
}

export default RTQ;

// import React, { useState, useEffect } from "react";
// // import "./styles.css";

// const { googlePayClient } = window;

// const baseCardPaymentMethod = {
//   type: "CARD",
//   parameters: {
//     allowedCardNetworks: ["VISA", "MASTERCARD"],
//     allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//   },
// };

// const googlePayBaseConfiguration = {
//   apiVersion: 2,
//   apiVersionMinor: 0,
//   allowedPaymentMethods: [baseCardPaymentMethod],
// };

// export default function RTQ() {
//   const [gPayBtn, setGPayBtn] = useState(null);

//   function createAndAddButton() {
//     if (googlePayClient) {
//       const googlePayButton = googlePayClient.createButton({
//         buttonColor: "default",

//         buttonType: "long",

//         onClick: processPayment,
//       });

//       setGPayBtn(googlePayButton);
//     }
//   }

//   function processPayment() {
//     console.log("test");
//     const tokenizationSpecification = {
//       type: "PAYMENT_GATEWAY",
//       parameters: {
//         gateway: "stripe",
//         "stripe:version": "v3",
//         "stripe:publishableKey": "pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA",
//       },
//     };

//     const cardPaymentMethod = {
//       type: "CARD",
//       tokenizationSpecification: tokenizationSpecification,
//       parameters: {
//         allowedCardNetworks: ["VISA", "MASTERCARD"],
//         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
//         billingAddressRequired: true,
//         billingAddressParameters: {
//           format: "FULL",
//           phoneNumberRequired: true,
//         },
//       },
//     };

//     const transactionInfo = {
//       totalPriceStatus: "FINAL",
//       totalPrice: "123.45",
//       currencyCode: "USD",
//     };

//     const merchantInfo = {
//       // merchantId: '01234567890123456789', Only in PRODUCTION
//       merchantName: "Example Merchant Name",
//     };

//     const paymentDataRequest = {
//       ...googlePayBaseConfiguration,
//       ...{
//         allowedPaymentMethods: [cardPaymentMethod],
//         transactionInfo,
//         merchantInfo,
//       },
//     };

//     googlePayClient
//       .loadPaymentData(paymentDataRequest)
//       .then(function (paymentData) {
//         console.log(paymentData);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }

//   useEffect(() => {
//     googlePayClient
//       .isReadyToPay(googlePayBaseConfiguration)
//       .then(function (response) {
//         if (response.result) {
//           createAndAddButton();
//         } else {
//           alert("Unable to pay using Google Pay");
//         }
//       })
//       .catch(function (err) {
//         console.error("Error determining readiness to use Google Pay: ", err);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Click the Pay button</h1>
//       <div
//         onClick={processPayment}
//         dangerouslySetInnerHTML={{ __html: gPayBtn && gPayBtn.innerHTML }}
//       />
//     </div>
//   );
// }
