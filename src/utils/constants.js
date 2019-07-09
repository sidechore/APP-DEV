const Base_url = "http://ec2-18-216-62-226.us-east-2.compute.amazonaws.com:5000";
const ProviderAuthPath = "/api/auth/";
const clientAuthPath = "/api/auth/";


export const constants = {
    ProviderLogin : Base_url + ProviderAuthPath + "login",
    ProviderSignUp : Base_url + ProviderAuthPath + "signup",




    ClientLogin : Base_url + clientAuthPath + "customerLogin",
    ClientSignUp : Base_url + clientAuthPath + "customerSignup",

    SocialLogin : Base_url + clientAuthPath + "socialLogin",

};