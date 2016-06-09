var React = require('react'),
    ProductSelection = require('./ProductSelection.js'),
    Product = require('./Product.js');

var ProductList = React.createClass({
    render: function() {
        return (
            <div>
                <ProductSelection />
                <Product name="product 1" />
                <Product name="product 2" />
                <Product name="product 3" />
            </div>
        );
    }
});

module.exports = ProductList;