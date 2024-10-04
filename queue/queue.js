export default class Queue {
    head = this.head;
    tail = this.tail;

    // Tilføjer en ny node, med reference til data-objektet, bagest i køen
    enqueue(data) {}

    // Fjerner den node der ligger forrest i køen, og returnerer det referede data-objekt
    dequeue() {}

    // Returnerer data-objektet der lgger forrest i køen, uden at fjerne det
    peek() {}

    // fortæller hvor mange elementer der er i køen
    size() {}

    // Finder og returnerer elementet på plads 'index', hvor 0 er det forreste, uden at fjerne noget
    get(index) {}
}
