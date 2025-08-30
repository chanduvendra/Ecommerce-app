import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { default as React, useEffect } from "react";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/userActions";
import AdminOrders from "./screens/Admin/AdminOrders";
import AdminPanel from "./screens/Admin/AdminPanel";
import Categories from "./screens/Admin/Categories";
import NewProduct from "./screens/Admin/NewProduct";
import ProductImages from "./screens/Admin/ProductImages";
import UpdateProduct from "./screens/Admin/UpdateProduct";
import Camera from "./screens/Camera";
import Cart from "./screens/Cart";
import ChangePassword from "./screens/ChangePassword";
import ConfirmOrder from "./screens/ConfirmOrder";
import ForgetPassword from "./screens/ForgetPassword";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Orders from "./screens/Orders";
import Payment from "./screens/Payment";
import ProductDetails from "./screens/ProductDetails";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import UpdateProfile from "./screens/UpdateProfile";
import Verify from "./screens/Verify";

const Stack = createNativeStackNavigator();

const Main = () => {
    const dispatch = useDispatch();

  
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="home"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Group>
                    <Stack.Screen name="home" component={Home} />
                    <Stack.Screen name="productdetails" component={ProductDetails} />
                    <Stack.Screen name="cart" component={Cart} />
                    <Stack.Screen name="confirmorder" component={ConfirmOrder} />
                    <Stack.Screen name="payment" component={Payment} />
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="signup" component={SignUp} />
                    <Stack.Screen name="profile" component={Profile} />
                    <Stack.Screen name="updateprofile" component={UpdateProfile} />
                    <Stack.Screen name="changepassword" component={ChangePassword} />
                    <Stack.Screen name="orders" component={Orders} />
                    <Stack.Screen name="camera" component={Camera} />

                    {/* Password Reseting Route */}
                    <Stack.Screen name="forgetpassword" component={ForgetPassword} />
                    <Stack.Screen name="verify" component={Verify} />

                    {/* Admin Routes */}

                    <Stack.Screen name="adminpanel" component={AdminPanel} />
                    <Stack.Screen name="categories" component={Categories} />
                    <Stack.Screen name="adminorders" component={AdminOrders} />
                    <Stack.Screen name="updateproduct" component={UpdateProduct} />
                    <Stack.Screen name="newproduct" component={NewProduct} />
                    <Stack.Screen name="productimages" component={ProductImages} />
                    {/* Product Image remaining */}
                </Stack.Group>
            </Stack.Navigator>

            <Toast position="top" />
        </NavigationContainer>
    );
};

export default Main;