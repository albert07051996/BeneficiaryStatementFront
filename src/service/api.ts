import axios from 'axios';
import { APIID } from '../constants'
import { LOGIN_PAGE } from '../router/paths';

function CallApi(config: any) {  
  let configWithloginToken = { ...config };
  let token = localStorage.getItem('accesstoken');
  const headers = {
    Authorization: 
    'Bearer ' + token,
    "Access-Control-Allow-Origin": "*"
  };

  configWithloginToken.headers = headers;
  console.log(configWithloginToken, 'headers')

  return axios
    .request(configWithloginToken)
    .then(response => {
      if (response.headers.accesstoken) {
        if (configWithloginToken.url !== `${APIID}/api/Account/confirmPasswordRecovery`
          && configWithloginToken.url !== `${APIID}/api/Account/confirmphoneNumberChange`
          && configWithloginToken.url !== `${APIID}/api/Account/confirmSignUp`
        ) {
                  localStorage.setItem('accesstoken', response.headers.accesstoken);
        }
      }   
      return response;
    })
    .then(({ data }) => data)
    .catch(error => {
      if (error.response?.status === 401) {
        console.log('222222222222', error)      
        localStorage.clear();
        window.location.reload();

        if (configWithloginToken.url !== `${APIID}/api/Account/signIn`) {
          window.history.pushState(
            "",
            "New Page Title",
            `${LOGIN_PAGE}`
          );
        }
      }    
      return Promise.reject(error);
    });
}

export default CallApi;
