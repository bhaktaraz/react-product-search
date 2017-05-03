import React from 'react';
import ProductCategoryRowComponent from './ProductCategoryRowComponent.jsx';
import ProductRowComponent from './ProductRowComponent.jsx';

export default class ProductTableComponent extends React.Component
{
    constructor(props) {
        super(props)
    }

    render() {
        var rows = [];
        var lastCategory = null;
        console.log(this.props.inStockOnly)
        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRowComponent category={product.category} key={product.category} />);
            }
            rows.push(<ProductRowComponent product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}