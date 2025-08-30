import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { updateProfile } from "../redux/actions/otherAction";
import {
    colors,
    defaultStyle,
    formHeading,
    inputOptions,
    formStyles as styles,
} from "../styles/styles";
import { useMessageAndErrorOther } from "../utils/hooks";

const UpdateProfile = ({ navigation }) => {
    // Use the Redux hook to get the user state
    const { user } = useSelector((state) => state.user);

    // Initialize state with safe default values for all fields
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [address, setAddress] = useState(user?.address || "");
    const [city, setCity] = useState(user?.city || "");
    const [country, setCountry] = useState(user?.country || "");
    const [pinCode, setPinCode] = useState(user?.pinCode ? user.pinCode.toString() : "");

    // Initialize the Redux dispatch
    const dispatch = useDispatch();

    // Get loading status using custom hook
    const loading = useMessageAndErrorOther(dispatch, navigation, "profile");

    // Handler function to submit the form
    const submitHandler = () => {
        dispatch(updateProfile(name, email, address, city, country, pinCode));
    };

    return (
        <View style={defaultStyle}>
            {/* Render the header component with back button */}
            <Header back={true} />

            {/* Heading */}
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={formHeading}>Edit Profile</Text>
            </View>

            {/* Scroll view to contain the form elements */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    padding: 20,
                    elevation: 10,
                    borderRadius: 10,
                    backgroundColor: colors.color3,
                }}
            >
                {/* Form */}
                <View>
                    <TextInput
                        {...inputOptions}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />

                    <TextInput
                        {...inputOptions}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        {...inputOptions}
                        placeholder="Address"
                        value={address}
                        onChangeText={setAddress}
                    />

                    <TextInput
                        {...inputOptions}
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                    />

                    <TextInput
                        {...inputOptions}
                        placeholder="Country"
                        value={country}
                        onChangeText={setCountry}
                    />

                    <TextInput
                        {...inputOptions}
                        placeholder="Pin Code"
                        value={pinCode}
                        onChangeText={setPinCode}
                    />

                    {/* Submit button */}
                    <Button
                        loading={loading}
                        textColor={colors.color2}
                        style={styles.btn}
                        onPress={submitHandler}
                    >
                        Update
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
};

export default UpdateProfile;
