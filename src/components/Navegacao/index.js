import React from 'react'
import Movies from '../Movies/index'




export default function Navegacao ({btn1, btn2}) {



    return (

            <nav>
                <div>
                    <button onClick={btn1} > Todos  </button>
                    <button > Mais Visto  </button>
                    <button onClick={btn2} > Ação  </button>

                </div>

            </nav>
            


    )

}