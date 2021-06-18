import personajes from "../consulta";

class Personaje {
    constructor(nombre,img,poder,raza){

    let Nombre = nombre
    let img = img 
    let poder = poder;
    let Raza = raza 


this.getNombre = () => Nombre;
this.getImg = () => img;
this.getpoder = () => Poder;
this.getRaza = () => Raza;

this.setPoder = (poder) => (Poder = poder);
}

get Nombre(){
    return this.getNombre();
}

get Img(){
    return this.getImg();
}
get Poder(){
    return this.getPoder();
}
get Raza(){
    return this.getRaza();
}
set Poder(){
    return this.getPoder(poder);
}

}

export default Personaje;
