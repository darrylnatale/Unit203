import styled from "styled-components"
import CartItem from "./Components/CartItem";
import { useState } from "react";
const App = () => {

  //Styling variables
const BLUE = "#172162"; //"rgb(23, 33, 98)";
const LIGHT_GREY = "#6e7484";
const BLACK = "#000000";

//First part given
const [lineItems, setLineItems] = useState([
{
id: 1,
title: "Grey Sofa",
price: 499.99,
quantity: 1,
image: "https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F2_Single_shot_DARK_GREY_OFF_OFF_SLOPE_17f0f115-11f8-4a78-b412-e9a2fea4748d.png%3Fv%3D1629310667&w=1920&q=75",
swatchColor: "#959392",
swatchTitle: "Grey"
},
{
id: 2,
title: "Blue Sofa",
price: 994.99,
quantity: 1,
image: "https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F3_Seater_SofaSofa_Ottoman_Off_Arm_Configuration_Two_Arms_Arm_Design_Slope_Chaise_Off_Fabric_Navy_Blue2.png%3Fv%3D1629231450&w=1920&q=75",
swatchColor: "#191944",
swatchTitle: "Blue"

},
{
id: 3,
title: "White Sofa",
price: 599.99,
quantity: 1,
image: "https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F2_Single_shot_IVORY_OFF_OFF_SLOPE_5379af1f-9318-4e37-b514-962d33d1ce64.png%3Fv%3D1629231450&w=1920&q=75",
swatchColor: "#F8F1EC",
swatchTitle: "White"
},
]);

const SUBTOTAL = 2094.97;
const HST = 272.3461;
const TOTAL = 2382.3161;

const removeLineItem = (lineItemId) => {
  setLineItems(lineItems.filter(item => item.id !== lineItemId));
};

const addLineItem = (lineItem) => {
  setLineItems([...lineItems, lineItem]);
};

return (<>
  <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      
      {lineItems.map(item => (
        <CartItem key={item.id} item={item} removeLineItem={removeLineItem}/>
      ))}
      
    </CartContainer>
    <button onClick={() => addLineItem({ name: 'item', price: 10.99, quantity: 1})}>
        Add Item
      </button>
    <FeeContainer>
      <PriceCategory>
        <Label>Subtotal</Label>
        <Value>{SUBTOTAL.toFixed(2)}</Value>
      </PriceCategory>
      <PriceCategory>
        <Label>Taxes (estimated)</Label>
        <Value>{HST.toFixed(2)}</Value>
      </PriceCategory>
      <PriceCategory>
        <Label>Shipping</Label>
        <Value>FREE</Value>
      </PriceCategory>
      <PriceCategory>
        <Label>Total</Label>
        <Value>{TOTAL.toFixed(2)}</Value>
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