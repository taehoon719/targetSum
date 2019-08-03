import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



export default class RandomNumber extends Component{
    static propTypes = {
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired
    }
    handlePress = () => {
        if (this.props.isDisabled) {return; }
        this.props.onPress(this.props.id);
    };

    render(){
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>{this.props.number}</Text>
            </TouchableOpacity>
        );
    }
    
};

const styles = StyleSheet.create({
    random: {
        backgroundColor: 'yellow',
        width: 100,
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 30,
    },
    disabled: {
        opacity: 0.3
    }
  });