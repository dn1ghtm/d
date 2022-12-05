const button = document.querySelector(".notbutton")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        new Notification("Hi", {
            body: "",
            icon: "icon3.png",
        })
    })
})