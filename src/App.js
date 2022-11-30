import {useState} from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const response = await searchImages(term);

        console.log(response);
        setImages(response);
    };

    return <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images}/>
    </div>;
}

export default App;