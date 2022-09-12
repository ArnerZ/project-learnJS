function getTimeFromMinutes(minutes) {
    if(typeof(minutes) == 'string' || !Number.isInteger(minutes) || minutes < 0){
        return "Ошибка, проверьте данные";
    }
    if(minutes < 600){
        let hour = Math.floor(minutes / 60);
        let pisos = minutes % 60;
        let a;
        if(hour === 1){
            a = 'час';
        }else if(hour > 1 && hour < 5){
            a = 'часа';
        }else{
            a = 'часов';
        }
    console.log( `Это ${hour} ${a} и ${pisos} минут`);
    }   
}
getTimeFromMinutes(150);