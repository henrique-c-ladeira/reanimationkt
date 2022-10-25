/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {AnimatedList} from './AnimatedList';

import {AnimatedSelectable} from './AnimatedSelectable';
import {StatusIndicator, StatusIndicatorProps} from './StatusIndicator';

const App: React.FC = () => {
  const [selected, setSelected] = useState('none');
  const [status, setStatus] = useState<StatusIndicatorProps['status']>('idle');
  const [show, setShow] = useState(true);
  const [list, setList] = useState([1, 2, 3]);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          height: '100%',
        }}>
        <Button
          onPress={() => {
            setSelected('none');
          }}
          title="Disable All"
        />
        <View style={{flexDirection: 'row'}}>
          <AnimatedSelectable
            selected={selected === 'first'}
            onPress={() => setSelected('first')}
          />
          <View style={{width: 20}} />
          <AnimatedSelectable
            selected={selected === 'second'}
            onPress={() => setSelected('second')}
          />
          <View style={{width: 20}} />
          <AnimatedSelectable
            selected={selected === 'third'}
            onPress={() => setSelected('third')}
          />
        </View>

        <Text style={{margin: 30, fontSize: 20}}>
          Selected: {selected.toUpperCase()}
        </Text>

        <StatusIndicator status={status} />

        <Button
          onPress={() => {
            setStatus('pending');
            setTimeout(() => setStatus('error'), 5000);
          }}
          title="API CALL ERROR"
        />
        <Button
          onPress={() => {
            setStatus('pending');
            setTimeout(() => setStatus('success'), 5000);
          }}
          title="API CALL SUCCESS"
        />
        <Button
          onPress={() => {
            setStatus('idle');
          }}
          title="API RESET"
        />

        <Button
          onPress={() => {
            setShow(prev => !prev);
          }}
          title="Show"
        />
        {show && <AnimatedList array={list} />}
        <Button
          onPress={() => {
            setList(prev =>
              prev.length === 3 ? [2, 9, 0, 4, 6, 7, 8, 3, 5] : [1, 3, 4],
            );
          }}
          title="TOGGLE"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
