import dayjs from "dayjs";
import { Date, ItemContainer, SeeOrder, Value } from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function OrderListItem({order}){
    const {data, products, _id} = order;
    const [total, setTotal] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        let sum = 0;
        products.forEach( p => sum += (p.priceProduct * p.qtProduct));
        setTotal(sum);
        // eslint-disable-next-line
    },[]);

    function viewOrder(){
        navigate(`/order/${_id}`);
    }
    
    return(
        <ItemContainer>
            <Date>{dayjs(data).format("DD/MM/YYYY")}</Date>
            <Value>${Number(total).toFixed(2)}</Value>
            <SeeOrder onClick={viewOrder}>View</SeeOrder>
        </ItemContainer>
    )
}