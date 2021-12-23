import styled from "styled-components";
import ToggleTheme from "./ToggleTheme";


const Header = (props) => {

  return (
    <HeaderDiv>
        <img className="logo__img" src="undefined"></img>
        <div className="header__item">
            <div className="login">Login</div>
            <ToggleTheme theme={props.theme} darkModeHandler={props.darkModeHandler} />
        </div>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;    
    width: 100%;
    height: 50px;

    background-color: #27272A;

    .header__item{
        display: flex;
        padding-right:20px;
    }

    .login{
        width: 45px;
        height: 20px;
        padding-right: 5px;
        font-size: 12px;
        font-weight: bold;
        color: 'blue';
    }

    .logo__img {
        width: 100px;
        height: 30px; 
        padding-left: 12px;   
    }
`;