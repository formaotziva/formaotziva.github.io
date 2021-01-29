$(function() {
    var title = document.title,
        animSeq = ["/", "$", "\\", "|", "$", "рџ’Ґ"],
        animIndex = 0,
        titleIndex = 0;	
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 3) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 250);
    var tKillNames = ["Андрей Лукашин", "Иван Мельсков", "Инна Носикова", "Александр Бельский", "ЗиНАИДА", "Артём Игорёв", "Василий Карпов", "Аднрей Коноров", "Илья Демской", "Ира Крупова", "Антон Карлов", "Игорь Картопов", "Юлия Дамская", "Елена", "Темофей Лебедев", ];
    var ctKillNames = ["Спортивные мероприятия", "СОлимпийские игры среди обучающихся Самарской области", "ВФКС ГТО", "КЭС-Баскет", "Общероссийский проект “Мини-футбол – в школу”", "Областной турнир по футболу среди дворовых команд по “Лето с футбольным мячом”", "Областные и Всероссийские конкурсы и мероприятия", "Областные соревнования по видам спорта", "Летняя оздоровительная компания", "Президентские состязания и спортивные игры", "Первенства ОДЮЦРФКС", "Областные соревнования по видам спорта среди детей ОВЗ", "Областные и всероссийские мероприятия профессиональных образовательных организаций", "Областная акция “Великие спортсмены за здоровый образ жизни”", "Всероссийские спортивные игры школьных спортивных клубов", "Положения и отчеты", "Областные тренерские советы по видам спорта", "Основные сведения", "Структура и органы управления образовательной организацией", "Документы", "Образование", "Образовательные стандарты", "Руководство. Педагогический (научно-педагогический) состав", "Материально-техническое обеспечение и оснащенность образовательного процесса", "Стипендии и иные виды материальной поддержки", "Платные образовательные услуги", "Финансово-хозяйственная деятельность", "Вакантные места для приёма - перевода", "Мониторинг травматизма на уроках ФК", "Мониторинг физической подготовленности обучающихся", ];
    var weapons = ["ssg", "ak47", "deagle", "g3sg1"];
    var $killFeedContainer = $('.kill-feed');
    var $killFeedElement = $('.kill-feed > div').hide();

    function handleKillFeed() {
        var $newFeedElement = $killFeedElement.clone();
        $newFeedElement.find('.weapons img:first-child').attr('src', 'images/' + weapons[Math.floor(Math.random() * weapons.length)] + '.png');
        $newFeedElement.find('.t').text(tKillNames[Math.floor(Math.random() * tKillNames.length)]);
        $newFeedElement.find('.ct').text(ctKillNames[Math.floor(Math.random() * ctKillNames.length)]);
        $killFeedContainer.append($newFeedElement.show().delay(20000).fadeOut(1000, function() {
            $(this).remove()
        }))
    }
    window.setInterval(handleKillFeed, (Math.random() * 5000))
	document.onkeydown = function(e) { 
	if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly. 
	} 
	return false; 
	}; 
	function click() { 
	if (event.button==2||event.button==3) { 
	oncontextmenu='return false'; 
	} 
	} 
	document.onmousedown=click 
	document.oncontextmenu = new Function("return false;") 
	function disableWheelScroll(){
	if (document.body.addEventListener) document.body.addEventListener('DOMMouseScroll', blockWheel, false);
	document.body.onmousewheel = blockWheel;
	}
	function blockWheel(event){
	if (!event) event = window.event;
	if (event.stopPropagation) event.stopPropagation();
	else event.cancelBubble = true;
	if(event.preventDefault) event.preventDefault();
	else event.returnValue = false;
	}
	disableWheelScroll();
});
