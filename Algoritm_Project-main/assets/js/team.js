const root = document.getElementById("root")
const cardContainer = document.getElementById("cards")
const members = [
    {
        Id: 1,
        Image: "https://i.pinimg.com/564x/45/fe/b5/45feb508817a723381ace9e301bd424b.jpg",
        Name: "Community Garden Initiative",
    },
    {
        Id: 2,
        Image: "https://i.pinimg.com/564x/ba/21/56/ba21562944fd3ecf595d7b7e6c67163c.jpg",
        Name: "Tree Planting Campaign",
    },
    {
        Id: 3,
        Image: "https://i.pinimg.com/564x/7d/15/c9/7d15c9eb43b8c45fffa634185f696141.jpg",
        Name: "Clean-Up Drives",
    },
    {
        Id: 4,
        Image: "https://i.pinimg.com/564x/ee/1f/f2/ee1ff242a27aa11f51a33d89085a8df3.jpg",
        Name: "Zero-Waste Workshops",
    },
    {
        Id: 5,
        Image: "https://i.pinimg.com/564x/98/51/e3/9851e360542e173f45eec49a53eb45e1.jpg",
        Name: "Renewable Energy Adoption Program",
    },
    {
        Id: 6,
        Image: "https://i.pinimg.com/564x/2e/eb/73/2eeb73360dc4c25590182574e11381ee.jpg",
        Name: "Sustainable Transportation Promotion",
    },
    {
        Id: 7,
        Image: "https://i.pinimg.com/564x/e3/d0/9c/e3d09c66178950bef038e42ee9133fef.jpg",
        Name: "Eco-Friendly Business Certification",
    },
    {
        Id: 8,
        Image: "https://i.pinimg.com/736x/62/2b/3b/622b3b02d78f38e1d56dc6d182c6061e.jpg",
        Name: "Carbon Footprint Reduction Campaign",
    },
    {
        Id: 9,
        Image: "https://i.pinimg.com/564x/b6/06/6f/b6066f407fadb7fe5029767e29e60afa.jpg",
        Name: "Climate-Smart Water Management",
    }
]

members.forEach(function (member) {
    cardContainer.innerHTML += `<div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card" data-id="${member.Id}">
        <div class="img-container col-md-12">
            <div class="member-img" style="background-image: url('${member.Image}')"></div>
        </div>
        <div class="text-con"> 
                <h4>${member.Name}</h4>
        </div>                       
     </div>             
</div>`
})

const cards = document.querySelectorAll(".card")
const popup = document.querySelector(".team-modal")
var popupImg = document.querySelector(".popup-img")
var popupName = document.querySelector(".member-name")

cards.forEach(card => {
    card.addEventListener("click", () => {
        const result = members.find(m=>m.Id == card.dataset.id)
        popupImg.src = result.Image
        popupName.innerText = result.Name
        popup.classList.add("modal-active");
    })
})

const close = document.querySelector(".modal-close");
close.addEventListener("click", () => {
    popup.classList.remove("modal-active");
})

