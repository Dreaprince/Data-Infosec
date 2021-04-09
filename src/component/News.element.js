import styled, {css} from 'styled-components';
import imgB from '../img/Q.jpg';
import imgC from '../img/R.jpg';


export const Container = styled.div`
   height: 1100px; 
   width: 100%;
   max-width: 1484px;
   margin-left: auto;
   margin-right: auto;
   background: #fff;
   font-family: "Yahoo sans",YahooSans,"Helvetica Neue",Arial, Helvetica, sans-serif;
`;

export const InnerContainer = styled.div`
    width: 100%;
    max-width: 867px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    /* height: 1000px; */
    border-right: solid 1px #f5f5f5;
    border: solid 1px #f5f5f5;
    padding-right: 22px;
    padding-left: 28px;
`;

export const Note = styled.div`
    margin-bottom: 20px;
    margin-top: 10px;
    font-weight: 800;
    color: #000;
    font-size: 15px;
`;

export const GroupA = styled.div`
    margin-left: auto;
    margin-right: auto;
    /* height: 153px; */
    display: flex;
    flex-direction: row;
    /* flex-direction: column; */
    justify-content: space-between;
`;

export const imga = css`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 285px;
    height: 120px;
    object-fit: cover; 
    margin-bottom: 30px;
`;

export const ImgB = styled.img`
      ${imga}
    background-image: url(${imgB});
`;

export const ImgC = styled.img`
      ${imga}
    background-image: url(${imgC});
`;

export const TextBox = styled.div`
     width: 100%;
     max-width: 945;
     height: 115px;
     margin-left: 30px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
`;

export const Date = styled.div`
     font-weight: normal;
    color: #bdbdbd;
    font-size: 10px;
`;

export const Discription = styled.div`
     font-weight: 800;
    color: #000;
    font-size: 13px;
`;

export const SubDescrip = styled.div`
    font-weight: 600;
    color: #424242;
    font-size: 10px;
`;

export const Belong = styled.div`
   font-weight: 600;
    color: #424242;
    font-size: 13px;
`;

export const Span = styled.div`
    display: inline;
    margin-left: 10px;
    color: #0091ea;
`;