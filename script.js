window.onload = function() {

    let who = ['The dog', 'My neighbor', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    function generateExcuse() {

        const randomWho = who[Math.floor(Math.random() * who.length)];
        const randomAction = action[Math.floor(Math.random() * action.length)];
        const randomWhat = what[Math.floor(Math.random() * what.length)];
        const randomWhen = when[Math.floor(Math.random() * when.length)];

        return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    }

    function updateExcuse() {

        const excuseContent = document.getElementById('excuse-content');
        const excuseText = generateExcuse();
        const excuseElement = document.createElement('p');
        excuseElement.textContent = excuseText;
        excuseContent.innerHTML = '';
        excuseContent.appendChild(excuseElement);
        
    }

    updateExcuse();

    setInterval(updateExcuse, 3000);
};
