const users=[
    {
        id:1,
        username:'Abhinav'
    },
    {
        id:2,
        username:'Kittu'
    },
    {
        id:3,
        username:'Akshay'
    },
    {
        id:4,
        username:'Ajay'
    },
    {
        id:5,
        username:'Dishant'
    },
    {
        id:6,
        username:'Aman'
    },
    {
        id:7,
        username:'Raj'
    },
    {
        id:8,
        username:'Naruto'
    },
    {
        id:9,
        username:'Sasuke'
    },
    {
        id:10,
        username:'Kakashi'
    }
]
const getUsers=(page)=>{
    const start= (page-1)*3
    const end= start+3
    return users.slice(start,end)
}
const addUser=(value)=>{
    const user={
        id:users.length+1,
        name:value
    }
    users.push(user)
}

const newUser=()=>{
    return users[users.length-1]
}

const getAllUsers=()=>{
    return users
}

const getUserById=(id)=>{
    return users[id-1]
}

module.exports={
    getUsers,addUser,getAllUsers,newUser,getUserById
}