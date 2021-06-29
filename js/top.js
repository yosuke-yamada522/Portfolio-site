$(function() {
    setTimeout(function(){
        $('.start p').fadeIn(1600);
    },500);//0.5秒後に1.6秒かけてフェードイン
    setTimeout(function() {
        $('.start').fadeOut(500);
    },2500);//2.5秒後に0.5秒かけてフェードアウト
});

