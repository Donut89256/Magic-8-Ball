let image = [];

for(let i = 0; i <=20; i++){
    image[i] = "Img/magic8ball_" + i + ".png";
}
function submit(){
    let answer = document.getElementById("answer");
    answer.src = image[Math.floor(Math.random()*20)+1];
}