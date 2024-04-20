//ヘッダー「サービス」クリック処理
$(document).ready(function () {
    $('#services').on('click', function (event) {
        event.preventDefault(); // リンクのデフォルトの挙動をキャンセル

        var target = $('#footer_content'); // スクロール先の要素を取得
        var headerHeight = $('.navigation_var').outerHeight(); // ヘッダーの高さを取得

        // スムーズスクロールで「ヘッダーのサービス」まで移動
        $('html, body').animate({
            scrollTop: target.offset().top - headerHeight
        }, 300); // スクロールのスピード
    });
});

//　boxのテキストを50回繰り返して追加
$(document).ready(function () {
    const boxText = $('#web_create').text();
    for (let i = 0; i < 50; i++) {
        $('#footer_content').append(boxText);
    }
});

//フッター「スマホアプリ制作」のクリック処理
$(document).ready(function () {
    $('#web_create').click(function () {
        const boxText = $('#web_create').text(); // スマホアプリ制作のテキストを取得
        let repeatedText = ''; // 繰り返し表示するテキスト

        //「Web制作」を50回繰り返す
        for (let i = 0; i < 50; i++) {
            repeatedText += boxText;
        }

        // フッターに表示
        $('#footer_content').text(repeatedText);
    });
});

//フッター「SEOコンサルの説明」のクリック処理
$(document).ready(function () {

    $('#seo_consultant').click(function () {
        const repeatedText = 'SEOコンサルの説明 '.repeat(20); //「SEOコンサルの説明」を20回繰り返す

        // フッターに表示
        $('#footer_content').text(repeatedText);
    });
});

//フッター「スマホアプリ制作」のクリック処理
$(document).ready(function () {

    $('#smartphone_app_production').click(function () {
        const boxText = $('#smartphone_app_production').text(); // スマホアプリ制作のテキストを取得
        let repeatedText = ''; // 繰り返し表示するテキスト

        //「スマホアプリ制作」を25回繰り返す
        for (let i = 0; i < 25; i++) {
            repeatedText += boxText;
        }

        // フッターに表示
        $('#footer_content').text(repeatedText);
    });
});

// フッター「footer_content」初期表示の設定
$(document).ready(function () {
    $('#web_create').css("background-color", "rgb(173, 216, 230)");
    const initialText = $('#web_create').text();
    $('#footer_content').text(initialText.repeat(50));
});

// フッター「seo_consultant」ボタンのクリック処理
$(document).ready(function () {
    // 現在の背景色を取得
    $("#seo_consultant").click(function () {
        var smartphoneAppProduction = $("#smartphone_app_production").css("background-color");
        var webCreate = $("#web_create").css("background-color");

        // 背景色を切替
        if (smartphoneAppProduction === "rgb(144, 238, 144)") {
            $("#seo_consultant").css("background-color", "rgb(243, 209, 145)");
            $("#smartphone_app_production").css("background-color", "rgb(255, 255, 255)");
        } else if (webCreate === "rgb(173, 216, 230)") {
            $("#seo_consultant").css("background-color", "rgb(243, 209, 145)");
            $("#web_create").css("background-color", "rgb(255, 255, 255)");
        }
    });
});

// フッター「smartphone_app_production」ボタンのクリック処理
$(document).ready(function () {
    $("#smartphone_app_production").click(function () {
        // 現在の背景色を取得
        var seoConsultant = $("#seo_consultant").css("background-color");
        var webCreate = $("#web_create").css("background-color");

        // 背景色を切替
        if (seoConsultant === "rgb(243, 209, 145)") {
            $("#smartphone_app_production").css("background-color", "rgb(144, 238, 144)");
            $("#seo_consultant").css("background-color", "rgb(255, 255, 255)");
        } else if (webCreate === "rgb(173, 216, 230)") {
            $("#smartphone_app_production").css("background-color", "rgb(144, 238, 144)");
            $("#web_create").css("background-color", "rgb(255, 255, 255)");
        }
    });
})

// フッター「web_create」ボタンのクリック処理
$(document).ready(function () {
    $("#web_create").click(function () {
        // 現在の背景色を取得
        var seoConsultant = $("#seo_consultant").css("background-color");
        var smartphoneAppProduction = $("#smartphone_app_production").css("background-color");

        // 背景色を切替
        if (seoConsultant === "rgb(243, 209, 145)") {
            $("#web_create").css("background-color", "rgb(173, 216, 230)");
            $("#seo_consultant").css("background-color", "rgb(255, 255, 255)");
        } else if (smartphoneAppProduction === "rgb(144, 238, 144)") {
            $("#web_create").css("background-color", "rgb(173, 216, 230)");
            $("#smartphone_app_production").css("background-color", "rgb(255, 255, 255)");
        }
    });
})



