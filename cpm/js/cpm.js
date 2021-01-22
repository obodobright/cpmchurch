$(document).ready(function() {
    $("button").click(function() {
        if ($("button").text() == "☰") {
            $("button").text("✖");
            $("main").hide()
        } else {
            $("button").text("☰");
            $("main").show()
        }
    })
})


$(document).ready(function() {
    $("#navBarToggleshow").load(function() {
        $("#navBarToggleshow").hide
    })
})
$(document).ready(function() {
    $(".sidebar").on("mouseenter", function() {
        $(this).css("background-color", "red")
    })
})
$(document).ready(function() {
    $(".sidebar").on("mouseleave", function() {
        $(this).css("background-color", "black")
    })
})


$(document).ready(function() {
    $(".devotionMenuA").on("click", function() {
        $(".devotionContentA").toggle()
    })
})
$(document).ready(function() {
    $(".devotionMenuB").on("click", function() {
        $(".devotionContentB").toggle()
    })
})
$(document).ready(function() {
    $(".devotionMenuC").on("click", function() {
        $(".devotionContentC").toggle()
    })
})
$(document).ready(function() {
    $(".devotionMenuD").on("click", function() {
        $(".devotionContentD").toggle()
    })
})
$(document).ready(function() {
    $(".devotionMenuE").on("click", function() {
        $(".devotionContentE").toggle()
    })
})
$(document).ready(function() {
    $(".gatheringTime").click(function() {
        let gt = $(".gatheringTime");
        gt.animate({ fontSize: "2em" })
    })
})
$(document).ready(function() {
    $(".contactUs").mouseenter(function() {
        $(this).css("background", "blue")
    })
})
$(document).ready(function() {
    $(".contactUs").mouseleave(function() {
        $(this).css("background", "red")
    })
})