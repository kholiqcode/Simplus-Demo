import Toast from 'react-native-toast-message';

const showMessage = (message, type = 'info', position = 'bottom') => {
  Toast.show({
    text1: message,
    type,
    position,
    visibilityTime: 3000,
    autoHide: true,
  });
};

export default showMessage;
