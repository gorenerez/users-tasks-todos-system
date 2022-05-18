const User = require('../models/userModel');

const getAllUsers = function()
{
    return new Promise((resolve,reject) =>
    {
        User.find({}, function(err, data)
        {
            if(err)
            {
               reject(err)
            }
            else
            {
                 resolve(data);
            }
        })
    })
}



const getUser = function(id)
{
    return new Promise((resolve,reject) =>
    {
        User.findById(id, function(err, data)
        {
            if(err)
            {
               reject(err)
            }
            else
            {
                 resolve(data);
            }
        })
    })
}



const addUser = function(obj)
{
    return new Promise((resolve,reject) =>
    {
       
       let usr = new User(obj);

       usr.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created!');
            }

        })
    })
}


const updateUser = function(id,obj)
{
    return new Promise((resolve,reject) =>
    {

        User.findByIdAndUpdate(id,obj, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Updated!');
            }
        })
    })
}


const deleteUser = function(id)
{
    return new Promise((resolve,reject) =>
    {

        User.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Deleted!');
            }
        })
    })
}




module.exports = {getAllUsers, getUser, addUser, updateUser, deleteUser}