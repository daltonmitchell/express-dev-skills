const skills = [
    {language: 'Javascript', learned: true},
    {language: 'HTML', learned: true},
    {language: 'Python', learned: false},
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}

function getOne(lang) {
    console.log(lang);
    return skills.find(skill => skill.language === lang);
}