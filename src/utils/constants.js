const Base_url =
    'http://ec2-18-216-62-226.us-east-2.compute.amazonaws.com:5000';
const ProviderAuthPath = '/api/auth/';
const clientAuthPath = '/api/auth/';
const userPath = '/api/user/';
const customerPath='/api/customer/';
const providerPath='/api/user/provider/';

export const constants = {
  ProviderLogin: Base_url + ProviderAuthPath + 'login',
  ProviderSignUp: Base_url + ProviderAuthPath + 'signup',
  ProviderSocialLogin: Base_url + ProviderAuthPath + 'socialLogin',
  ProviderCurrentJobs: Base_url + userPath + 'currentJobs',
  ProviderCompletedJobs: Base_url + userPath + 'completedJobs',
  ClientLogin: Base_url + clientAuthPath + 'customerLogin',
  ClientSignUp: Base_url + clientAuthPath + 'customerSignup',
  ClientSocialLogin: Base_url + clientAuthPath + 'customerSocialLogin',
  ForgetPassword: Base_url + ProviderAuthPath + 'forgot',
  ResetPassword: Base_url + ProviderAuthPath + 'reset',
  DirrectDeposit:Base_url+userPath+"deposit",
  EnableNotification: Base_url + userPath + 'enableNotification',
  vehicleSize:Base_url+userPath+"vehicleSize",
  CustomerCompletedJobs:Base_url+customerPath+"completedJobs",
  CustomerCurrentJobs:Base_url+customerPath+"currentJobs",
  Aboutme:Base_url+providerPath+"about_me",
  Promote:Base_url+providerPath+"parmote_code",
  ServiceArea:Base_url+userPath+"workArea"

};
