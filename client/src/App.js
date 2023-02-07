  import styled from "styled-components"
  import CartItem from "./Components/CartItem";
  import { useState, useEffect } from "react";
  const App = () => {

    //Styling variables
  const BLUE = "#172162"; //"rgb(23, 33, 98)";
  const LIGHT_GREY = "#6e7484";
  const BLACK = "#000000";

  
  const [lineItems, setLineItems] = useState([]);
  const [postalCode, setPostalCode] = useState('');


  const removeLineItem = (lineItemId) => {
    setLineItems(lineItems.filter(item => item.id !== lineItemId));
  };

  const addLineItem = (lineItem) => {
    setLineItems([...lineItems, lineItem]);
  };

  const calculateFees = (lineItems) => {
    let subtotal = 0;
    let tax = 0;
    let shipping = 15;

    lineItems.forEach((lineItem) => {
      subtotal += lineItem.price * lineItem.quantity;
    });

    tax = subtotal * 0.13;
    const total = subtotal + tax + shipping;

    return { subtotal, tax, shipping, total };
  }

  const fees = calculateFees(lineItems)

  useEffect(() => {
    console.log(postalCode)
    const firstLetter = postalCode.charAt(0)
    async function fetchLineItems(firstLetter) {
      
      const res = await fetch(`http://localhost:8000/lineItems?firstLetter=${firstLetter}`);
      const data = await res.json();
      setLineItems(data.data);
      console.log(data)
    }
    fetchLineItems(firstLetter);
  }, [postalCode]);
console.log(lineItems)
  return (<>
    <CartContainer>
        <CartTitle>Your Cart</CartTitle>
        
        {lineItems.map(item => (
          <CartItem key={item.id} item={item} removeLineItem={removeLineItem} estimatedDelivery={item.estimatedDelivery} />
        ))}
        
      </CartContainer>
      <button onClick={() => addLineItem({ name: 'item', price: 10.99, quantity: 1})}>
          Add Item
        </button>
        <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Enter Postal Code" />



        

      <FeeContainer>
        <PriceCategory>
          <Label>Subtotal</Label>
          <Value>{fees.subtotal.toFixed(2)}</Value>
        </PriceCategory>
        <PriceCategory>
          <Label>Taxes (estimated)</Label>
          <Value>{fees.tax.toFixed(2)}</Value>
        </PriceCategory>
        <PriceCategory>
          <Label>Shipping</Label>
          <Value>{fees.shipping.toFixed(2)}</Value>
        </PriceCategory>
        <PriceCategory>
          <Label>Total</Label>
          <Value>{fees.total.toFixed(2)}</Value>
        </PriceCategory>
      </FeeContainer>
    </>
  );

  }

  export default App;

  const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const CartTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  `;

  const FeeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 16px;
  `;

  const PriceCategory = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
  `;

  const Label = styled.div`
    font-weight: bold;
    text-align: left;
  `;

  const Value = styled.div`
    text-align: right;
  `;