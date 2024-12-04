import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const videos = [
    { id: '1', title: 'Video 1' },
    { id: '2', title: 'Video 2' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YouTube Videos</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.videoItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Video" onPress={() => navigation.navigate('AddVideo')} />
      <Button title="Favorites" onPress={() => navigation.navigate('Favorites')} />
      <Button title="User Profile" onPress={() => navigation.navigate('User')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  videoItem: { fontSize: 18, marginVertical: 10 },
});

export default HomeScreen;
