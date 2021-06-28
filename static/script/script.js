let personagemSelecionado1;
let personagemSelecionado2;

const elementos = document.getElementsByClassName('wrapper-card');

for (const elemento of elementos) {
    elemento.addEventListener('click', marcarElementoSelecionado);
    elemento.addEventListener('mouseover', function(){
        console.log(this.id)
        if (this.id === 'card-sasuke'){

            document.body.style.background = "url(../static/img/sasuke-bg.jpg)";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
            document.body.style.transition = "all 1s ease"
        }else if(this.id === 'card-gaara'){
            document.body.style.background = "url(../static/img/gaara-bg.jpg)";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
            document.body.style.transition = "all 1s ease"
        }else if(this.id === 'card-rocklee'){
            document.body.style.background = "url(../static/img/rocklee-bg.jpg)";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
            document.body.style.transition = "all 1s ease"
        }else if(this.id === 'card-naruto'){
            document.body.style.background = "url(../static/img/naruto-bg.jpg)";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
            document.body.style.transition = "all 1s ease"
        }

       
    })
    elemento.addEventListener('mouseout', function(){
        document.body.style.background = "url(../static/img/bg.jpg)";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
        
    })
}

document.getElementById('button').addEventListener('click', validation)

function validation () {
    
    const personagens = document.getElementsByClassName('selecionado');
    if (personagens.length < 2){
        
        alert('Necessita selecionar 2 personagens')
    }else if(personagens.length > 2){
        
        alert('Só é possivel selecionar 2 personagens')
    }

    
}
function marcarElementoSelecionado() {
    const personagens = document.getElementsByClassName('selecionado');
    const buttonPrincipal = document.getElementById('button')
    if (!this.classList.contains('selecionado')){

        this.classList.add('selecionado')
        
        
    }else{
        this.classList.remove('selecionado')
    
    }
    if (personagens.length == 1){
        buttonPrincipal.innerHTML = '<form action="/" ><button> Assistir a luta! </button> </form>'
        
    }else if(personagens.length > 2){
        buttonPrincipal.innerHTML = '<form action="/" ><button> Assistir a luta! </button> </form>'
        
    }else if (personagens[0].id === 'card-naruto' && personagens[1].id === 'card-gaara' || personagens[0].id === 'card-gaara' && personagens[1].id === 'card-naruto' ){
        
        buttonPrincipal.innerHTML = '<form action="/lutas/narutoVsGaara" method="POST"><button> Assistir a luta! </button> </form>'
        
    }else if (personagens[0].id === 'card-naruto' && personagens[1].id === 'card-sasuke' || personagens[0].id === 'card-sasuke' && personagens[1].id === 'card-naruto'  ){
        
        buttonPrincipal.innerHTML = '<form action="/lutas/narutoVsSasuke" method="POST"><button> Assistir a luta! </button> </form>'
            
    }else if (personagens[0].id === 'card-naruto' && personagens[1].id === 'card-rocklee' || personagens[0].id === 'card-rocklee' && personagens[1].id === 'card-naruto'){
        buttonPrincipal.innerHTML = '<form action="/lutas/rockleeVsNaruto" method="POST"><button> Assistir a luta! </button> </form>'

    }else if (personagens[0].id === 'card-gaara' && personagens[1].id === 'card-sasuke' || personagens[0].id === 'card-sasuke' && personagens[1].id === 'card-gaara'  ){
       
        buttonPrincipal.innerHTML = '<form action="/lutas/gaaraVsSasuke" method="POST"><button> Assistir a luta! </button> </form>'
    
    }else if (personagens[0].id === 'card-gaara' && personagens[1].id === 'card-rocklee' || personagens[0].id === 'card-rocklee' && personagens[1].id === 'card-gaara'  ){
        
        buttonPrincipal.innerHTML = '<form action="/lutas/gaaraVsRocklee" method="POST"><button> Assistir a luta! </button> </form>'

    }else if (personagens[0].id === 'card-sasuke' && personagens[1].id === 'card-rocklee' || personagens[0].id === 'card-rocklee' && personagens[1].id === 'card-sasuke'  ){
        
        buttonPrincipal.innerHTML = '<form action="/lutas/rockleeVsSasuke" method="POST"><button> Assistir a luta! </button> </form>'
        
    }
}


