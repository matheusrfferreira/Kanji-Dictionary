import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {Card} from "../../components/Card";
import {Pagination} from "../../components/Pagination";
import {selectKanji} from "../../redux/actions";
import {Modal} from "../../components/modal"
import {Container, Kanji} from "./styles";


export const AllKanji = () => {

    const dispatch = useDispatch()

    const[kanji, setKanji] = useState([])
    const[pageNumber, setPageNumber] = useState(1)
    const[amount, setAmount] = useState(0)
    const[modal, setModal] = useState(false)

    useEffect(()=> {

        axios.get('https://kanjiapi.dev/v1/kanji/all').then((res) => {
            setAmount(res.data.length)
            setKanji((res.data.slice(pageNumber*300, pageNumber*300 + 300)).map(k => k))
        })
    },[pageNumber])

    const showModal = (kanji) => {
        dispatch(selectKanji(kanji))
        setModal(!modal)
    }



    return (
            <Container>
                <Pagination previousPage={() => pageNumber < 2 ? null : setPageNumber(pageNumber - 1)}
                            nextPage={() => pageNumber < 43 ? setPageNumber(pageNumber + 1) : null}
                            display={amount} pageNumber={pageNumber} />
                <Kanji >
                    {kanji.map((kanji) => (<Card kanji={kanji} key={kanji} onClick={ () => showModal(kanji)} />))}
                </Kanji>

                {modal && <Modal onClick={() => setModal(!modal)}/>}

            </Container>
    )
}

