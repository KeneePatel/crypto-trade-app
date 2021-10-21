import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { color } from 'react-native-reanimated'
import { COLORS, FONTS, SIZES } from '../constants'

export default function TabIcon({ focused, icon, iconStyle, label, isTrade }) {
    if (isTrade) {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '14',
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: COLORS.black
                }}
            >
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                        width: SIZES.iconSize,
                        height: SIZES.iconSize,
                        tintColor: COLORS.white,
                        ...iconStyle
                    }}
                />
            </View>
        )
    }
    else {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                        width: SIZES.iconSize,
                        height: SIZES.iconSize,
                        tintColor: focused ? COLORS.white : COLORS.secondary,
                    }}
                />
                { focused &&
                    <Text
                        style={{
                            color: focused ? COLORS.white : COLORS.secondary,
                            ...FONTS.h6
                        }}
                    >
                        {label}
                    </Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Text: {
        alignContent: 'center',
        alignItems: 'center',
        color: COLORS.white,
        fontSize: 9
    }
});