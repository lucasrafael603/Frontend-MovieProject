import React from 'react';
import movieValues from '../../WebServices/movieValues'






export default function Movies({title, items, title2, items2, ehAcaoAtivos,ehTodosAtivo}) {




  //<h2> {title} </h2>    

    //{console.log(movieValues())}

    return (
      
      <>

           

     {ehTodosAtivo &&  

        <>
      <h2> {title} </h2>   
      <div className='movieRow-listarea'>
       

          {items.results.map((values, key)=> {

            return (

              <>
               <img src={`https://image.tmdb.org/t/p/w300${values.poster_path}`} alt={values.original_title} />  

              </>

            )


          })}

        

          </div> 
          </>
           }


            {ehAcaoAtivos &&  

            <>
            <h2> {title2} </h2>   
            <div className='movieRow-listarea'>


              {items2.results.map((values, key)=> {

                return (

                  <>
                  <img src={`https://image.tmdb.org/t/p/w300${values.poster_path}`} alt={values.original_title} />  

                  </>

                )


              })}



              </div> 
              </>
              }
     


      </>

        
    
    );
  }