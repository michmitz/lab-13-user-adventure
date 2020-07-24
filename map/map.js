import quests from '../data.js';
import { getUser } from '../userUtils.js';

const user = getUser();

if (user.hp <= 0) {
    alert('game over');
    alert('you had this much gold: ' + user.gold);
    window.location = '../index.html';
}

const section = document.querySelector('section');


let completedQuests = 0;

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        completedQuests++;
    }
}

if (completedQuests === quests.length) {
    alert('incredible! you win and you have this much gold: ' + user.gold);

}

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        const span = document.createElement('span');
        span.textContent = quest.title;
        span.style.textDecoration = 'strikethrough';
        section.append(span);
    } else {
        const a = document.createElement('a');
        a.textContent = quest.title;
        a.href = '/quest/?id=' + quest.id;

        section.append(a);

    }
}