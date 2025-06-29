<section className="bg-white p-8 rounded-lg shadow-md mt-12 flex flex-col md:flex-row gap-8">
          {/* Map Placeholder */}
          <div className="flex-1 bg-gray-200 h-64 md:h-auto rounded-lg overflow-hidden flex items-center justify-center relative">
            {/* Using a static map image or iframe would be better for a real app */}
            <img
              src="https://placehold.co/600x400/E0E0E0/888888?text=Map+Placeholder"
              alt="Map of Snappy location"
              className="w-full h-full object-cover"
            />
            {/* Map Pin/Bubble content as seen in the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg flex items-center">
              <img src="https://placehold.co/30x30/000000/FFFFFF?text=S" alt="Snappy Inc. Logo" className="h-8 w-8 mr-2 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">Snappy Inc.</p>
                <p className="text-gray-600 text-sm">Chat Beyond Limits Together</p>
                <p className="text-gray-500 text-xs mt-2">San Francisco, USA</p>
                <p className="text-gray-500 text-xs">123 Tech Boulevard, Suite 456</p>
                <a href="#" className="text-blue-600 text-sm hover:underline mt-2 inline-block">Open Google Maps &gt;</a>
              </div>
            </div>
          </div>

          {/* Headquarters Info */}
          <div className="flex-1 p-4">
            <h3 className="text-gray-600 text-lg mb-2">Our Location</h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Connecting Near and Far</h2>
            <div>
              {/* <h3 className="font-semibold text-gray-800">Headquarters</h3>
              <p className="text-gray-600">TappIn Inc.</p>
              <p className="text-gray-600">San Francisco, USA</p>
              <p className="text-gray-600">123 Tech Boulevard, Suite 456</p>
              <p className="text-gray-600">San Francisco, CA 12345</p>
              <p className="text-gray-600">United States</p> */}
            </div>
          </div>
        </section>