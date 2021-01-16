var Auth = (function() {
    var id = "";
    var admin="";
  
    var getadmin = function() {
      return admin;    // Or pull this from cookie/localStorage
    };
  
    var getid = function() {
        return id;    // Or pull this from cookie/localStorage
    };

    var setID = function(id) {
      id = id;     
      // Also set this in cookie/localStorage
    };
  
    var setadmin = function(admin) {
        admin = admin;     
        // Also set this in cookie/localStorage
      };

    return {
      getadmin: getadmin,
      getid: getid,
      setID:setID,
      setadmin: setadmin
    }
  
  })();
  
  export default Auth;