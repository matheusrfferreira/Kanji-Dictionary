import {Container, Kanji} from "./styles";

export const Card = (props) => {


    return (
        <Container onClick={props.onClick} >
            <Kanji>
                {props.kanji}
            </Kanji>

        </Container>
    )
}
