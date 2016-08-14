var sr = document.getElementById('sr');
var sp = document.getElementById('sp');
var times ;
var xz = document.getElementById('xz');
var didian = ['故宫','颐和园','十三陵','十渡','圆明园','长城'];

xz.onclick = function(){
    var val= text1.value;  

    val = val.split('|');
     
    didian = didian.concat(text1.value);


    console.log(didian)
}
sr.onclick = function(){
   /* sr.disabled = 'disabled'*/
    if(times){
        return;
    };
    times = setInterval(function(){
    var str =parseInt(Math.random()*didian.length);
    var  fk = document.getElementById('fk');
    fk.innerHTML = didian[str];
},10);    
}
sp.onclick = function(){
   /* sr.disabled = ''*/
   clearInterval(times);
   times = undefined;
}