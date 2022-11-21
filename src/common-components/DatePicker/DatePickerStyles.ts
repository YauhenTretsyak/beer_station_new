import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'

export const DatePickerElement = styled(DatePicker)`
    width: 100%;

    ${screen_breakpoints.md} {
        width: 20rem;
    }
`
export const DateInput = styled.input`
    font-size: 1.4rem;
    background: inherit;
    outline: none;
    color: ${({theme}) => theme.colors.silver_light};

    ${screen_breakpoints.md} {
        font-size: 1.6rem;
    }

    &::placeholder {
        color: ${({theme}) => theme.colors.silver};
    }
`
