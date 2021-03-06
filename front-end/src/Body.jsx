import React from 'react';
import { Route } from 'react-router-dom';
import ItemList from './containers/ItemList';

const style = {
    padding: 'calc(1vw + 2px)'
}

export const Body = () => (
    <div style={style}>
        <Route path="/" component={ItemList} />
    </div>
);