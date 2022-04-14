$(document).ready(() => {
    const url = "https://api.kanye.rest";
    function newQuote() {
        $.ajax({
            url: url,
            type: 'GET',
            success: (result) => {
                $("#text").text(result.quote);
            },
            error: (error) => {
                console.log(error);
            }
        })
    }
    newQuote();
    $("#new-quote").click(newQuote)
})