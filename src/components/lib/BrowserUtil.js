

export default class BrowserUtil{
    /*
    replaceText() {
        if (this.checkIsLowResolution()) {
            $(document).ready(function () {
                $("Начало").replaceWith("Меню");
             })
        }
    }
  */
    checkIsLowResolution() {
        const dimension1 = 640;
        const dimension2 = 360;
        
        if (window.innerWidth <= dimension1 && window.innerHeight <= dimension2
            || window.innerWidth <= dimension2 && window.innerHeight <= dimension1) {
            return "Меню";
        } else {
            return "Начало";
        }
    }
}