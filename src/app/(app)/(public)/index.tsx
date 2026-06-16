import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from 'react-native-reanimated';
import AppleAuthButton from "../../../../components/auth/AppleAuthButton";
import GoogleAuthButton from "../../../../components/auth/GoogleAuthButton";
export default function Index() {

  const openWebBrowser = () => {
    Linking.openURL('https://galaxies.dev')
  };

  const AppleButton = () => {

    return (
      <Animated.View entering={FadeInDown.delay(100)}>
        <AppleAuthButton />
      </Animated.View>
    )
  }

  const GoogleButton = () => {
    return (
      <Animated.View entering={FadeInDown.delay(200)}>
        <GoogleAuthButton />
      </Animated.View>
    )
  }

  const OtherOptions = () => {
    return (
      <Animated.View entering={FadeInDown.delay(300)}>
        <TouchableOpacity style={styles.otherButton} >
          <Text style={styles.otherButtonText}>
            Other options
          </Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  const PrivacyButton = () => {
    return (
      <Animated.View entering={FadeInDown.delay(400)} style={styles.privacyContainer}>
        <Text style={styles.privacytext} >
          Please visit{' '}
          <Text style={styles.privacyLink} onPress={openWebBrowser}>
            Wolt privacy Statement
          </Text>
          <Text>
            {' '}to learn more about how Wolt collects, uses, shares and protects your personal data.
          </Text>
        </Text>
      </Animated.View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollingContainer}></View>

      <View style={styles.contentContainer}>
        <Image source={require('@/assets/images/wolt-logo.png')} style={styles.brandLogo} />
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered.
        </Animated.Text>

        {/* {login buttons} */}
        <View style={styles.buttonContainer} >
          {/* apple auth button */}
          <AppleButton />

          {/* google auth button */}
          <GoogleButton />

          {/* Action Buttons */}
          <OtherOptions />


        </View>
        {/* Privacy container */}
        <PrivacyButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  brandLogo: {
    width: '100%',
    height: 48,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tagline: {
    fontSize: 34,
    fontFamily: 'Fonts.brandBold',
    marginBottom: 50,
    textAlign: 'center',
    fontWeight: '900',
    paddingHorizontal: 24,
  },

  buttonContainer: {
    gap: 12,
    width: '100%',
  },

  otherButton: {
    backgroundColor: 'gray',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,

    alignItems: 'center',
  },
  otherButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  privacyContainer: {
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  privacytext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 18,
  },
  privacyLink: {
    color: '#01BEE5',
    textDecorationLine: 'underline',
  },
  infiniteScrollingContainer: {
    flex: 0.8,
  },

});
