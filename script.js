var tbody = document.getElementById("tbody");
console.log(tbody);

fetch("https://api.myjson.com/bins/yw3n2")
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    console.log(myJson);
    myJson.teams.forEach(r => {
      var id = r.id;
      var name = r.name;
      var logo = r.logo;
      var w = r.results.wins;
      var l = r.results.losses;
      var winp = r.results.winpercent;
      var gamesbehind = r.results.gamesbehind;
      var conferencerecord = r.results.conferencerecord;
      var divisionrecord = r.results.divisionrecord;
      var homerecord = r.results.homerecord;
      var awayrecord = r.results.awayrecord;
      var lastten = r.results.lastten;
      var streak = r.results.streak;

      tbody.innerHTML += `<tr> 
                          <td>${id}</td> 
                          <td><img src="${logo}" width="42" height="42"></td> 
                          <td>${name}</td> 
                          <td>${w}</td> 
                          <td>${l}</td>
                          <td>${winp}</td>
                          <td>${gamesbehind}</td>
                          <td>${conferencerecord}</td>
                          <td>${divisionrecord}</td>
                          <td>${homerecord}</td>
                          <td>${awayrecord}</td>
                          <td>${lastten}</td>
                          <td>${streak}</td>
                          </tr>`;
    });
  });
