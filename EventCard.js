import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function EventCard({eventItem}) {
    return(
        <View style={styles.card}>
            <View style={StyleSheet.cardHeader}>
                <Text style={StyleSheet}>Марка:{eventItem.brand}|
                |Модел:{eventItem.model}| |Година на производство:{eventItem.year}| |цена:{eventItem.price}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
    backgroundColor: '#F7B1A1',
    flex: 1,
    padding: 10,
    paddingBottom: 20,
    margin: 10,
    marginBottom: 5,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderTopWidth:5,
    
    },
    cardHeader: {
    flex: 1,
    flexDirection: 'row'
    }
   });