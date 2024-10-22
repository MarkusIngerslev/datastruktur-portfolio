export default class Fixedstack {
    // Henviser til det næste ledige index
    stackpointer = 0;
    // Array der indeholder stacken
    stackArray = [];

    // Der angiver stackens maksimale størrelse
    constructor(size) {
        this.stackArray = new Array(size);
    }

    // Tilføjer data-objektet som nyt element, øverst i stacken
    push(data) {
        this.stackArray[this.stackpointer++] = data;
    }

    // fjerner det element der lå øverst i stacken, og returnerer det
    pop() {
        const node = this.stackArray[--this.stackpointer];
        this.stackArray[this.stackpointer] = null;
        return node;
    }

    // returnerer det element der ligger øverst i stacken, uden at fjerne det
    peek() {
        return this.stackArray[this.stackpointer - 1];
    }

    // fortæller hvor mange elementer der er i stacken
    size() {
        return this.stackpointer;
    }

    // finder og returnerer elementet på plads 'index', hvor 0 er det øverste, 1 det næstøverste, etc, uden at fjerne noget
    get(index) {
        return this.stackArray[index];
    }
}
