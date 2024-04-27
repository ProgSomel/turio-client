import { Link } from "react-router-dom"

function ErrorPage () {
  return (
    <div>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-lg text-gray-800 mb-8">Oops! The page you are looking for could not be found.</p>

        <Link to="/">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
         
        >
          Go Home
        </button>
        </Link>
       
      </div>
    </div>
    </div>
  )
}

export default ErrorPage