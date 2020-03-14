import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { bInterpolate, useTimingTransition } from 'react-native-redash';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ResourceItem, { LIST_ITEM_HEIGHT } from './ResourceItem';
import Chevron from '../Chevron';

const Resource = ({ categoryName, allResources }) => {
  const [open, setOpen] = useState(false);
  const transition = useTimingTransition(open, { duration: 400 }, Easing.inOut(Easing.ease));
  const resource = allResources.filter((res) => res.category === categoryName);

  const height = bInterpolate(transition, 0, LIST_ITEM_HEIGHT * resource.length);
  const bottomRadius = open ? 0 : 8;

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
        <Animated.View
          style={[
            styles.container,
            {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius,
            },
          ]}
        >
          <Text style={styles.title}>{categoryName}</Text>
          <Chevron {...{ transition }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <ScrollView>
        <Animated.View style={[styles.items, { height }]}>
          {resource
            .filter((resource) => resource.category === categoryName)
            .map((res, index) => (
              <ResourceItem key={index} resource={res} isLast={index === resource.length - 1} />
            ))}
        </Animated.View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: '#879e55',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  items: {
    overflow: 'hidden',
  },
});

export const mapStateToProps = (state) => ({
  allResources: state.allResources,
});

export default connect(mapStateToProps)(Resource);
