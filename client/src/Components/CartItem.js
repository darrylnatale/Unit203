import styled from "styled-components";

const CartItem = ({ item, removeLineItem }) => {
    console.log(item)
    const { title, image, swatchColor, swatchTitle, price } = item;
    const ESTIMATED_DELIVERY = "Nov 24, 2021";
    return (
      <CartItemContainer>
        <CartItemImage src={image} alt={title} />
        <CartItemDetails>
          <div>
            <CartItemTitle>{title}</CartItemTitle>
            <CartItemColor color={swatchColor} />
            <CartItemColorTitle>{swatchTitle}</CartItemColorTitle>
          </div>
          <div>
            <CartItemPrice>{price}</CartItemPrice>
            <CartItemDelivery>Estimated Delivery Date: {item.estimatedDeliveryDate ? item.estimatedDeliveryDate : <>Please enter postal code</>}</CartItemDelivery>
            <CartItemRemoveButton onClick={() => removeLineItem(item.id)}>Remove</CartItemRemoveButton>
          </div>
        </CartItemDetails>
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
  