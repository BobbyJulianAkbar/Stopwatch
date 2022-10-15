import * as React from 'react';
import { Appbar } from 'react-native-paper';

//heading

const AppHeader = () => {
    return (
        <Appbar.Header style={{background:'black'}}>
            <Appbar.Content title="Stopwatch" style={{alignItems:'center'}}></Appbar.Content>
        </Appbar.Header>
    )
}

export default AppHeader;