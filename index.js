var xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
xhr.send()
xhr.onload = function (){
    if(xhr.status == 200){
        //console.log(JSON.parse(xhr.response))
        print_data(xhr.response)
    }
    else{
        console.log("Error Code is:" + xhr.status)
    }
}


var print_data = function(input){
    //console.log(input);
          if(input == null){
                  display.textContent = 'Error! No weather data received or invalid reques'
                      }
                  else{
                    var json = JSON.parse(input);
                    console.log(json)
                    function create_grid(){
                        for(i=0;i< json.length;i++){
                            $(".container").append("<div class='col-sm-6 col-lg-4 col-md-4 float-right text-center mb-5 mt-5'>" + "<div class='card bg-info font-weight-bolder'>" +
                            "<img src="+json[i].image +"class='card-img-top' alt=''>"+
                            "<div class='card-body  ' >" + "<h5 class='card-title text-danger'>"  +json[i].name+
                            "</h5>" + "<p class='card-text'>Symbol: " +json[i].symbol + "</p>" +
                            "<p class='card-text'>Current Price: " +json[i].current_price + "</p>" +
                            "<p> Last Updated:" + json[i].last_updated+"</p>"+
                            "<p class='card-text'>Market_cap_rank: " +json[i].market_cap_rank + "</p>" +"</div>" + "</div>" + "</div>");
   
                        }
                    }
                    create_grid();                   
                }        
            }
