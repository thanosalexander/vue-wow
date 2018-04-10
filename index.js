var utils = require('./utils');

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
                };
                
                if(('animation-delay' in animateConfig) === false && el.hasAttribute('data-wow-delay')){
                    animateConfig['animation-delay'] = el.getAttribute('data-wow-delay')
                };

                if(('animation-duration' in animateConfig) === false && el.hasAttribute('data-wow-duration')){
                    animateConfig['animation-duration'] = el.getAttribute('data-wow-duration')
                }

                //Class form Animate.css (this should be an options)
                el.classList.add('animated');
                el.style.visibility = "hidden";
                el.style["animation-name"] = "none";

            
                var lastTick = Date.now();
                let handleScroll = function() {
                    var rate = 100;
                    if (Date.now() - lastTick >= rate) {
                        if(utils.showElement(el, animateConfig)){
                            window.removeEventListener("scroll", handleScroll);
                        }
                        lastTick = Date.now();
                    }
                };

                setTimeout(function() {
                    if(utils.showElement(el, animateConfig)){
                        window.removeEventListener("scroll", handleScroll);
                    }
                }, 1);

                var scrolling = false;
                window.addEventListener("scroll", handleScroll);
            }
        });
    }
};