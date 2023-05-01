import dayjs from "dayjs";
import { Date, ItemContainer, SeeOrder, Value } from "./style";
import { useEffect, useState } from "react";

export default function OrderListItem({order}){
    const {data, products, _id} = order;
    const [total, setTotal] = useState();

    useEffect(()=>{
        let sum = 0;
        products.forEach( p => sum += p.priceProduct);
        setTotal(sum);
        // eslint-disable-next-line
    },[]);

    function viewOrder(){
        alert(_id);
    }
    
    return(
        <ItemContainer>
            <Date>{dayjs(data).format("DD/MM/YYYY")}</Date>
            <Value>${total}</Value>
            <SeeOrder onClick={viewOrder}>View</SeeOrder>
        </ItemContainer>
    )
}