'use strict';

var city = [
    {
        cityName: 'Аксаковщина д.(Минская обл., Минский р-н, Горанский с/с)',
        Type: 'д.',
        cityRegion: 'Минская обл.',
        cityArea: 'Минский р-н',
        city: 'Аксаковщина',
        villageCouncil: 'Горанский с/с'
        
    },
    {
        cityName: 'Аксуковщина д. (Минская обл., Минский р-н, Горанский с/с)',
        Type: 'д.',
        cityRegion: 'Минская обл.',
        cityArea: 'Минский р-н',
        city: 'Аксуковщина',
        villageCouncil: 'Горанский с/с'
    },
    {
        cityName: 'Барань г. (Витебская обл., Оршанский р-н)',
        Type: 'г.',
        cityRegion: 'Витебская обл.',
        cityArea: 'Оршанский р-н',
        city: 'Барань',
        villageCouncil: ''
    },
    {
        cityName: 'Валерьяново д. (Минская обл., Минский р-н, Боровлянский с/с)',
        Type: 'д.',
        cityRegion: 'Минская обл.',
        cityArea: 'Минский р-н',
        city: 'Валерьяново',
        villageCouncil: 'Боровлянский с/с'
    },
    {
        cityName: 'Глубокое г. (Витебская обл., Глубокский р-н)',
        Type: 'г.',
        cityRegion: 'Витебская обл.,',
        cityArea: 'Глубокский р-н',
        city: 'Глубокое',
        villageCouncil: ''
    },
    {
        cityName: 'Дарево аг. (Брестская обл., Ляховичский р-н, Коньковский с/с)',
        Type: 'аг.',
        cityRegion: 'Брестская обл.',
        cityArea: 'Ляховичский р-н',
        city: 'Дарево',
        villageCouncil: 'Коньковский с/с'
    },
    {
        cityName: 'Едки аг. (Гродненская обл., Лидский р-н, Третьяковский с/с)',
        Type: 'аг.',
        cityRegion: 'Гродненская обл.',
        cityArea: 'Лидский р-н',
        city: 'Едки',
        villageCouncil: 'Третьяковский с/с'
    },
    {
        cityName: 'Жабинка г. (Брестская обл., Жабинковский р-н)',
        Type: 'г.',
        cityRegion: 'Брестская обл.',
        cityArea: 'Жабинковский р-н',
        city: 'Жабинка',
        villageCouncil: ''
    },
    {
        cityName: 'Заболоть аг. (Гродненская обл., Вороновский р-н, Заболотский с/с)',
        Type: 'аг.',
        cityRegion: 'Гродненская обл.',
        cityArea: 'Вороновский р-н',
        city: 'Заболоть',
        villageCouncil: 'Заболотский с/с'
    },
    {
        cityName: 'Ивенец гп (Минская обл., Воложинский р-н)',
        Type: 'гп',
        cityRegion: 'Минская обл.',
        cityArea: 'Воложинский р-н',
        city: 'Ивенец',
        villageCouncil: ''
    },
    {
        cityName: 'Каменец г. (Брестская обл., Каменецкий р-н)',
        Type: 'г.',
        cityRegion: 'Брестская обл.',
        cityArea: 'Каменецкий р-н',
        city: 'Каменец',
        villageCouncil: ''
    },
    {
        cityName: 'Ипуть п. (Гомельская обл., Гомельский р-н, Улуковский с/с)',
        Type: 'п.',
        cityRegion: 'Гомельская обл.',
        cityArea: 'Гомельский р-н',
        city: 'Ипуть',
        villageCouncil: 'Улуковский с/с'
    }
] 
var result = [];


function option_city() { //заполнение select__city
    var select__city = [];
    for (var i = 0; i < city.length; i++) {
        if (city[i].city == '') {
            continue;
        } else if(select__city.indexOf(city[i].city) == -1){
            select__city.push(city[i].city);
        }
    }
    // console.log(select__city);
    for (var i = 0; i < select__city.length; i++) {
        $('.select__city').append('<option value="'+ select__city[i] +'">' + select__city[i] + '</option>');
    }
}

