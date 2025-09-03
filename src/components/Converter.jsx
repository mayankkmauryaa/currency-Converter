import { useState } from 'react'
import InputBox from './InputBox'
import useCurrencyInfo from '../hooks/useCurrencyInfo'

function Converter({x , y}) {
    // console.log(x, y);
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState(x)
    const [to, setTo] = useState(y)
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    // 🔹 Reset function
    const reset = () => {
        setAmount(0)
        setConvertedAmount(0)
        setFrom(x)
        setTo(y)
    }

    return (
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/300 text-black">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()

                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        // amount input ko disable karne ke liye
                        />
                    </div>
                    <div className="flex gap-2">
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                        {/* 🔹 Reset Button */}
                        <button
                            type="button"
                            onClick={reset}
                            className="bg-gray-500 text-white px-4 py-3 rounded-lg"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Converter