import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { updatePassword } from "../redux/actions/otherAction";
import { colors, defaultStyle, formHeading, inputOptions, formStyles as styles } from "../styles/styles";
import { useMessageAndErrorOther } from "../utils/hooks";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const loading = useMessageAndErrorOther(dispatch);

  const handlePasswordChange = () => {
    dispatch(updatePassword(oldPassword, newPassword));
    clearInputFields();
  };

  const clearInputFields = () => {
    setOldPassword("");
    setNewPassword("");
  };

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Change Password</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Old Password"
          secureTextEntry={true}
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <TextInput
          {...inputOptions}
          placeholder="New Password"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Button
          loading={loading}
          textColor={colors.color2}
          disabled={!oldPassword || !newPassword}
          style={styles.btn}
          onPress={handlePasswordChange}
        >
          Change
        </Button>
      </View>
    </View>
  );
};

export default ChangePassword;
