const mongoose = require("mongoose");

const documentFormSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    phone: { type: String, required: true, unique: true, max: 50 },
    languageTest: { type: String, default: "" },
    languageTestScore: { type: String, default: "" },
    targetSchool: { type: String, default: "" },
    course: { type: String, default: "" },
    targetCountry: { type: String, default: "" },
    documentType: { type: String, default: "" },

    documentLink: {type: String,default: ""},
    consultantName:{type:String,default: ""},
    consultantId:{type: Number,default: ""},
    isReviewed: {type: Boolean,default: false},
    payment: {type:Boolean,default: false},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("documentFormSchema", documentFormSchema);
