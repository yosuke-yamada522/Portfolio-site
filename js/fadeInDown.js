//下からフェードイン表示
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            //スクロール位置が右辺の値より大きい場合に実行
            if(scrollAmount > targetPosition - wHeight + 200) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});