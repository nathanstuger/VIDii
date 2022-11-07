// ==
// !=
// >=
// <=
// ===  
// statement ? conditie waar, true : else, conditie niet waar
// DOM Element
const venster = document.getElementById("venster");
const titel = document.getElementById("titel"); // <h1 id="titel"></h1>
const beschrijving = document.getElementById("beschrijving");
const sluitVenster = document.getElementById("sluitVenster");
const spookImage = document.querySelector('.vensterAfbeelding');

const spoken = document.querySelectorAll(".spook");

let vorigVerhaal;
let huidigVerhaal;

// JSON Array, array van json objecten. Elk bestaande uit key-value pairs
const verhalen = 
[
  {
    titel: "Super Mario Bros.",
    omschrijving: "In Super Mario Bros. bestuurt de speler Mario, de hoofdpersoon van de serie. Mario's broer, Luigi, wordt bestuurd door de tweede speler in de multiplayer-modus van het spel en neemt dezelfde plotrol en functionaliteit aan als Mario. Het doel is om door het Mushroom Kingdom te racen, de strijdkrachten van de belangrijkste antagonist Bowser te overleven en Princess Toadstool te redden..",
    afbeelding: "./images/mariolevel1.jpg"
  },
  {
    titel: "Mario Super World",
    omschrijving: "De speler navigeert door het spel via twee spelschermen: een bovenwereldkaart en een zijwaarts scrollend parcours. De bovenwereldkaart toont een bovenaanzicht van de huidige wereld en heeft verschillende paden die leiden van de ingang van de wereld naar een kasteel. Paden verbinden met actiepanelen, forten, spookhuizen, kastelen en andere kaartpictogrammen, en stellen spelers in staat om verschillende routes te nemen om het werelddoel te bereiken. Door het personage op het scherm naar een actiepaneel of kasteel te verplaatsen, krijg je toegang tot die cursus. Het grootste deel van het spel speelt zich af in deze lineaire niveaus, bevolkt met obstakels en vijanden, waarbij de speler het podium moet doorkruisen door te rennen, springen en vijanden te ontwijken of te verslaan.[13]",
    afbeelding: "./images/mariolevel2.jpg"
  },
  {
    titel: "Super Mario Galaxy",
    omschrijving: "Super Mario Galaxy[b] is een platformspel uit 2007, ontwikkeld en uitgegeven door Nintendo voor de Wii. Het is het derde 3D-spel in de Super Mario-serie. Als Mario begint de speler aan een zoektocht om prinses Peach te redden, het universum te redden van Bowser en 120 Power Stars te verzamelen, waarna de speler het spel als Luigi kan spelen voor een moeilijkere ervaring. De levels bestaan ​​uit sterrenstelsels gevuld met kleine planeten en werelden, met verschillende variaties van zwaartekracht, het centrale element van de gameplay. Het spelerspersonage wordt bestuurd met de Wii-afstandsbediening en Nunchuk en voltooit missies, vecht tegen eindbazen en bereikt bepaalde gebieden om Power Stars te verzamelen. Bepaalde niveaus gebruiken de op beweging gebaseerde Wii-afstandsbedieningsfuncties.",
    afbeelding: "./images/mariolevel3.jpg"
  },
  {
    titel: "Supermario 3d world",
    omschrijving: "Super Mario Galaxy speelt zich af in de ruimte [3][4] waar Mario door verschillende sterrenstelsels reist om Power Stars te verzamelen, verdiend door missies te voltooien, een baas te verslaan of een bepaald gebied te bereiken.[3] [5] Elk sterrenstelsel bevat planetoïden en baanstructuren die de speler kan verkennen.[3] Elk astronomisch object heeft zijn eigen zwaartekracht, waardoor de speler volledig om de planetoïden kan navigeren, zijwaarts of ondersteboven.[6][7] De speler kan meestal van een onafhankelijk object springen en naar een ander in de buurt vallen. Hoewel de belangrijkste gameplay in 3D is, zijn er verschillende gebieden in het spel waarin de bewegingen van de speler beperkt zijn",
    afbeelding: "./images/mariolevel4.jpg"
  },
  {
    titel: "Super Mario maker",
    omschrijving: "Met Super Mario Maker kunnen spelers levels maken in de stijl van de Super Mario-serie en deze op internet publiceren voor andere spelers. De cursussen zijn gebaseerd op de gameplay en visuele stijl van Super Mario Bros., Super Mario Bros. 3, Super Mario World en New Super Mario Bros. U, die allemaal de fysica van de laatste delen. De gameplay-mechanica en het gedrag van de vijand variëren tussen spelmodi. Sommige elementen zijn beperkt tot specifieke spelstijlen en andere elementen kunnen worden samengevoegd tot andere spelstijlen, zoals Boos in Super Mario Bros.",
    afbeelding: "./images/mariolevel5.jpg"
  }
]


const toggleVenster = () => {
  // STAP 1
  // UPDATE CONTENT IN VENSTER
  const verhaalObject = verhalen[huidigVerhaal];
  if(verhaalObject){
    // HTML Element ophalen -> een attribute van aanspreken (de innerText, src, name, id, ...) -> een waarde toekennen
    titel.innerText = verhaalObject['titel'];
    beschrijving.innerText = verhaalObject['omschrijving'];  
    spookImage.src = verhaalObject['afbeelding'];
  }

  // STAP 2
  // CHECK OF DAT VENSTER OPEN OF DICHT MOET GAAN OF BLIJVEN

  // eerst checken als venster dicht is, indien ja, zet gewoon open
  // logical operators -> 
  // || : of 
  // && : en
  if(venster.style.display==='none' || venster.style.display===""){
    venster.style.display = 'block';
    document.documentElement.style.setProperty('cursor', 'pointer');
  }else{ // indien hij al open staat, kijken of dat je een andere aan heb geklikt, zo ja, blijf open
    if(huidigVerhaal!=vorigVerhaal){
      // pass
    }else{
      venster.style.display='none';
      document.documentElement.style.setProperty('cursor', 'none');
    }
  }
  vorigVerhaal=huidigVerhaal;
}

const update = (e) => {
  let x = e.clientX || e.touches[0].clientX
  let y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

// WAAROP luisteren voor een event? WELK event, WAT doen
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
for(const spook of spoken){
  spook.addEventListener('click',()=>{
    huidigVerhaal = spook.id;
    toggleVenster();
  })
}
sluitVenster.addEventListener('click',toggleVenster);