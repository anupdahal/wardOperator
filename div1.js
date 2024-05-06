function check() {
  const num1check = document.getElementById('length');
  const num2check = document.getElementById('breadth');
  const rupeecheck = document.getElementById('rupee');

if (num1check.value.trim() !== '' && num2check.value.trim() !== '' && rupeecheck.value.trim() !== '') {
    const num1 = parseFloat(document.getElementById("length").value);
    const num2 = parseFloat(document.getElementById("breadth").value);
    const rupee = parseFloat(document.getElementById("rupee").value);
    const total = ((num1 * num2) * 2) * 0.093 * rupee;
    const totalma10Percent = (total + (total / 100 * 10));

    document.getElementById("result").innerText = `${total}`;
    document.getElementById("result1").innerText = `१० % जोडेर ${totalma10Percent}`;
}
else if(num1check.value.trim() == '' || num2check.value.trim() == '' || rupeecheck.value.trim() == ''){
    document.getElementById("result").innerText = `कृपया पुरा विवरण हाल्नुहोला।`; 
}
 else {
    document.getElementById("result").innerText = `Error occur contact to the developer (9804902634)`; 
  }
}

function formula() {
document.getElementById("formula").innerText = `(((length * breadth) *2) * 0.093 * Nagar le sit number anushar tokako mulya)`; 
}