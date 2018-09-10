import {
  ActivityIndicator,
  Text,
  ViewPropTypes,
  SafeAreaVew,
} from 'react-native';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default class Feed extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
  };

  static defaultProps = {
    style: null,
  };

  async componentDidMount() {
    try {
      const items = await fetchImages();

      this.setState({
        loading: false,
        items,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  render() {
    const { style } = this.props;
    const { loading, error, items } = this.state;

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>Error...</Text>;
    }

    return (
      <SafeAreaView style={style}>
        <CardList items={items} />
      </SafeAreaView>
    );
  }
}