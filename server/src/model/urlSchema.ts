import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        required: true,
        unique: true,
    },
    originalLink: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        require: false
    }
});

urlSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
})

export default mongoose.model("Url", urlSchema);