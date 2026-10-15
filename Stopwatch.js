import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Stopwatch({ seconds, isRunning }) {
  // Format seconds into MM:SS format
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      <Text style={[styles.statusText, { color: isRunning ? 'green' : '#d9534f' }]}>
        {isRunning ? 'Running...' : 'Paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 15, alignItems: 'center' },
  timerText: { fontSize: 28, fontWeight: 'bold' },
  statusText: { fontSize: 16, fontStyle: 'italic', marginTop: 5 }
});