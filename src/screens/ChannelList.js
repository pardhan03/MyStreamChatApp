import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react-native'
import { chatUserId } from '../../chatConfig'
import { useAppContext } from '../../AppContext'

const ChannelListScreen = ({ navigation }) => {

  const { client } = useChatContext();
  const { setChannel } = useAppContext()

  const filters = { members: { $in: [chatUserId] } };
  const sort = { last_message_at: -1 };

  if (!client || !client.userID) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <ChannelList 
        filters={filters}
        sort={sort} 
        onSelect={(channel) => {
          if (channel?.id) {
            setThread(message);
            navigation.navigate("ThreadScreen");
          }
          setChannel(channel)
          navigation.navigate('ChannelScreen');
        }}
      />
    </View>
  )
}

export default ChannelListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})