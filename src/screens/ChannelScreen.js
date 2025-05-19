import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppContext } from '../../AppContext'
import { Channel, MessageList, MessageInput } from 'stream-chat-react-native'

const ChannelScreen = () => {

    const { channel } = useAppContext();

    if (!channel) {
        return (
            <SafeAreaView>
                <Text>Loading chat ...</Text>
            </SafeAreaView>
        );
    }

    return (
        <Channel channel={channel}>
            <MessageList />
            <MessageInput />
        </Channel>
    )
}

export default ChannelScreen

const styles = StyleSheet.create({})