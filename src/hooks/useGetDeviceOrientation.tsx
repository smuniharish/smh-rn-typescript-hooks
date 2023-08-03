import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
const useGetDeviceOrientation = () => {
  const ORIENTATION = {
    LANDSCAPE: 'landscape',
    PORTRAIT: 'portrait',
  };

  function getWindowOrientation() {
    const { width, height } = Dimensions.get('window');
    return height >= width ? ORIENTATION.PORTRAIT : ORIENTATION.LANDSCAPE;
  }
  const [deviceOrientation, setDeviceOrientation] =
    useState(getWindowOrientation);

  useEffect(() => {
    function updateState() {
      setDeviceOrientation(getWindowOrientation());
    }
    Dimensions.addEventListener('change', updateState);
  }, []);

  return deviceOrientation;
};
export default useGetDeviceOrientation;
