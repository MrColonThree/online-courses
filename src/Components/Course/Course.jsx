import { FiBookOpen } from 'react-icons/fi';
const Course = ({ course, handleClickAddToCart }) => {
  const { title, image, description, price, credit_hours } = course;
  return (
    <div className="p-4 rounded-lg shadow-lg border-2 w-3/4 md:w-auto mx-auto">
      <img className="w-full h-48 mx-auto rounded-lg" src={image} alt="" />
      <h2 className="text-2xl font-semibold mt-5">{title}</h2>
      <div className="my-2">
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex justify-between mb-2">
      <p className="text-2xl flex items-center gap-2">
        $<span className="text-gray-600 text-lg"> Price: {price}</span>
      </p>
      <p className="text-lg flex items-center gap-2">
        <FiBookOpen className='text-2xl'></FiBookOpen>
        <span className="text-gray-600">Credit:    {credit_hours}</span>
      </p>
      </div>
      <div className="text-center bg-blue-500 py-2  rounded-lg">
        <button
          onClick={() => handleClickAddToCart(course)}
          className=" text-xl font-semibold  text-white"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Course;
