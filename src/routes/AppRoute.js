import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import DashBoard from '../screens/DashBoard';
import { OverlayProvider, Chat, useCreateChatClient } from 'stream-chat-react-native';
import { chatApiKey, chatUserId, chatUserName, chatUserToken } from '../../chatConfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ChannelListScreen from '../screens/ChannelList';
import ChannelScreen from '../screens/ChannelScreen';

const user = {
  id: chatUserId,
  name: chatUserName,
};

function HomeStacScreen() {
  const Stack = createStackNavigator();

  const chatClient = useCreateChatClient({
    apiKey: chatApiKey,
    userData: user,
    tokenOrProvider: chatUserToken,
  });

  console.log(chatClient, 'reached here')

  if (!chatClient) {
    return (
      <SafeAreaView>
        <Text>Loading chat ...</Text>
      </SafeAreaView>
    );
  }
  
  return (
    <GestureHandlerRootView style={{ flex:1 }}>
    <OverlayProvider >
      <Chat client={chatClient}>
        <Stack.Navigator initialRouteName='ChannelList'>
          {/* <Stack.Screen name='Home' component={Home} /> */}
          {/* <Stack.Screen name='Dashboard' component={DashBoard} /> */}
          <Stack.Screen name='ChannelList' component={ChannelListScreen} />
          <Stack.Screen name="ChannelScreen" component={ChannelScreen} />
        </Stack.Navigator>
      </Chat>
    </OverlayProvider>
    </GestureHandlerRootView>
  )

}


const AppRoute = () => {
  return (
    <NavigationContainer>
      <HomeStacScreen/>
    </NavigationContainer>
  )
}

export default AppRoute

const styles = StyleSheet.create({})