import AllProducts from '@/Components/AP'

export default function HomePageCC() {
    return (
        <div className='flex flex-row px-3 items-start justify- bg-center min-h-screen w-screen'>
            <div className='flex items-center justify-center text-2xl sm:text-3xl text-blue-500 sm:text-blue-400 w-full my-3'>ThinkBeyond Shop</div>
           <AllProducts/>
        </div>
    );
}