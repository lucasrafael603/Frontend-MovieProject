import axios from 'axios'

const key = '38c007f28d5b66f36b9c3cf8d8452a4b'

export default async function api (values){

        const api = axios.create({baseURL: 'https://api.themoviedb.org/3'})

       const results = await api.get(`/${values}&api_key=${key}`)
        
       //console.log(results)

       const api_dados = results.data
       //console.log(api_dados)

       return api_dados

      
}

//https://api.themoviedb.org/3
//38c007f28d5b66f36b9c3cf8d8452a4b
//https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=38c007f28d5b66f36b9c3cf8d8452a4b
//`https://api.themoviedb.org/3/${values}&api_key=38c007f28d5b66f36b9c3cf8d8452a4b`