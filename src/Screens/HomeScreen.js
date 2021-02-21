/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  TouchableHighlight,
  Text,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../utilities/styles';

export const HomeScreen = ({route, navigation}) => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.body}>
        <TouchableHighlight
          accessibilityLabel="increment button"
          onPress={() => navigation.navigate('Count')}
          underlayColor="lightblue"
          style={{
            backgroundColor: 'steelblue',
            ...styles.touchableHighlightButton,
          }}>
          <View>
            <Text style={[styles.sectionTitle, {color: 'white'}]}>
              Go to Count
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};
