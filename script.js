// localStorage.clear();
function fullName() {
    let fName = document.getElementById("firstname").value;
    let lName = document.getElementById("lastname").value;
    localStorage.setItem("First Name", fName);
    localStorage.setItem("Last Name", lName);

}
function phone() {
    let phoneNumber = document.getElementById("phonenumber").value;
    localStorage.setItem("Phone Number", phoneNumber);
    let cni = document.getElementById("cnic").value;
    localStorage.setItem("CNIC NO.", cni);

}
function address() {
    let st = document.getElementById("street").value;
    let st2 = document.getElementById("street-2").value;
    let city = document.getElementById("city").value;
    let region = document.getElementById("region").value;
    let zipCode = document.getElementById("zidcode").value;
    let cntr = document.getElementById("country");
    let val = cntr.value
    localStorage.setItem("Street Address", st);
    localStorage.setItem("Street Address line 2", st2);
    localStorage.setItem("City", city);
    localStorage.setItem("Region", region);
    localStorage.setItem("Postal/Zip Code", zipCode);
    localStorage.setItem("Country", val);
}
function account() {
    let accountType = document.getElementById("accounttype");
    let val = accountType.value;
    let sl = document.getElementById("salary").value;
    localStorage.setItem("Account Type", val);
    localStorage.setItem("Monthly Salary", sl);
}

