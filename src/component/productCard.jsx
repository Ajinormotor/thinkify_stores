
import Discount from "../category/discount"
import SpecialSales from "../category/specialSales"
import BulkSales from "../category/bulkSales"
import NewSales from "../category/newSales"







const ProductCard = () => {
 



  return (
<section className="flex flex-col w-[100%] justify-center items-center">




  {/* New arrival Section */}
<div>
<NewSales />
</div>





{/* Bulk Section */}
<div>
<BulkSales /> 
</div>


<div>
<Discount /> 
</div>

<div>
<SpecialSales />
</div>


</section>
  )
}

export default ProductCard