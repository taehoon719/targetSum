/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
} from 'react-native';
import Game from './src/components/Game'

export default class App extends Component {
  state = {
    gameId: 1,
  };

  resetGame = () => {
    this.setState((prevState) => {
      return {gameId: prevState.gameId +1};
    });
  };
  render() {
    return (
      <Game key={this.state.gameId} 
        onPlayAgain={this.resetGame}
        randomNumberCount={6} 
        initialSeconds={10}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
  }

});