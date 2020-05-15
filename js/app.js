const download = document.querySelectorAll('button');


for (let i = 0; i < download.length; i += 1) {
download[i].addEventListener("click", function(){
    alert("Thank you. Your download with start shortly.....");
});
}

