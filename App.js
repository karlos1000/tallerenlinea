import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, LogBox, Button, Alert, Linking, ActivityIndicator} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import Share from 'react-native-share';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import YoutubePlayer from "react-native-youtube-iframe"
import { WebView } from 'react-native-webview';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 150;

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

// Compartir
const shareOptions = {
  title: 'Share via',
  message: 'some message',
  url: 'https://www.google.com.mx/',
  // social: Share.Social.WHATSAPP,
  // whatsAppNumber: "9199999999",  // country code + phone number
  // filename: 'test' , // only for base64 file in Android
};

const funShare = async () => {
// const funShare = () => {
  // const shareResponse = await Share.shareSingle({});
  // const shareResponse = await Share.open({});

  try {
    const shareResponse = await Share.open(shareOptions);
    console.log(shareResponse);
  } catch (error) {
    console.log(error);
  }
}

const linkShare = () => {
  funShare();
}

// InAppBrowser
// const openInAppBrowser = () => {
const openInAppBrowser = async () => {
  /* Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  ); */

  try {
      const url = 'https://srautoforumcp.mozi.mx/';

      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // // iOS Properties
          // dismissButtonStyle: 'cancel',
          // preferredBarTintColor: '#453AA4',
          // preferredControlTintColor: 'white',
          // readerMode: false,
          // animated: true,
          // modalPresentationStyle: 'fullScreen',
          // modalTransitionStyle: 'coverVertical',
          // modalEnabled: true,
          // enableBarCollapsing: false,
          // Android Properties
          showTitle: false,
          toolbarColor: '#FFFFFF',
          secondaryToolbarColor: 'white',
          navigationBarColor: 'white',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: false,
          forceCloseOnRedirection: true,
          hasBackButton: true,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right'
          },
          headers: {
            'my-custom-header': 'my custom header value'
          }
        })
        // Alert.alert(JSON.stringify(result))
      }
      else{
         Linking.openURL(url);
      }
  } catch (error) {
    console.log(error);
  }
}


const App = () => {

  return (
    <View style={styles.container}>
        {/* <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
        >
            { images.map((image, index) => showImg(image, index)) }
        </Carousel>

        <View><Text>-----</Text></View>
        <Button
          onPress={linkShare}
          title="Compartir"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <View><Text>-----</Text></View>
        <Button
          onPress={openInAppBrowser}
          title="InAppBrowser"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <View><Text>-----</Text></View> */}
        {/* <View>
              <YoutubePlayer
                height={300}
                play={true}
                videoId={"iee2TATGMyI"}
                // onChangeState={onStateChange}
              />
        </View> */}

        {/* <WebView
          source={{html: '<iframe width="100%" height="100%" src="https://srautoforumcp.mozi.mx/" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
          style={{marginTop: 20}}
        /> */}

        <WebView
          style={{flex: 1}}
          originWhitelist={['*']}
          source={{ uri: "https://www.dasweltauto.com.mx/es.html" }}
          style={{ marginTop: 20 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          renderLoading={() => (
            <View style={{ flex: 1, alignItems: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
          )}
        />
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
