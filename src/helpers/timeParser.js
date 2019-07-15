export const extractFromTimestamp = (timestamps, extractKey) => {

    switch(extractKey){
        case 'hour':
            return timestamps.map( time => { 
                var t = new Date(time); 
                return  + t.getHours() > 12 ? t.getHours() + ':00': t.getHours() + ':00'  });

        
        case 'day':
            return timestamps.map( time => { 
                var t = new Date(time);
                return `${t.getDate()}/${t.getMonth()}`;}
            )

        
        case 'month':
            return timestamps.map( time => { 
                var t = new Date(time);
                return `${( t.getMonth() + 1) % 12 === 0 ? 12 : (t.getMonth() + 1) % 12}/${t.getFullYear()}`
            }
        );


        default:
            break
            
    }
}

export const secondsToHms = (d) => {
    d = Number(d);

    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
}