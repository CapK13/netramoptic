import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link       
      to={`/product/${product.pro_id}`}
      state={{ product }}
      className="no-underline group"
    >                                   
      <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md   transition duration-300 ease-in-out p-4 flex flex-col justify-between">  
        {/* Product Title */}
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-4 group-hover:text-indigo-600 transition-colors duration-200">
          {product.pro_name}
        </h2>                       
        {/* Product Image */}
        <div className="p-1 rounded-xl overflow-hidden">
          <div className="relative h-48 rounded-lg">
            <img              
              src={product.pro_image}
              alt={product.pro_name}
              className="w-full h-full object-contain rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
            />      
          </div>  
        </div>
              
        <div className="mt-4 flex justify-between items-center px-1">
          <p className="text-lg font-bold text-indigo-700">₹{product.pro_price}</p>
          <div className="flex items-center text-yellow-600 gap-1">
            <i className="fa fa-star text-yellow-500 text-base" />
            <span className="text-base font-medium">{product.pro_rating || "4.2"}</span>
          </div>
          <Link             
            to={`/product/${product.pro_id}`}
            state={{ product }} 
            onClick={(e) => e.stopPropagation()}
          >                     
            <button className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 active:scale-95 transition-all duration-200">
              Buy
            </button>

          </Link>
        </div>
      </div>
    </Link>      

  );

};

export default ProductCard;