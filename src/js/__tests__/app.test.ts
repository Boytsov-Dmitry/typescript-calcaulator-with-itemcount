import Card from "../app";

test('adding items', () => {
    const card = new Card();

    card.add({
        id: 1, name: 'test', price: 10, countInCard: 1, discount: 10,
    });
    
    card.add({
        id: 1, name: 'test', price: 10, countInCard: 1, discount: 10
    });
    
    card.add({
        id: 2, name: 'test', price: 10, countInCard: 1,
    });

    const ideal = [{"countInCard": 2, "discount": 10, "id": 1, "name": "test", "price": 10}, {"countInCard": 1, "id": 2, "name": "test", "price": 10}];

    expect(card.getAll()).toEqual(ideal);
})

test('adding items and geting full price of items', () => {
    const card = new Card();

    card.add({
        id: 1, name: 'test', price: 10, countInCard: 1, discount: 10,
    });
    
    card.add({
        id: 1, name: 'test', price: 10, countInCard: 1, discount: 10
    });
    
    card.add({
        id: 2, name: 'test', price: 10, countInCard: 1,
    });

    expect(card.getFullPrice()).toBe(30);
})

test('adding items and geting price of items with discount', () => {
    const card = new Card();

    card.add({
        id: 1, name: 'test', price: 10, countInCard: 1, discount: 10,
    });
    
    card.add({
        id: 1, name: 'test', price: 10, countInCard: 1, discount: 10
    });
    
    card.add({
        id: 2, name: 'test', price: 10, countInCard: 1,
    });

    expect(card.getPriceWithDiscout()).toBe(28);
})

test('remove by id (with count 1)', () => {
    const card = new Card();

    card.add({
        id: 1, name: 'test', price: 10, countInCard: 1, discount: 10,
    });
    
    card.add({
        id: 2, name: 'test', price: 10, countInCard: 1,
    });

    card.removeItemById(1)

    const ideal = [{"countInCard": 1, "id": 2, "name": "test", "price": 10}]

    expect(card.getAll()).toEqual(ideal);
});

test('remove by id (with count > 1)', () => {
    const card = new Card();

    card.add({
        id: 1, name: 'test', price: 10, countInCard: 1, discount: 10,
    });
    
    card.add({
        id: 1, name: 'test', price: 10, countInCard: 1, discount: 10,
    });

    card.removeItemById(1)

    const ideal = [{"countInCard": 1, "id": 1, "name": "test", "price": 10, "discount": 10}]

    expect(card.getAll()).toEqual(ideal);
});