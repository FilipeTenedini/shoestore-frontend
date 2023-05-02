import { ItemContainer, ItemInfos } from './style';
import { AiOutlineClose } from 'react-icons/ai';

export default function CartItem({ item }) {
    return (
        <ItemContainer>
            <img src={item.photoProduct} alt={item.nameProduct}/>
            <ItemInfos>
                <p>{item.nameProduct}</p>
                <p>Size: {item.sizeProduct}</p>
                <p>Qty: {item.qtProduct}</p>
                <p>${item.priceProduct}</p>
            </ItemInfos>
            <AiOutlineClose />
        </ItemContainer>
    );
}