$(function(){
    const szuloElem = $("article");
    const sablonElem = $(".lampa");
    const meret = 9;
    const lampak=[]
        for (let k = 0; k < meret; k++) {
            const ujElem = sablonElem.clone().appendTo(szuloElem);
            const lampa = new Lampa(ujElem , k);
            lampak.push(lampa);
        }
       
    sablonElem.remove();
    $(window).on("lampaKattintas", (event)=>{
        
        console.log(event.detail.id);
        if(event.detail.id===4){
            
            lampak[1].atvalt();
            lampak[5].atvalt();
            lampak[3].atvalt();
            lampak[7].atvalt();
        }else if(event.detail.id===0){
            lampak[1].atvalt();
            lampak[3].atvalt();
        }
        else if(event.detail.id===1){
            lampak[2].atvalt();
            lampak[0].atvalt();
            lampak[4].atvalt();
        }else if(event.detail.id===2){
            lampak[5].atvalt();
            lampak[1].atvalt();
            
        }else if(event.detail.id===3){
            lampak[6].atvalt();
            lampak[0].atvalt();
            lampak[4].atvalt();
        }else if(event.detail.id===5){
            lampak[8].atvalt();
            lampak[2].atvalt();
            lampak[4].atvalt();
        }else if(event.detail.id===6){
            lampak[7].atvalt();
            lampak[3].atvalt();
            
        }else if(event.detail.id===7){
            lampak[6].atvalt();
            lampak[8].atvalt();
            lampak[4].atvalt();
        }else if(event.detail.id===8){
            lampak[5].atvalt();
            lampak[7].atvalt();
            
        }if(lampak[1].allapot===true && lampak[1].allapot===true && lampak[2].allapot===true && lampak[3].allapot===true && lampak[4].allapot===true && lampak[5].allapot===true && lampak[6].allapot===true && lampak[7].allapot===true && lampak[8].allapot===true && lampak[0].allapot===true){
            alert("Nyertél!!!!");
            
        }
//        event.detail.id
    });
    
    
});

