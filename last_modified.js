function lastModified() {
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];
    var modiDate = new Date(document.lastModified);
    var showAs = monthNames[modiDate.getMonth()] + " " +  modiDate.getDate() + ", " + modiDate.getFullYear() ;
    return showAs
}

/*
function GetTime() {
    var modiDate = new Date();
    var Seconds

    if (modiDate.getSeconds() < 10) {
        Seconds = "0" + modiDate.getSeconds();
    } else {
        Seconds = modiDate.getSeconds();
    }

    var modiDate = new Date();
    var CurTime = modiDate.getHours() + ":" + modiDate.getMinutes() + ":" + Seconds
    return CurTime
}
*/

document.write(lastModified());
// document.write(lastModified() + " @ " + GetTime());
document.write("");