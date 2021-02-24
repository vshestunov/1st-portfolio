/* Navigation change */
let navigation=document.getElementById('navv');

let navChange = () => {
    if (window.scrollY===0) {
        navigation.style.cssText=`
        position: fixed;
        display: flex;
        width: 100%;
        height: 85px;
        background-color: blue;
        align-items: center;
        z-index: 20;`; 
    }
        else {navigation.style.cssText=`
        position: fixed;
        display: flex;
        width: 100%;
        height: 90px;
        background-color: red;
        align-items: center;
        z-index: 20;
        opacity: 0.8;`;
        }   
};

window.addEventListener('scroll', navChange);

/* Prooject lists */
let arrow1=document.getElementById('arr1');
let hidden1=document.getElementById('hidden1');
let counter1=0;
let showProject1 = () => {
    counter1++;
    if(counter1%2!=0) {
        hidden1.style.display='block';
    } else {hidden1.style.display='none';}
    return counter1;
}

let arrow2=document.getElementById('arr2');
let hidden2=document.getElementById('hidden2');
let counter2=0;
let showProject2 = () => {
    counter2++;
    if(counter2%2!=0) {
        hidden2.style.display='block';
    } else {hidden2.style.display='none';}
    return counter2;
}

let arrow3=document.getElementById('arr3');
let hidden3=document.getElementById('hidden3');
let counter3=0;
let showProject3 = () => {
    counter3++;
    if(counter3%2!=0) {
        hidden3.style.display='block';
    } else {hidden3.style.display='none';}
    return counter3;
}

let arrow4=document.getElementById('arr4');
let hidden4=document.getElementById('hidden4');
let counter4=0;
let showProject4 = () => {
    counter4++;
    if(counter4%2!=0) {
        hidden4.style.display='block';
    } else {hidden4.style.display='none';}
    return counter4;
}

let arrow5=document.getElementById('arr5');
let hidden5=document.getElementById('hidden5');
let counter5=0;
let showProject5 = () => {
    counter5++;
    if(counter5%2!=0) {
        hidden5.style.display='block';
    } else {hidden5.style.display='none';}
    return counter5;
}
arrow1.addEventListener('click', showProject1);
arrow2.addEventListener('click', showProject2);
arrow3.addEventListener('click', showProject3);
arrow4.addEventListener('click', showProject4);
arrow5.addEventListener('click', showProject5);