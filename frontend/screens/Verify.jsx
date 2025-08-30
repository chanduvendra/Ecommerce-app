import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';
import { colors, defaultStyle, formStyles, formheading, inputStyling } from '../styles/styles';

const Verify = ({ navigation }) => {
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const loading = false;
    const inputOptions = {
        style: inputStyling,
        mode: "outlined",
        activeOutlineColor: colors.color1,
    };
    const submitHandler = () => {
        alert("Yeah");
        navigation.navigate("login");

    }
    return (
        <>
            <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>

                <View style={{ marginBottom: 20 }}></View>

                <Text style={formheading}>Reset Password</Text>

                <View style={formStyles.container}>
                    <TextInput {...inputOptions}
                        placeholder="OTP"
                        keyboardType="number-pad"
                        value={otp}
                        onChangeText={setOtp} />


                    <TextInput {...inputOptions}
                        placeholder="New Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword} />

                    <Button
                        loading={loading}
                        textColor={colors.color2} disabled={otp === "" || password === ""}
                        style={formStyles.btn}
                        onPress={submitHandler}
                    >Reset</Button>

                    <Text style={formStyles.or}>OR</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("forgetpassword")}

                    >
                        <Text style={formStyles.link}>
                        Resend OTP
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <Footer activeRoute="profile" />
        </>
    );
};


export default Verify