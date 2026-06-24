import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import Animated, { FadeInDown } from 'react-native-reanimated';
import AppleAuthButton from "../../../../components/auth/AppleAuthButton";
import GoogleAuthButton from "../../../../components/auth/GoogleAuthButton";
import SmoothInfiniteScroll from "../../../../components/auth/SmoothInfiniteScroll";

const AnimationContainer = ({ index, style, children }: { index: number; style?: ViewStyle; children: React.ReactNode }) => (
  <Animated.View entering={FadeInDown.delay(index * 100)} style={style}>
    {children}
  </Animated.View>
);

export default function Index() {

  const openWebBrowser = () => {
    Linking.openURL('https://galaxies.dev')
  };

  return (
    <View style={styles.container}>
      <View style={styles.infiniteScrollingContainer}>

        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>

        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>

        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        <LinearGradient colors={['transparent', '#fff']}
          style={{ position: 'absolute', height: 200, left: 0, bottom: 0, right: 0 }} />
      </View>

      <View style={styles.contentContainer}>
        <Image source={require('@/assets/images/wolt-logo.png')} style={styles.brandLogo} />
        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered.
        </Animated.Text>

        <View style={styles.buttonContainer}>
          <AnimationContainer index={1}>
            <AppleAuthButton />
          </AnimationContainer>

          <AnimationContainer index={2}>
            <GoogleAuthButton />
          </AnimationContainer>

          <AnimationContainer index={3}>
            <Link href={'/(app)/(public)/otherOptions'} asChild>
              <TouchableOpacity style={styles.otherButton}>
                <Text style={styles.otherButtonText}>Other options</Text>
              </TouchableOpacity>
            </Link>
          </AnimationContainer>
        </View>

        <AnimationContainer index={4} style={styles.privacyContainer}>
          <Text style={styles.privacytext}>
            Please visit{' '}
            <Text style={styles.privacyLink} onPress={openWebBrowser}>
              Wolt privacy Statement
            </Text>
            <Text>
              {' '}to learn more about how Wolt collects, uses, shares and protects your personal data.
            </Text>
          </Text>
        </AnimationContainer>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    position: 'relative',
    overflow: 'hidden'
  },

});
