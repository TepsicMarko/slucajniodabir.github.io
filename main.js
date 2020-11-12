let popisUcenika = [["Bago",i=0], ["Blazevic",i=0], ["Drobac",i=0], ["Gavic",i=0], ["Habunek",i=0], ["Impric",i=0], ["Ivankovic",i=0],
                    ["Jaki",i=0], ["Jabmresic",i=0], ["Jurkovic",i=0], ["Krot",i=0], ["Kupsjak",i=0], ["Lozic",i=0], ["Mazic",i=0], ["Obradovic",i=0], 
                    ["Pancic",i=0],["Pilipovic",i=0], ["Raketic",i=0], ["Rus",i=0], ["Senjug",i=0], ["stricak",i=0], ["Tepsic",i=0], ["Turk",i=0]];
const newLine=document.createElement('br');
let button=document.querySelector("button").addEventListener("click", function(){
    let container=document.querySelector("#container");
    container.innerHTML="";
    let brojSimulacija= prompt("Koliko puta želiš simulirati slučajni odabir?")
    for(var b=0; b<brojSimulacija; b++)
        {
            let randomNumber= Math.floor(Math.random()*popisUcenika.length);
            popisUcenika[randomNumber][1]=popisUcenika[randomNumber][1]+1;
        }
    let popisPoVel= popisUcenika.sort((a,b)=> a[1]-b[1]);
    let c=0;
        popisPoVel.forEach(element => 
            { 
                if(popisPoVel[c][1]>0){
                    let p=document.createElement("p")
                    p.innerText=`${popisPoVel[c][0]} je izabran ${popisPoVel[c][1]} puta`;//Bago je izabran 2 puta 
                    container.appendChild(p);
                }
                c++;
            });
    popisPoVel=[];
    popisUcenika=[["Bago",i=0], ["Blazevic",i=0], ["Drobac",i=0], ["Gavic",i=0], ["Habunek",i=0], ["Impric",i=0], ["Ivankovic",i=0],
    ["Jaki",i=0], ["Jabmresic",i=0], ["Jurkovic",i=0], ["Krot",i=0], ["Kupsjak",i=0], ["Lozic",i=0], ["Mazic",i=0], ["Obradovic",i=0], 
    ["Pancic",i=0],["Pilipovic",i=0], ["Raketic",i=0], ["Rus",i=0], ["Senjug",i=0], ["stricak",i=0], ["Tepsic",i=0], ["Turk",i=0]];
})
