$(document).ready(()=>{
    let from;
    let to;
    let time;
$("#bookingBtn").click(()=>{
    time = document.getElementById("datetime").value;
     from = document.getElementById("from").value;
     to = document.getElementById("to").value;
     
    if (from.length<=1&&to.length<=1) {
        alert("Enter Valid Details");
    }
    else{
let price3 = parseInt(Math.random()*(35000-21000)+21000);
let price2 = parseInt(Math.random()*(20000-13000)+13000);
let price1 = parseInt(Math.random()*(12000-8000)+8000);
        document.getElementById("bookingDetails").innerHTML=`
        <h1>Tickets Available</h1>
        <div id="ticket1" class="ticket">
        <h3>${from} - ${to} (Economy)</h3>
        <h4>${time.slice(11)}</h4>
        <h4>Price: ₹${price1}</h4>
        
        <button class="registerBtn" id="finalBook1">Book Now</button>
        </div>
        <div id="ticket2" class="ticket">
        <h3>${from} - ${to} (Business Class)</h3>
        <h4>${time.slice(11)}</h4>
        <h4>Price: ₹${price2}</h4>
        <button class="registerBtn" id="finalBook2">Book Now</button>
        </div>
        <div id="ticket3" class="ticket">
        <h3>${from} - ${to} (First Class)</h3>
        <h4>${time.slice(11)}</h4>
        <h4>Price: ₹${price3}</h4>

        <button class="registerBtn" id="finalBook3">Book Now</button>
        </div>
        `;
        if (sessionStorage.getItem("email")!=null) {
            
            $("#finalBook1").click(()=>{
                document.getElementById("bookingDetails").innerHTML=`
                <h1>Ticket Booked!!</h1>
    <div id="ticket3" class="ticket">
    <h3>${from} - ${to} (Economy)</h3>
        <h4>${time.slice(11)}</h4>
        <hr/>
        <h4>Total: ₹${price1}</h4>
        <button class="registerBtn" style="margin-bottom: 2%;" onclick="location.href='index.html'">Go to Homepage</button>
        

        </div>
        `;
    })
    $("#finalBook2").click(()=>{
        document.getElementById("bookingDetails").innerHTML=`
        <h1>Ticket Booked!!</h1>
        <div id="ticket3" class="ticket">
        <h3>${from} - ${to} (Business Class)</h3>
        <h4>${time.slice(11)}</h4>
        <hr/>
        <h4>Total: ₹${price2}</h4>
        <button class="registerBtn" style="margin-bottom: 2%;" onclick="location.href='index.html'">Go to Homepage</button>

        
        </div>
        `;
    })
    $("#finalBook3").click(()=>{
    document.getElementById("bookingDetails").innerHTML=`
    <h1>Ticket Booked!!</h1>
    <div id="ticket3" class="ticket">
    <h3>${from} - ${to} (First Class)</h3>
    <h4>${time.slice(11)}</h4>
    <hr/>
    <h4>Total: ₹${price3}</h4>
    <button class="registerBtn" style="margin-bottom: 2%;" onclick="location.href='index.html'">Go to Homepage</button>
    
    
    </div>
    `;
})
}
else{
    $("#finalBook1, #finalBook2, #finalBook3").click(()=>{
        alert("Please Login or Register First");
    })
}
}
})

})

