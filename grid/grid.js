export class grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        // Laver et array gemt som et 1D array
        this.grid = new Array(rows * cols).fill(0);
    }

    // Sætter value på den angivne plads
    set(row, col, value) {
        // Laver et objekt med row og col, så jeg kan bruge det i metoden
        const { row: r, col: c } = this._parseParams(row, col);
        // Tjekker om r og c er indenfor det angivet grid
        if (r >= 0 && r < this.rows && c >= 0 && c < this.cols) {
            // Sætter value på angivet plads
            this.grid[this.indexFor(r, c)] = value;
        }
    }

    // Returnerer value på den angivne plads
    get(row, col) {
        // Laver et objekt med row og col, så jeg kan bruge det i metoden
        const { row: r, col: c } = this._parseParams(row, col);
        // Tjekker om r og c er indenfor det angivet grid
        if (r >= 0 && r < this.rows && c >= 0 && c < this.cols) {
            // Returnerer value på angivet plads
            return this.grid[this.indexFor(r, c)];
        }
    }

    // Returnerer index (nummeret) på cellen i den række + kolonne
    indexFor(row, col) {
        return row * this.cols + col;
    }

    // Returnerer et {row, col} objekt for cellen med dette index (nummer)
    rowColFor(index) {
        // Finder rækken ved at dividere index med antal kolonner
        const row = Math.floor(index / this.cols);
        // Finder kolonnen ved at tage resten af index dividere med antal kolonner
        const col = index % this.cols;
        // Returnerer objektet med row og col for cellen med dette index
        return { row, col };
    }

    // Returnerer en liste over alle naboceller til denne (i form af {row, col} objekter)
    neighbours(row, col) {}

    // Returnerer en liste over alle nabocellers values
    neighbourValues(row, col) {}

    // Returnerer cellen til højre efter denne, eller undefined hvis der ikke er flere i den row
    nextInRow(row, col) {}

    // Returnerer cellen under denne, eller undefined hvis der ikke er flere i den col
    nextInCol(row, col) {}

    // Returnerer cellen over denne, eller undefined, hvis der ikke er nogen
    north(row, col) {}

    // Returnerer cellen under denne. eller undefined, hvos der ikke er nogen
    south(row, col) {}

    // Returnerer cellen til højre for denne, eller undefined, hvis der ikke er nogen
    east(row, col) {}

    // Returnerer cellen til venstre for denne, eller undefined, hvis der ikke er nogen
    west(row, col) {}

    // =====================================
    // Metoder for struktur
    // =====================================

    // Returnerer antallet af rækker
    rows() {
        return this.rows;
    }

    // Returnerer antallet af kolonner
    cols() {
        return this.cols;
    }

    // Returnerer det samlede antal celler
    size() {
        return this.rows * this.cols;
    }

    // =====================================
    // Metode til hjælp og cleaning
    // =====================================

    // Skriver den angivne value ind i alle celler
    fill(value) {
        this.grid.fill(value);
    }

    // Returnerer enten row og col som et objekt {row, col} eller som to parametre
    // Hjælpe funktion til at håndtere begge måder at sende parametre på
    _parseParams(row, col) {
        if (typeof row === "object") {
            return { row: row.row, col: row.col };
        } else {
            return { row, col };
        }
    }
}
