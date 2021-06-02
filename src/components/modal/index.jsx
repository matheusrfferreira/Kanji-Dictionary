import {Container, Ul, P, Span, Button, Kanji, Li} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";


export const Modal = (props) => {

    let kanji = useSelector((state) => state);
    const dispatch = useDispatch()

    const[character, setCharacter] = useState('')

    useEffect(()=> {
        axios.get(`https://kanjiapi.dev/v1/kanji/${kanji}`).then((res) => {
            setCharacter(res.data)
        })
    },[kanji])

    let kAnji = character.kanji,
        grade = character.grade,
        strokeCount = character.stroke_count,
        meanings = character.meanings,
        kunReadings = character.kun_readings,
        onReadings = character.on_readings,
        jlpt = character.jlpt;

    return (
        <Container >

            {kAnji && <Kanji>{kAnji}</Kanji>}

            {strokeCount && <P>Stroke Count: <Span>{strokeCount}</Span></P>}
            {jlpt && <P>JLPT: <Span>{jlpt}</Span></P>}
            {grade && <P>Grade: <Span>{grade}</Span></P>}

            {meanings && <Ul>Meanings: {meanings && meanings.map((x)=> (<Li>{x}</Li>) )}</Ul>}
            {kunReadings && <Ul>Kun Readings: {kunReadings && kunReadings.map((x)=> (<Li>{x}</Li>) )}</Ul>}
            {onReadings && <Ul>On Readings: {onReadings && onReadings.map((x)=> (<Li>{x}</Li>) )}</Ul>}


            {kAnji && <Button onClick={props.onClick}>Close</Button>}

        </Container>
    )
}