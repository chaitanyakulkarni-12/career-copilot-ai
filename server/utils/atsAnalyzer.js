const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Python",
  "Java",
  "SQL",
  "Tailwind CSS"
];

function analyzeResume(text) {

    let score = 0;

    const foundSkills = [];

    const suggestions = [];

    skills.forEach(skill => {

        if (text.toLowerCase().includes(skill.toLowerCase())) {

            foundSkills.push(skill);

            score += 8;

        }

    });

    if (!text.toLowerCase().includes("project")) {

        suggestions.push("Add more projects.");

    }

    if (!text.toLowerCase().includes("achievement")) {

        suggestions.push("Mention achievements.");

    }

    if (!text.toLowerCase().includes("intern")) {

        suggestions.push("Add internship experience.");

    }

    if (!text.toLowerCase().includes("github")) {

        suggestions.push("Include GitHub profile.");

    }

    if (!text.toLowerCase().includes("linkedin")) {

        suggestions.push("Include LinkedIn profile.");

    }

    if (score > 100) score = 100;

    return {

        score,

        foundSkills,

        suggestions

    };

}

module.exports = analyzeResume;