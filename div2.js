function check() {
    const num1check = document.getElementById('length');
    const num2check = document.getElementById('breadth');
    const areacheck = document.getElementById('area');

    const num1 = parseFloat(document.getElementById("length").value);
    const num2 = parseFloat(document.getElementById("breadth").value);
    const area1 = parseFloat(document.getElementById("area").value);
    const total = ((num1 * num2) * 2) * 0.093;
    const malpot = (area1-total)
    const sampatekar = total;
    const areaOfHouse = num1*num2*0.093;
    const gharThulo = areaOfHouse-area1

if(total>=area1 && area1<areaOfHouse){
        document.getElementById("result").innerText = `गलत विवरणको प्रयास`;
        document.getElementById("result1").innerText = `कारणः तपाईको ${area1} व.मि. जग्गामा, ${areaOfHouse} व.मि को घर असम्भव छ। ।`;
        document.getElementById("jagga").innerText = ``;
        document.getElementById("cannot").innerText = ``;
        document.getElementById("gharKoArea").innerText = ``;
        document.getElementById("sampatekar").innerText = ``;
        document.getElementById("malpot").innerText = ``;

}

else if(total==area1){
  document.getElementById("result").innerText = `आम्शिक`;
  document.getElementById("result1").innerText = `कारणः सम्पति कर लाग्ने क्षेत्रफल र तपाईको घर भएको जग्गाको क्षेत्रफल बराबर`;
  document.getElementById("jagga").innerText = `तपाईको RARE CASE भेटियो`;
  document.getElementById("gharKoArea").innerText = `घरले ओगटेको क्षेत्रफल ${areaOfHouse}`;
  document.getElementById("sampatekar").innerText = `सम्पति कर ${sampatekar}`;
  document.getElementById("malpot").innerText = `मालपोत लाग्नेको ${malpot}`;
  document.getElementById("cannot").innerText = ``;
}
else if(total<area1){
  document.getElementById("result").innerText = `आम्शीक`;
  document.getElementById("result1").innerText = `कारणः सम्पति कर लगाएर पनि घर बनेको जग्गाको क्षेत्रफल उब्ररीयो।`;
  document.getElementById("gharKoArea").innerText = `घरले ओगटेको क्षेत्रफल ${areaOfHouse}`;
  document.getElementById("sampatekar").innerText = `सम्पति कर ${sampatekar}`;
  document.getElementById("jagga").innerText = `मालपोत लाग्नेको ${malpot}`;
  document.getElementById("cannot").innerText = ``;
}
else if(total>area1){
  document.getElementById("result").innerText = `छैन`;
  document.getElementById("result1").innerText = `कारण: जग्गाको पुरा क्षेत्रफल ओगट्ने सम्पति कर भयो।`;
  document.getElementById("jagga").innerText = ``;
  document.getElementById("cannot").innerText = ``;
  document.getElementById("gharKoArea").innerText = ``;
  document.getElementById("sampatekar").innerText = ``;
  document.getElementById("malpot").innerText = ``;
  
}
else if(num1check.value.trim() == '' || num2check.value.t
+rim() == '' || areacheck.value.trim() == ''){
  document.getElementById("result").innerText = `कृपया पुरा विवरण हाल्नुहोला।`; 
}
    else{
     alert("Contact to the developer");
    }
  }
  