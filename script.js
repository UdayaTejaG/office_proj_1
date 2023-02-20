addEventListener("load", (event) => {
    document.body.style.zoom="100%";
    var attributes=document.getElementById('ct-attributes');
    let ct_attributes=['salesChannel','contractIndicator'];
    ct_attributes.forEach(data =>{
        var temp=document.createElement('option');
        temp.setAttribute('value',data);
        attributes.append(temp);
    });
});

function readData() {
    let data=[]
    data.push("env:"+document.getElementById('ct-evnvironment').value);
    data.push("attribute:"+document.getElementById('ct-attribute').value);
    data.push("data:"+document.getElementById('ct-new-data').value);
    data.push("aws_request:"+document.getElementById('ct-request').value);

    var consol=document.getElementById('console-logs');

    data.forEach((item,i) =>{
        setTimeout(() => {
        var final_data=document.createElement('div');
        final_data.appendChild(document.createTextNode(item));
        consol.appendChild(final_data);
          }, 1000*i);
    });

}

function changeLabel(){
    var status=document.getElementById('request-toogle-switch');
    var label=document.getElementById('request-toogle-label');
    if(status.checked){
        label.innerHTML='Product Codes :';
    }else{
        label.innerHTML='AWS Request :';
    }
}
