var AppContext = require('app-context');

exports.execute = function() {
  return AppContext.loadFromPackage(AppContext.RunLevel.Running)
  .then(function() {
    var d = require('q').defer();
    
    process.on('SIGINT', function() {
      d.resolve();
    });
    
    return d.promise;
  })
  .catch(function(err) {
    console.log(err.stack);
  });
};
