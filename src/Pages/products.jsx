import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragements/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/products.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
// import Counter from "../components/Fragements/Counter";

// const products = [
//   {
//     id: 1,
//     name: "Airbus A319",
//     price: 569000,
//     image: "/images/airbus.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde
//     praesentium eaque aliquam corrupti, doloribus consequatur, laudantium
//     fugiat placeat a distinctio illum qui cupiditate ipsam quis voluptas,
//     incidunt facilis! Ut.`,
//   },
//   {
//     id: 2,
//     name: "Airbus A320",
//     price: 659000,
//     image: "/images/airbus.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde
//     praesentium eaque aliquam corrupti.`,
//   },
//   {
//     id: 3,
//     name: "Airbus A330",
//     price: 719000,
//     image: "/images/airbus.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
//   },
// ];

//Digunakan apabila ingin me-render salah 1 saja
const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  // menggunakan custom hooks
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  //useRef
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username}
        <Button classname="ml-5 bg-red-600" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} />
                  <CardProduct.Body name={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    id={product.id}
                    handleAddToCart={handleAddToCart}
                  />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)}...</td>
                      <td>
                        ${" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        ${" "}
                        {(item.qty * product.price).toLocaleString(
                          ("id-ID",
                          {
                            styles: "currency",
                            currency: "USD",
                          })
                        )}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Grand Total</b>
                </td>
                <td>
                  <b>
                    ${" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-5">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
