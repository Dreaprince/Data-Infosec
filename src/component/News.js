import React, {useState}  from 'react';
import axios from 'axios';


import {
     Page,Container,InnerContainer,Note,GroupA,ImgB,TextBox,Date,Discription,SubDescrip,Belong,Span
} from './News.element';

const News = () => {
    
   const [updates, setUpdates] = useState(null);


   const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=6";
  

   const fetchData = async () => {
       const response = await axios.get(apiURL)

       setUpdates(response.data);
    };
    
    fetchData();
    return (
        <>
            <Container >
                <InnerContainer  >
                    <Note>News</Note> 
                        {updates && updates.map((update, index ) => {
                            // const cleanedDate = new Date(update.released).toDateString();
                            const authors = update.authors.join(', ');
                            
                            return(
                                <GroupA> 
                                   <ImgB />
                                    <TextBox className="update" key={index} > 
                                            <Date> {update.released} | {update.name} </Date>
                                            <Discription> {authors} | {update.url} </Discription>
                                            <SubDescrip> {update.isbn} | {update.url} </SubDescrip>
                                            <Belong>
                                            Related: <Span> {update.publisher} </Span>
                                            </Belong>                
                                    </TextBox>
                               </GroupA> 
                            );
                        }) }    
                </InnerContainer>
          </Container>   
        </>
    )
}

export default News

