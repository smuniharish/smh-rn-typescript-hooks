import { useEffect } from 'react';
import { useDefaultReducer } from 'smh-react-typescript-hooks';

interface optionsInterface {
  type: string;
  label: string;
  isRequired: boolean;
  keyboard?: string;
  minValue?: number;
  maxValue?: number;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string | number | boolean;
  isDisabled?: boolean;
  isEditable?: boolean;
  validationPattern?: any;
  minValueError?: string;
  maxValueError?: string;
  minLengthError?: string;
  maxLengthError?: string;
  focusError?: string;
  validError?: string;
  valueChangeCallback?: any;
}
const typesList: string[] = ['string', 'number'];
const initialState = {
  inputValue: null,
  isFocus: false,
  isBlur: false,
  isValid: true,
  customError: null,
};
const useValidateForm = (options: optionsInterface) => {
  const { state, multipleAction } = useDefaultReducer(initialState);
  const {
    type,
    label,
    isRequired,
    keyboard = 'default',
    minValue,
    maxValue,
    minLength,
    maxLength,
    defaultValue,
    isDisabled,
    isEditable,
    validationPattern,
    minValueError = 'Minimum value is required !!!',
    maxValueError = 'Maximum value reached !!!',
    minLengthError = 'Minimum Length is required !!!',
    maxLengthError = 'Maximum Length is reached !!!',
    focusError = 'Value is Required !!!',
    validError = 'Given value is not valid !!!',
    valueChangeCallback,
  } = options;
  const { inputValue, isFocus, isBlur, isValid, customError } = state;
  useEffect(() => {
    if (typeof inputValue !== 'string' && inputValue) {
      try {
        const strValue = inputValue.toString();
        multipleAction({ inputValue: strValue });
      } catch (error) {
        throw error;
      }
    }
    return () => {};
  }, [inputValue]);
  useEffect(() => {
    if (defaultValue) {
      if (type === 'number' && typeof defaultValue === 'string') {
        throw new Error(
          'Default Value Error: type and defaultValue should be in same data type'
        );
      } else if (type === 'string' && typeof defaultValue === 'number') {
        throw new Error(
          'Default Value Error: type and defaultValue should be in same data type'
        );
      } else {
        multipleAction({
          inputValue:
            typeof defaultValue !== 'string'
              ? defaultValue.toString()
              : defaultValue,
          isFocus: !isFocus,
          isBlur: !isBlur,
        });
      }
    }
  }, [defaultValue]);
  useEffect(() => {
    if (type) {
      if (!typesList.includes(type)) {
        throw new Error('Given type is invalid !!!');
      }
    }
  }, [type]);
  useEffect(() => {
    if (validationPattern) {
      if (!(validationPattern instanceof RegExp)) {
        throw new Error(
          'Given validationPattern is not a valid regex pattern !!!'
        );
      }
    }
  }, [validationPattern]);

  useEffect(() => {
    multipleAction({ isValid: true, customError: null });
    if (isRequired) {
      if (isFocus && !inputValue) {
        multipleAction({ isValid: false, customError: focusError });
      }
      if (isBlur && !inputValue) {
        multipleAction({ isValid: false, customError: validError });
      }
      if (!inputValue) {
        multipleAction({ isValid: false });
      }
      if (validationPattern) {
        if (validationPattern && inputValue) {
          const valid = validationPattern.test(inputValue);
          multipleAction({
            isValid: valid,
            customError: valid ? null : validError,
          });
        }
      } else {
        const numInput =
          inputValue && type === 'number'
            ? isNaN(parseInt(inputValue))
              ? 0
              : parseInt(inputValue)
            : 0;
        if (isNaN(inputValue) && type === 'number') {
          multipleAction({ isValid: false, customError: validError });
        } else {
          if (minValue && isFocus && numInput < minValue) {
            multipleAction({ isValid: false, customError: minValueError });
          }
          if (maxValue && isFocus && numInput > maxValue) {
            multipleAction({ isValid: false, customError: maxValueError });
          }
        }
        if (type === 'string' && inputValue) {
          if (minLength && isFocus && inputValue.length < minLength) {
            multipleAction({ isValid: false, customError: minLengthError });
          } else if (maxLength && isFocus && inputValue.length > maxLength) {
            multipleAction({ isValid: false, customError: maxLengthError });
          }
        }
        // else {
        //   multipleAction({ isValid: true, customError: null });
        // }
      }
    } else {
      {
        const numInput =
          inputValue && type === 'number'
            ? isNaN(parseInt(inputValue))
              ? 0
              : parseInt(inputValue)
            : 0;
        if (isNaN(inputValue) && type === 'number') {
          multipleAction({ isValid: false, customError: validError });
        } else {
          if (minValue && isFocus && numInput < minValue) {
            multipleAction({ isValid: false, customError: minValueError });
          }
          if (maxValue && isFocus && numInput > maxValue) {
            multipleAction({ isValid: false, customError: maxValueError });
          }
        }
        if (type === 'string' && inputValue) {
          if (minLength && isFocus && inputValue.length < minLength) {
            multipleAction({ isValid: false, customError: minLengthError });
          } else if (maxLength && isFocus && inputValue.length > maxLength) {
            multipleAction({ isValid: false, customError: maxLengthError });
          }
        }
        // else {
        //   multipleAction({ isValid: true, customError: null });
        // }
      }
    }
  }, [isFocus, inputValue]);
  const hasError = !isValid && isFocus;
  const valueChangeHandler = (text: string) => {
    multipleAction({ inputValue: text });
    valueChangeCallback ? valueChangeCallback(text) : null;
  };
  const valueFocusHandler = () => {
    multipleAction({ isFocus: true });
  };
  const valueBlurHandler = () => {
    multipleAction({ isBlur: true });
  };
  const reset = () => {
    multipleAction(initialState);
  };
  const result = {
    label: label,
    value: inputValue,
    required: isRequired,
    keyboardType: keyboard,
    defaultValue: inputValue,
    isValid: isValid,
    isFocused: isFocus,
    isBlured: isBlur,
    hasError: hasError,
    customError: customError,
    inputIsDisabled: isDisabled || false,
    inputIsEditable: isEditable || true,
    min: type === 'string' ? minLength : minValue,
    max: type === 'string' ? maxLength : maxValue,
    valueChangeHandler: valueChangeHandler,
    valueFocusHandler: valueFocusHandler,
    valueBlurHandler: valueBlurHandler,
    reset: reset,
  };
  // console.log("result",result)
  return result;
};
export default useValidateForm;
