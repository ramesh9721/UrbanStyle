import currency from "currency-formatter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ProductCard = ({ product }) => {
  // const percentage = product.discount / 100;
  const discountPrice = product.price - product.discount;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full sm:w-6/12 md:w-4/12 xl:w-3/12 px-5 py-10"
      key={product._id}
    >
      <Link to={`/product/${product._id}`}>
        <div className="w-full">
          <img
            src={`/images/${product.image1}`}
            alt="product image"
            className="w-full h-[310px] object-cover"
          />
        </div>
        <p className="capitalize text-base font-medium text-black my-2.5">
          {product.title}
        </p>
        <div className="flex justify-between">
          <span className="text-lg font-medium text-black">
            {currency.format(discountPrice, { code: "NPR" })}
          </span>
          <span className="text-lg font-medium text-gray-600 line-through">
            {currency.format(product.price, { code: "NPR" })}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
