window.onload = function() {
  render(decodeURI(window.location.hash))
}

$(window).on('hashchange', function(){
		render(decodeURI(window.location.hash))
	});

function handle_click() {
  console.log("click event.")
}


function render(url) {
  selector(url);
  contentor(url);
}

//handles active tab
function selector(div) {
  document.getElementById('tab_previous').className = ((div==''||div=='#previous')? 'active':'')
  document.getElementById('tab_blog').className = ((div=='#Blog')? 'active':'')
  document.getElementById('tab_projects').className = ((div=='#Projects')? 'active':'')
}

function contentor(div) {
  document.getElementById('previous').style.display = ((div==''||div=='#previous')? 'block':'none')
  document.getElementById('blog').style.display = ((div=='#Blog')? 'block':'none')
  document.getElementById('projects').style.display = ((div=='#Projects')? 'block':'none')
}
