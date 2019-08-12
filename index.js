function breedNotFound(dogBreed) {
    alert(`There aren't any pictures of the breed "${dogBreed}" available. Please select another breed.`);
}

function logResults(jsonResponse, dogBreed) {
    if (jsonResponse.status === "error") {
        breedNotFound(dogBreed);
    }
    else {
    $('.dog-pictures').empty();
    console.log(jsonResponse.message);
    $('.dog-pictures').append(`<img src="${jsonResponse.message}" class="dog-picture">`);
    $('.dog-pictures').removeClass('hidden');
    }
}

function getDogPictures(dogBreed) {
    let fetchUrl = "https://dog.ceo/api/breed/" + dogBreed + "/images/random";
    fetch(fetchUrl)
        .then(response => response.json())
        .then(jsonResponse => logResults(jsonResponse, dogBreed))
        .catch(error => alert("something's wrong!"));
}

function whichBreed() {
    let dogBreed = $('#type-of-dog').val();
    getDogPictures(dogBreed);
}
function watchForSubmit() {
    $('form').submit(function(event) {
        event.preventDefault();
        whichBreed();
    })
}

$(watchForSubmit)