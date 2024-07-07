const btns = document.querySelectorAll(".ratings .btn");
const submit_btn = document.getElementById("submit-btn");
const bi = document.getElementsByClassName('bi');
const text_box = document.getElementById("text_box");
const btn_box = document.getElementById('btn_box'); 


let selectedRatingValue = null;

function update_btn_value(e){

    let val = e.target;
    selectedRatingValue = val.textContent;
    // btns.forEach(btn => btn.style.backgroundColor = '#363d47');
    val.style.backgroundColor = 'white';
    console.log(selectedRatingValue)

}

function handleSubmit(){
    const container = document.getElementById('container');

    if(selectedRatingValue){
        container.innerHTML = "";

        const thanks_msg_box = document.createElement("div");
        thanks_msg_box.className = "msg_box";

        const res_img = document.createElement("img")
        res_img.className = "res_img";
        res_img.src = "./assets/res_img.png";

        const h5_res = document.createElement("h5");
        h5_res.className ="h5_res";
        h5_res.textContent =`You selected ${selectedRatingValue} out of 5` ; 
     

        const h1_res = document.createElement("h1");
        h1_res.className ="h1_res";
        h1_res.textContent = "Thank you!";

        const p_res = document.createElement("p");
        p_res.className = "p_res";
        p_res.textContent = "We appreciate you taking the time to give a rating.If you ever need more support,don't hesitate to get in touch!";

        thanks_msg_box.appendChild(res_img);
        container.appendChild(thanks_msg_box);
        thanks_msg_box.appendChild(h5_res);
        thanks_msg_box.appendChild(h1_res);
        thanks_msg_box.appendChild(p_res);

    }else{
        alert("Please select a rating before submitting.")
    }
}
btns.forEach(btn => {btn.addEventListener('click', update_btn_value)});
submit_btn.addEventListener("click",handleSubmit);