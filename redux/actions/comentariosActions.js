import axios from "axios"

const comentariosActions = {
    
   
    
    agregarComentarios: (token,id,comentario)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.post('https://mytinerary-cirulli.herokuapp.com/api/itinerarios/comentarios/'+id,{comentario}
                ,
                {
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                dispatch({type:'obtenerItinerariosPorCiudad', payload:usuario.data.response})
                return usuario
            }catch(err){console.log(err)}
        }
    },
    borrarComentario: (token,id,idComentario)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.delete('https://mytinerary-cirulli.herokuapp.com/api/itinerarios/comentarios/'+id
                ,
                {
                    headers:{
                        'Authorization':'Bearer '+token 
                    },
                    data:{
                        idComentario,
                    }
                    
                })
                console.log(usuario);
                return usuario
            }catch(err){console.log(err)}
        }
    },
    modificarComentario: (token,id,idComentario,actualizacion)=>{
        return async (dispatch,getState)=>{
            try{
                const usuario = await axios.put('https://mytinerary-cirulli.herokuapp.com/api/itinerarios/comentarios/'+id,{idComentario,
                actualizacion},              
                { 
                    headers:{
                        'Authorization':'Bearer '+token 
                    },
                      
                    
                })
                console.log(usuario);
                return usuario
            }catch(err){console.log(err)}
        }
    },

}

export default comentariosActions