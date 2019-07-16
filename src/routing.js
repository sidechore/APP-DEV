import React from "react";
import { StyleSheet, Image } from "react-native";
import colors from "./themes/colors";
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";
import {
    SelectScreen,
    SignInScreen,
    SignUpScreen,
    ForgotPassword,
    ServiceProviderSignUp,
    InitialScreen,
    SignInProvider,
    ResetPassword,
    PhoneNumber,
    VerifyPhoneNo,
    EnableNotfi,
    SelectLocation,
    StayUpToDate
} from "./containers";
import JobSearch from "./containers/Customer/Home";
import AdditionalJobDetails from "./containers/Customer/Home/AdditionalJobDetails";
import Tasker from "./containers/Customer/Tasker";
import Account from "./containers/Customer/Profile/Account";
import Profile from "./containers/Customer/Profile/index.js";
import ChangePassword from "./containers/Customer/Profile/ChangePassword/index.js";
import UpdatePayment from "./containers/Customer/Profile/UpdatePayment/index.js";
import Rewards from "./containers/Customer/Profile/UpdatePayment/Rewards.js";
import Payment from "./containers/Customer/Profile/UpdatePayment/Payment.js";
import Promotions from "./containers/Customer/Profile/Promotions/index.js";
import Notifications from "./containers/Customer/Profile/Notifications/index.js";
import Help from "./containers/Customer/Profile/Help/index.js";
import TaskerProfile from "./containers/Customer/Tasker/TaskerProfile/index.js";
import PaymentUpdate from "./containers/Customer/Tasker/PaymentUpdate/index.js";
import Jobs from "./containers/Customer/Jobs/index.js";
import Current from "./containers/Customer/Jobs/Current/index.js";
import JobDetails from "./containers/Customer/Jobs/JobDetails/index.js";
import Review from "./containers/Customer/Jobs/Reviews.js";
import Contact from "./containers/Customer/Jobs/Contact.js";
import ProviderHome from "./containers/Provider/Home/index.js";
import ProProfile from "./containers/Provider/Profile/index.js";
import ProAbout from "./containers/Provider/Profile/AboutMe/index.js";
import ServiceArea from "./containers/Provider/Profile/ServiceArea/index.js";
import DirectDeposit from "./containers/Provider/Profile/DirectDeposit/index.js";
import Vehicles from "./containers/Provider/Profile/Vehicles/index.js";
import Promote from "./containers/Provider/Profile/Promote/index.js";
import Support from "./containers/Provider/Profile/Support/index.js";
import ProJobs from "./containers/Provider/MyJobs/index.js";
import ProJobsDetails from "./containers/Provider/MyJobs/ProJobDetails";
import ProJobsDetailsInvoice from "./containers/Provider/MyJobs/ProJobsDetailsInvoice";
import ProContact from "./containers/Provider/MyJobs/ProContact";
import TimeSlot from "./containers/Provider/Availability/TimeSlot";
import ScheduledJobDetails from "./containers/Provider/Availability/ScheduledJobDetails";
import Performance from "./containers/Provider/Performance/index.js";
import ServicesAndRates from "./containers/Provider/Performance/ServicesAndRates";
import ServicesAndRate2 from "./containers/Provider/Performance/ServicesAndRate2";
import HomeJobs from "./containers/Provider/Home/HomeJobs";
import Tip from "./containers/Customer/Jobs/Tip.js";
import PerformanceSummary from "./containers/Provider/Performance/performanceSummary";
import Invoice from "./containers/Provider/Performance/Invoice.js";
import Reviews from "./containers/Provider/Performance/Reviews.js";
import Receipt from "./containers/Customer/Jobs/JobDetails/Receipt";
import SubmitInvoice from "./containers/Provider/MyJobs/SubmitInvoice.js";

const TabNavigator = createBottomTabNavigator(
    {
        JobSearch: {
            screen: JobSearch,
            navigationOptions: {
                tabBarLabel: "Home"
            }
        },

        Jobs: {
            screen: Jobs,
            navigationOptions: {
                tabBarLabel: "Jobs"
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff"
            },
            headerTintColor: "#fff"
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: "Profile"
            }
        }
    },
    {
        initialRouteName: "JobSearch",
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;

                if (routeName === "JobSearch") {
                    if (focused) {
                        return (
                            <Image
                                source={require("./assets/images/Home.png")}
                                style={styles.icon}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require("./assets/images/HomeG.png")}
                                style={styles.icon}
                            />
                        );
                    }
                } else if (routeName === "Jobs") {
                    if (focused) {
                        return (
                            <Image
                                source={require("./assets/images/Job.png")}
                                style={styles.icon}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require("./assets/images/JobG.png")}
                                style={styles.icon}
                            />
                        );
                    }
                } else if (routeName === "Profile") {
                    if (focused) {
                        return (
                            <Image
                                source={require("./assets/images/prProfle.png")}
                                style={styles.icon}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require("./assets/images/pgprofile.png")}
                                style={styles.icon}
                            />
                        );
                    }
                }
            }
        }),
        tabBarOptions: {
            activeTintColor: colors.bottomTabTintColor
        }
    }
);

