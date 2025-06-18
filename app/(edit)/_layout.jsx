import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
    return (
        <>
            <StatusBar style="light" backgroundColor='#000' />
            <Stack screenOptions={{

                headerStyle: { backgroundColor: '#000' },
                headerTintColor: '#fff',
                headerShown: false,
            }}>

            </Stack>
        </>

    )
}

export default _layout

const styles = StyleSheet.create({})