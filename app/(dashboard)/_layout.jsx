import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import  Entypo  from '@expo/vector-icons/Entypo';

const DashboardLayout = () => {
    return (
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
                    tabBarIcon: () => (
                        <Entypo name="scissors" size={24} color="black"  />
                    ),
                    
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    title: 'Profile',
    
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                        size={24}
                            name={focused ? "person" : "person-outline"}
                            color={focused ? '#000' : '#rgba(0, 0, 0, 0.48)'} 
                            
                            />
                    ),
                    
                }}
            />
            </Tabs>

          
   
  )
}

export default DashboardLayout