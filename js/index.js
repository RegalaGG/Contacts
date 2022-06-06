let contacts = [{ 

    name: "MAXWELL WRIGHT", 
    
    phone: "(0191) 719 6495", 
    
    email: "CURABITUR.EGESTAS.NUNC@NONUMMYAC.CO.UK" 
    
    }, { 
    
    name: "RAJA VILLARREAL",
    
    phone: "0866 398 2895", 
    
    email: "POSUERE.VULPUTATE@SED.COM" 
    
    }, { 
    
    name: "HELEN RICHARDS", 
    
    phone: "0800 1111", 
    
    email: "LIBERO@CONVALLIS.EDU" 
    
    }];  
  
    contacts.push({
        name:prompt("Enter Your Name: ", "Gerald Regala"),
            phone:prompt("Enter Your Phone: ", "09473623830"),
                email:prompt("Enter Your Email ", "geraldregala24@gmail.com", "<br>")
                
        });


    for(var i = 0; i < contacts.length; i++) {
        document.write(contacts[i].name.toUpperCase(), " / " ,contacts[i].phone, " / " ,contacts[i].email.toUpperCase(), "<br>");
    };

    for(var j = 0; j < contacts.length; j++) {
        document.write("Number " ,j+1, " in the list: ",contacts[j].name.toUpperCase(),"<br>");
    };

    document.write("Total Contacts: ",contacts.length);