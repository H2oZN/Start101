export default function MyChild({setData}) {
    function increase(){
        setData((old) => old+1)
    }
    function decrease(){
        setData((old) => old-1)
    }
    return (
        <div>
            <div className="flex justify-center items-center gap-4 mt-4">
                <button onClick={increase} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Increase</button>
                <button onClick={decrease} className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Decrease</button>
            </div>
        </div>
    );
}