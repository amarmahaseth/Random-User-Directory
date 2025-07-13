let profile = document.querySelector(".profile");
let btn = document.querySelector("#loadMoreBtn")

function load(count=10){
    fetch(`https://randomuser.me/api/?results=${count}`)
    .then(raw => raw.json())
    .then(result => 
        result.results.forEach(function(value){
            let data = `
            <div
                class="card w-64 bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center space-y-4 transition hover:shadow-2xl">
                <img class="w-24 h-24 rounded-full object-cover border-4 border-indigo-200 shadow-sm"
                    src="${value.picture.large}"
                    alt="User Photo" />
                <div>
                    <h3 class="text-lg font-semibold text-gray-800">
                        <b>Name:</b>${value.name.first}
                    </h3>
                    <h3 class="text-sm text-gray-600">
                        <b>Address:</b>${value.location.city}
                    </h3>
                    <h3 class="text-sm text-gray-600">
                        <b>Email:</b> ${value.email}
                    </h3>
                </div>
            </div>`

            profile.innerHTML += data;
        })
    )
}

load();

btn.addEventListener("click", function(){
    load();
});