import styled from "styled-components"

const App = () => {

  //Styling variables
const BLUE = "#172162"; //"rgb(23, 33, 98)";
const LIGHT_GREY = "#6e7484";
const BLACK = "#000000";

//First part given
const lineItems = [
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
];

const SUBTOTAL = 2094.97;
const HST = 272.3461;
const TOTAL = 2382.3161;
const ESTIMATED_DELIVERY = "Nov 24, 2021";

return (
  <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      {lineItems.map(item => (
        <CartItemContainer key={item.id}>
          <CartItemImage src={item.image} alt={item.title} />
          <CartItemDetails>
            <div>
              <CartItemTitle>{item.title}</CartItemTitle>
              <CartItemColor color={item.swatchColor} />
              <CartItemColorTitle>{item.swatchTitle}</CartItemColorTitle>
            </div>
            <div>
              <CartItemPrice>{item.price}</CartItemPrice>
              <CartItemDelivery>{ESTIMATED_DELIVERY}</CartItemDelivery>
              <CartItemRemoveButton>Remove</CartItemRemoveButton>
            </div>
          </CartItemDetails>
        </CartItemContainer>
      ))}
    </CartContainer>
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

const CartItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const CartItemImage = styled.img`
  max-width: 400px;
  margin-right: 10px;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const CartItemTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CartItemColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-bottom: 10px;
`;

const CartItemColorTitle = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const CartItemPrice = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CartItemDelivery = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const CartItemRemoveButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;