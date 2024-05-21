import CardProduct from "../components/Fragements/CardProduct";

const products = [
  {
    id: 1,
    name: "Airbus A319",
    price: "IDR 569.000",
    image: "/images/airbus.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde
    praesentium eaque aliquam corrupti, doloribus consequatur, laudantium
    fugiat placeat a distinctio illum qui cupiditate ipsam quis voluptas,
    incidunt facilis! Ut.`,
  },
  {
    id: 2,
    name: "Airbus A320",
    price: "IDR 659.000",
    image: "/images/airbus.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde
    praesentium eaque aliquam corrupti.`,
  },
  {
    id: 3,
    name: "Airbus A330",
    price: "IDR 719.000",
    image: "/images/airbus.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

//Digunakan apabila ingin me-render salah 1 saja
const ProductsPage = () => {
  console.log(products);
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => {
        return (
          <CardProduct>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        );
      })}
    </div>
  );
};

export default ProductsPage;
