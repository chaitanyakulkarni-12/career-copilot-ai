function Suggestions({ suggestions }) {

    return (

        <div className="bg-white rounded-2xl shadow p-8 mt-8">

            <h2 className="text-2xl font-bold mb-5">

                AI Suggestions

            </h2>

            <div className="space-y-4">

                {suggestions.map((item, index) => (

                    <div
                        key={index}
                        className="bg-slate-100 rounded-xl p-4"
                    >

                        ✅ {item}

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Suggestions;