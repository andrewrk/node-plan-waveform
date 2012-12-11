var waveform = require('waveform');

module.exports = {
  cpuBound: true,
  start: function(done) {
    var self = this;
    var tempPngFile = self.context.makeTemp({suffix: '.png'});
    var waveformOptions = {
      width: self.options.width,
      height: self.options.height,
      'color-bg': self.options.colorBg,
      'color-center': self.options.colorCenter,
      'color-outer': self.options.colorOuter,
    };
    var tempPath = self.context.tempPath;
    delete self.context.tempPath;
    waveform(tempPath, tempPngFile, waveformOptions, function(err) {
      if (err) {
        done(err);
      } else {
        self.context.tempPath = tempPngFile;
        done();
      }
    });
  }
};
