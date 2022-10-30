function setActive(section){
    for(i=0; i<document.getElementsByClassName('nav-option').length; i++){
        let option = document.getElementsByClassName('nav-option')[i];
        option.classList.remove('active');
       console.log(option);
    }
    let sectionName = "nav-" + section;
    document.getElementById(sectionName).classList.add('active');
}
