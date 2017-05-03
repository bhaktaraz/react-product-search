import React from 'react';

export default class ProductCategoryRowComponent extends React.Component
{
    render() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
}