/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Separator,
  Button,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count + -1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <View style={styles.body}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  aligntItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableHighlight
                  accessibilityLabel="increment button"
                  onPress={incrementCount}
                  underlayColor="lightgreen"
                  style={{
                    backgroundColor: 'green',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    margin: 5,
                  }}>
                  <View>
                    <Text style={[styles.sectionTitle, {color: 'white'}]}>
                      Increment
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  accessibilityLabel="decrement button"
                  onPress={decrementCount}
                  underlayColor="lightpink"
                  style={{
                    backgroundColor: 'red',
                    borderRadius: 20,
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    margin: 5,
                  }}>
                  <View>
                    <Text style={[styles.sectionTitle, {color: 'white'}]}>Decrement</Text>
                  </View>
                </TouchableHighlight>
              </View>

              <Button
                accessibilityLabel="increment count button"
                title="Reset Count"
                color="orange"
                onPress={resetCount}></Button>

              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{count}</Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
