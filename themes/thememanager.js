var themes = ["https://gs-themes.videostampantimc.ga/themes/dark/theme.css", "https://gs-themes.videostampantimc.ga/themes/calendar-high-contrast/theme.css"];
var themesname = ["dark", "hc"];
var themes_rel = "stylesheet";

function toggleThemeListItem(themeid) {
    $("#" + themeid + "ThemeListItem").toggleClass("active");
    $(document.body).toggleClass("gs-" + themeid);
    if (window.localStorage.getItem("gs-" + themeid) == "true") {
        window.localStorage.setItem("gs-" + themeid, "false");
    } else {
        window.localStorage.setItem("gs-" + themeid, "true");
    }
}

var themeManager = `
<li class="">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
<i class="fas fa-brush"></i> Tema <span class="caret"></span>
</a>
<ul class="dropdown-menu" role="menu">
<li onclick="toggleThemeListItem('dark')" id="darkThemeListItem"><a><i class="fas fa-brush"></i> Tema scuro <span class="badge">BETA</span></a></li>
<li onclick="toggleThemeListItem('hc')" id="hcThemeListItem"><a><i class="fas fa-brush"></i> Tema a contrasto elevato</a></li>
</ul>
</li>
`;

for (var i = 0; i < themes.length; i++) {
    var el = document.createElement("link");
    el.href = themes[i];
    el.rel = themes_rel;
    document.head.appendChild(el);
}
if (window.localStorage.getItem("gs-dark") == "true"){
    toggleThemeListItem("dark")
}
if (window.localStorage.getItem("gs-hc") == "true"){
    toggleThemeListItem("hc")
}
$(".navbar-right").prepend($(themeManager));