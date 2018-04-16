import './js_hw.scss';
import moment from 'moment';

const btnAdd = document.querySelector('#btnAdd');
const newElement = document.querySelector('#newElement');
const nameUser = document.querySelector('#nameUser');
const commentText = document.querySelector('#commentForm-text');

const t = moment();

console.log(t);


btnAdd.onclick = commentCreate;

function commentCreate(){
    const name = nameUser.value;
    const text = commentText.value;
    if(name === " " || name === "" || text === " " || text === ""){

        alert('Not valid input!');

        document.getElementById('nameUser').value = "";
        document.getElementById('commentForm-text').value = "";

    } else {

        const commentBlock = document.createElement('div');
        console.log(commentBlock);
        commentBlock.classList.add('commentBlock');

        const user = document.createElement('div');
        console.log(user);
        user.innerHTML = name;
        commentBlock.appendChild(user);
        user.classList.add('user');

        const comment = document.createElement('div');
        console.log(comment);
        comment.innerHTML = text;
        commentBlock.appendChild(comment);
        comment.classList.add('comment');

        newElement.appendChild(commentBlock);
        document.getElementById('nameUser').value = "";
        document.getElementById('commentForm-text').value = "";
    }
}