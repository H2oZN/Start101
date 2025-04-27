export default function MyWrap({children}) {
    return (
        <div className="border-red-500 border-2 rounded-md p-4 m-2">
            <div className="flex items-center justify-center min-w-full min-h-full">
                {children}
            </div>
        </div>
    );
}