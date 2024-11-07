/*/Lag en conditional som sjekker om userName eksisterer (har innhold), at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".

console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.

endre på verdiene i variablene for å se at din conditional kan håndtere alle cases


Husk å levere inn med link til github repo!

Lykke til, og spør meg gjerne om dere står fast eller lurer på noe :) /*/

const userName = "Tom";
const userAge = 17;

let userIsAdmin = false;
let userIsLoggedIn = false;
let userIsBlocked = false;

if (userIsAdmin == true) {
  userIsLoggedIn = true;
  goToPage;
  console.log("/Admin");
} else if (userIsBlocked == true) {
  console.log("User is Blcked");
} else if (userName && userAge >= 18) {
  console.log("/home");
  userIsLoggedIn = true;
} else {
  console.log("User is younger than 18 and is blocked");
}
