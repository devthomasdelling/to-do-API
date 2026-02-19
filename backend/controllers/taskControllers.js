let tasks = [];
let nextId = 1;

function list(req, res) {
  res.json(tasks);
}

function create(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "nao ha titulo" });
  }

  const task = { id: nextId++, title, done: false };

  tasks.push(task);
  return res.status(201).json(task);
}

function update(req, res) {
  const { id } = req.params;
  const { title, done } = req.body;

  const task = tasks.find((t) => t.id == id);
  if (!task) {
    const error = new Error("id nao encontrado");
    error.status = 404;
    throw error;
  }

  if (title !== undefined) task.title = title;
  if (done !== undefined) task.done = done;

  res.json(task);
}

function remove(req, res) {
  const id = Number(req.params.id);
  
  const exist = tasks.some((t) => t.id === id)

  if(!exist) {
    return res.status(404).json({error: "id nao encontrado"})
  }
  
  tasks = tasks.filter((t) => t.id !== id);
  
  return res.status(204).send();
}

module.exports = {
  list,
  create,
  update,
  remove,
};
