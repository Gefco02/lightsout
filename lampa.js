class Lampa{
    constructor(elem, id){
        this.elem=elem;
        this.allapot=false;
        this.setLampa();
        this.id=id;
        this.elem.on("click", ()=>{
            this.atvalt();
            this.kattintasTrigger();
        });
    }
    
    atvalt(){
        this.allapot =! this.allapot;
        this.setLampa();
        
    }

    setLampa(){
        if(this.allapot){
            this.elem.css("background-color" , "yellow");
        } else{
            this.elem.css("background-color" , "red");
        }
    }
    
    kattintasTrigger(){
        
        let esemeny = new CustomEvent("lampaKattintas", {detail:this});
        window.dispatchEvent(esemeny);
        
        

    }
    
}

