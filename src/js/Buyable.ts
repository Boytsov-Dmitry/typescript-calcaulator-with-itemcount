export default interface Buyable {
    id: number,
    name: string,
    price: number,
    discount?: number,
    countInCard: number,
};