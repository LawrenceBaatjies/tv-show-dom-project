
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
let searchResults = document.getElementById('searchResults');
let selectList = document.getElementById("selects");
let  homeBtn = document.getElementById("homeBtn");

 allEpisodes.forEach(display);

 // creating a dropdown list
allEpisodes.map((episodes) => {
  var option = document.createElement("option");
  option.value = episodes.name;
  option.text = episodes.name;
  selectList.appendChild(option);
});



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
    document.body.appendChild(episodeDiv);

  // The title and Episode 
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

 

  searchBar.addEventListener('keyup', function(el){
    let searchTerm = el.target.value.toLowerCase();
    
    
   
  
    let filteredEpisodes = allEpisodes.filter((episode) => {
  
      return (
        episode.name.toLowerCase().includes(searchTerm) ||
        episode.summary.toLowerCase().includes(searchTerm)
      );
  
    });
  
    displayCharacters(filteredEpisodes);
  
  });

    const displayCharacters = (episodes) => {

    const htmlIndex = episodes.map((episodes) => {
  
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
     
  
    searchResults.innerHTML = `Displaying ${htmlIndex.length} of 73`;
    episodeFrames.innerHTML = htmlIndex;
    

    
    }

 