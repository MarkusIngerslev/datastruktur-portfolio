export class grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        // Laver et array gemt som et 1D array
        this.grid = new Array(rows * cols).fill(0);
    }

    // Sætter value på den angivne plads
    set(row, col, value) {}

    // Returnerer value på den angivne plads
    get(row, col) {}

    // Returnerer index (nummeret) på cellen i den række + kolonne
    indexFor(row, col) {}

    // Returnerer et {row, col} objekt for cellen med dette index (nummer)
    rowColFor(index) {}

    // returnerer en liste over alle naboceller til denne (i form af {row, col} objekter)
    neighbours(row, col) {}

    // returnerer en liste over alle nabocellers values
    neighbourValues(row, col) {}

    // returnerer cellen til højre efter denne, eller undefined hvis der ikke er flere i den row
    nextInRow(row, col) {}

    // returnerer cellen under denne, eller undefined hvis der ikke er flere i den col
    nextInCol(row, col) {}

    // returnerer cellen over denne, eller undefined, hvis der ikke er nogen
    north(row, col) {}

    // returnerer cellen under denne. eller undefined, hvos der ikke er nogen
    south(row, col) {}

    // returnerer cellen til højre for denne, eller undefined, hvis der ikke er nogen
    east(row, col) {}

    // returnerer cellen til venstre for denne, eller undefined, hvis der ikke er nogen
    west(row, col) {}

    // =====================================
    // Metoder for struktur
    // =====================================

    // returnerer antallet af rækker
    rows() {}

    // returnerer antallet af kolonner
    cols() {}

    // returnerer det samlede antal celler
    size() {}

    // =====================================
    // metode for clearing
    // =====================================

    // Skriver den angivne value ind i alle celler
    fill(value) {}
}