const ProviderTab = createBottomTabNavigator(
    {
        Home: {
            screen: ProviderHome,
            navigationOptions: {
                tabBarLabel: "Home"
            }
        },
        Jobs: {
            screen: ProJobs,
            navigationOptions: {
                tabBarLabel: "My Jobs"
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff"
            },
            headerTintColor: "#fff"
        },
        Availability: {
            screen: TimeSlot,
            navigationOptions: {
                tabBarLabel: "Availability"
            }
        },
        Performance: {
            screen: Performance,
            navigationOptions: {
                tabBarLabel: "Performance"
            }
        },
        Profile: {
            screen: ProProfile,
            navigationOptions: {
                tabBarLabel: "Profile"
            }
        }
    },

    {
        initialRouteName: "Home",
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;

                if (routeName === "Home") {
                    if (focused) {
                        return (
                            <Image
                                source={require("./assets/images/Home.png")}
                                style={styles.icon}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require("./assets/images/HomeG.png")}
                                style={styles.icon}
                            />
                        );
                    }
                } else if (routeName === "Jobs") {
                    if (focused) {
                        return (
                            <Image
                                source={require("./assets/images/Job.png")}
                                style={styles.icon}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require("./assets/images/JobG.png")}
                                style={styles.icon}
                            />
                        );
                    }
                } else if (routeName === "Availability") {
                    if (focused) {
                        return (
                            <Image
                                source={require("./assets/images/pravailability.png")}
                                style={styles.icon}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require("./assets/images/pgavailability.png")}
                                style={styles.icon}
                            />
                        );
                    }
                } else if (routeName === "Performance") {
                    if (focused) {
                        return (
                            <Image
                                source={require("./assets/images/performance.png")}
                                style={styles.icon}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require("./assets/images/pgperformance.png")}
                                style={styles.icon}
                            />
                        );
                    }
                } else if (routeName === "Profile") {
                    if (focused) {
                        return (
                            <Image
                                source={require("./assets/images/prProfle.png")}
                                style={styles.icon}
                            />
                        );
                    } else {
                        return (
                            <Image
                                source={require("./assets/images/pgprofile.png")}
                                style={styles.icon}
                            />
                        );
                    }
                }
            }
        }),
        tabBarOptions: {
            activeTintColor: colors.bottomTabTintColor
        }
    }
);

const AuthStack = createStackNavigator(
    {
        SelectScreen: SelectScreen,
        SignInScreen: SignInScreen,
        SignUpScreen: SignUpScreen,
        ForgotPassword: ForgotPassword,
        ServiceProviderSignUp: ServiceProviderSignUp,
        InitialScreen: InitialScreen,
        SignInProvider: SignInProvider,
        ResetPassword: ResetPassword,
        PhoneNumber: PhoneNumber,
        VerifyPhoneNo: VerifyPhoneNo,
        EnableNotfi: EnableNotfi,
        SelectLocation: SelectLocation,
        StayUpToDate: StayUpToDate,
        JobSearch: JobSearch,
        TabNavigator: TabNavigator,
        AdditionalJobDetails: AdditionalJobDetails,
        Tasker: Tasker,
        Account: Account,
        Profile: Profile,
        ChangePassword: ChangePassword,
        UpdatePayment: UpdatePayment,
        Rewards: Rewards,
        Payment: Payment,
        Promotions: Promotions,
        Notifications: Notifications,
        Help: Help,
        TaskerProfile: TaskerProfile,
        PaymentUpdate: PaymentUpdate,
        Jobs: Jobs,
        Tip: Tip,
        Current: Current,
        JobDetails: JobDetails,
        Contact: Contact,
        Review: Review,
        ProviderTab: ProviderTab,
        ProviderHome: ProviderHome,
        ProProfile: ProProfile,
        ProAbout: ProAbout,
        ServiceArea: ServiceArea,
        DirectDeposit: DirectDeposit,
        Vehicles: Vehicles,
        Promote: Promote,
        Support: Support,
        ProJobs: ProJobs,
        ProJobsDetails: ProJobsDetails,
        ProJobsDetailsInvoice: ProJobsDetailsInvoice,
        ProContact: ProContact,
        TimeSlot: TimeSlot,
        ScheduledJobDetails: ScheduledJobDetails,
        Performance: Performance,
        ServicesAndRates: ServicesAndRates,
        ServicesAndRate2: ServicesAndRate2,
        HomeJobs: HomeJobs,
        PerformanceSummary: PerformanceSummary,
        Invoice: Invoice,
        Reviews: Reviews,
        Receipt: Receipt,
        SubmitInvoice: SubmitInvoice
    },
    {
        initialRouteName: "Vehicles",

        headerMode: "none"
    }
);

const routing = createSwitchNavigator(
    {
        AuthStack: AuthStack
    },
    {
        initialRouteName: "AuthStack",
        headerMode: "none"
    }
);

export default createAppContainer(AuthStack);

const styles = StyleSheet.create({
    icon: {
        height: 23,
        width: 23,
        justifyContent: "center",
        alignContent: "center",
        resizeMode: "contain"
    }
});
