import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity 
            style={styles.button}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export function TaskCard(){
    <TouchableOpacity 
        style={styles.buttonTask}
        onPress={() => handleRemoveTask(item.id)}
    >
    <Text style={styles.textTask}>
    {item.name}
    </Text>
    </TouchableOpacity>
}

