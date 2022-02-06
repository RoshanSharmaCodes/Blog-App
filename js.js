var data = [{
        id: 1,
        title: "Kasol Trip 2022",
        desc: "I had a great trip in kasol I enjoy it very much. A train ride or a flight to Delhi from any city in India, followed by a 12 hour long drive from India’s capital city; getting to Kasol could be long and almost unending. Once you’ve been through this Kasol is a beauty amongst the hills of Himachal Pradesh. If you’re a traveler looking to experience something different, Kasol is an ideal town to explore."
    },
    {
        id: 2,
        title: "Trip to Sweden",
        desc: "Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains. Its principal cities, eastern capital Stockholm and southwestern Gothenburg and Malmö, are all coastal. Stockholm is built on 14 islands. It has more than 50 bridges, as well as the medieval old town, Gamla Stan, royal palaces and museums such as open-air Skansen."
    },
    {
        id: 3,
        title: "Kashmir Lakes",
        desc: "Dal is a lake in Srinagar, the summer capital of Jammu and Kashmir, India. It is an urban lake, which is the second largest in the union territory of Jammu and Kashmir. It is the most visited place in Srinagar by tourists and locals. View of Dal Lake are completely different in 4 seasons."
    }
]

const main = document.querySelector(".main");

function readData(data) {
    data = getLocalStorage("blogs");
    data.map(res => {
        const div = document.createElement("div");
        div.innerHTML = "<div class='blogbox'><div class='title'><h1 class='heading'>" + res.title + "</h1></div><div class='content'>" + res.desc.slice(0, 250) + "......<span><a href=''>read more</a></span>" + "</div><div class='options'><button class='btupdate' id=bt"+res.id+" onclick='UpdateBlog(event)'>Update</button><button id='" + res.id + "' class='btdelete' onclick='deleteBlog(event)' >Delete</button></div></div>";
        main.appendChild(div);
    })
}

function setLocalStorage(data) {
    localStorage.setItem("blogs", JSON.stringify(data));
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("blogs"));
}

function deleteBlog() {
    const id = event.target.id;
    console.log(id);
    const val = document.querySelector(".heading").innerText;
    data = data.filter(res => res.id != id);
    main.innerHTML = "";
    setLocalStorage(data);
    data = getLocalStorage();
    readData(data);
}

function UpdateBlog(event) {
	const id = parseInt(event.target.id.slice(2));
	var data = getLocalStorage(data);
	var result = data.filter(res => {
				return res.id == id;
		}
	)
	console.log(result);
	var title = result[0].title;
	var desc = result[0].desc;
	console.log(title,desc);
	document.querySelector(".inptitle").value = title;
	document.querySelector(".inpdesc").value = desc;
	data = data.filter(res => res.id != id);
    main.innerHTML = "";
    setLocalStorage(data);
    data = getLocalStorage();
    readData(data);

}

function insertData() {
	var data = getLocalStorage();
    const titleVal = document.querySelector(".inptitle").value;
    const descVal = document.querySelector(".inpdesc").value;
  			var lid = data[data.length - 1].id
    if (lid) {

    } else {
        lid = 0;
    }

    if (titleVal && descVal) {
        var obj = {
            id: lid+1,
            title: titleVal,
            desc: descVal,
        }
    } else {
        alert("Insert Both Value");
    }

    data.push(obj);
    setLocalStorage(data);
    newData = getLocalStorage();
    main.innerHTML = "";
    readData(newData);
	document.querySelector(".inptitle").value = "";
    document.querySelector(".inpdesc").value = "";
    
}

setLocalStorage(data);
readData(data);