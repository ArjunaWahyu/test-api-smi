let data = []; // Array untuk menyimpan data 

exports.createData = (req, res) => {
  const { name, description } = req.body;

  // Validasi: nama tidak boleh duplikat
  if (data.find((item) => item.name === name)) {
    return res.status(400).json({ message: "Data with the same name already exists" });
  }

  // use unix timestamp 
  const createdAt = new Date().getTime();
  const updatedAt = createdAt;

  const newData = { id: Date.now(), name, description, createdAt, updatedAt };
  data.push(newData);
  res.status(201).json(newData);
};

exports.getAllData = (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + Number(limit);

  const paginatedData = data.slice(startIndex, endIndex);
  res.status(200).json(paginatedData);
};

exports.updateData = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  // Cari data berdasarkan id
  const index = data.findIndex((item) => item.id === Number(id));
  if (index === -1) return res.status(404).json({ message: "Data not found" });

  // Perbarui data
  data[index] = { ...data[index], name, description, updatedAt: new Date().getTime() };

  res.status(200).json(data[index]);
};

exports.deleteData = (req, res) => {
  const { id } = req.params;

  // Cari data berdasarkan id dan hapus
  const index = data.findIndex((item) => item.id === Number(id));
  if (index === -1) return res.status(404).json({ message: "Data not found" });

  const deletedData = data.splice(index, 1);
  res.status(200).json({ message: "Data deleted", data: deletedData });
};
