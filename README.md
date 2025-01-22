# smh-react-native-responsive-screen

smh-react-native-responsive-screen

## Installation
```sh
# Expo
npx expo install smh-react-native-responsive-screen

#React Native
npm install --save smh-react-native-responsive-screen
```

# Examples

## 1. How to use with StyleSheet.create()
```js
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'smh-react-native-responsive-screen';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('80%')   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup
  }
});

export default Login;
```
And we're done 🎉
## Contributing

Contribution are always welcome, no matter how large or small !

We want this community to be friendly and respectful to each other.Please follow it in all your interactions with the project.

Please feel free to drop me a mail [S MUNI HARISH](mailto:samamuniharish@gmail.com?subject=[GitHub])

## Acknowledgements

Thanks to the authors of these libraries for inspiration

## Note

Inspired by [react-native-responsive-screen](https://www.npmjs.com/package/react-native-responsive-screen)

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/smuniharish). Or if you are looking for a private support or help in customizing the experience, then reach out to me on Linkedin [@smuniharish](https://www.linkedin.com/in/smuniharish).

## License

[MIT](./LICENSE)

---

Made with ❤️
