const skills = [
    {skill: 'Javascript', learned: true},
    {skill: 'HTML', learned: true},
    {skill: 'Python', learned: false},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
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

function deleteOne(id) {
    const idx = skills.indexOf(skills.find(skill => skill.skill === id));
    console.log(id);
    console.log(idx);
    skills.splice(idx, 1);
}