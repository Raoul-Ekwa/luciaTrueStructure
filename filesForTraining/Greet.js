import { View, Text } from 'react-native'
import React from 'react'


export default function Greet ({name})  {
    return (
        <View>
            <Text>Hello {name}</Text>
        </View>
    )
}

