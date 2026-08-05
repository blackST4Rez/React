import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";

function App() {

    const [search, setSearch] = useState("");

    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <ProductList
                search={search}
            />
        </>
    );
}

export default App;