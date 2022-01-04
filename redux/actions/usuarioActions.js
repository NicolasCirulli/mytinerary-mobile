import axios from "axios"

const usuarioActions = {
    nuevoUsuario: ( {primerNombre, apellido,email,contraseña,fotoPerfil,pais,google,rol})=>{
        return async(dispatch,getState)=>{
           const usuario = await axios.post('https://mytinerary-cirulli.herokuapp.com/api/usuario/registro',{primerNombre, apellido,  email, contraseña, fotoPerfil, pais,google,rol})
           if(usuario.data.success){
               console.log(usuario.data)
                localStorage.setItem('token',usuario.data.response.token)
                dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.nuevoUsuario.primerNombre,fotoPerfil: usuario.data.response.nuevoUsuario.fotoPerfil,email:usuario.data.response.nuevoUsuario.email, _id: usuario.data.response._id,rol: usuario.data.response.rol}})
                return usuario
           }else{
            
               return usuario
           }
        }
    },
    iniciarSesion : ({email, contraseña,google})=>{
        return async(dispatch,getState)=>{
            console.log(email, contraseña,google);
            const usuario = await axios.post('https://mytinerary-cirulli.herokuapp.com/api/usuario/iniciarSesion',{email,contraseña,google})
            console.log(usuario.data);
            if(!usuario.data.success){
                return usuario
            }else{
                localStorage.setItem('token',usuario.data.response.token)
                 dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.primerNombre,fotoPerfil: usuario.data.response.fotoPerfil,email:usuario.data.response.email, _id: usuario.data.response._id, rol: usuario.data.response.rol}})
                return usuario
            }
        }
    },
    cerrarSesion: () =>{
        return (dispatch,getState) =>{
            localStorage.clear()
            dispatch({type:'cerrar',payload:{}})
        }
    },
    loggearDesdeStorage: (token) =>{
        return async(dispatch,getState) =>{
            try{
                const usuario = await axios.post('https://mytinerary-cirulli.herokuapp.com/api/usuario/iniciarSesion/token',{} ,{
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
                usuario.data.success && dispatch({type:'iniciarSesion', payload:{usuario:usuario.data.response.primerNombre, fotoPerfil: usuario.data.response.fotoPerfil, rol: usuario.data.response.rol,email:usuario.data.response.email, _id : usuario.data.response._id,}})
                return usuario.data.success ? usuario.data : null
            }catch(err){console.log(err)}
        }
    },
    borrarCuenta: (token)=>{
        return async(dispatch,getState) =>{
            try{
                const usuario = await axios.post('https://mytinerary-cirulli.herokuapp.com/api/usuario/borrar',{} ,{
                    headers:{
                        'Authorization':'Bearer '+token 
                    }
                })
            }catch(err){console.log(err)}
        }
    },
    obtenerTodosLosUsuarios:()=>{
        return async(dispatch,getState) =>{
            try{
                const usuarios = await axios.get('https://mytinerary-cirulli.herokuapp.com/api/usuarios')
                dispatch({type:'usuarios', payload: usuarios.data.response})
            }catch(error){
                console.error(error);
            }
        }
    }
}

export default usuarioActions