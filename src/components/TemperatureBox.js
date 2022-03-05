import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { HiOutlineChevronDoubleRight } from "react-icons/hi"

const TemperatureBox = (props) => {

    const bit = { type: "비트코인", percent: 36.5 };
    const eth = { type: "이더리움", percent: 12.5 };
    const rip = { type: "리플", percent: 90 };

    const coin = (props.type === "bit") ? bit : ( (props.type === "eth") ? eth : rip );

    const noBackgroundStyle = {
        width: '100%',
        background: 'none',
    }

    return (
        <TempBoxDiv style={props.noBackground && noBackgroundStyle}>
            <div className="temp-title">{coin.type} 체감온도</div>
            <ProgressBar percent={coin.percent}/>
            <div className="container">
                <div className="temp-num item">{coin.percent} ºC</div>
                {props.noBackground || <HiOutlineChevronDoubleRight size="1.5rem" className="arrow item"/>}
            </div>
        </TempBoxDiv>
    );
}

const TempBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin-top: 15px;

    width: 95%;
    height: 120px;
    background-color: #212121;

    font-size: 16px;

    .temp-title {
        margin: 13px 0px;
        width: 95%;
        font-size: 17px;
        font-weight: bold;
    }

    .container {
        display: grid;
        grid-template-rows: 2fr 1fr;
        grid-template-columns: 9fr 1fr;
        align-items: center;
        width: 100%;
    }

    .temp-num {
        display: flex;
        grid-column: 1/3;
        grid-row: 1;
        justify-content: center;
        margin-top: 10px;
    }

    .arrow {
        grid-column: 2;
        grid-row: 1/3;
        margin-top: 20px;
    }
`

export default TemperatureBox;