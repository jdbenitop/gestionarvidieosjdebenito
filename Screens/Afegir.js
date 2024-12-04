import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddVideoScreen = ({ navigation }) => {
  const [url, setUrl] = useState('');

  const handleAddVideo = () => {
    // Aquí afegiries la lògica per guardar el vídeo
    console.log('New Video URL:', url);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter YouTube URL"
        value={url}
        onChangeText={setUrl}
      />
      <Button title="Add Video" onPress={handleAddVideo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default AddVideoScreen;
