import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

export default class ListItem extends Component {

    onRowPress(){
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render () {
        let { name } = this.props.employee;
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            { name }
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
            
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15
    }
}