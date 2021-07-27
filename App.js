import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, LogBox} from 'react-native';
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "https://t3.ftcdn.net/jpg/04/40/77/78/240_F_440777886_oiekaCyoHa9qZoRMRlrVLbgFkQL6lVFJ.jpg",
    "https://t4.ftcdn.net/jpg/03/14/14/11/240_F_314141146_OLdlWE1SkeUyquNjSa45S6pxAmss6VbK.jpg",
    "https://t4.ftcdn.net/jpg/04/41/08/67/240_F_441086743_fVFqeNT3A7J9QeceWwUpvCcEq3KKh6G8.jpg"
];

const showImg = (image, index) => {

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])

  return (
      <View key={index}>
          <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
      </View>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
        >
            { images.map((image, index) => showImg(image, index)) }
        </Carousel>
    </View>
  );
};


/* <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView> */

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // justifyContent: 'center'
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
