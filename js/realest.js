         
            
            function checkPassword(form) 
            {
               var p1 = form.password1.value;
                var p2 = form.password2.value;
  
                // If password not entered
                if (p1 == '')
                    alert ("Please enter Password");
                      
                // If confirm password not entered
                else if (p2 == '')
                    alert ("Please enter confirm password");
                      
                // If Not same return False.    
                else if (p1 != p2) {
                    alert ("\nPassword did not match: Please try again...")
                    return false;
                }  
                // If same return True.
                else{
                    alert("Password Match: Welcome to GeeksforGeeks!")
                    return true;
                }
            }
