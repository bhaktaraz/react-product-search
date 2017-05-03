import React from 'react';
import {render} from 'react-dom';

import FilterableProductTableComponent from './FilterableProductTableComponent.jsx';
import products from './products';

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            products: props.products
        }
    }

    render () {
        return (
            <div>
                <p> Product Search!</p>
                <FilterableProductTableComponent
                    products={this.state.products}
                />
            </div>
        );
    }
}

render(<App products={products}/>, document.getElementById('app'));