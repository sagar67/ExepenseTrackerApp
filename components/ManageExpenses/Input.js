import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label,style, textInputConfig }) => {

    const inputStyle = [styles.textInput];

    if(textInputConfig && textInputConfig.multiline){
        inputStyle.push(styles.inputMultiline)
    }

  return (
    <View style={[styles.rootContainer, style]}>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 8,
    marginVertical: 13,
  },
  text: {
    fontSize:16,
    color:GlobalStyles.colors.accent500,
    marginBottom:8,
  },
  textInput: {
    padding: 3,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
    color:GlobalStyles.colors.primary700
  },
  inputMultiline:{
    height:100,
    textAlignVertical:'top'
  }
});
