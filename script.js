
//You can edit ALL of the code here
// function setup() {
//    function setup() {
//     const allEpisodes = getAllEpisodes();
//     makePageForEpisodes(allEpisodes);
    
//   }
//   function makePageForEpisodes(episodeList) {
//     const rootElem = document.getElementById("root");
//     rootElem.textContent = `Got ${episodeList.length} episode(s)`;
//   }
// };
//   window.onload = setup;
// ####################################################################################################################################
let episodeFrames = document.getElementById('episodeFrames');
  let searchBar = document.getElementById('searchBar');
let allEpisodes = getAllEpisodes();
let episodeCode = "";

 allEpisodes.forEach(display);

// Main Function
function display(allEpisodes) {

  if(allEpisodes.number <= 9 && allEpisodes.season <= 9 ){

    episodeCode =`S0${allEpisodes.season} E0${allEpisodes.number}`;
  }else if(allEpisodes.number <= 9 && allEpisodes.season > 9){
    episodeCode = `S${allEpisodes.season} 0E${allEpisodes.number}`;

  }else if(allEpisodes.number > 9 && allEpisodes.season <= 9) {
    episodeCode = `S0${allEpisodes.season} E${allEpisodes.number}`;

  }else if(allEpisodes.number > 9 && allEpisodes.season > 9) {
    episodeCode = `S${allEpisodes.season} E${allEpisodes.number}`;
  }

  // The Div
  let episodeDiv =document.createElement('div');
    episodeDiv.className = "episodeDiv";
    document.body.appendChild(episodeDiv)

  // The title and Episode comedy
    let episodeTitle = document.createElement('h2');
    episodeTitle.className = "episodeTitle";
    episodeTitle.innerHTML = `${allEpisodes.name} ${episodeCode}`;
    episodeDiv.appendChild(episodeTitle);

      //The img
    let episodeImg = document.createElement('img');
    episodeImg.src = allEpisodes.image.medium;
    episodeDiv.appendChild(episodeImg);
    episodeImg.className = "episodeImg";

    let summary = document.createElement('p');
    summary.innerHTML = allEpisodes.summary;
    episodeDiv.appendChild(summary);
    summary.className = "summary";
  
  }

  let searchResults = document.getElementById('searchResults');

  searchBar.addEventListener('keyup', function(e){
    let searchTerm = e.target.value.toLowerCase();
  
    let filteredEpisodes = allEpisodes.filter((episode) => {
  
      return (
        episode.name.toLowerCase().includes(searchTerm) ||
        episode.summary.toLowerCase().includes(searchTerm)
      );
  
    });
  
    displayCharacters(filteredEpisodes);
  
  });

    const displayCharacters = (episodes) => {

    const htmlString = episodes.map((episodes) => {
  
        if (episodes.number <= 9 && episodes.season <= 9) {
          episodeCode = `S0${episodes.season}E0${episodes.number}`;
        } else if (episodes.number <= 9 && episodes.season > 9) {
          episodeCode = `S${episodes.season}0E${episodes.number}`;
        } else if (episodes.number > 9 && episodes.season <= 9) {
          episodeCode = `S0${episodes.season}E${episodes.number}`;
        } else if (episodes.number > 9 && episodes.season > 9) {
          episodeCode = `S${episodes.season}E${episodes.number}`;
        } 
  
        return `
              <div class="character">
                  <h2>${episodes.name} ${episodeCode}</h2>
                  <p> ${episodes.summary}</p>
                  <img src="${episodes.image.medium}"></img>
              </div>
          `;
      });
     
  
    searchResults.innerHTML = `Displaying ${htmlString.length} of 73`;
    episodeFrames.innerHTML = htmlString;
    

    }