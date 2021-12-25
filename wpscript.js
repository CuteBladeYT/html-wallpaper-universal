function wp_notification(title) {
    let notif = document.querySelector("#notification");
    let notiftext = document.querySelector("#notification div");
    let notifprogress = document.querySelector("#notification progress");
    if (notifprogress.value == 0) {
        notiftext.innerHTML = title;
        notif.style.opacity = "1";
        notifprogress.value = 0;
        notifprogress.value = 100;
        setTimeout(() => {
            notif.style.opacity = "0";
            notifprogress.value = 1;
            setTimeout(() => {
                notifprogress.value = 0;
            }, 3000);
        }, 3000);
    };
}