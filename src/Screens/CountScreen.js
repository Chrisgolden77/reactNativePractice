import React, {useReducer} from 'react';
import {View, Text, Button, TouchableHighlight} from 'react-native';
import {useCountReducer} from '../utilities/reducers';
import {handleStorage} from '../utilities/storage';
import {styles} from '../utilities/styles';

export const CountScreen = () => {
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
      await handleStorage({
        type: 'removeOne',
        keys: ['@count'],
      });
      alert('Count removed!');
      await dispatchCount({type: 'set', value: 0});
    } catch (error) {
      alert(error);
    }
  };
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
    <View style={styles.body}>
      <View>
        <View style={styles.sectionContainer}>
          <Text style={{...styles.sectionTitle, textAlign: 'center'}}>
            {count}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
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
  );
};
