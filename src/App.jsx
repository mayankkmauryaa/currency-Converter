import Converter from './components/converter'

function App() {

    return (
        <div
            className="w-full h-screen  flex flex-col justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg')`,
            }}
        >
            <div className="header">
                <h1 className="text-4xl font-bold text-yellow-300 mb-12 border rounded-lg backdrop-blur-3xl p-3">Currency Converter</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mx-3 ">
                <Converter x="usd" y="inr" />
                <Converter x="inr" y="usd" />
            </div>
            <div className="footer bottom-0 p-2 backdrop-blur-2xl w-full text-center fixed border-0 rounded-t-full">
                <p className="text-white">Powered by CurrencyLayer</p>
            </div>
        </div>
    );
}

export default App

