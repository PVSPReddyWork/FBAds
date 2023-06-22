import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import AppStyleConstants, {
  AppHeight,
  AppWidth,
} from '../../Constants/AppStyleConstants';
import { FBValues } from '../../Constants/FBConstants';

import CustomHeader from '../../CustomComponents/CustomHeader';
import CustomContainerView from '../../CustomComponents/CustomContainerView';
//import CustomTouch from '../../CustomComponents/CustomTouch';

class WebViewTest extends React.Component {
  // const [isVisibleModal, setIsVisibleModal] = useSta
  //const [webViewData, setWebViewData] = useState('');

  constructor(props) {
    super(props);
    this.state = {
      isVisibleModal: false,
      webViewData: '',
    };
  }

  handleLoadEnd = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    if (nativeEvent.title === 'about:blank') {
      return; // Ignore the initial blank page load
    }

    // Extract the data from the WebView
    const webViewContent = `window.document.documentElement.innerText`;
    webViewRef.current.injectJavaScript(webViewContent);
  };

  handleWebViewMessage = (event) => {
    const { data } = event.nativeEvent;
    Alert.alert('Alert Title', data, [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
    this.setState({ ...this.state, webViewData: data });
    //setWebViewData(data);
  };

  onItemSelectionhandler = (item) => {
    //this.props.navigation.navigate(item.navigationId);
  };

  render() {
    const mainUIComponent = (
      <>
        <CustomContainerView>
          <CustomHeader
            title="Home"
            {...AppStyleConstants.headerStyle}
            hideBackButton={true}
          />

          <ScrollView style={styles.mainContainerStyle}>
            <View style={styles.sectionHolderViewStyle}>
              <WebView
                style={styles.WebViewStyle}
                source={{
                  uri: `https://www.facebook.com/v12.0/dialog/oauth?client_id=${FBValues.id}&redirect_uri=${FBValues.redirectURL}&scope=email`,
                }}
                onMessage={(event) => {
                  const data = event.nativeEvent.data;
                  Alert.alert('Alert Title', event, [
                    {
                      text: 'OK',
                      onPress: () => console.log('OK Pressed'),
                    },
                  ]);
                  // Process the received data from the WebView
                }}
                onNavigationStateChange={(navState) => {
                  const { url } = navState;
                  Alert.alert('Alert Title', navState, [
                    {
                      text: 'OK',
                      onPress: () => console.log('OK Pressed'),
                    },
                  ]);
                  // Process the URL or perform actions based on the navigation state
                }}
                onLoad={() => {
                  // WebView content has started loading
                }}
                onLoadEnd={() => {
                  // WebView content has finished loading
                }}
              />
              {/*<WebView source={{ uri: "https://www.google.co.in",}} style={{marginTop: 20}} />*/}
              {/*<WebView source={{ uri: "https://www.google.co.in",}} style={styles.WebViewStyle} />*/}
              {/*<WebView
                source={{
                  uri: 'https://graph.facebook.com/oauth/access_token?client_id=6125046784281906&client_secret=f99e7f2ed546e00719f32fb99c1bbd2e&grant_type=client_credentials',
                }}
                onMessage={(event) => {
                  const data = event.nativeEvent.data;
                  Alert.alert('Alert Title', event, [
                    {
                      text: 'OK',
                      onPress: () => console.log('OK Pressed'),
                    },
                  ]);
                  // Process the received data from the WebView
                }}
                onNavigationStateChange={(navState) => {
                  const { url } = navState;
                  Alert.alert('Alert Title', navState, [
                    {
                      text: 'OK',
                      onPress: () => console.log('OK Pressed'),
                    },
                  ]);
                  // Process the URL or perform actions based on the navigation state
                }}
                onLoad={() => {
                  // WebView content has started loading
                }}
                onLoadEnd={() => {
                  // WebView content has finished loading
                }}
                style={styles.WebViewStyle}
              />*/}
              {/*<WebView
              source={{ uri: 'https://example.com' }}
              onLoadEnd={handleLoadEnd}
              onMessage={handleWebViewMessage}
              injectedJavaScript="window.postMessage(document.documentElement.innerText)"
              />*/}
            </View>
          </ScrollView>
        </CustomContainerView>
      </>
    );
    return mainUIComponent;
  }
}

const styles = StyleSheet.create({
  WebViewStyle: {
    margin: 0,
    backgroundColor: '#0F0',
    width: AppWidth,
    height: AppHeight - 40,
  },
  /*
  listItemFontStyle: {
    color: AppStyleConstants.colors.LIST_ITEM_FONT_COLOR,
    marginTop: 15,
  },
  listItemHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyleConstants.colors.LIST_ITEM_BACKGROUND_COLOR,
    width: ((AppWidth - 80)/2),
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginVertical: 2.5,
  },
  rowHolderStyle: {
    marginBottom: 20,
    justifyContent: 'space-around',
    height: ((AppWidth - 80)/2),
  },
  */
  sectionHolderViewStyle: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  mainContainerStyle: {
    backgroundColor: AppStyleConstants.colors.MAIN_BODY_COLOR,
  },
});

export default WebViewTest;
