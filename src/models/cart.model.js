import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1, min: 1 }
}, { _id: false });

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  items: { type: [cartItemSchema], default: [] }
}, {
  timestamps: true,
  versionKey: false
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;


