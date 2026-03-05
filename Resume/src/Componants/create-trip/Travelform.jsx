export default function TravelForm() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">

       

        {/* Title Section */}
        <h2 className="text-2xl font-bold mb-2">
          Tell us your travel preferences
        </h2>
        <p className="text-gray-600 mb-6">
          Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>

        {/* Destination */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            What is destination of choice?
          </label>
          <input
            type="text"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Days */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            How many days are you planning your trip
          </label>
          <input
            type="number"
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Budget Section */}
        <div className="mb-6">
          <h3 className="font-semibold mb-1">What is Your Budget?</h3>
          <p className="text-gray-600 mb-4">
            The budget is exclusively allocated for activities and dining purposes.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
              <p className="font-semibold">Low</p>
              <p className="text-sm text-gray-500">0 - 1000 USD</p>
            </div>

            <div className="border rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
              <p className="font-semibold">Medium</p>
              <p className="text-sm text-gray-500">1000 - 2500 USD</p>
            </div>

            <div className="border rounded-lg p-4 text-center hover:shadow-md cursor-pointer transition">
              <p className="font-semibold">High</p>
              <p className="text-sm text-gray-500">2500+ USD</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}