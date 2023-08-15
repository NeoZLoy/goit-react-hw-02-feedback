import { ButtonsWrapper, Button} from "./FeedbackOptions.styled"

export const FeedbackOptions = ({handleClick}) => {
    return(
        <ButtonsWrapper>
            <Button onClick = {() => handleClick("good")}>Good</Button>
            <Button onClick = {() => handleClick("neutral")}>Neutral</Button>
            <Button onClick = {() => handleClick("bad")}>Bad</Button>
        </ButtonsWrapper>
    )
} 