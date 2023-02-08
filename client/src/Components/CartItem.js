import styled from "styled-components";

const CartItem = ({ item, removeLineItem }) => {
  const BLUE = "#172162"; //"rgb(23, 33, 98)";
  const LIGHT_GREY = "#6e7484";
  const BLACK = "#000000";
    const { title, image, swatchColor, swatchTitle, price } = item;
    
    return (
      <CartItemContainer>
        <CartItemImage src={image} alt={title} />
        <CartItemDetails>
         
            <CartItemTitle>{title}</CartItemTitle>
         
            <ColorDetails>
            <CartItemColor color={swatchColor} />
            <CartItemColorTitle>{swatchTitle}</CartItemColorTitle>
            </ColorDetails>
          </CartItemDetails>
          <PricingDetails>
          
            <CartItemPrice>${price}</CartItemPrice>
            <CartItemDelivery>Estimated Delivery Date: {item.estimatedDeliveryDate ? item.estimatedDeliveryDate : <>Please enter postal code</>}</CartItemDelivery>
            <CartItemRemoveButton onClick={() => removeLineItem(item.id)}>Remove</CartItemRemoveButton>
          
            </PricingDetails>
      </CartItemContainer>
    );
  };

  export default CartItem;

  const CartItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const CartItemImage = styled.img`
  max-width: 400px;
  margin-right: 10px;
`;

const CartItemDetails = styled.div`
  width: 25%
`;

const PricingDetails = styled.div`
text-align: right;
width: 75%
`

const ColorDetails = styled.div`
display: flex;
`
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
  margin-left: 10px;
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
  background-color: transparent;
  color: black;
  text-decoration: underline;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`;
  