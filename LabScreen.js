import React, { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { PracticeTracker } from './PracticeTracker';
import { Stopwatch } from './Stopwatch';
import { useStopwatch } from './useStopwatch';

export function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Call the custom stopwatch hook
  const seconds = useStopwatch(isRunning);

  // Event handlers passed as function references
  const handleSolve = () => setSolved((s) => s + 1);
  const handleReset = () => setSolved(0);
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <SafeAreaView style={styles.container}>
      <PracticeTracker 
        solved={solved} 
        onSolve={handleSolve} 
        onReset={handleReset} 
      />
      
      <Stopwatch 
        seconds={seconds} 
        isRunning={isRunning} 
      />

      <View style={styles.buttonRow}>
        <Button title="Start" onPress={handleStart} color="#5cb85c" />
        <Button title="Stop" onPress={handleStop} color="#f0ad4e" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  buttonRow: { flexDirection: 'row', justifyContent: 'center', gap: 20, marginTop: 20 }
});