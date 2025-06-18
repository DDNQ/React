import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


const AuthLayout = () => {
    return (
        <>
            <StatusBar style="dark" backgroundColor='#000' />

            <Stack screenOptions={{

                headerStyle: { backgroundColor: '#000' },
                headerTintColor: '#fff',
                headerShown: false,
            }}>

            </Stack>
        </>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})