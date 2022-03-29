import React, {Component} from 'react';
import {FlatList,StyleSheet,View} from 'react-native';
import EventCard from './Card'
import {Text} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#b3b3ff',
    }
  });

class EventList extends Component{
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./data.json').events;
        this.setState( {events} );
    }
    render() {
        return(

            <View style={styles.container}>
            <FlatList
                data = {this.state.events }
                renderItem = { ({item}) => <EventCard eventItem = {item} />}
            ></FlatList>
            </View>

        );
    };
};

export default EventList;