import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Solved: {solved}</Text>
      
      {/* Conditional rendering when solved reaches 5 */}
      {solved >= 5 && <Text style={styles.congrats}>Great job!</Text>}

      <View style={styles.buttonContainer}>
        <Button title="Solve +1" onPress={onSolve} />
        <Button title="Reset" onPress={onReset} color="#d9534f" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 15, alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  congrats: { color: 'green', marginBottom: 10, fontWeight: '600', fontSize: 16 },
  buttonContainer: { flexDirection: 'row', gap: 10, marginTop: 5 }
});