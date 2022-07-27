const datos = []
let url = "https://randomuser.me/api/?results=15"
fetch(url)
      .then(response => response.json())
      .then(data => getData(data))
      .catch(error => console.log)

expo
function getData(data){
      
  const body = document.getElementById("data")
  for(let i =0; i< data.results.length; i++) {
        const newData = {
            name: data.results[i].name.first,
            lasName: data.results[i].name.last,
            age: data.results[i].dob.age,
            gender: data.results[i].gender,
            email: data.results[i].email,
            country: data.results[i].location.country,
            foto: data.results[i].picture.thumbnail
        }
        datos.push(newData)
  }

  let datosSort = datos.sort(function(a,b){
      if (a.age > b.age) {
            return 1;
      }
      if (a.age < b.age) {
            return -1;
      }
            return 0;
  })

  body.innerHTML = "";

  let template = "";
  for(const data of datosSort) {
      template += `
      <tr>
        <td>${data.name}</td>
        <td>${data.lasName}</td>
        <td>${data.age}</td>
        <td>${data.gender}</td>
        <td>${data.email}</td>
        <td>${data.country}</td>
        <td><img src="${data.foto}" alt="foto"></td>
      </tr>
      `
  }
  body.innerHTML = template
}
