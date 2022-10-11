var is_pannel_closed = true;
var experience_list = [];
this.initExperienceList();
var experience_list_pos = 0;
this.setExperienceContent(this.experience_list[experience_list_pos].getYear, this.experience_list[experience_list_pos].getLocation, this.experience_list[experience_list_pos].getDuration, this.experience_list[experience_list_pos].getActivity);
this.setYear();
this.initMeterBars();
this.setVerticalBarSize();

async function nextExp(){
    if(this.experience_list_pos != this.experience_list.length - 1){
        this.experience_list_pos++;
    }
    else{
        this.experience_list_pos = 0;
    }
    /*$('#carousel_content').fadeOut();
    this.setExperienceContent(this.experience_list[experience_list_pos].getYear, this.experience_list[experience_list_pos].getLocation, this.experience_list[experience_list_pos].getDuration, this.experience_list[experience_list_pos].getActivity);
    $('#carousel_content').fadeIn();*/
    $("#carousel_content").fadeOut(400, function() {
        $('#carousel_content').html(getExperienceContent(experience_list[experience_list_pos].getYear, experience_list[experience_list_pos].getLocation, experience_list[experience_list_pos].getDuration, experience_list[experience_list_pos].getActivity)).fadeIn(400);
    });
}

function previousExp(){
    this.experience_list_pos--;
    if(this.experience_list_pos == -1){
        this.experience_list_pos = this.experience_list.length - 1;
    }
    /*this.fadeOut(document.getElementById("carousel_content"));
    this.setExperienceContent(this.experience_list[experience_list_pos].getYear, this.experience_list[experience_list_pos].getLocation, this.experience_list[experience_list_pos].getDuration, this.experience_list[experience_list_pos].getActivity);
    this.fadeIn(document.getElementById("carousel_content"));*/
    $("#carousel_content").fadeOut(400, function() {
        $('#carousel_content').html(getExperienceContent(experience_list[experience_list_pos].getYear, experience_list[experience_list_pos].getLocation, experience_list[experience_list_pos].getDuration, experience_list[experience_list_pos].getActivity)).fadeIn(400);
    });
}

function setYear(){
    var current_year = document.getElementsByClassName('current_year');
    var year = new Date().getFullYear();
    for(var i = 0; i < current_year.length; i++){
        current_year[i].innerHTML = year;
    }
}
async function setVerticalBarSize(){
    while(true){
        var period = document.getElementsByClassName('period');
        var vertical_bar = document.getElementsByClassName('vertical_bar');
        for(var i = 0; i < period.length; i++){
            if(period[i].clientHeight != 0){
                vertical_bar[i].style.height = period[i].clientHeight + 'px';
            }
            else{
                vertical_bar[i].style.height = '50px';
            }
            vertical_bar[i].style.margin = '0 auto';
        }
        await this.sleep(1);
    }
}

function displayPoint(item){
    this.fadeIn(item.querySelector(".marker"));
}

function disappearPoint(item){
    this.fadeOut(item.querySelector(".marker"));
}

async function fadeIn(item){
    for(var i = 0; i <= 100; i = i + 1){
        item.style.opacity = String(i / 100);
        await this.sleep(1);
    }
}

async function fadeOut(item){
    for(var i = 100; i > 0; i = i - 1){
        item.style.opacity = String(i / 100);
        await this.sleep(1);
    }
    item.style.opacity = "0";
}

function onClickMenuItem(item){
    /*var menu = document.getElementById('menu');
    menu.setAttribute('color', '#DBECE8');
    item.style.color = '#95C4E6';*/
    var menu_item = document.getElementsByClassName('menu_item');
    for(var i = 0; i < menu_item.length ; i++){
        menu_item[i].style.color = '#DBECE8';
    }
    item.style.color = '#95C4E6';
    if(window.innerWidth < 952){
        this.onClickHamburgerMenu();
    }
}

function setExperienceContent(year, location, duration, activity){
    document.getElementById("carousel_content").innerHTML =  `
    <h4>` + year + `</h4>
    <p><b>Lieu : </b>` + location + `</p>
    <p><b>Durée : </b>` + duration + `</p>
    <p><b>Fonction : </b>` + activity + `</p>
    `;
}

function getExperienceContent(year, location, duration, activity){
    return `
    <h4>` + year + `</h4>
    <p><b>Lieu : </b>` + location + `</p>
    <p><b>Durée : </b>` + duration + `</p>
    <p><b>Fonction : </b>` + activity + `</p>
    `;
}

function initMeterBars(){
    var level = document.getElementsByClassName("level");
    for(var i = 0; i < level.length; i++){
        var purcent = level[i].innerHTML;
        level[i].style.width = purcent;
        level[i].innerHTML = null;
    }
}

function initExperienceList(){
    experience_item = Object.create(experience);
    experience_item.constructor('2020', 'Ambroise Paré Mons', '3 semaines', 'Lieu de Stage dans la section informatique de l\'hôpital');
    experience_list.push(experience_item);
    experience_item = Object.create(experience);
    experience_item.constructor('2019', 'Ambroise Paré Mons', '1 mois', 'Travail dans le laboratoire en temps que jobiste: section de Décantation');
    experience_list.push(experience_item);
    experience_item = Object.create(experience);
    experience_item.constructor('2017', 'Ambroise Paré Mons', '1 mois et 15 jours', 'Travail dans le laboratoire en temps que jobiste: section de Décantation');
    experience_list.push(experience_item);
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function onClickHamburgerMenu(){
    if(window.innerWidth < 952){
        if(is_pannel_closed == true){
            is_pannel_closed = false;
            document.getElementById("menu").style.display = 'block';
            $('#menu').fadeIn().animate({left: '0', opacity: 1});
            document.getElementById('leave_menu').style.display = 'block';
            $('#leave_menu').animate({opacity: 0.5});
        }
        else{
            is_pannel_closed = true;
            $('#menu').fadeIn().animate({left: '-100vw', opacity: 0}, () => {                
                document.getElementById("menu").style.display = 'none';
            });
            //document.getElementById("menu").style.display = 'none';
            $('#leave_menu').animate({opacity: 0});
            document.getElementById('leave_menu').style.display = 'none';
        }
    }
}


$(document).ready(function(){
    $(window).scroll(function(){
            $(".visible").each(function(){
               if($(this).offset().top <= $(window).scrollTop() +700) 
               {
                   $(this).removeClass("invisible");
                   console.log("activé remove");
               }
            else
               {
                $(this).addClass("invisible");
                console.log("activé ajouté");
               }
            });
    }) ; 
});