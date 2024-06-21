import db from "../config/db.js"
import logger from "../middlewares/logger.js";

export const listUsers = (req, res) => {
    try{
        db.query('SELECT * FROM users', (err, results) => {
            if(err){
                logger.error(err);
                throw err;
            }
            res.render('layout', {title: 'Users', body: 'users/index', results});
        });
    }catch(error){
        throw error;
    }
}

export const getUser = (req, res) =>{
    let userId = req.params.id;
    try{
        db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
            if(err){
                logger.error(err);
                throw err;
            }
            res.render('layout', {title: 'User', body: 'users/view', results});
        })
    }catch(error){
        throw error;
    }
}

export const createUserForm = (req, res) => {
    res.render('layout', {title: 'Create User', body: 'users/create'});
}

export const createUser = (req, res) => {
    let userData = req.body;
    try{
        db.query('INSERT INTO users SET ?', userData, (err, result) => {
            if(err){
                logger.error(err); 
                throw err;
            }
            res.redirect('/users');
        });
    }catch(error){
        throw error;
    }
}

export const updateUserForm = (req, res) => {
    let userId = req.params.id;
    try {
        db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
            if(err){
                logger.error(err);
                throw err;
            }
            res.render('layout', {title: 'Update user', body: 'users/update', results});
        });
    } catch (error) {
        throw error;
    }
}

export const updateUser = (req, res) => {
    let userId = req.params.id;
    let userData = req.body;
    try {
        db.query('UPDATE users SET ? WHERE id = ?', [userData, userId], (err, result) => {
            if(err){
                logger.error(err);
                throw err;
            }
            res.redirect('/users');
        });
    } catch (error) {
        throw error;
    }
}

export const deleteUser = (req, res) => {
    let userId = req.params.id;
    try{
        db.query('DELETE FROM users WHERE id = ?', [userId], (err, result, fields) => {
            if(err){
                logger.error(err);
                throw err;
            }
            logger.info(JSON.stringify(result, null, 2));
            logger.info(`Deleted user: ${userId}`);
            res.redirect('/users');
        });
    }catch(error){
        throw error;
    }
}