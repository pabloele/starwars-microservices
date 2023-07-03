const Character = require("../data")

module.exports = async (req,res) => {
    const charaters = await Character.list();
    
    res.status(200).json(charaters);
};