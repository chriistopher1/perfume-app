function Product() {
  return (
    <div className=" flex items-center  bg-[#a75928] max-md:flex-wrap " id="product">
      <img src="/product-image-3.jpg" className="h-auto w-1/2 max-md:w-full" />
      <div className="flex flex-col px-6 py-10 text-center">
        <div className="text-2xl font-bold ">OUR PRODUCT</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Scelerisque purus semper eget duis at
        </div>
      </div>
    </div>
  );
}

export default Product;
