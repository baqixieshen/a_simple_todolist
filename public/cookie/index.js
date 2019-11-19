export function setCookie(username,name,iDate){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+iDate);
    document.cookie = username + '=' + name + ';expires='+oDate;
}

export function getCookie(username){
    var cookieArr = document.cookie.split(";");
    var key = cookieArr[0].split('=')[0];
    var name = cookieArr[0].split('=')[1];
    if(key === username){
        return name
    }else{
        return false
    }
}

export function delCookie(c_name){
    setCookie(c_name, "", -1)
}