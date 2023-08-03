import { useEffect, useState } from 'react';
import { useDefaultReducer } from 'smh-react-typescript-hooks';
interface OptionsInterfaceSelect {
  itemsList: any;
  isRequired: boolean;
  defaultValue?: any;
  multiple?: boolean;
  min?: number;
  max?: number;
  disabled?: boolean;
  validError?: string;
  minError?: string;
  maxError?: string;
  onChangeValueCallBack?: any;
  onSelectItemCallBack?: any;
  onPressCallBack?: any;
  onOpenCallBack?: any;
  onCloseCallBack?: any;
}
const initialState = {
  open: false,
  isFocus: false,
  isBlur: false,
  isValid: true,
  selectedItems: [],
  selectedValues: [],
  customError: null,
};
const useValidateSelect = (options: OptionsInterfaceSelect) => {
  options.min = options.min || 0;
  options.max = options.max || 100;
  options.multiple = options.multiple || false;
  options.disabled = options.disabled || false;
  options.minError = options.minError || 'Min Selection Expected !!!';
  options.maxError = options.maxError || 'Max Selections reached !!!';
  options.validError = options.validError || 'Given value is not valid !!!';
  const [value, setValue] = useState(
    options.defaultValue ? options.defaultValue : null
  );
  const { state, multipleAction } = useDefaultReducer(initialState);
  const [itemsList, setItemsList] = useState(
    options.itemsList ? options.itemsList : []
  );
  const {
    isRequired,
    defaultValue,
    multiple,
    min,
    max,
    disabled,
    validError,
    minError,
    maxError,
    onChangeValueCallBack,
    onSelectItemCallBack,
    onPressCallBack,
    onOpenCallBack,
    onCloseCallBack,
  } = options;
  const {
    open,
    isFocus,
    isBlur,
    isValid,
    selectedItems,
    selectedValues,
    customError,
  } = state;
  useEffect(() => {
    if (defaultValue && multiple) {
      if (!Array.isArray(defaultValue)) {
        throw new Error(
          'defaultValue must be type array if multiple is true !!!'
        );
      }
      const defaultSelectedList = [];
      for (let k in defaultValue) {
        const v = itemsList.filter((i: any) => i.value === defaultValue[k])[0];
        defaultSelectedList.push(v);
      }
      multipleAction({
        isFocus: !isFocus,
        isBlur: !isBlur,
        selectedItems: defaultSelectedList,
      });
    }
    if (defaultValue && !multiple) {
      if (Array.isArray(defaultValue)) {
        throw new Error(
          'defaultValue must be string when multiple is false !!!'
        );
      }
      const defaultSelectedList = itemsList.filter(
        (i: any) => i.value === defaultValue
      )[0];
      multipleAction({
        isFocus: !isFocus,
        isBlur: !isBlur,
        selectedItems: defaultSelectedList,
      });
    }
  }, []);

  useEffect(() => {
    // console.log("abc", isRequired, isFocus, selectedItems);
    if (isRequired) {
      if (multiple) {
        if (!value && !isFocus) {
          multipleAction({ isValid: false });
        } else if (isFocus || isBlur) {
          if (value.length < min) {
            multipleAction({ isValid: false, customError: minError });
          } else if (value.length > max) {
            multipleAction({ isValid: false, customError: maxError });
          } else {
            multipleAction({ isValid: true, customError: null });
          }
        } else {
          multipleAction({ isValid: true, customError: null });
        }
      } else {
        if (!value && !isFocus) {
          multipleAction({ isValid: false });
        } else if (isFocus || isBlur) {
          if (!value) {
            multipleAction({ isValid: false, customError: validError });
          } else {
            multipleAction({ isValid: true, customError: null });
          }
        } else {
          multipleAction({ isValid: true, customError: null });
        }
      }
    } else {
      multipleAction({ isValid: true, customError: null });
    }
  }, [isRequired, isFocus, isBlur, value]);
  const setOpenHandler = (_item: any) => {
    // console.log("setOpenHandler", item);
    multipleAction({ open: !open, isFocus: true });
  };
  const onPressCB = (_item: any) => {
    // console.log("onPressCB", item);
    multipleAction({ isFocus: true });
    onPressCallBack ? onPressCallBack : null;
  };
  const onOpenCB = () => {
    // console.log("onOpenCB");
    multipleAction({ isFocus: true, isBlur: false });
    onOpenCallBack ? onOpenCallBack : null;
  };
  const onCloseCB = () => {
    // console.log("onCloseCB");
    multipleAction({ isBlur: true, isFocus: false });
    onCloseCallBack ? onCloseCallBack : null;
  };
  const onChangeValueCB = (item: any) => {
    // console.log("onChangeValueCB", item);
    multipleAction({ selectedValues: item });
    onChangeValueCallBack ? onChangeValueCallBack(item) : null;
  };
  const onSelectItemCB = (item: any) => {
    // console.log("onSelectItemCB", item);
    multipleAction({ selectedItems: item });
    onSelectItemCallBack ? onSelectItemCallBack(item) : null;
  };
  const hasError = !isValid && isFocus;
  const result = {
    open: open,
    itemsList: itemsList,
    value: value,
    isDisabled: disabled,
    setItems: setItemsList,
    setValue: setValue,
    setOpen: setOpenHandler,
    onChangeValueCallBack: onChangeValueCB,
    onSelectItemCallBack: onSelectItemCB,
    onPressCallBack: onPressCB,
    onOpenCallBack: onOpenCB,
    onCloseCallBack: onCloseCB,
    min: min,
    max: max,
    multiple: multiple,
    selectedItems: selectedItems,
    selectedValues: selectedValues,
    isValid: isValid,
    hasError: hasError,
    customError: customError,
  };
  // console.log("result", result,state);
  return result;
};

export default useValidateSelect;
