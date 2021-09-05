async function list() {
    const headers = { 'Content-Type': 'application/json',  mode: "no-cors", withCredentials: true }
    const msg = JSON.stringify({ tipo: "Audio" });
    
    const res = await axios.post('http://localhost:5000/tipeProducts', {
        "tipo":"Audio"
    }, {headers: headers})
        .catch(function (error) {
            if (error.response) {

            }
        });

    console.log(res.data)

    for(i=0; i<res.data.length; i++) {
        var node = document.createElement("DIV")
        node.setAttribute("class", "col-sm-6 col-md-6 col-lg-4 col-xl-4")

        var nodeP = document.createElement("DIV")
        node.setAttribute("class", "products-single fix")
        node.appendChild(nodeP)

        var node2 = document.createElement("DIV");
        node2.setAttribute("class", "box-img-hover")
        nodeP.appendChild(node2); 

        var nodeImg = document.createElement("IMG")
        nodeImg.setAttribute("src", res.data[i].imagen)
        nodeImg.setAttribute("class", "w3-image")
        nodeImg.setAttribute("alt", "Image")
        node2.appendChild(nodeImg)

        var node3 = document.createElement("DIV")
        node3.setAttribute("class", "mask-icon")
        node2.appendChild(node3)

        var node4 = document.createElement("UL")
        node3.appendChild(node4)

        var node5 = document.createElement("LI")
        node4.appendChild(node5)

        var node6 = document.createElement("A")
        node6.setAttribute("data-toggle", "tooltip")
        node6.setAttribute("data-placement", "right")
        node6.setAttribute("title", "View")
        node5.appendChild(node6)

        var node7 = document.createElement("I")
        node7.setAttribute("class", "fas fa-eye")
        node6.appendChild(node7)


        var node8 = document.createElement("LI")
        node4.appendChild(node8)

        var node9 = document.createElement("A")
        node9.setAttribute("data-toggle", "tooltip")
        node9.setAttribute("data-placement", "right")
        node9.setAttribute("title", "View")
        node8.appendChild(node9)

        var node10 = document.createElement("I")
        node10.setAttribute("class", "fas fa-eye")
        node9.appendChild(node10)

        var node11 = document.createElement("A")
        node11.setAttribute("class", "cart")
        node11.setAttribute("href", "#")
        var textnode = document.createTextNode("Añadir al carrito");
        node11.appendChild(textnode); 
        node3.appendChild(node11)


        var node12 = document.createElement("DIV");
        node12.setAttribute("class", "why-text")
        nodeP.appendChild(node12); 

        var node13 = document.createElement("H4")
        var textnode2 = document.createTextNode(res.data[i].nombre);
        node13.appendChild(textnode2); 
        node12.appendChild(node13)

        var node14 = document.createElement("H5")
        var textnode3 = document.createTextNode(res.data[i].precio);
        node14.appendChild(textnode3); 
        node12.appendChild(node14)

        document.getElementById("listProducts").appendChild(node); 
    }
}

var o = list()