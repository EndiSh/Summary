// Te gjendet shuma e numrave te nje array
  // kur ai ka me shume se 2 elemente ne te.
  // te perdoret menyra asyncron duke perdorur promises
  

function vlera(parameter){
    return new Promise((resolve, reject) => {
    
      //const arr = [1,2,3,4];
      if(parameter.length> 2) {
        var shuma = 0
        parameter.map((el)=>{
        shuma = shuma +el
        } );
        resolve(shuma);
      }
      else {
        reject("error arr nuk ka mjaftueshem elemente")
      }
      console.log(shuma)
      
    
  });
  }
  var parametri = [1,2,3,4,5]
  
  // metoda e pare therritja e funksionit duke perdorur logjiken e promises
  vlera(parametri).then((vleraQeNaKthenFunksioniNeResolvePraNeSukses) => {
    console.log("therritja e funksionit me sintaksen e promises", vleraQeNaKthenFunksioniNeResolvePraNeSukses);
  
  })
  .catch((vleraErroritPerkatesSipasRastit) => {
    console.error(vleraErroritPerkatesSipasRastit);
  });
  
  // therritja e funksionit duke perdorur menyren e async/await
  const funksioni2 = async ()=> {
  
    try {
      const rezultati = await vlera(parametri);
      console.log(" therritja e funksioni2 me metoden async await", rezultati)
  
    }
    catch(error) {
      console.error(error);
  
  
    }
  }
  funksioni2()