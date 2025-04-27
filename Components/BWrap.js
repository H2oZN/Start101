export default function BWrap({ children }) {
    return (
        <div className="w-32 h-8 mx-2 text-center bg-blue-400 hover:bg-blue-600 hover:cursor-pointer active:bg-red-500 rounded-b-md">
            {children}
        </div>
    );
}
