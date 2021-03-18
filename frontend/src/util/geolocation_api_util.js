// import axios from 'axios';

export const getGeoLocationFromBrowser = () => {

  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            if (result.state === "granted") {
              console.log(result.state);
              //If granted then you can directly call your function here
              navigator.geolocation.getCurrentPosition(geolocationData => {
                resolve(geolocationData);
              });
            } else if (result.state === "prompt") {
            //   navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "denied") {
              //If denied then you have to show instructions to enable location
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
      } else {
        alert("Sorry Not available!");
      }
  });

  
};

