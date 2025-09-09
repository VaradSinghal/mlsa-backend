const validateTask = (req, res, next) => {
  const { title, description } = req.body;
  
  if (!title || title.trim().length === 0) {
    return res.status(400).json({ message: 'Title is required' });
  }
  
  if (description && description.length > 500) {
    return res.status(400).json({ message: 'Description too long' });
  }
  
  next();
};

module.exports = { validateTask };