import Vue from 'vue'

Vue.directive('scale', {
    inserted: function (el) {
        var hScale = window.innerHeight / 1096;
        var wScale = window.innerWidth / 1920;
        el.style.transform = 'scaleX(' + wScale + ') scaleY(' + hScale + ')'
        el.style.marginLeft = -((1920 - window.innerWidth) / 2) + 'px'
        el.style.marginTop = -((1096 - window.innerHeight) / 2) + 'px'


        let height = null
        window.onresize = function () {
            setTimeout(() => {
                height = 100
            }, 600)
        }
        console.log('height', height)
    }
})