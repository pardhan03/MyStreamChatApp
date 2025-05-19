import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppContext } from '../../AppContext'
import { Channel, MessageList, Thread } from 'stream-chat-react-native'

const ThreadScreen = ({ navigation }) => {

    const { channel } = useAppContext()
    if (!channel) {
        return null;
    }

    return (
        <Channel channel={channel} thread={thread} threadList>
            <Thread />
        </Channel>
    );
}

export default ThreadScreen

const styles = StyleSheet.create({})