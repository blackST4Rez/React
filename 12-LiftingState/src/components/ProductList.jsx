function ProductList({ search }) {

    const products = [
        "iPhone",
        "Samsung",
        "Pixel"
    ];

    const filteredProducts = products.filter(product =>
        product.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {filteredProducts.map(product => (
                <p key={product}>{product}</p>
            ))}
        </>
    );
}

export default ProductList;