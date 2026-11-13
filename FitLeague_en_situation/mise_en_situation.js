let tab =[
    {
        firstname: "firstname",
        lastname : "lastname" ,
        age: 16
    },
    {
        firstname: "safaa",
        lastname : "baqqali" ,
        age: 25 
    }
]

function chercheAdult(){
    for(let i = 0; i < tab.length; i++){
        if(tab[i].age <= 18){
            console.log(tab[i])
        }
    }
}
chercheAdult();


let app = document.getElementById("app")

app.addEventListener("click", text =>
app.innerText =``
)


