const skills = [
    {id: 101101, language: 'Javascript', learned: true},
    {id: 101102, language: 'HTML', learned: true},
    {id: 101103, language: 'Python', learned: false},
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}