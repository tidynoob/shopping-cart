import ElementType from "../utils/ElementType";
import kitten1 from "../assets/kitten1.png";
import kitten2 from "../assets/kitten2.png";
import kitten3 from "../assets/kitten3.png";

const kitten1Url = new URL(kitten1, import.meta.url).href;
const kitten2Url = new URL(kitten2, import.meta.url).href;
const kitten3Url = new URL(kitten3, import.meta.url).href;

const products = [
    {
        "id": 1,
        "name": "Cat 1",
        "price": 100,
        "imageUrl": kitten1Url
    },
    {
        "id": 2,
        "name": "Cat 2",
        "price": 200,
        "imageUrl": kitten2Url
    },
    {
        "id": 3,
        "name": "Cat 3",
        "price": 300,
        "imageUrl": kitten3Url
    },
]

export type Product = ElementType<typeof products>;

export default products;
