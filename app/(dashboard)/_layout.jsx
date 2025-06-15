import {  StatusBar } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'



const DashboardLayout = () => {
    return (
        <>
            <StatusBar value="auto" />
      
          
          
        <Tabs
            
            screenOptions={{
                headerStyle: { backgroundColor: '#000' },
                headerTintColor: '#fff',
                headerShown: false,
                tabBarActiveTintColor: '##201e2b',
                tabBarInactiveTintColor: '#rgba(0, 0, 0, 0.48)',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    height: 90,
                    paddingTop: 10,  
                    

                },
            }}>
            <Tabs.Screen
                name="Edit"
                options={{
                    title: 'Edit',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "cut" : "cut-outline"}
                            size={24}
                            color="black" />
                    ),
                    
                }}
            />
            <Tabs.Screen
                name="Settings"
                options={{
                    title: 'Settings',
    
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                        size={24}
                            name={focused ? "settings" : "settings-outline"}
                            color={focused ? '#000' : '#rgba(0, 0, 0, 0.48)'} 
                            
                            />
                    ),
                    
                }}
            />
            </Tabs>
            </>

          
   
  )
}

export default DashboardLayout