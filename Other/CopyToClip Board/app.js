function copy() {
    var input = document.getElementById('input');
    if (input.value == "") {
        alert("Please Write Somethinthing");
    } else {

        input.select();
        input.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert('Copied =>' + input.value);
        input.value = ""
    }
}