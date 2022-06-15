const skills = [
    {language: 'Javascript', learned: true},
    {language: 'HTML', learned: true},
    {language: 'Python', learned: false},
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}