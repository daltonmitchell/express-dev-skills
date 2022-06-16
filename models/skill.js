const skills = [
    {skill: 'Javascript', learned: true},
    {skill: 'HTML', learned: true},
    {skill: 'Python', learned: false},
];

module.exports = {
    getAll,
    getOne,
    create,
};

function getAll() {
    return skills;
}

function getOne(lang) {
    console.log(lang);
    return skills.find(skill => skill.skill === lang);
}

function create(skill) {
    skill.learned = false;
    console.log(skill)
    skills.push(skill);
}