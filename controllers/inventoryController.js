const db = require ('../config/db');

const getAllInventory = (req,res) => {
    db.query ('SELECT * from products', (err, results) => {
        if(err){
            console.error('Error em obter produtos', err);
            res.status(500).send('Error em obter transações');
            return;
        }
        res.json(results);
    })}

const addInventory = (req,res) => {
    const {nome,description_product,category,price,stock,expiry_date} = req.body;
    db.query ('INSERT INTO products (nome,description_product,category,price,stock,expiry_date) VALUES(?,?,?,?,?,?)', [nome,description_product,category,price,stock,expiry_date],(err, results)=> {
        if(err){
            console.error('Error em adicionar produto(s)', err);
            res.status(500).send('Error em adicionar produto(s)');
            return;
        }
        res.status(201).send('transação adicionada com sucesso');
})}
    
const updateInventoryPut = (req,res) => {
    const {id} = req.params;
    const {nome,description_product,category,price,stock,expiry_date} = req.body
    db.query ('UPDATE products set nome=?, description_product=?, category=?, price=?, stock=?, expiry_date=? WHERE id=?', [nome,description_product,category,price,stock,expiry_date, id],
        (err, results) => {
        if(err) {
            console.error('Error em obter produto(s)', err);
            res.status(500).send('Error em adicionar produto(s)');
            return;
        }
            res.status(201).send('Produto(s) adicionada com sucesso');
        }
    );
};

const updateInventoryPatch = (req, res) => {
const {id} = req.params;
const fields = req.body;
const query = [];
const values = [];
    
for (const [key,value] of Object.entries(fields)) {
    query.push(`${key}=?`);
    values.push(value);
}
values.push(id);
    
db.query (
     `UPDATE products SET ${query.join(',')} WHERE id = ?`,
    values,
    (err, results) => {
        if(err){
            console.error('Erro ao atualizar transação', err);
            res.status(500).send('Erro ao adicionar transação');
        return;
        }
    res.send('Transação atualizada com sucesso');
})}

const deleteInventory = (req,res) => {
const {id} = req.params;
db.query(
    'DELETE FROM products WHERE id = ?',[id],
    (err, results) => {
        if(err){
            console.error('Erro ao deletar produto', err);
            res.status(500).send('Erro ao deletar produto');
            return;
        }
    res.send('Produto deletado com sucesso');
})}

module.exports = {
    getAllInventory,
    addInventory,
    updateInventoryPut,
    updateInventoryPatch,
    deleteInventory
};