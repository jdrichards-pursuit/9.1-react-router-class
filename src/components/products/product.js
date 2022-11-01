import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function Product({ products }) {
  let { id } = useParams();
  const navigate = useNavigate();

  const mockBuyNow = () => {
    // here is where i would set my state or send info to the database
    alert(
      "You pressed Buy Now! Congrats! Our sophisticated system is already charging your card and sending you your purchase. Let's go back to the home page!"
    );
    //afterwards I navigate to another page

    navigate("/");
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
        <button onClick={mockBuyNow}>Buy Now!</button>
      </section>
    );
  }
  return <h1>No products found</h1>;
}
