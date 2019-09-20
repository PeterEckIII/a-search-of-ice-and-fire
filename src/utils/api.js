// An API to easily access the ASOIAF API

const api = {};
// Books
api.getBookByName = bookName => {
    const encodedBookName = bookName.replace(" ", "%20");
    return `http://www.anapioficeandfire.com/api/books/${ encodedBookName }`
}

api.getAllBooks = () => {
    return `http://www.anapioficeandfire.com/api/books`;
}

// Characters
api.getCharacterByName = characterName => {
    const encodedCharacterName = characterName.replace(" ", "%20")
    return `http://www.anapioficeandfire.com/api/characters?name=${ encodedCharacterName }`
}

api.getCharacterByCulture = (cultureName) => {
    const encodedCultureName = cultureName.replace(" ", "%20");
    return `http://www.anapioficeandfire.com/api/characters?culture=${ encodedCultureName }`;
}

api.getAllCharacters = () => {
    return `http://www.anapioficeandfire.com/api/characters/`;
}

// Houses
api.getHouseByName = houseName => {
    const encodedHouseName = houseName.replace(" ", "%20");
    return `http://www.anapioficeandfire.com/api/houses?name=${ encodedHouseName }`;
}

api.getHouseByRegion = regionName => {
    const encodedRegionName = regionName.replace(" ", "%20");
    return `http://www.anapioficeandfire.com/api/houses?region=${ encodedRegionName }`;
}

api.getAllHouses = () => {
    return `http://www.anapioficeandfire.com/api/houses/`;
}

export default api;
