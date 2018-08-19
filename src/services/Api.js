const Api = {
    login (username,password) {
        return new Promise((resolve,reject)=>{
            if(username === 'root'){
                resolve('::token::')
            }
            else reject('Invalid credentials')
        })
    },
    getProfile(token){
        return new Promise((resolve,reject)=>{
            resolve({name: 'Christian',email:'bopechri@protonmail.com'})
        })
    }

}

export default Api
