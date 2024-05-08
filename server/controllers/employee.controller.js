const Employee = require("../models/employee.model");

const getAllEmployee = async (req, res) => {
  try {
    const allQuery = {};
    const { name, email, sort, select } = req.query;

    if (name) {
      allQuery.name = { $regex: name, $options: "i" };
    }
    if (email) {
      allQuery.email = email;
    }

    let apiRes = Employee.find(allQuery);

    if (sort) {
      let sortBy = sort.replace(",", " ");
      apiRes.sort(sortBy);
    }
    if (select) {
      let selectBy = select.split(",").join(" ");
      apiRes.select(selectBy);
    }

    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 5;
    let skip = (page - 1) * limit;

    apiRes = apiRes.skip(skip).limit(limit);

    const data = await apiRes;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllEmployee, addEmployee, updateEmployee };
