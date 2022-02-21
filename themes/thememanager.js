var themes = ["https://gs-themes.videostampantimc.ga/themes/dark/theme.css", "https://gs-themes.videostampantimc.ga/themes/calendar-high-contrast/theme.css"];
var themesname = ["dark", "hc"];
var themes_rel = "stylesheet";

function toggleThemeListItem(themeid, s) {
    $(document.body).toggleClass("gs-" + themeid);
    if (window.localStorage.getItem("gs-" + themeid) == "true" && s == 1) {
        $("#" + themeid + "ThemeListItem").toggleClass("active");
        window.localStorage.setItem("gs-" + themeid, "false");
    } else if (s == 1) {
        $("#" + themeid + "ThemeListItem").toggleClass("active");
        window.localStorage.setItem("gs-" + themeid, "true");
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
<li onclick="toggleThemeListItem('dark', 1)" id="darkThemeListItem"><a><i class="fas fa-brush"></i> Tema scuro <span class="badge">BETA</span></a></li>
<li onclick="toggleThemeListItem('hc', 1)" id="hcThemeListItem"><a><i class="fas fa-brush"></i> Tema a contrasto elevato</a></li>
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
    toggleThemeListItem("dark", 0)
}
if (window.localStorage.getItem("gs-hc") == "true"){
    toggleThemeListItem("hc", 0)
}
$(".navbar-right").prepend($(themeManager));