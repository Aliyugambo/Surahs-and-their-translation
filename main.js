const API_URL = 'http://api.alquran.cloud/v1/meta';
let SurahData = [];


// DISPLAYING MY DATA ON THE PAGE;
async function displaySurahs() {
   
    await getBooks();
    console.log(SurahData);
    document.getElementById("books").innerHTML = SurahData.map(references => 
        `
            <div class="">
                <p>${references.number}</p>
                <p>${references.name}</p>
                <p>${references.englishNameTranslation}</p>
            </div>
        `
    ).join("")
    
};
displaySurahs();

// Fetching My Data From the API
async function getBooks() {
  const resp = await fetch(API_URL);
    // console.log(resp);
    const data = await resp.json();
    // console.log(data);
    const suras = await data.data.surahs;
    // console.log(suras);
    SurahData = suras.references;
    // console.log(SurahData);

};
