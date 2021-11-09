/**Criação do componete Search */
import { useState } from "react";

function Search(props) {
  const [cidade, setCidade] = useState("");

  function searchImput(e) {
    //alert('digitei algo');
    e.preventDefault(); //para não atualizar a pagina
    //setCidade("");//
    let correntCity = document.querySelector("input[name=searchImput]").value;
    //alert(correntCity);
    /*
       Fazer requisições depois.........           
     */
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${correntCity}&appid=5e37b6326b1d06419df09e3865e32336`;
    fetch(url)

      .then((response) => response.json())
      .then((data) => {

        const { main, name, sys, weather } = data; //fazendo un destructo ou seja retirando o valor individual

        if (sys !== undefined) {
          //console.log(sys);
          if (weather !== undefined) {
            //console.log(weather[0]["description"]);
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
              weather[0]["icon"]}.svg`;  //url do icone 
              setCidade(`
              <div class="container-city">
              <p>Temperatura : ${main.temp}</p>
              <p>Pais : ${sys.country}</p>
              <p>Cidade : ${name}</p>
              <P>Descrição : ${weather[0]['description']}</P>
              <img  src ="${icon}"/>     
              </div>
              `);
          }      
        }else{
          setCidade("");
        }
      });
  }

  return (   //deve sempre retornar dentro de uma div
    <div className="searchWrapper">
      <div className="search">
      <h2> Digite a cidade para ver a Previsão  </h2>
        <form onSubmit={(e) => searchImput(e)}>
          <input
            placeholder={props.placeholder}
            type="text"
            name="searchImput"
          />
          <input type="submit" value="Pesquisar" />
        </form>
      </div>
       {
         (cidade!=="")?
         <div dangerouslySetInnerHTML={{__html:cidade}}/>:
         <div>Pesquise por algo acima </div>
       }

    </div>//searcRapper    
  );
}

export default Search;
