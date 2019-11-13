
function init1() {
    first()
    // let section = document.querySelectorAll('section')
    let $section = $('body section')

   
    let m = 0
    var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }

        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }
    //手指接触屏幕
    document.addEventListener("touchstart", function (e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function (e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            // case 0:
            //     alert("未滑动！");
            //     break;
            case 1://向上
                m++
                if (m==5) {
                    alert('最后一张了哦，小猪猪！')
                }
                console.log(m);

                if (m == 1) {
                    $section.eq(0).css({ animation: 'hinge 2s ease 0s 1' })
                    setTimeout(() => {
                        $section.eq(m).show().siblings().hide()
                        $section.eq(0).css({ animation: '0' })
                    }, 2000)
                } else {
                    $section.eq(m).show().siblings().hide()
                }
                break;
            case 2://向下
                m--
                if (m == 0) {
                    $section.eq(0).css({ animation: 'bounceInDown 2s linear 0s 1' }).show().siblings().hide()
                }
                else {
                    $section.eq(m).show().siblings().hide()
                }
                break;
            // case 3:
            //     alert("向左！")
            //     break;
            // case 4:
            //     alert("向右！")
            //     break;
            default:
        }
    }, false);
}
init1()

function first() {


    let $first_txt = $('.first .img_txt img'),
        $first = $('body .first')
    // $first_txt.css({animation:'flipInY 2s ease 2.1s 1'})
    // $first.css({animation:' bounceInDown 2s linear 0s 1'})
    setTimeout(() => {
        $first_txt.css({ opacity: '1' }, 1500)
    }, 2500)

}

