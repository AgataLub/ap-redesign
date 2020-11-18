let profileTab = document.querySelector('article#profile');
let msgTab = document.querySelector('article#messanger');
let planTab = document.querySelector('article#profileplan');
let profileLi = document.querySelector('li.pensinsu');
let msgLi = document.querySelector('li.msg');
let planLi = document.querySelector('li.plan');

let savingsLi = document.querySelector('li.expectedpay');
let paymentLi = document.querySelector('li.savingfig');
let depositLi = document.querySelector('li.currentdep');
let marketLi = document.querySelector('li.marketint');

let savingsTab = document.querySelector('div.payout');
let figureTab = document.querySelector('div.figure');
let depositTab = document.querySelector('div.deposit');
let marketTab = document.querySelector('div.market');

let youLi = document.querySelector('li.naviyou');
let childrenLi = document.querySelector('li.navichildren');
let spouseLi = document.querySelector('li.navispouse');
let benLi = document.querySelector('li.navibenefi');

let youTab = document.querySelector('div.you');
let childrenTab = document.querySelector('div.children');
let spouseTab = document.querySelector('div.spouse');
let benTab = document.querySelector('div.beneficiares')

//URL thing that I'm trying to make it work


//side menu burger
let burgerMenuSide = document.querySelector('#burger_menu_side_navigation');
let sideNavigation = document.querySelector('#side_navigation');


let burgerOpened = false;
burgerMenuSide.addEventListener('click', openBurger);

function openBurger(){
    burgerMenuSide.removeEventListener('click', openBurger);
    if(burgerOpened === false){
        burgerMenuSide.classList.add('movemenu');
        sideNavigation.classList.add('shownavi');
        burgerMenuSide.classList.remove('movemenuback');
        sideNavigation.classList.remove('hidenavi');
        burgerOpened = true;
        console.log(burgerOpened);
        burgerMenuSide.addEventListener('click', openBurger);
    }else{
        burgerMenuSide.classList.remove('movemenu');
        sideNavigation.classList.remove('shownavi');
        burgerMenuSide.classList.add('movemenuback');
        sideNavigation.classList.add('hidenavi');
        burgerOpened = false;
        console.log(burgerOpened);
        burgerMenuSide.addEventListener('click', openBurger);
    }
}




//small navigation insurance
youLi.addEventListener('click', showYou);
childrenLi.addEventListener('click', showchildren);
spouseLi.addEventListener('click', showSpouse);
benLi.addEventListener('click', benYou);

function showYou(){
    removeArticlesInsurance();
    removehighlightInsurance();
    youLi.classList.add('active');
    youTab.classList.remove('hide');
}
function showchildren(){
    removeArticlesInsurance();
    removehighlightInsurance();
    childrenLi.classList.add('active');
    childrenTab.classList.remove('hide');
}
function showSpouse(){
    removeArticlesInsurance();
    removehighlightInsurance();
    spouseLi.classList.add('active');
    spouseTab.classList.remove('hide');
}
function benYou(){
    removeArticlesInsurance();
    removehighlightInsurance();
    benLi.classList.add('active');
    benTab.classList.remove('hide');
}

function removeArticlesInsurance(){
    youTab.classList.add('hide');
    childrenTab.classList.add('hide');
    spouseTab.classList.add('hide');
    benTab.classList.add('hide');
}
function removehighlightInsurance(){
    youLi.classList.remove('active');
    childrenLi.classList.remove('active');
    spouseLi.classList.remove('active');
    benLi.classList.remove('active');
}


//small navigation pension 
savingsLi.addEventListener('click', showSavings);
paymentLi.addEventListener('click',showPayment);
depositLi.addEventListener('click', showDeposit);
marketLi.addEventListener('click', showMarket);

function showSavings(){
    hideArticlesPension();
    removehighlitPension();
    savingsLi.classList.add('active');
    savingsTab.classList.remove('hide');
}
function showPayment(){
    hideArticlesPension();
    removehighlitPension();
    paymentLi.classList.add('active');
    figureTab.classList.remove('hide');
}
function showDeposit(){
    hideArticlesPension();
    removehighlitPension();
    depositLi.classList.add('active');
    depositTab.classList.remove('hide');
}
function showMarket(){
    hideArticlesPension();
    removehighlitPension();
    marketLi.classList.add('active');
    marketTab.classList.remove('hide');
}

function hideArticlesPension(){
    savingsTab.classList.add('hide');
    figureTab.classList.add('hide');
    depositTab.classList.add('hide');
    marketTab.classList.add('hide');
}
function removehighlitPension(){
    savingsLi.classList.remove('active');
    paymentLi.classList.remove('active');
    marketLi.classList.remove('active');
    depositLi.classList.remove('active');
}
//side navigation
profileLi.addEventListener('click', showProfile);
msgLi.addEventListener('click',showMsg);
planLi.addEventListener('click',showPlan);

function showProfile() {
    hideArticles();
    removeColor();
    openBurger();
    profileTab.classList.remove('hidden');
    profileLi.classList.add('active');
    document.querySelector('.moneymenu').src = 'icons/money-white.svg';
}

function showPlan() {
    hideArticles();
    removeColor();
    openBurger();
    planTab.classList.remove('hidden');
    planLi.classList.add('active');
    document.querySelector('.planmenu').src = 'icons/profile-white.svg';}
    
function showMsg() {
    hideArticles();
    removeColor();
    openBurger();
    msgTab.classList.remove('hidden');
    msgLi.classList.add('active');
    document.querySelector('.mailmenu').src = 'icons/mail-white.svg';
}

function removeColor(){
    profileLi.classList.remove('active');
    planLi.classList.remove('active');
    msgLi.classList.remove('active');
    document.querySelector('.moneymenu').src = 'icons/money.svg';
    document.querySelector('.mailmenu').src = 'icons/mail.svg';
    document.querySelector('.planmenu').src = 'icons/profile.svg';
}

function hideArticles(){
    profileTab.classList.add('hidden');
    msgTab.classList.add('hidden');
    planTab.classList.add('hidden');
}