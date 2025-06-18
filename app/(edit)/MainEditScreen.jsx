import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;



const MainEditScreen = () => {
    const { selectedVideos = '[]', selectedPhotos = '[]' } = useLocalSearchParams();
    const videos = JSON.parse(selectedVideos);
    const photos = JSON.parse(selectedPhotos);
    const allMedia = [...videos, ...photos];
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    // const router = useRouter
    // useEffect(() => {
    //     // You could auto-play video or prepare for editing here
    // }, []);
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
                    <>
                        <Image
                            source={{ uri: allMedia[currentMediaIndex] }}
                            style={styles.previewImage}
                            resizeMode="cover"
                        />
                        <TouchableOpacity style={styles.playButton}>
                            <Ionicons name="play" size={28} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.fullscreenButton}>
                            <Feather name="maximize" size={20} color="white" />
                        </TouchableOpacity>
                    </>
                )}
            </View>

            {/* Timeline */}
            <View style={styles.timelineWrapper}>
                <Text style={styles.timelineLabel}>00:55 / 02:20</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.timeline}>
                    <TouchableOpacity style={styles.addMediaButton}>
                        <Ionicons name="add" size={24} color="white" />
                    </TouchableOpacity>
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
                <View style={styles.musicBar}>
                    <Text style={{ color: '#aaa', fontSize: 12 }}>+ Add music</Text>
                </View>
            </View>

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
        paddingTop: 50,
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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: screenWidth * 1.2,
    },
    previewImage: {
        width: screenWidth,
        height: '100%',
    },
    playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -14 }, { translateY: -14 }],
        backgroundColor: '#00000080',
        padding: 10,
        borderRadius: 20,
    },
    fullscreenButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#00000080',
        padding: 6,
        borderRadius: 12,
    },
    timelineWrapper: {
        paddingBottom: 10,
    },
    timelineLabel: {
        paddingLeft: 10,
        fontSize: 12,
        color: '#fff',
    },
    timeline: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 5,
    },
    addMediaButton: {
        width: 60,
        height: 60,
        borderRadius: 6,
        backgroundColor: '#444',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
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
    musicBar: {
        marginTop: 6,
        paddingLeft: 10,
    },
    toolbar: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 8,
        backgroundColor: '#111',
    },
    toolButton: {
        marginHorizontal: 6,
        backgroundColor: '#222',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
    },
    toolText: {
        color: '#fff',
        fontSize: 12,
    },
});
