function initXHR(x, value) {
	//console.log(x); 
	if (x == 'Home') {
		//document.getElementById("Home").style.display = "block";
		document.getElementById("HowItWork").style.display = "block";
		document.getElementById("HomeText").style.display = "block";
		document.getElementById("SearchBox").style.display = "block";
		document.getElementById("search").style.display = "none";
		document.getElementById("Signup").style.display = "none";
		document.getElementById("PostItem").style.display = "none";
		

	}
	else if (x == 'search' && document.getElementById("SearchKey").value != "" && document.getElementById("SearchLocation").value != "") {
		document.getElementById("HomeText").style.display = "block";
		document.getElementById("SearchBox").style.display = "block";
		document.getElementById("HowItWork").style.display = "none";
		document.getElementById("search").style.display = "block";
		document.getElementById("Signup").style.display = "none";
		document.getElementById("PostItem").style.display = "none";

		var key = document.getElementById("SearchKey").value;
		var key2 = document.getElementById("SearchLocation").value;


		retrieveItemListsFromServer('/app/search/'+key+'/'+key2, 'search');
				
	}
	
	else if (x == 'Post') {
		//document.getElementById("Home").style.display = "block";
		document.getElementById("HomeText").style.display = "none";
		document.getElementById("SearchBox").style.display = "none";
		document.getElementById("HowItWork").style.display = "none";
		document.getElementById("search").style.display = "none";
		document.getElementById("Signup").style.display = "none";
		document.getElementById("PostItem").style.display = "block";


	}

	
	else if (x == 'Signup') {
		document.getElementById("Home").style.display = "block";
		document.getElementById("HomeText").style.display = "none";
		document.getElementById("SearchBox").style.display = "none";
		document.getElementById("HowItWork").style.display = "none";
		document.getElementById("search").style.display = "none";
		document.getElementById("Signup").style.display = "block";
		document.getElementById("PostItem").style.display = "none";

	}
	else {
		//document.getElementById("Home").style.display = "block";
		document.getElementById("HowItWork").style.display = "block";
		document.getElementById("HomeText").style.display = "block";
		document.getElementById("SearchBox").style.display = "block";
		document.getElementById("search").style.display = "none";
		document.getElementById("Signup").style.display = "none";
		document.getElementById("PostItem").style.display = "none";

	}
}



function retrieveItemListsFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);
			if (operation == "search") {
				populateItemListsView('search', returnValues);
			}
			//else if (operation == "gList") {
			//	populateListItems('tasks', returnValues);				
			//}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}


//DOM based function
function populateItemListsView(elementId, lists) {
	var element = document.getElementById(elementId);
	var newElement = "<h1 class=\"TitleFont\">Rentals Near You...</h3>";
	if(lists.length == 0){
		newElement += "<br><br><br><h1 class=\"TitleFont\">Sorry, Nothing found from your location.</h3> <br> <br><br>"
	}
	for (var i = 0; i < lists.length; i++) {
		newElement += "<a href=\"#search\" class= \"searchContent\">";
		newElement += "<img src=\"" + lists[i].image + "\" class=\"searchImgs\">";
		newElement += "<div class=\"TitleSubFont\">" + lists[i].title + "</div>";
		newElement += "<div class=\"ContentFont\">Price: $" + lists[i].price + " per day <br> Location: "+ lists[i].location + "<br><br> Description: " + lists[i].description + "</div>"
		newElement += "</a>"
	}
	element.innerHTML = newElement;
}
/*
//DOM based function
function populateListItems2(elementId, list) {
	var listItems = list.tasks;
	var element = document.getElementById(elementId);
	var newElement = "";

	for (var i = 0; i < listItems.length; i++) {
		newElement += "<tr>";
		newElement += "<td>" + listItems[i].description + "</td>";
		newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
		newElement += "<td>";
		newElement += "<div class=\"input-group\">";
		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
		newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";
	}

	element.innerHTML = newElement;	
}

//JQuery based function
function populateListItems(elementId, list) {
	var listItems = list.tasks;
	var newElement = "";

	for (var i = 0; i < listItems.length; i++) {
		newElement += "<tr>";
		newElement += "<td>" + listItems[i].description + "</td>";
		newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
		newElement += "<td>";
		newElement += "<div class=\"input-group\">";
		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
		newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";
	}
	$("#" + elementId).append(newElement);
}
*/