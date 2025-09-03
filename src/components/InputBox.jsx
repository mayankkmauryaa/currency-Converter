import React, {useId} from 'react'
// useId is a hook that generates a unique ID for each instance of the component.
// unique IDs that can be passed to accessibility attributes.

// currency boht saari aarhi h isliye use kiya jata hai.

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block"
                >
                    {label// [From , To]
                    }
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    /*
                    onAmountChange is called only if the user provides a value. [&&]

                    e.target.value generally returns a string, so we use Number() to convert it to a number.
                    */
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    /*
                    onCurrencyChange is called only if the user provides a value. [&&]

                    currencyOptions is an array of currency strings.
                    */
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                        {/*
                        currencyOptions is an array of currency strings.
                        agar value return nhi krni h to use karo () else {}

                        remember key in loops to stop element re-renders. [DOM]
                        prefer IDs over index as key, when fetching data from database.
                        */}

                </select>
            </div>
        </div>
    );
}

export default InputBox;