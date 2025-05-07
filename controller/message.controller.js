const Message = require('../model/role.schema.js');

const getAll = (req, res, next) => {
    let result = Role.findAll();
    res.status(200).json(result);
}


const getById = async (req, res, next) => {
    let result = await Message.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(result);
}

const create = async (req, res, next) => {
    try {
        let result = await Message.create({
            name: req.body.name
        });
        res.status(201).json(result);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

const update = (req, res, next) => {
  let messageToUpdate = Message.findOne({
    where: {
      id: req.params.id
    }
  });
  if (req.body.name) {
    messageToUpdate.name = req.body.name;
  }
  messageToUpdate.save();
    let result = Message.updateOne(req.body, { id: req.params.id });
    res.status(201).json(result);
}

const remove = (req, res, next) => {
    let result = Message.remove(req.params.id);
    res.status(200).json(result);
}

module.exports = { getAll, create, getById, update, remove };
