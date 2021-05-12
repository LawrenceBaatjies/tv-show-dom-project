
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

    var summary = document.createElement('p');
    summary.innerHTML = allEpisodes.summary;
    episodeDiv.appendChild(summary);
    summary.className = "summary";
  
  }

