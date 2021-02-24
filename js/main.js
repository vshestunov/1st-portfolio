/* Navigation change */
let navigation=document.getElementById('navv');

let navChange = () => {
    if (window.scrollY===0) {
        navigation.style.cssText=`
        height: 85px;
        background-color: rgba(0, 51, 204, 0.5);`;
    }
        else {navigation.style.cssText=`
        height: 90px;
        background-color: rgba(0, 102, 255, 1);`;
        }   
};

window.addEventListener('scroll', navChange);

/* Prooject lists */
let arrow1=document.getElementById('arr1');
let hidden1=document.getElementById('hidden1');
let showProject1 = () => {
        hidden1.style.display='block';
        arrow1.style.display='none';
}

let arrow2=document.getElementById('arr2');
let hidden2=document.getElementById('hidden2');
let showProject2 = () => {
        hidden2.style.display='block';
        arrow2.style.display='none';
}

let arrow3=document.getElementById('arr3');
let hidden3=document.getElementById('hidden3');
let showProject3 = () => {
        hidden3.style.display='block';
        arrow3.style.display='none'
}

let arrow4=document.getElementById('arr4');
let hidden4=document.getElementById('hidden4');
let showProject4 = () => {
        hidden4.style.display='block';
        arrow4.style.display='none';
}

let arrow5=document.getElementById('arr5');
let hidden5=document.getElementById('hidden5');
let showProject5 = () => {
        hidden5.style.display='block';
        arrow5.style.display='none';
}

arrow1.addEventListener('click', showProject1);
arrow2.addEventListener('click', showProject2);
arrow3.addEventListener('click', showProject3);
arrow4.addEventListener('click', showProject4);
arrow5.addEventListener('click', showProject5);

let hide5=document.getElementById('hide5');
let hideProject5 = () => {
    hidden5.style.display='none';
    arrow5.style.display='block';
}

hide5.addEventListener('click', hideProject5);