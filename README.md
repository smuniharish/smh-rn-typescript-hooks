# smh-rn-typescript-hooks

smh-rn-typescript-hooks

## Installation
React Native
```sh
npm install --save smh-rn-typescript-hooks
```
Expo
```sh
npx expo install smh-rn-typescript-hooks
```
### Available Hooks
* useValidateForm
* useValidateSelect
* useValidateCheckBox
* useGetDeviceOrientation

## Usage
This packages is customized react-native hooks for making development easier, faster and more performant

#### useValidateForm()
We tested this with the help of [rn-material-ui-textfield](https://github.com/gabrieldonadel/rn-material-ui-textfield#readme) package.I would like to recommand to use the same. Other packages also work.
##### props
* options

| Parameter | Type     | Description | Default| **Required* |
| :-------- | :------- | :-------| :------- | :----- |
| `type` | `string` | either "number" or "string" | None | True |
| `label` | `string` | TextInput Label Name | None | True |
| `isRequired` | `boolean` | It will checks the applied field is mandatory or not | None | True |
| `keyboard` | `string` | keyboard type for textinput | default | False |
| `minValue` | `number` | This is the minimum value for number text input | None | False |
| `maxValue` | `number` | This is the maximum value for number text input | None | False |
| `minLength` | `number` | This is the minimum Length for string text input | None | False |
| `maxLength` | `number` | This is the maximum value for string text input | None | False |
| `defaultValue` | `number or string` | This is the default value for string | None | False |
| `isDisabled` | `boolean` | For disable the user text input | None | False |
| `isEditable` | `boolean` | To restrict the user to edit the value instead of disable | None | False |
| `validationPattern` | `regex pattern` | This is the recommended way to validate the user input (min and max values will be not consider once validationPattern presents) | None | False |
| `minValueError` | `string` | customizing the error for Minimum Value check | Minimum value is required !!! | False |
| `maxValueError` | `string` | customizing the error for Maximum Value check | Maximum value is required !!! | False |
| `minLengthError` | `string` | customizing the error for Minimum Length check | Minimum length is required !!! | False |
| `maxLengthError` | `string` | customizing the error for Maximum Value check | Maximum Length is required !!! | False |
| `focusError` | `string` | customizing the error on Focus | Value is required !!! | False |
| `validError` | `string` | customizing the error on not Valid input | Given value is not valid !!! | False |
| `valueChangeCallback` | `function` | it will triggers when the value changes | None | False |

* Structured Parameters

| Parameter | Definition | type |
| :-------- | :------- | :----- |
| `label` | Text Input label | string |
| `value` | Text Input value | string |
| `required` | To get the Text Input is Required or not | boolean |
| `keyboardType` | To get the Text Input keyboard type | string |
| `defaultValue` | To get the default text input value | string or number |
| `isValid` | To get the given input is valid or not | boolean |
| `hasError` | To get the given value is error or not | boolean |
| `customError` | To know the exact error | string |
| `inputIsDisabled` | To get whether input is disabled or not | boolean |
| `inputIsEditable` | To get whether input is editable or not | boolean |
| `min` | To get minimum value for textinput | number |
| `max` | To get maximum value for textinput | number |
| `valueChangeHandler` | for updating the values in text input | function |
| `valueFocusHandler` | It will fires when the text input focused | function |
| `valueBlurHandler` | It will fires when the text input blured | function |
| `reset` | It will helps to reset the function | function |

### example
```js
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from "rn-material-ui-textfield";
import { StyleSheet, Text, View } from "react-native";
import { useValidateForm } from "smh-rn-typescript-hooks";

const TextInput = () => {
  const {
    label: textLabel,
    value: textValue,
    required: textIsRequired,
    keyboardType: textKeyboardType,
    defaultValue: textDefaultValue,
    isValid: textIsValid,
    hasError: textHasError,
    customError: textCustomError,
    inputIsDisabled: textIsDisabled,
    inputIsEditable: textIsEditable,
    min: textMin,
    max: textMax,
    valueChangeHandler: textValueChangeHandler,
    valueFocusHandler: textFocusHandler,
    valueBlurHandler: textBlurHandler,
    reset: textResetHandler,
  } = useValidateForm({
    type: "string",
    label: "TextLabel",
    isRequired: true,
    minLength: 10,
    maxLength: 15,
    isDisabled: false,
    isEditable: true,
    //   validationPattern:/^([a-z0-9]{5,})$/,
    minLengthError: "MinLengthError",
    maxLengthError: "MaxLengthErrorSudhakar",
    validError: "ValidError",
  });
  const {
    label: numberLabel,
    value: numberValue,
    required: numberIsRequired,
    keyboardType: numberKeyboardType,
    defaultValue: numberDefaultValue,
    isValid: numberIsValid,
    hasError: numberHasError,
    customError: numberCustomError,
    inputIsDisabled: numberIsDisabled,
    inputIsEditable: numberIsEditable,
    min: numberMin,
    max: numberMax,
    valueChangeHandler: numberValueChangeHandler,
    valueFocusHandler: numberFocusHandler,
    valueBlurHandler: numberBlurHandler,
    reset: numberResetHandler,
  } = useValidateForm({
    type: "number",
    label: "Number",
    isRequired: true,
    minValue: 10,
    maxValue: 15,
    isDisabled: false,
    isEditable: true,
    minValueError: "MinValueError",
    maxValueError: "MaxValueError",
    validError: "ValidError",
  });
  return (
    <Fragment>
      <OutlinedTextField
        label={textLabel}
        value={textValue}
        keyboardType={textKeyboardType}
        onChangeText={textValueChangeHandler}
        onFocus={textFocusHandler}
        onBlur={textBlurHandler}
        disabled={textIsDisabled}
        editable={textIsEditable}
        min={textMin}
        max={textMax}
        defaultValue={textDefaultValue}
        error={textCustomError}
      />
      <OutlinedTextField
        label={numberLabel}
        value={numberValue}
        keyboardType={numberKeyboardType}
        onChangeText={numberValueChangeHandler}
        onFocus={numberFocusHandler}
        onBlur={numberBlurHandler}
        disabled={numberIsDisabled}
        editable={numberIsEditable}
        min={numberMin}
        max={numberMax}
        defaultValue={numberDefaultValue}
        error={numberCustomError}
      />
    </Fragment>
  );
};

export default TextInput;

```
#### useValidateCheckBox()
We tested this with the help of [expo-checkbox](https://docs.expo.dev/versions/latest/sdk/checkbox/) package.I would like to recommand to use the same. Other packages also work.
##### props
* options

| Parameter | Type     | Description | Default| **Required* |
| :-------- | :------- | :-------| :------- | :----- |
| `isRequired` | `boolean` | It will checks the applied field is mandatory or not | None | True |
| `value` | `boolean` | value of the checkbox | false | True |
| `validError` | `string` | customizing the error on not Valid | Please tick checkbox !!! | False |
| `checkedColor` | `string` | the color code when its checked | #000000 | False |
| `uncheckedColor` | `string` | the color code when its unchecked | #a8a8a8 | False |
| `onChangeCallBack` | `function` | it will triggers when the value changes | None | False |
| `disabled` | `boolean` | the checkbox is disabled or not | None | False |

* Structured Parameters

| Parameter | Definition | type |
| :-------- | :------- | :----- |
| `color` | Color of the checkbox | string |
| `value` | value of the checkbox | boolean |
| `isValid` | To get the given input is valid or not | boolean |
| `hasError` | To get the given value is error or not | boolean |
| `customError` | To know the exact error | string |
| `inputIsDisabled` | To get whether input is disabled or not | boolean |
| `onValueChangeHandler` | for updating the values in text input | function |
| `reset` | It will helps to reset the function | function |

### example
```js
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useValidateCheckBox } from 'smh-rn-typescript-hooks';

const CheckBox=()=> {
  const {
    color:checkboxColor,
    inputIsDisabled:checkBoxIsDisabled,
    onValueChangeHandler:checkBoxChangeHandler,
    value:checkBoxValue,
    isValid:checkBoxIsValid,
    customError:checkBoxCustomError,
    hasError:checkBoxHasError,
    reset:checkBoxReset,
}= useValidateCheckBox({
    isRequired:true,
    value:false,
    checkedColor:'#4630EB'
})
console.log("checkboxValue",checkBoxValue)

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={checkBoxValue}
          onValueChange={checkBoxChangeHandler}
          color={checkboxColor}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
    </View>
  );
}
export default CheckBox;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    color:"red"
  },
  checkbox: {
    margin: 8,
  },
});

```
#### useValidateSelect()
We tested this with the help of [react-native-dropdown-picker](https://hossein-zare.github.io/react-native-dropdown-picker-website/) package.I would like to recommand to use the same. Other packages also work.
##### props
* options

| Parameter | Type     | Description | Default| **Required* |
| :-------- | :------- | :-------| :------- | :----- |
| `itemsList` | `items[]` | the list of objects having label value pairs | None | True |
| `isRequired` | `boolean` | to make it whether it will be required or not | None | True |
| `defaultValue` | `item` | object of label value pair | None | False |
| `disabled` | `boolean` | whether the input is disabled or not | false | False |
| `multiple` | `boolean` | if its true, allows to select multiple values | false | False |
| `min` | `number` | if multiple is true,we can restrict the minimum items to pick | 0 | False |
| `max` | `number` | if multiple is true,we can restrict the maximum items to pick | 100 | False |
| `minError` | `string` | customizing the error on not satisfies the Minimum picks | 'Min Selection Expected !!!' | False |
| `maxError` | `string` | customizing the error on not satisfies the Maximum picks | 'Max Selections reached !!!' | False |
| `validError` | `string` | customizing the error on not Valid | 'Given value is not valid !!!' | False |
| `onChangeCallBack` | `function` | it will triggers when the value changes | None | False |
| `onSelectItemCallBack` | `funtion` | function to call on select item | None | False |
| `onPressItemCallBack` | `function` | function to callback when the picker will be pressed | #a8a8a8 | False |
| `onOpenCallBack` | `funtion` | function to call when the picker is opened | None | False |
| `onCloseCallBack` | `function` | function to callback when the picker is closed | #a8a8a8 | False |

* Structured Parameters

| Parameter | Definition | type |
| :-------- | :------- | :----- |
| `open` | To open or close the picker | boolean |
| `itemsList` | To get the list of items | items[] |
| `value` | value of the picked items | item or items[] |
| `isDisabled` | The status of picker is disabled or not | boolean |
| `setItems` | function to set the Items after picker renders | function |
| `setValue` | function to set the Items | function |
| `setOpen` | function to set the picker open or close | function |
| `onChangeValueCallBack` | function for after changing values | function |
| `onSelectItemCallBack` | function for after selecting values | function |
| `onPressCallBack` | function for after Pressing the picker | function |
| `onOpenCallBack` | function for after Opening the picker | function |
| `onCloseCallBack` | function for after closing the picker | function |
| `min` | to get the minimum value of the picker when multiple is true | number |
| `max` | to get the maximum value of the picker when multiple is true | number |
| `multiple` | to get whether multiple is true or false | boolean |
| `selectedItems` | to get the list of selected items | items[] or item |
| `selectedValues` | to get the list of selected values | items[] or item |
| `isValid` | To get the given input is valid or not | boolean |
| `hasError` | To get the given value is error or not | boolean |
| `customError` | To know the exact error | string |
| `reset` | To reset everything | function |

### example
```js
import { View, Text } from 'react-native'
import React, { Fragment, useEffect } from 'react'
import DropDownPicker from "react-native-dropdown-picker";
import { useValidateSelect } from 'smh-rn-typescript-hooks';

const Dropdown = () => {
    const {
        open:selectOpen,
        itemsList:selectItems,
        value:selectValue,
        isDisabled:selectIsDisabled,
        setItems:selectSetItems,
        setValue:selectSetValue,
        setOpen:selectSetOpen,
        onChangeValueCallBack:selectOnChangeValueCallBack,
        onSelectItemCallBack:selectOnSelectItemCallBack,
        onPressCallBack:selectOnPressCallBack,
        onOpenCallBack:selectOnOpenCallBack,
        onCloseCallBack:selectOnCloseCallBack,
        min:selectMin,
        max:selectMax,
        multiple:selectMultiple,
        selectedItems:selectSelectedItems,
        selectedValues:selectSelectedValues,
        isValid:selectIsValid,
        hasError:selectHasError,
        customError:selectCustomError,
    } = useValidateSelect({
        itemsList:[
            {label: 'Apple', value: 'apple'},
            {label: 'Banana', value: 'banana'},
            {label: 'Mango', value: 'mango'},
            {label: 'Lemon', value: 'lemon'},
          ],
          isRequired:true,
          // defaultValue:"banana",
          defaultValue:["banana","apple"],
          multiple:true
    })
    useEffect(() => {
      selectSetItems([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
      ])
    },[])
  return (
    <Fragment>
    <DropDownPicker
        open={selectOpen}
        mode={"BADGE"}
        // style={styles.pickerStyle}
        // textStyle={styles.pickerItem}
        // containerStyle={styles.pickerItem}
        // labelStyle={styles.pickerItem}
        // placeholder={label}
        // listMode="MODAL"
        closeAfterSelecting={true}
        value={selectValue}
        items={selectItems}
        setOpen={selectSetOpen}
        setValue={selectSetValue}
        // setItems={setItems}
        autoScroll={true}
        itemSeparator={true}
        onChangeValue={selectOnChangeValueCallBack}
        onSelectItem={selectOnSelectItemCallBack}
        disabled={selectIsDisabled}
        onPress={selectOnPressCallBack}
        onOpen={selectOnOpenCallBack}
        onClose={selectOnCloseCallBack}
        min={selectMin}
        max={selectMax}
        multiple={selectMultiple}
        searchable={true}
      />
      <Text style={{color:"red",fontSize:20}}>{selectIsValid.toString()} - {selectHasError.toString()} - {selectCustomError}</Text>
      </Fragment>
  )
}

export default Dropdown
```
#### useGetDeviceOrientation()
### example
```js
import { useGetDeviceOrientation } from 'smh-rn-typescript-hooks';
const component = () =>{
  const deviceOrientation = useGetDeviceOrientation();
  console.log(deviceOrientation)
  //output : depends on the device orientation
  landscape or portrait
}
```
And we're done 🎉
## Contributing

Contribution are always welcome, no matter how large or small !

We want this community to be friendly and respectful to each other.Please follow it in all your interactions with the project.

Please feel free to drop me a mail [S MUNI HARISH](mailto:samamuniharish@gmail.com?subject=[GitHub])

## Acknowledgements

Thanks to the authors of these libraries for inspiration

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/smuniharish). Or if you are looking for a private support or help in customizing the experience, then reach out to me on Linkedin [@smuniharish](https://www.linkedin.com/in/smuniharish).

## License

[MIT](./LICENSE)

---

Made with ❤️
