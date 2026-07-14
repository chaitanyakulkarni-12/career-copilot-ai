function DetectedSkills({ skills }) {

    return (

        <div className="bg-white rounded-2xl shadow p-8 mt-8">

            <h2 className="text-2xl font-bold mb-5">

                Skills Detected

            </h2>

            <div className="flex flex-wrap gap-3">

                {skills.map((skill) => (

                    <span
                        key={skill}
                        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
                    >

                        {skill}

                    </span>

                ))}

            </div>

        </div>

    );

}

export default DetectedSkills;