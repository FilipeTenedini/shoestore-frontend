import { InfoContainer, ItemContainer, Price, ProductImage, ProductInfo, ProductName, ProductSize, Quantity } from "./style";

export function OrderDetailItem({name, picture, price, product}) {
    return (
        <ItemContainer>
            <InfoContainer>
                <ProductImage>
                    <img src={picture} alt="" />
                </ProductImage>
                <ProductInfo>
                    <ProductName>{name}</ProductName>
                    <ProductSize>{`Size: ${product.sizeProduct}`}</ProductSize>
                    <Quantity>{`Qty: ${product.qtProduct}`}</Quantity>
                </ProductInfo>
            </InfoContainer>
            <Price>{`$${(price * product.qtProduct).toFixed(2)}`}</Price>
        </ItemContainer>
    );
}