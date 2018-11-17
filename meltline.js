
;((global) => {
  var meltline = {
    media: '',
    element: document.documentElement,
    style: window.getComputedStyle(document.documentElement),

    getProperty(key) {
      if (!/--/.test(key)) {
        key = '--' + key;
      }
      return this.style.getPropertyValue(key).trim();
    },
    updateMedia() {
      return this.media = this.getProperty('media');
    },
  };

  window.addEventListener('DOMContentLoaded', () => {
    meltline.updateMedia();
  });
  window.addEventListener('resize', () => {
    meltline.updateMedia();
  });

  global.meltline = meltline;
})(this);