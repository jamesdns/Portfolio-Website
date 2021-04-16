window.onload = function(){ 
    // Get the modal
    var modal1 = document.getElementById("modal1");
    var modal2 = document.getElementById("modal2");
    var modal3 = document.getElementById("modal3");
    var modal4 = document.getElementById("modal4");
    var modal5 = document.getElementById("modal5");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img1 = document.getElementById("websiteImg1");
    var img2 = document.getElementById("websiteImg2");
    var img3 = document.getElementById("websiteImg3");
    var img4 = document.getElementById("websiteImg4");
    var img5 = document.getElementById("websiteImg5");

    var modalImg1 = document.getElementById("modalImg1");
    var modalImg2 = document.getElementById("modalImg2");
    var modalImg3 = document.getElementById("modalImg3");
    var modalImg4 = document.getElementById("modalImg4");
    var modalImg5 = document.getElementById("modalImg5");

    img1.onclick = function(){
        modal1.style.display = "block";
        modalImg1.src = this.src;
    }

    img2.onclick = function(){
        modal2.style.display = "block";
        modalImg2.src = this.src;
    }

    img3.onclick = function(){
        modal3.style.display = "block";
        modalImg3.src = this.src;
    }

    img4.onclick = function(){
        modal4.style.display = "block";
        modalImg4.src = this.src;
    }

    img5.onclick = function(){
        modal5.style.display = "block";
        modalImg5.src = this.src;
    }
    // Get the <span> element that closes the modal
    var span1 = document.getElementById("close1");
    var span2 = document.getElementById("close2");
    var span3 = document.getElementById("close3");
    var span4 = document.getElementById("close4");
    var span5 = document.getElementById("close5");

    // When the user clicks on <span> (x), close the modal
    span1.onclick = function() {
        modal1.style.display = "none";
    }

    span2.onclick = function() {
        modal2.style.display = "none";
    }

    span3.onclick = function() {
        modal3.style.display = "none";
    }

    span4.onclick = function() {
        modal4.style.display = "none";
    }

    span5.onclick = function() {
        modal5.style.display = "none";
    }
};