import CrimePredictionForm from "@/components/CrimePredictionForm"
import PredictionResults from "@/components/PredictionResults"
import TrendChart from "@/components/TrendChart"
import RecentPredictions from "@/components/RecentPredictions"
import CityInformation from "@/components/CityInformation"

export default function CrimePredictionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">Crime Rate Prediction in Indian Cities</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white shadow-2xl rounded-xl p-8">
              <CrimePredictionForm />
            </div>
            <div className="bg-white shadow-2xl rounded-xl p-8">
              <PredictionResults />
            </div>
          </div>
          <div className="space-y-12">
            <div className="bg-white shadow-2xl rounded-xl p-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Trend Analysis</h2>
              <TrendChart />
            </div>
            <div className="bg-white shadow-2xl rounded-xl p-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Recent Predictions</h2>
              <RecentPredictions />
            </div>
            <div className="bg-white shadow-2xl rounded-xl p-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">City Information</h2>
              <CityInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

