function Contact(first, last, address, email, note){
  this.firstName = first;
  this.lastName = last;
  this.addressName = address;
  this.emailName = email;
  this.noteName = note;
}

$(document).ready(function(){
  $("form#newContactForm").submit(function(event){
    event.preventDefault();
    var inputFirstName = $("input#newFirstName").val();
    var inputLastName = $("input#newLastName").val();
    var inputAddress = $("input#newAddress").val();
    var inputEmail = $("input#newEmail").val();

    // NOTE: creates a new Contact object by calling the Contract constructor and passing in the data. The variable newContact now refers to that newly created contact object, which knows it's "own" firstName and lastName
    var newContact = new Contact(inputFirstName, inputLastName, inputAddress, inputEmail);

    $("ul#contactsList").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");//contains all the info of a contact but is just making a list of clickable items based on their first names

    $(".contact").last().click(function(){ //for the contact that was "last" clicked, show their information
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".firstName").text(newContact.firstName);
      $(".lastName").text(newContact.lastName);
      $(".address").text(newContact.addressName);
      $(".email").text(newContact.emailName);
    });

    $("input#newFirstName").val("");
    $("input#newLastName").val("");
    $("input#newAddress").val("");
    $("input#newEmail").val("");
    $("input#newNote").val("");


    $("#clearFormButton").click(function(event){
      event.preventDefault();
      $("input#newFirstName").val("");
      $("input#newLastName").val("");
      $("input#newAddress").val("");
      $("input#newEmail").val("");
      $("input#newNote").val("");
      $(".contact").remove();
      $(".firstName").remove();
      $(".lastName").remove();
      $(".address").remove();
      $(".email").remove();
      $(".note").remove();


    });
  });
});
