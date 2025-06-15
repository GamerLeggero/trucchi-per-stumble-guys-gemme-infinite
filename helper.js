// helper.js
// Simulazione supporto tecnico per Stumble Guys

console.log("Avvio Stumble Guys Helper...");

const skins = ["banana", "scheletro", "astronauta"];

function listSkins() {
    skins.forEach(skin => {
        console.log(`Skin rilevata: ${skin}`);
    });
}

listSkins();
