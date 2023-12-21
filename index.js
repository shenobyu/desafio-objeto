class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    escrever(){
        console.log(`o heroi ${this.nome} de classe ${this.tipo} de idade ${this.idade} atacou usando ${this.ataque}`)
    }
}

let combo = new heroi("naruto", 19, "mago", "magia")

combo.escrever()



