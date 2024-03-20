var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

AuthorSchema
.virtual('name')
.get(function () {
  var fullname = '';
  if (this.first_name && this.family_name) {
    fullname = this.family_name + ', ' + this.first_name
  }
  if (!this.first_name || !this.family_name) {
    fullname = '';
  }
  return fullname;
});

AuthorSchema.virtual('lifespan').get(function() {
  var lifespan = '';
  if (this.date_of_birth && this.date_of_death) {
    lifespan = this.date_of_birth.getFullYear().toString() + ' - ' + this.date_of_death.getFullYear().toString();
  }
  return lifespan;
});

module.exports = mongoose.model('Author', AuthorSchema);