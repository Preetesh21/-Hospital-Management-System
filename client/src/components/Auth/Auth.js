var Auth = (function() {
    var id = "";
    var admin="";
  
    var getadmin = function() {
      return admin;    // Or pull this from cookie/localStorage
    };
  
    var getid = function() {
        return id;    // Or pull this from cookie/localStorage
    };

    var setID = function(ids) {
        console.log('hello',ids)
        id = ids;     
      // Also set this in cookie/localStorage
    };
  
    var setadmin = function(admins) {
        console.log('hello',admins)
        admin = admins;     
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