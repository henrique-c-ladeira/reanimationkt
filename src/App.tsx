/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import {AnimatedList} from './AnimatedList';

import {fetchApi} from './fetchApi';

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const [list, setList] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (toggle) {
      fetchApi(12, 0).then(res => setList(res));
    } else {
      fetchApi(12, Math.floor(6 * Math.random())).then(res => setList(res));
    }
  }, [toggle]);

  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
        }}>
        <Button
          onPress={() => {
            setShow(prev => !prev);
          }}
          title="Show"
        />
        <Button
          onPress={() => {
            setToggle(prev => !prev);
          }}
          title="Change"
        />
        {show && <AnimatedList array={list} />}
      </View>
    </SafeAreaView>
  );
};

export default App;
