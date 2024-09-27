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
    neighbours(row, col) {
        // Laver et objekt med row og col, så jeg kan bruge det i metoden
        const { row: r, col: c } = this._parseParams(row, col);
        // Laver en tom liste til at gemme naboer
        const neighbours = [];

        // Tjekker for naboer for angivet celle
        const directions = [
            this.north(r, c), // Nabocelle over denne
            this.south(r, c), // Nabocelle under denne
            this.east(r, c), // Nabocelle til højre for denne
            this.west(r, c), // Nabocelle til venstre for denne
        ];

        // Tjekker diagonale naboer (kombination af de 4 retninger)
        // Tjekker først for diagonal venstre top
        if (this.north(r, c) && this.west(r, c)) {
            neighbours.push({ row: r - 1, col: c - 1 });
        }
        // Tjekker for diagonal højre top
        if (this.north(r, c) && this.east(r, c)) {
            neighbours.push({ row: r - 1, col: c + 1 });
        }
        // Tjekker for diagonal højre bund
        if (this.south(r, c) && this.east(r, c)) {
            neighbours.push({ row: r + 1, col: c + 1 });
        }
        // Tjekker for diagonal venstre bund
        if (this.south(r, c) && this.west(r, c)) {
            neighbours.push({ row: r + 1, col: c - 1 });
        }

        // Filtrér undefined værdier fra og returnér kun gyldige naboer
        // Går igennem hver retning og tilføjer nabo til listen over naboer
        directions.forEach((direction) => {
            // Tjekker om der er en nabo i den retning
            if (direction) {
                // Pusher naboen til listen over naboer for retningen
                neighbours.push.push({ row: direction.row, col: direction.col });
            }
        });

        // Returnerer listen over naboer
        return neighbours;
    }

    // Returnerer en liste over alle nabocellers values
    neighbourValues(row, col) {
        return this.neighbours(row, col).map(({ row, col }) => this.get(row, col));
    }

    // Returnerer cellen til højre efter denne, eller undefined hvis der ikke er flere i den row
    nextInRow(row, col) {
        // Laver et objekt med row og col, så jeg kan bruge det i metoden
        const { row: r, col: c } = this._parseParams(row, col);
        // Tjekker om der er en celle til højre for denne
        if (c + 1 < this.cols) {
            // Returnerer objekt med row, col og value for cellen til højre for denne
            return { row: r, col: c + 1, value: this.get(r, c + 1) };
        }
    }

    // Returnerer cellen under denne, eller undefined hvis der ikke er flere i den col
    nextInCol(row, col) {
        // Laver et objekt med row og col, så jeg kan bruge det i metoden
        const { row: r, col: c } = this._parseParams(row, col);
        // Tjekker om der er en celle under denne
        if (r + 1 < this.rows) {
            // Returnerer objekt med row, col og value for cellen under denne
            return { row: r + 1, col: c, value: this.get(r + 1, c) };
        }
    }

    // Returnerer cellen over denne, eller undefined, hvis der ikke er nogen
    north(row, col) {
        // Laver et objekt med row og col, så jeg kan bruge det i metoden
        const { row: r, col: c } = this._parseParams(row, col);
        // Tjekker om der er en celle over denne
        if (r - 1 < this.rows) {
            // Returnerer objekt med row, col og value for cellen over denne
            return { row: r + 1, col: c, value: this.get(r - 1, c) };
        }
        // Returnerer undefined, hvis der ikke er nogen celle over denne
        return undefined;
    }

    // Returnerer cellen under denne, eller undefined, hvos der ikke er nogen
    south(row, col) {
        // Laver et objekt med row og col, så jeg kan bruge det i metoden
        const { row: r, col: c } = this._parseParams(row, col);
        // Tjekker om der er en celle udner denne
        if (r + 1 < this.rows) {
            // Returnerer objekt med row, col og value for cellen under denne
            return { row: r + 1, col: c, value: this.get(r + 1, c) };
        }
        // Returnerer undefined, hvis der ikke er nogen celle under denne
        return undefined;
    }

    // Returnerer cellen til højre for denne, eller undefined, hvis der ikke er nogen
    east(row, col) {
        // Laver et objekt med row og col, så jeg kan bruge det i metoden
        const { row: r, col: c } = this._parseParams(row, col);
        // Tjekker om der er en celle til højre for denne
        if (c + 1 < this.cols) {
            // Returnerer objekt med row, col og value for cellen til højre for denne
            return { row: r, col: c + 1, value: this.get(r, c + 1) };
        }
        // Returnerer undefined, hvis der ikke er nogen celle til højre for denne
        return undefined;
    }

    // Returnerer cellen til venstre for denne, eller undefined, hvis der ikke er nogen
    west(row, col) {
        // Laver et objekt med row og col, så jeg kan bruge det i metoden
        const { row: r, col: c } = this._parseParams(row, col);
        // Tjekker om der er en celle til venstre for denne
        if (c - 1 < this.cols) {
            // Returnerer objekt med row, col og value for cellen til venstre for denne
            return { row: r, col: c - 1, value: this.get(r, c - 1) };
        }
        // Returnerer undefined, hvis der ikke er nogen celle til venstre for denne
        return undefined;
    }

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
