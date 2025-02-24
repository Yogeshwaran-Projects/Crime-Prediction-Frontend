import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export default function PredictionResults({ result }: PredictionResultsProps) {
    if (!result) {
      return null; // Prevents rendering if result is undefined
    }
  
    console.log("Rendering PredictionResults with:", result); // Add this line
  
    const { predictedCrime = 0, cityName = "N/A", crimeType = "N/A", year = "N/A" } = result;
  
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Prediction Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Predicted Crime Rate:</span>
              <span className="text-2xl font-bold">{predictedCrime.toFixed(2)}</span>
            </div>
            <Progress value={predictedCrime} max={100} className="w-full h-4" />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">City:</span>
                <p>{cityName}</p>
              </div>
              <div>
                <span className="font-medium">Crime Type:</span>
                <p>{crimeType}</p>
              </div>
              <div>
                <span className="font-medium">Year:</span>
                <p>{year}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              This prediction is based on historical data and current trends. Actual rates may vary.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }