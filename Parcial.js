let p1= 0;
let p2= 0;
let p3= 0;
function dados(){
for (let i =1; i<=25;i++){
    p1 += Math.floor((Math.random()*6)+1);
    if ( p1===25){
        console.log("El ganador es el participante número 1 en el turno " + i);
    break;
    } 
        p2 += Math.floor(Math.random()*6);
    if ( p2===25){
        console.log("El ganador es el participante número 2 en el turno " + i);
    break;
    } 
        p3 += Math.floor(Math.random()*6);
    if ( p3===25){
        console.log("El ganador es el participante número 3 en el turno " + i);
    break;
    } 
}
};
dados();
