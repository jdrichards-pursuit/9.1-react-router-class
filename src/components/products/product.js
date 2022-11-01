import { useParams } from "react-router-dom";

export default function Product({ products }) {
  let { id } = useParams();
  const mockBuyNow = () => {
    alert(
      "You pressed Buy Now! Congrats! Our sophisticated system is already charging your card and sending you your purchase. Let's go back to the home page!"
    );
  };

  const product = products.find((product) => product.id === id);

  if (product) {
    return (
      <section>
        <h5>{product.name}</h5>
        <img src={product.image} alt={product.name} />
        <p>{product.type}</p>
        <p>{product.style}</p>
        <p>${product.price}</p>
        <button>Buy Now!</button>
      </section>
    );
  }
  return <h1>No products found</h1>;
}
