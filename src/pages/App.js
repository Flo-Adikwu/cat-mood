import React, { useState } from 'react';
import cat from '../assets/images/cat.svg';
import empty from '../assets/images/empty-state-cat.svg';
import { cardsArray } from '../constants';
import notHavingIt from '../assets/images/nothavingit.svg';
import sad from '../assets/images/unhappy.svg';
import happy from '../assets/images/happy.svg';
import '../styles/App.scss';


const App = () => {
    const [selected, setSelected] = useState(false);
    const [selectedText, setSelectedText] = useState("")
    const [saved, setSaved] = useState(false);
    const [cards, setCards] = useState(cardsArray);
    const [moodText, setMoodText] = useState("");
    const [cardArr, setCardArr] = useState([])
    let textStyle = {
        color: "#000"
    }
    if (selected && selectedText === "happy") {
        textStyle = {
            color: "green"
        }
    } else if (selected && selectedText === "sad") {
        textStyle = {
            color: "red"
        }
    } else if (selected && selectedText === "indifferent") {
        textStyle = {
            color: "orange"
        }
    }
    const onClickIndifferent = () => {
        setSelected(true);
        setSelectedText("indifferent");
        setMoodText("Cat was indifferent")
    }
    const onClickSad = () => {
        setSelected(true);
        setSelectedText("sad");
        setMoodText("Cat wasn't having it")
    }
    const onClickHappy = () => {
        setSelected(true);
        setSelectedText("happy");
        setMoodText("Cat was super excited!")
    }
    const save = () => {
        setSaved(true);
        setSelected(false);
        setSelectedText("")
        const copiedCards = [...cards];
        if (selectedText === "happy") {
            let filterCard = copiedCards.filter((c => c.key === "happy"));
            const _cards = [...filterCard, ...cardArr]
            setCardArr([...new Set([..._cards])])
        } else if (selectedText === "indifferent") {
            let filterCard = copiedCards.filter((c => c.key === "indifferent"));
            const _cards = [...filterCard, ...cardArr]
            setCardArr([...new Set([..._cards])])
        } else if (selectedText === "sad") {
            let filterCard = copiedCards.filter((c => c.key === "sad"));
            const _cards = [...filterCard, ...cardArr]
            setCardArr([...new Set([..._cards])])
        }
        else setCards(cards);
    }
    return (
        <div className="container">            <div className="container__firstDiv">                <img src={cat} alt="cat-img" className="container__firstDiv--cat-img" />                <h3 className="container__firstDiv--header-text">What is your cat's<br /> current mood?</h3>                <div className="container__firstDiv--emoji-div">                    <img src={sad}
            alt="angry-emoji" className="container__firstDiv--emoji" onClick={onClickIndifferent} style={{
                border: selected && selectedText === "indifferent" ? "1px solid orange" : "1px solid #C4C4C4",
                backgroundColor: selected && selectedText === "indifferent" ? "rgba(255, 150, 53, 0.2)" : "rgba(175, 170, 168, 0.2)"
            }}
        />,
            <img src={notHavingIt}
                alt="sad-emoji" className="container__firstDiv--emoji" onClick={onClickSad} style={{
                    border: selected && selectedText === "sad" ? "1px solid red" : "1px solid #C4C4C4",
                    backgroundColor: selected && selectedText === "sad" ? "rgba(249, 49, 49, 0.1)" : "rgba(175, 170, 168, 0.2)"
                }}
            />,
            <img src={happy}
                alt="happy-emoji" className="container__firstDiv--emoji" onClick={onClickHappy} style={{
                    border: selected && selectedText === "happy" ? "1px solid green" : "1px solid #C4C4C4",
                    backgroundColor: selected && selectedText === "happy" ? "rgba(50, 194, 82, 0.2)" : "rgba(175, 170, 168, 0.2)"
                }} />                </div>                {selectedText && <h3 style={textStyle}>{moodText}</h3>}
            <button disabled={!selected} className={!selected ? "container__firstDiv--disabled" : "container__firstDiv--button"} onClick={save}>Save mood</button>            </div>            <div className="container__secondDiv">                <img src={cat} alt="cat-img" className="container__secondDiv--small-cat-img" /><span><b>Cat mood tracker&trade;</b></span>                <h3 className="container__secondDiv--header-text">MOOD HISTORY</h3>                {/* mapping through constants to display cards */}
                {saved && <div>                    {cardArr.map((item, i) => (
                    <div key={i}>{item.value}</div>))}
                </div>}
                {/* empty state when no emoji has been selected */}
                {!saved && <div className="container__secondDiv--empty">                    <img src={empty} alt="cat-empty" />                    <p>No mood history to show yet</p>                </div>}
            </div>        </div >)
}
export default App;