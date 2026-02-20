const Task = require("../models/Tasks");

async function list(req, res) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.menssage });
  }
}

async function create(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "nao ha titulo" });
  }
  try {
    const task = await Task.create({ title });

    return res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.menssage });
  }
}

async function update(req, res) {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!task) {
      return res.status(404).json({ error: "nao encontrada" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ error: "nao encontrada" });
    }

    res.json({ message: "removida" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  list,
  create,
  update,
  remove,
};
