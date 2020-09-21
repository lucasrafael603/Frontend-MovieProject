import React, {useState, useEffect} from 'react';
import './App.css';
import movieValues from './WebServices/movieValues'
import Movies from './components/Movies'
import Navegacao from './components/Navegacao/index'



function App() {






  const [movieList, setMovieList] = useState([])
  const [movieAcao, setMovieAcao] = useState( () =>{

        const values = localStorage.getItem('@action')

        //console.log('valores', JSON.parse(values))
        if(values) {
              return JSON.parse(values)

        }else{

              return []

        }


  },[])
  const [todosList, setTodosList] = useState(true)
  const [acaoList, setAcaoList] = useState(false)
  const [maisVistosList, setMaisVistosList] = useState(false)
  

  useEffect(() => {
       async function findAll(){
  
        const list = await movieValues()
        const listAction = await movieValues()
        //const newValues = JSON.parse(listAction)
        //console.log(newValues)
        //const test = listAction[2]
        
       var actionList = []
        for(let i = 0; listAction.length > i; i++){

              
              //console.log(listAction[i])

              if(listAction[i].categoryName = 'Actions'){

                  actionList = listAction[i]
                  //console.log('Verificar',listAction[i].items.results)
                  localStorage.setItem('@action', JSON.stringify(listAction[i]))
                  //var convertido = JSON.parse(actionList)
                  //console.log(actionList.items.results)
                  console.log(actionList)
                  //setMovieAcao([...movieAcao, convertido])
                  //setMovieAcao(listAction[i])
              }

              
              

        }
      
        // let ActionValues = listAction.filter( (list, index) => {


        //      list.
        // })

        //onsole.log('ação',actionList)
        //setMovieAcao(actionList)
        //console.log('Verificar Status', actionList.items.results)
        //setMovieAcao([...movieAcao, actionList.items.results[0]])
        //console.log('Funcionou?',movieAcao)
        
        setMovieList(list)
        
      }
      
      findAll()
  
  
  }, [])
  



  return (
    
    <>

    
    <Navegacao btn2={() => acaoList ? setAcaoList(false) : setAcaoList(true) & setTodosList(false) } btn1={() => todosList ? setTodosList(false) : setTodosList(true)}  />

    { todosList && 
    
        
    <div className='pages'> 
      <section className='lists'>
    
        {movieList.map((values, index) => {

            return (<Movies key={index} ehTodosAtivo={todosList} title={values.title} items={values.items} />)
                  
        })}

    

    </section>
    </div>
    
    }

    { acaoList && 
    
    <div className='pages'> 
    <section className='lists'>
  
      
        <Movies  title2={movieAcao.title} items2={movieAcao.items} ehAcaoAtivos={acaoList}>   </Movies>
        

  </section>
  </div>
      
    
    }

    
    </>

  );
}

export default App;





  // <>

    
  //   <Navegacao></Navegacao>

  //   <div className='pages'> 
  //     <section className='lists'>

  //       {console.log(movieList)}
    
  //       {movieList.map((values, index) => {

  //           return (<Movies key={index} ehAcao={acaoList} ehMaisVistos={maisVistosList} ehTodos={todosList} title={values.title} items={values.items} />)
                  
  //       })}

    

  //   </section>
  //   </div>
  //   </>