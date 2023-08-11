function submitData() {
  let Name = document.getElementById("input-Name").value;
  let Email = document.getElementById("input-Email").value;
  let PhoneNumber = document.getElementById("input-Phone Number").value;
  let CardType = document.getElementById("input-Card Type").value;
  let PaymentMethod = document.getElementById("input-Payment Method").value;
  let YourAddress = document.getElementById("input-Your Address").value;
  
  if (Name == "") {
      return alert("Must fill Your name!");
  } else if (Email == "") {
      return alert("Must fill Your Email!");
  } else if (PhoneNumber == "") {
      return alert("Must fill Your Phone Number!");
  } else if (CardType == "") {
      return alert("Choose Your Preffered Card Type!");
  } else if (PaymentMethod == "") {
      return alert("Choose the Payment Method!");
  } else if (YourAddress == "") {
      return alert("Type Your Address for Shipment!");
   }
  
    console.log(Name);
    console.log(Email);
    console.log(PhoneNumber);
    console.log(CardType);
    console.log(PaymentMethod);
    console.log(YourAddress);
  
    let emailReceiver = "iqbaleyusfikar@gmail.com";
  
    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${CardType}&body=Hello, my name is ${Name}, ${YourAddress}, please contact me in this phone number ${PhoneNumber}, ${Email}, ${PaymentMethod}`;
    a.click();
  
    let data = { Name, Email, PhoneNumber, CardType, PaymentMethod, YourAddress };
  
    console.log(data);
}