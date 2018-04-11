var utils = require('./utils');


var WowListener = new utils.WowListener();

export default {
    /**
     * install function
     * @param  {Vue} Vue
     * @param  {object} options  lazyload options
     */
    install(Vue, options = {}) {
        Vue.directive("wow", {
            bind(el, binding) {
                let animateConfig = binding.value || {};
                
                //WOW Parameters
                //Note: "data-wow-animation" is not parameter from WOW.js (It was implement only to adapt for this interface) 
                if(('animation-name' in animateConfig) === false){
                    animateConfig['animation-name'] = utils.getAnimationName(el)//el.style['animation-name'];
                }
                
                if(('animation-delay' in animateConfig) === false && el.hasAttribute('data-wow-delay')){
                    animateConfig['animation-delay'] = el.getAttribute('data-wow-delay')
                }

                if(('animation-duration' in animateConfig) === false && el.hasAttribute('data-wow-duration')){
                    animateConfig['animation-duration'] = el.getAttribute('data-wow-duration')
                }

                //Class form Animate.css (this should be an options)
                el.classList.add('animated');
                el.style.visibility = "hidden";
                el.style["animation-name"] = "none";
                
                WowListener.register(el, animateConfig);
            }
        });
    }
};