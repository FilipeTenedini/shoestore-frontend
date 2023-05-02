import { PaymentMethod } from "./style";

export default function PaymentMethodForm({ handleSelect }) {
    return (
        <PaymentMethod>
            <label>
                <input
                    type="radio"
                    name="payment"
                    value="Debit/Credit Card"
                    onChange={handleSelect}
                />Debit/Credit Card
            </label>
            <label>
                <input
                    type="radio"
                    name="payment"
                    value="Netbanking"
                    onChange={handleSelect}
                />Netbanking
            </label>
            <label>
                <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    onChange={handleSelect}
                />Cash on Delivery
            </label>
            <label>
                <input
                    type="radio"
                    name="payment"
                    value="Wallet"
                    onChange={handleSelect}
                />Wallet
            </label>
        </PaymentMethod>
    );
}