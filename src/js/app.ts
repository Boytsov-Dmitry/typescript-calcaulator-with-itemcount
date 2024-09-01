import Buyable from "./Buyable";

export default class Card {
    private items: Buyable[] = [];

    add(item: Buyable): void {
        for(const element of this.items) {
            if(item.id === element.id) {
                element.countInCard++
                return
            };
        };
        this.items.push(item);
    };


    getAll(): Buyable[] {
        console.log(...this.items)
        return [...this.items];
    };

    getFullPrice(): number {
        let price = 0;

        for(const item of this.items) {
            if(item.countInCard > 1) {
                const priceOfItems = item.countInCard * item.price;
                price += priceOfItems;
            } else {
                price += item.price;
            };
        };
        
        return price;
    }

    getPriceWithDiscout(): number {
        let price = 0;

        for(const item of this.items) {
            if(item.discount) {
                if(item.countInCard > 1) {
                    const priceOfItems = item.countInCard * item.price;
                    price += priceOfItems - (priceOfItems * (item.discount / 100));
                } else {
                    price += item.price - (item.price * (item.discount / 100));
                };
            };

            if(!item.discount) {
                if(item.countInCard > 1) {
                    const priceOfItems = item.countInCard * item.price;
                    price += priceOfItems;
                } else {
                    price += item.price;
                };
            }
        };
        
        return price;
    }

    removeItemById(id: number): void {
        this.items.forEach((element, index) => {
            if (element.id === id) {
                if(element.countInCard > 1) {
                    element.countInCard--
                    console.log('мы удалили количество')
                } else {
                    this.items.splice(index, 1);
                    console.log('мы просто удалили')
                };
            };
        });
    };
};

