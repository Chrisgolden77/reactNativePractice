/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useReducer} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {useCountReducer} from '../utilities/reducers';
import {handleStorage} from '../utilities/storage';

export const HomeScreen = ({route, navigation}) => {
  const [count, dispatchCount] = useReducer(useCountReducer, 0);
  const getStoredCount = async () => {
    try {
      const storedCount = await handleStorage({
        type: 'getOne',
        keys: ['@count'],
      });
      if (!storedCount) throw 'No count found in storage!';
      await dispatchCount({type: 'set', value: storedCount});
    } catch (error) {
      alert(error);
    }
  };
  const removeStoredCount = async () => {
    try {
      const storedCount = await handleStorage({
        type: 'removeOne',
        keys: ['@count'],
      });
      alert('Count removed!');
      await dispatchCount({type: 'set', value: 0});
    } catch (error) {
      alert(error);
    }
  };``
  const storeCurrentCount = async () => {
    try {
      await handleStorage({
        type: 'set',
        keys: ['@count'],
        value: count,
      });
      alert('Successfully stored count!');
    } catch (error) {
      alert('Something went wrong!');
    }
  };
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View>
              <View style={styles.sectionContainer}>
                <Text style={{...styles.sectionTitle, textAlign: 'center'}}>
                  {count}
                </Text>
              </View>
              <View
                style={{
                  aligntItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableHighlight
                  accessibilityLabel="increment button"
                  onPress={() => dispatchCount({type: 'increment'})}
                  underlayColor="lightgreen"
                  style={{
                    backgroundColor: 'green',
                    ...styles.touchableHighlightButton,
                  }}>
                  <View>
                    <Text style={[styles.sectionTitle, {color: 'white'}]}>
                      Increment
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  accessibilityLabel="decrement button"
                  onPress={() => dispatchCount({type: 'decrement'})}
                  underlayColor="lightpink"
                  style={{
                    backgroundColor: 'red',
                    ...styles.touchableHighlightButton,
                  }}>
                  <View>
                    <Text style={[styles.sectionTitle, {color: 'white'}]}>
                      Decrement
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>

              <Button
                accessibilityLabel="increment count button"
                title="Get Saved Count"
                color="salmon"
                onPress={getStoredCount}
              />
              <Button
                accessibilityLabel="increment count button"
                title="Reset Count"
                color="orange"
                onPress={() => dispatchCount({type: 'reset'})}
              />
              <Button
                accessibilityLabel="set count button"
                title="set Count to 69"
                color="purple"
                onPress={() => dispatchCount({type: 'set', value: 69})}
              />
              <Button
                accessibilityLabel="set count button"
                title="Save Current Count"
                color="steelblue"
                onPress={storeCurrentCount}
              />
              <Button
                accessibilityLabel="set count button"
                title="Remove Stored Count"
                color="red"
                onPress={removeStoredCount}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableHighlightButton: {
    borderRadius: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    margin: 15,
  },
  scrollView: {
    backgroundColor: Colors.dark,
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

export default HomeScreen;
