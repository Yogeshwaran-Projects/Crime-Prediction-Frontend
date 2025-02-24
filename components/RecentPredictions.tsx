export default function RecentPredictions() {
    const predictions = [
      { id: 1, city: "Chennai", crimeType: "Theft", year: 2023, rate: "32.5%" },
      { id: 2, city: "Bangaluru", crimeType: "Assault", year: 2023, rate: "28.7%" },
      { id: 3, city: "Coimbatore", crimeType: "Burglary", year: 2023, rate: "19.3%" },
    ]
  
    return (
      <ul className="space-y-4">
        {predictions.map((prediction) => (
          <li key={prediction.id} className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between items-center">
              <span className="font-medium">{prediction.city}</span>
              <span className="text-sm text-gray-500">{prediction.year}</span>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-600">{prediction.crimeType}</span>
              <span className="font-bold text-blue-600">{prediction.rate}</span>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  
  