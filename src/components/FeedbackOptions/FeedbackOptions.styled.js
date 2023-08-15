import styled  from "styled-components";

const ButtonsWrapper = styled.div`
display: flex;
gap: 8px;
:nth-child(1){
    background-color: #47FF26;
}
:nth-child(2){
    background-color: #FFFA26;
}

:nth-child(3){
    background-color: #FF2626;
}
`
const Button = styled.button`
    padding: 8px;
    border: none;
    cursor: pointer;
    font-size: 16px;
`
export {ButtonsWrapper, Button}