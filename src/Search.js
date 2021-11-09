/**Criação do componete Search */

function Search(props){

   function searchImput(){
     //alert('digitei algo');

     let correntCity = document.querySelector('input[name=searchImput]').value;
     //alert(correntCity);
     /*
       Fazer requisições depois.........           
     */
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${correntCity}&appid=5e37b6326b1d06419df09e3865e32336`
     fetch(url)
     .then(response=>response.json())
     .then(data=>{
       const{main,name,sys,weather}=data; //fazendo un destructo ou seja retirando o valor individual
        if(sys != undefined)
        console.log(sys)
        if(weather!=undefined)
       console.log(weather[0]['description']);
      })
    };

 return(
     <div className = "search">
        <input placeholder = {props.placeholder} onKeyUp={searchImput} type="text" name="searchImput"/>
     </div>
 )

}

export default Search;