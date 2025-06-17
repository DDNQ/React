import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;



const MainEditScreen = () => {
    const { selectedVideos = '[]', selectedPhotos = '[]' } = useLocalSearchParams();
    const videos = JSON.parse(selectedVideos);
    const photos = JSON.parse(selectedPhotos);
    const allMedia = [...videos, ...photos];
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    // const router = useRouter
    useEffect(() => {
        // You could auto-play video or prepare for editing here
    }, []);
    return (
        <View style={styles.container}>
            {/* Top bar */}
            <View style={styles.topBar}>
                <TouchableOpacity>
                    <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.exportButton}>
                    <Text style={styles.exportText}>Export</Text>
                </TouchableOpacity>
            </View>

            {/* Media Preview*/}
            <View style={styles.previewContainer}>
                {allMedia.length > 0 && (
                    <Image
                        source={{ uri: allMedia[currentMediaIndex] }}
                        style={styles.previewImage}
                        resizeMode="cover"
                    />
                )}
            </View>

            {/* Timeline */}
            <ScrollView horizontal style={styles.timeline} showsHorizontalScrollIndicator={false}>
                {allMedia.map((uri, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setCurrentMediaIndex(index)}
                        style={[styles.timelineItem, currentMediaIndex === index && styles.activeTimelineItem]}
                    >
                        <Image source={{ uri }} style={styles.timelineImage} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Toolbar */}
            <ScrollView horizontal style={styles.toolbar} showsHorizontalScrollIndicator={false}>
                {['Canvas', 'BG', 'Trim', 'Split', 'Crop', 'Speed', 'Filter', 'Delete', 'Transition', 'Volume', 'Adjust', 'Replace', 'Duplicate'].map((tool, index) => (
                    <TouchableOpacity key={index} style={styles.toolButton}>
                        <Text style={styles.toolText}>{tool}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>


    )
}

export default MainEditScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    exportButton: {
        backgroundColor: '#00CFFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    exportText: {
        color: '#000',
        fontWeight: 'bold',
    },
    previewContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewImage: {
        width: screenWidth,
        height: screenWidth * 1.2,
    },
    timeline: {
        backgroundColor: '#111',
        paddingVertical: 10,
    },
    timelineItem: {
        marginHorizontal: 5,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    activeTimelineItem: {
        borderColor: '#00CFFF',
    },
    timelineImage: {
        width: 60,
        height: 60,
        borderRadius: 4,
    },
    toolbar: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#333',
        backgroundColor: '#111',
    },
    toolButton: {
        marginHorizontal: 8,
        backgroundColor: '#222',
        padding: 10,
        borderRadius: 8,
    },
    toolText: {
        color: '#fff',
        fontSize: 12,
    },
});
