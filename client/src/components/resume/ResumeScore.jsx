function ResumeScore({ score }) {

    return (

        <div className="bg-white rounded-2xl shadow p-8 mt-8">

            <h2 className="text-3xl font-bold mb-6">

                ATS Score

            </h2>

            <h1 className="text-7xl font-bold text-blue-600">

                {score}%

            </h1>

        </div>

    );

}

export default ResumeScore;