function option_cityRegion() { //заполнение select__cityRegion
    var select__cityRegion = [];
    for (var i = 0; i < city.length; i++) {
        if (city[i].cityRegion == '') {
            continue;
        } else if(select__cityRegion.indexOf(city[i].cityRegion) == -1){
            select__cityRegion.push(city[i].cityRegion);
        }
    }
    // console.log(select__cityRegion);
    for (var i = 0; i < select__cityRegion.length; i++) {
        $('.select__cityRegion').append('<option value="'+ select__cityRegion[i] +'">' + select__cityRegion[i] + '</option>');
    }
}
function option_cityArea() { //заполнение select__cityArea
    var select__cityArea = [];
    for (var i = 0; i < city.length; i++) {
        if (city[i].cityArea == '') {
            continue;
        } else if(select__cityArea.indexOf(city[i].cityArea) == -1){
            select__cityArea.push(city[i].cityArea);
        }
    }
    // console.log(select__cityArea);
    for (var i = 0; i < select__cityArea.length; i++) {        
        $('.select__cityArea').append('<option value="'+ select__cityArea[i] +'">' + select__cityArea[i] + '</option>');
    }
}
function option_Type() { //заполнение select__Type
    var select__Type = [];
    for (var i = 0; i < city.length; i++) {
        if (city[i].Type == '') {
            continue;
        } else if(select__Type.indexOf(city[i].Type) == -1){
            select__Type.push(city[i].Type);
        }
    }
    // console.log(select__Type);
    for (var i = 0; i < select__Type.length; i++) {        
        $('.select__Type').append('<option value="'+ select__Type[i] +'">' + select__Type[i] + '</option>');
    }
}
function option_villageCouncil() { //заполнение select__villageCouncil
    var select__villageCouncil = [];
    for (var i = 0; i < city.length; i++) {
        if(city[i].villageCouncil == ''){
            continue;
        } else if (select__villageCouncil.indexOf(city[i].villageCouncil) == -1){
            select__villageCouncil.push(city[i].villageCouncil);
        }
    }
    // console.log(select__villageCouncil);
    for (var i = 0; i < select__villageCouncil.length; i++) {        
        $('.select__villageCouncil').append('<option value="'+ select__villageCouncil[i] +'">' + select__villageCouncil[i] + '</option>');
    }
}


option_city();
option_cityRegion();
option_cityArea();
option_Type();
option_villageCouncil();

$("#search").keyup(function(){
    $('.search').empty();
    var strInput = $('#search').val().toLowerCase();
    for (var i = 0; i < city.length; i++) {
        var srtType = city[i].city.toLowerCase();
        var j = 0;
        while( j < strInput.length) { //сравнение введённого текста с названиями городов
            if (strInput[j]==srtType[j]) {
                j++;
            } else{
                break;
            }
            if (j === strInput.length ) {
                $('.search').append('<div class="search__result"><p><span class="city">' + city[i].city + '</span>' +  ' <span class="cityType">' + city[i].Type + '</span> </p>' + ' <p><span class="cityRegion">' + city[i].cityRegion + '</span> <span class="cityArea">' + city[i].cityArea + '</span> <span class="villageCouncil">' + city[i].villageCouncil + '</span></p></div>');
                // console.log(city[i]);
                
            }
            //заполнение select
            $('.search__result').on('click', function () {
                $('#search').val($(this).text());
                $('.select__city').val($(this).children('p').children('.city').text());
                $('.select__Type').val($(this).children('p').children('.cityType').text());
                $('.select__cityRegion').val($(this).children('p').children('.cityRegion').text());
                $('.select__cityArea').val($(this).children('p').children('.cityArea').text());
                $('.select__villageCouncil').val($(this).children('p').children('.villageCouncil').text());
                $('.search').empty();
            });
        }
    }
});

$("#search").focus(function () {
    $('.search').css('display', 'block');
});
$("#search").blur(function () {
    setTimeout(function (argument) {
        $('.search').css('display', 'none');
    }, 300)
    
});

$('.reset').click(function () {
    $('#search').val('');
    $('.select__city').val('main');
    $('.select__Type').val('main');
    $('.select__cityRegion').val('main');
    $('.select__cityArea').val('main');
    $('.select__villageCouncil').val('main');
});



















