
function InfoGrid() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Information Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Example Grid Item 1 */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Section 1</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet arcu.
          </p>
        </div>
        
        {/* Example Grid Item 2 */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Section 2</h3>
          <p className="text-gray-600">
            Vivamus laoreet, felis eget faucibus ultrices, justo urna laoreet arcu.
          </p>
        </div>
        
        {/* Example Grid Item 3 */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Section 3</h3>
          <p className="text-gray-600">
            Nunc scelerisque pulvinar sapien id ornare. Vestibulum eget urna.
          </p>
        </div>
        
        {/* Example Grid Item 4 */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Section 4</h3>
          <p className="text-gray-600">
            Praesent id felis arcu. Nullam tincidunt orci quis fringilla.
          </p>
        </div>

        {/* Add more grid items */}
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Dynamic Section {index + 5}</h3>
            <p className="text-gray-600">
              Placeholder content for dynamic section {index + 5}. Customize with actual info.
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default InfoGrid;
