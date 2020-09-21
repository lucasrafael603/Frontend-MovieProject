import api from '../API/api'
//import axios from 'axios'

export default async function movieValues () {


        return [ { 
                    categoryName: 'Originais',
                    title: 'Originais Netflix',
                    items: await api('discover/tv?with_network=213&language=pt-BR')
                    
                    
        },{
                    categoryName: 'Rated',
                    title: 'Mais vistos',
                    items: await api('movie/top_rated?')
                    
                }

                ,{
                    categoryName: 'Action',
                    title: 'Ação',
                    items: await api('discover/movie?with_genres=28')
                    
                }]
         
}