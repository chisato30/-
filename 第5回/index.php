<?php ... ?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__list-item"><a href="#" class="navigation__link">スケジュール</a></li>
          <li class="navigation__list-item"><a href="#" class="navigation__link">アクセス</a></li>
          <li class="navigation__list-item"><a href="#" class="navigation__link">席予約</a></li>
        </ul>
      </nav>
    
    <header>
        <div class="header_content">
            <a href="">
                <img src="image/logo.png" alt="ロゴ" width="100px" height="30px">
            </a>
            <ul>
                <li>
                    <a href="">我が社について</a>
                </li>
                <li>
                    <a href="#service">サービス</a>
                </li>
                <li>
                    <a href="">お問い合わせ</a>
                </li>
            </ul>
            <div class="hamburger-menu" id="js-hamburger-menu">
                <span class="hamburger-menu__bar"></span>
                <span class="hamburger-menu__bar"></span>
                <span class="hamburger-menu__bar"></span>
            </div>
        </div>
    </header>
    <main>
        <div class="key_visual">
            <p>
                ダミーサイトへようこそ
            </p>
        </div>
        <div class="about_content section" id="about">
            <p class="title">我が社について</p>
            <p class="about_text">TechEliteでは、自信を持って<span>「納品」</span>ができるレベルのLPが作れるようになります。</p>
        </div>
        <div class="service_content section" id="service">
            <p class="title">サービス</p>
            <div class="service_flex">
                <div class="service active" id="web">
                    <p>Web制作</p>
                </div>
                <div class="service" id="seo">
                    <p>SEOコンサル</p>
                </div>
                <div class="service" id="app">
                    <p>スマホアプリ開発</p>
                </div>
            </div>
            <div class="description">
                <p class="description_text active" id="web_text">Web制作Web制作Web制作Web制作Web制作Web制作Web制作Web制作Web制作Web制作
                </p>
                <p class="description_text" id="seo_text">
                    SEOコンサルの説明SEOコンサルの説明SEOコンサルの説明SEOコンサルの説明SEOコンサルの説明SEOコンサルの説明SEOコンサルの説明SEOコンサルの説明SEOコンサルの説明</p>
                <p class="description_text" id="app_text">
                    スマホアプリ開発スマホアプリ開発スマホアプリ開発スマホアプリ開発スマホアプリ開発スマホアプリ開発スマホアプリ開発スマホアプリ開発スマホアプリ開発スマホアプリ開発スマホアプリ開発</p>
            </div>
            <div class="contact about_content section" id="contact">
                <p class="title">お問い合わせ</p>
                <form action="./thanks.html" method="get">
                    <div class="form_content">
                        <label for="name">お名前<span class="required">*必須</span></label>
                        <input type="text" name="name" placeholder="例）田中太郎" required>
                    </div>
                    <div class="form_content">
                        <label for="prefecture">都道府県<span class="required">*必須</span></label>
                    <select name="prefecture">
                        <option value="">---</option>
                        <option value="hokkaido">北海道</option>
                        <option value="aomori">青森県</option>
                        <option value="iwate">岩手県</option>
                    </select>
                    <p class="prefecture_varidation" style="display: none;">都道府県は必須入力です。</p>
                    </div>
                    <div class="form_content">
                        <label for="city">市区町村<span class="required">*必須</span></label>
                    <select name="city">
                        <option value="">---</option>
                        <p class="city_varidation" style="display: none;">市区町村は必須入力です。</p>

                    </select>
                    </div>

                    <div class="form_content">
                        <label for="email">メールアドレス<span class="required">*必須</span></label>
                        <input type="text" name="name" placeholder="例）abcd1234@example.com" required>
                    </div>
                    <div class="form_content">
                        <label for="tel">電話番号<span>*任意</span></label>
                        <input type="tel" name="tel" placeholder="例）12345678901">
                        <p class="tel_varidation" style="display: none;">番号が誤っています。</p>

                    </div>
                    <input type="submit" value="通信">

                </form>
            </div>

    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="./js/index.js"></script>
</body>

</html>