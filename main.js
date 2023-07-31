console.log("no clue if this works or not")
function downloads()
{
    window.location.href = "downloads.html"
}
function stylemods()
{
    window.location.href = "mods.html"
}
function home()
{
    window.location.href = "index.html"
}
function questions()
{
    window.location.href = "questions.html"
}
function goofy()
{
    console.warn("you're already at home, goofy")
}

$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }