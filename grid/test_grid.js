"use strict";

import { grid as Grid } from "./grid.js";

window.addEventListener("load", init);

function init() {
    console.log("JavaScript is live.");
    testGrid();
}

// Funktion til at teste Grid klassen
function testGrid() {
    // Opretter et grid med 5 rækker og 5 kolonner
    const myGrid = new Grid(5, 5);
    console.log("Grid oprettet med 5 rækker og 5 kolonner:");

    // Fylder grid med værdien 0 og udskriver det
    myGrid.fill(0);
    console.log("Grid fyldt med 0'er:", myGrid.grid);

    // Sætter en værdi i en celle og henter den tilbage
    myGrid.set(2, 3, 42);
    console.log("Sætter værdi 42 på (2, 3)");
    console.log("Værdi på (2, 3):", myGrid.get(2, 3));

    // Tester naboer til en celle
    console.log("Naboer til (2, 2):", myGrid.neighbours(2, 2));

    // Tester naboers værdier til en celle
    console.log("Naboværdier til (2, 2):", myGrid.neighbourValues(2, 2));

    // Tester retning-metoder
    console.log("Nord for (2, 2):", myGrid.north(2, 2));
    console.log("Syd for (2, 2):", myGrid.south(2, 2));
    console.log("Øst for (2, 2):", myGrid.east(2, 2));
    console.log("Vest for (2, 2):", myGrid.west(2, 2));

    // Tester næste i række og kolonne
    console.log("Næste i række (2, 2):", myGrid.nextInRow(2, 2));
    console.log("Næste i kolonne (2, 2):", myGrid.nextInCol(2, 2));

    // Tester konvertering fra indeks til {row, col}
    const index = 13;
    console.log(`Række/kolonne for index ${index}:`, myGrid.rowColFor(index));

    // Tester konvertering fra {row, col} til indeks
    console.log("Indeks for (2, 3):", myGrid.indexFor(2, 3));

    // Tester grænseoverskridende adgang
    console.log("Forsøger at hente uden for grænser (5, 5):", myGrid.get(5, 5));

    // Tester størrelse på grid
    console.log("Antal rækker:", myGrid.rows());
    console.log("Antal kolonner:", myGrid.cols());
    console.log("Samlet antal celler:", myGrid.size());
}
