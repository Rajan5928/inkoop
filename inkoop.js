
$(document).ready(function () {
    $("ul.Alfa").on("click", "a", function (e) {
        e.preventDefault();

        var parentli = $(this).parent();
        var thisText = $(this).text();

        if (parentli.find("ul").length == 0) {
            parentli.append("<ul></ul>");
        }

        var ul = parentli.find(">ul");
        var c = ul.find("> li").length + 1;
        ul.append("<li><a href='#'>" + thisText + c + "</a></li>")
    })
});