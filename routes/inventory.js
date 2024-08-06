const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventorycontroller');

router.get('/', inventoryController.getAllInventory);

router.post('/', inventoryController.addInventory);

router.put('/:id', inventoryController.updateInventoryPut);

router.patch('/:id', inventoryController.updateInventoryPatch);

router.delete('/:id', inventoryController.deleteInventory);

module.exports = router;
