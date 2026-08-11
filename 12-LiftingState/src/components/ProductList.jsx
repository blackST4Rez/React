function ProductList({ search }) {
    const products = ["iPhone", "Samsung", "Pixel"];

    const filteredProducts = products.filter((product) =>
        product.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <>
        {search.length > 0
            ?
            filteredProducts.map((product) => <p key={product}>{product}</p>)
            : "Type something "
        }
        </>
    );
}

export default ProductList;
