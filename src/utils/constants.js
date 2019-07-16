const Base_url =
  'http://ec2-18-216-62-226.us-east-2.compute.amazonaws.com:5000';
const ProviderAuthPath = '/api/auth/';
const clientAuthPath = '/api/auth/';
const userPath = '/api/user/';

export const constants = {
  ProviderLogin: Base_url + ProviderAuthPath + 'login',
  ProviderSignUp: Base_url + ProviderAuthPath + 'signup',
  ProviderSocialLogin: Base_url + ProviderAuthPath + 'socialLogin',
  ProviderCurretJobs: Base_url + userPath + 'currentJobs',
  ProviderCompletedJobs: Base_url + userPath + 'completedJobs',
  ClientLogin: Base_url + clientAuthPath + 'customerLogin',
  ClientSignUp: Base_url + clientAuthPath + 'customerSignup',
  ClientSocialLogin: Base_url + clientAuthPath + 'customerSocialLogin',
  ForgetPassword: Base_url + ProviderAuthPath + 'forgot',
  ResetPassword: Base_url + ProviderAuthPath + 'reset',
  DirrectDeposit:Base_url+userPath+"deposit",
  EnableNotification: Base_url + userPath + 'enableNotification',
  vehicleSize:Base_url+userPath+"vehicleSize"
};
