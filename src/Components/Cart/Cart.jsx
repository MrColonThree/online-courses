const Cart = ({ cart, remainingHour, totalCredit, totalPrice }) => {
  return (
    <div className="w-full md:w-1/4 p-5 my-5 rounded-lg shadow-lg">
      <h1 className="text-xl font-semibold text-blue-500 pb-2 border-b-2">
        Credit Hour Remaining: {remainingHour} hr
      </h1>
      <h1 className="text-center text-xl font-bold my-2">Course Name</h1>
      <ol className="list-decimal text-gray-600 my-2 ml-2">
        {cart.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ol>
      <h1 className="text-lg font-semibold py-2 border-y-2 my-2">
        Total Credit Hour: {totalCredit}
      </h1>
      <h1 className="text-lg font-semibold">Total Price: {totalPrice} USD</h1>
    </div>
  );
};

export default Cart;
