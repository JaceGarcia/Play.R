const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttackersSchema = new Schema({
    name: String,
    imgUrl: String,
});
const DefendersSchema = new Schema({
    name: String,
    imgUrl: String,
});

const AttackersModel = mongoose.model("Attackers", AttackersSchema);
const DefendersModel = mongoose.model("Defenders", DefendersSchema);

module.exports = {
    Attackers: AttackersModel,
    Defenders: DefendersModel
};