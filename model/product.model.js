
import  mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter product name"], // Custom error message on validation
        trim: true, // Trims whitespace around the name
      },
      price: {
        type: Number,
        required: [true, "Please enter product price"], // Custom error message on validation
        default: 0, // Default price if not provided
      },
      quantity: {
        type: Number,
        required: [true, "Please enter product quantity"], // Custom error message on validation
        default: 0, // Default quantity if not provided
      },
      image: {
        type: String, 
        required: false, // This is optional
      },
    },
    { timestamps: true }
  );
  
export default mongoose.model('Product', productSchema);

  