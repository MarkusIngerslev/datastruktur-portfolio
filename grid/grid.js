export class grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
    }

    set(row, col, value) {}

    get(row, col) {}

    indexFor(row, col) {}

    rowColFor(index) {}

    neighbours(row, col) {}

    neighbourValues(row, col) {}

    nextInRow(row, col) {}

    nextInCol(row, col) {}

    north(row, col) {}

    south(row, col) {}

    east(row, col) {}

    west(row, col) {}

    // =====================================
    // Metoder for struktur
    // =====================================

    rows() {}

    cols() {}

    size() {}

    // =====================================
    // metode for clearing
    // =====================================

    fill(value) {}
}
