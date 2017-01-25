function Contact(first, last, address, email, note){
  this.firstName = first;
  this.lastName = last;
  this.addressName = address;
  this.emailName = email;
  this.noteName = note;
}
//a protype method is a method meant to be called on a specific type of object. Ex: the Contact objects in our addresss book.
//fullName() is a prototype method because it's specifically meant to return the full name of a Contact object.
Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
};


$(document).ready(function(){
  $("form#newContactForm").submit(function(event){
    event.preventDefault();
    var inputFirstName = $("input#newFirstName").val();
    var inputLastName = $("input#newLastName").val();
    var inputAddress = $("input#newAddress").val();
    var inputEmail = $("input#newEmail").val();
    var inputNote = $("input#newNote").val();
    $("input#newFirstName").val("");
    $("input#newLastName").val("");
    $("input#newAddress").val("");
    $("input#newEmail").val("");
    $("input#newNote").val("");

    // NOTE: creates a new Contact object by calling the Contract constructor and passing in the data. The variable newContact now refers to that newly created contact object, which knows it's "own" firstName and lastName
    var newContact = new Contact(inputFirstName, inputLastName, inputAddress, inputEmail);

    $("ul#contactsList").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");//contains all the info of a contact but is just making a list of clickable items based on their first names

    $(".contact").last().click(function(){ //for the contact that was "last" clicked, show their information
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".firstName").text(newContact.firstName);
      $(".lastName").text(newContact.lastName);
      $(".address").text(newContact.addressName);
      $(".email").text(newContact.emailName);
    });
    // $("#clearFormButton").click(function(){
    //
    //   $("span .contact").removeClass();
    //
    //     $(".contact").remove();
    //
    //     $(".firstName").remove();
    //     $(".lastName").remove();
    //     $(".address").remove();
    //     $(".email").remove();
    //     $(".note").remove();
    // });
  });
});
