import CardProduct from "../components/Fragements/CardProduct";

//Digunakan apabila ingin me-render salah 1 saja
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/airbus.jpg" />
        <CardProduct.Body title="Airbus A319">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde
          praesentium eaque aliquam corrupti, doloribus consequatur, laudantium
          fugiat placeat a distinctio illum qui cupiditate ipsam quis voluptas,
          incidunt facilis! Ut.
        </CardProduct.Body>
        <CardProduct.Footer price="IDR 659.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/airbus.jpg" />
        <CardProduct.Body title="Airbus A319">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde
          praesentium eaque aliquam corrupti, doloribus consequatur, laudantium
          fugiat placeat a distinctio illum qui cupiditate ipsam quis voluptas,
          incidunt facilis! Ut.
        </CardProduct.Body>
        <CardProduct.Footer price="IDR 659.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
