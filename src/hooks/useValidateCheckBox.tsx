import { useEffect } from 'react';
import { useDefaultReducer } from 'smh-react-typescript-hooks';
interface optionsInterfaceCheckBox {
  isRequired: boolean;
  value: boolean;
  validError?: string;
  checkedColor?: string;
  uncheckedColor?: string;
  disabled?: boolean;
  onChangeCallBack?: any;
}
const initialState = {
  isChecked: false,
  isValid: true,
  customError: null,
  color: null,
};
const useValidateCheckBox = (options: optionsInterfaceCheckBox) => {
  const { state, multipleAction } = useDefaultReducer(initialState);
  const {
    isRequired,
    checkedColor = '#000000',
    uncheckedColor = '#a8a8a8',
    disabled,
    onChangeCallBack,
    value = false,
    validError = 'Please tick checkbox !!!',
  } = options;
  const { isChecked, isValid, customError, color } = state;
  useEffect(() => {
    if (isRequired) {
      if (value) {
        multipleAction({ isValid: true, customError: null });
      } else {
        multipleAction({ isValid: false, customError: validError });
      }
    }
  }, [isRequired]);
  useEffect(() => {
    if (isRequired) {
      if (isChecked) {
        multipleAction({
          color: checkedColor,
          isChecked: true,
          isValid: true,
          customError: null,
        });
      } else {
        multipleAction({
          color: uncheckedColor,
          isChecked: false,
          isValid: false,
          customError: validError,
        });
      }
    } else {
      if (isChecked) {
        multipleAction({ color: checkedColor, isChecked: true });
      } else {
        multipleAction({ color: uncheckedColor, isChecked: false });
      }
    }
  }, [isChecked]);
  const onValueChangeHandler = () => {
    const v = !isChecked;
    multipleAction({ isChecked: v });
    onChangeCallBack ? onChangeCallBack(v) : null;
  };
  const reset = () => {
    multipleAction(initialState);
  };
  const hasError = !isValid;
  const result = {
    color: color,
    inputIsDisabled: disabled,
    onValueChangeHandler: onValueChangeHandler,
    value: isChecked,
    isValid: isValid,
    customError: customError,
    hasError: hasError,
    reset: reset,
  };
  // console.log('result', result);
  return result;
};

export default useValidateCheckBox;
