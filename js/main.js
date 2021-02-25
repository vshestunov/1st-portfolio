/* Navigation change */
let navigation=document.getElementById('navv');

let navChange = () => {
    if (window.scrollY===0) {
        navigation.style.cssText=`
        height: 85px;
        background-color: rgba(111, 130, 138, 0.5);`;
    }
        else {navigation.style.cssText=`
        height: 90px;
        background-color: rgba(111, 130, 138, 1);`;
        }   
};

window.addEventListener('scroll', navChange);

/* Prooject lists */
let arrow1=document.getElementById('arr1');
let hidden1=document.getElementById('hidden1');
let arrowDown1=document.getElementById('arrowdown1');
let text1=document.getElementById('text1');
let arrowUp1=document.getElementById('arrowup1');
let counter1=0;
let showProject1 = () => {
        counter1++;
        if (counter1%2!=0) {
            hidden1.style.display='block';
            text1.innerHTML='Hide details';
            arrowDown1.style.display='none';
            arrowUp1.style.display='inline';
        } else {
            hidden1.style.display='none';
            text1.innerHTML="Show details";
            arrowDown1.style.display='inline';
            arrowUp1.style.display='none';
        }
}

let arrow2=document.getElementById('arr2');
let hidden2=document.getElementById('hidden2');
let arrowDown2=document.getElementById('arrowdown2');
let text2=document.getElementById('text2');
let arrowUp2=document.getElementById('arrowup2');
let counter2=0;
let showProject2 = () => {
        counter2++;
        if (counter2%2!=0) {
            hidden2.style.display='block';
            text2.innerHTML='Hide details';
            arrowDown2.style.display='none';
            arrowUp2.style.display='inline';
        } else {
            hidden2.style.display='none';
            text2.innerHTML="Show details";
            arrowDown2.style.display='inline';
            arrowUp2.style.display='none';
        }
}

let arrow3=document.getElementById('arr3');
let hidden3=document.getElementById('hidden3');
let arrowDown3=document.getElementById('arrowdown3');
let text3=document.getElementById('text3');
let arrowUp3=document.getElementById('arrowup3');
let counter3=0;
let showProject3 = () => {
        counter3++;
        if (counter3%2!=0) {
            hidden3.style.display='block';
            text3.innerHTML='Hide details';
            arrowDown3.style.display='none';
            arrowUp3.style.display='inline';
        } else {
            hidden3.style.display='none';
            text3.innerHTML="Show details";
            arrowDown3.style.display='inline';
            arrowUp3.style.display='none';
        }
}

let arrow4=document.getElementById('arr4');
let hidden4=document.getElementById('hidden4');
let arrowDown4=document.getElementById('arrowdown4');
let text4=document.getElementById('text4');
let arrowUp4=document.getElementById('arrowup4');
let counter4=0;
let showProject4 = () => {
        counter4++;
        if (counter4%2!=0) {
            hidden4.style.display='block';
            text4.innerHTML='Hide details';
            arrowDown4.style.display='none';
            arrowUp4.style.display='inline';
        } else {
            hidden4.style.display='none';
            text4.innerHTML="Show details";
            arrowDown4.style.display='inline';
            arrowUp4.style.display='none';
        }
}

let arrow5=document.getElementById('arr5');
let hidden5=document.getElementById('hidden5');
let arrowDown5=document.getElementById('arrowdown5');
let text5=document.getElementById('text5');
let arrowUp5=document.getElementById('arrowup5');
let counter5=0;
let showProject5 = () => {
        counter5++;
        if (counter5%2!=0) {
            hidden5.style.display='block';
            text5.innerHTML='Hide details';
            arrowDown5.style.display='none';
            arrowUp5.style.display='inline';
        } else {
            hidden5.style.display='none';
            text5.innerHTML="Show details";
            arrowDown5.style.display='inline';
            arrowUp5.style.display='none';
        }
}

arrow1.addEventListener('click', showProject1);
arrow2.addEventListener('click', showProject2);
arrow3.addEventListener('click', showProject3);
arrow4.addEventListener('click', showProject4);
arrow5.addEventListener('click', showProject5);

/* NAVbutton */

let button=document.getElementById('navbutton');
let mobileMenu=document.getElementById('mobnavlist');
let buttonCounter=0
let showMenu = () => {
    buttonCounter++;
    if (buttonCounter%2!=0) {
        mobileMenu.style.display='block';
    } else {
        mobileMenu.style.display='none';
    } return buttonCounter;
}

button.addEventListener('click', showMenu);