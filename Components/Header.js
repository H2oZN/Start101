import Dmode from "@/Components/dark-mode";
export default function Page() {
  return (
    <div>
      <div className="flex m-3 justify-between font-extrabold items-center">
        <div>H2o</div>
        <div>
          <div class="flex items-center justify-center ">
            <div class="w-full max-w-xs">
              <div class="relative">
                <input
                  type="text"
                  class="w-full pl-9 pr-3 py-1.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                />
                <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    class="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Dmode />
        </div>
      </div>
      <div className="flex justify-evenly mx-3 my-6 font-medium underline-offset-3">
        <button className="hover:underline ">About Me</button>
        <button className="hover:underline ">Travel</button>
        <button className="hover:underline ">Gaming</button>
        <button className="hover:underline ">Contact</button>
      </div>
    </div>
  );
}
