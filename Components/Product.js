export default function Product({ data, rowNumber }) {
  const bgcolor = Number(rowNumber) % 2 === 0 ? "bg-gray-100" : "bg-gray-200";
  return (
    <div className={`flex items-center h-10 w-full ${bgcolor}`}>
      <div className="text-center w-5/12">Product Name :</div>
      <div className="w-4/12 ml-3 text-left">{data.productName}</div>
      <div className="w-2/12 text-left">Price:</div>
      <div className="w-2/12 text-left">{data.price}</div>
    </div>
  );
}
