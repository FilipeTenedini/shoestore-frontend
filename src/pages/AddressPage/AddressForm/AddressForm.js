import { InputWrapper } from './style';

export default function AddressForm({ addressFormValue }) {

    return (
        <InputWrapper>
            <label>
                {'Zipcode'}
            </label>
            <input 
            type="text"
            ref={(element) => addressFormValue.zipcode = element}
            />
            <label>
                {'City'}
            </label>
            <input 
            type="text"
            ref={(element) => addressFormValue.city = element}
            />
            <label>
                {'Street'}
            </label>
            <input 
            type="text"
            ref={(element) => addressFormValue.street = element}
            />
            <label>
                {'Number'}
            </label>
            <input 
            type="text"
            ref={(element) => addressFormValue.number = element}
            />
        </InputWrapper>
    );
}