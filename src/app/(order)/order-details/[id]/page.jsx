const OrderDetails = ({params, searchParams}) => {
    const {hello} = searchParams;
    const {id} = params;

    return (
        <div>
            {id} {hello}
        </div>
    )
}

export default OrderDetails
