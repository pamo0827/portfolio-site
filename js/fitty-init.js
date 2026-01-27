// Fitty - レスポンシブフォントサイズの初期化
document.addEventListener('DOMContentLoaded', function() {
    // fittyインスタンスを初期化する関数
    function initFitty() {
        // 画面幅を取得
        const isMobile = window.innerWidth < 768;
        const isSmallMobile = window.innerWidth < 480;

        // ヒーローセクションの名前
        fitty('.hero-name', {
            minSize: isSmallMobile ? 20 : isMobile ? 24 : 28,
            maxSize: isSmallMobile ? 36 : isMobile ? 48 : 64
        });

        // ヒーローセクションのニックネーム
        fitty('.hero-nickname', {
            minSize: isSmallMobile ? 14 : isMobile ? 16 : 18,
            maxSize: isSmallMobile ? 20 : isMobile ? 24 : 32
        });

        // セクションタイトル
        fitty('.section h2', {
            minSize: isSmallMobile ? 20 : isMobile ? 24 : 28,
            maxSize: isSmallMobile ? 32 : isMobile ? 40 : 48
        });

        // タイムラインのタイトル
        fitty('.timeline-content h3', {
            minSize: isSmallMobile ? 12 : isMobile ? 14 : 16,
            maxSize: isSmallMobile ? 16 : isMobile ? 20 : 24,
            multiLine: false
        });
    }

    // 初回実行
    initFitty();

    // リサイズ時に再計算（リロードなし）
    let resizeTimer;
    let lastWidth = window.innerWidth;

    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // 幅が変わった場合のみ再初期化（ブレークポイントが変わる可能性があるため）
            const currentWidth = window.innerWidth;
            const lastIsMobile = lastWidth < 768;
            const currentIsMobile = currentWidth < 768;
            const lastIsSmallMobile = lastWidth < 480;
            const currentIsSmallMobile = currentWidth < 480;

            // ブレークポイントを跨いだ場合のみ再初期化
            if (lastIsMobile !== currentIsMobile || lastIsSmallMobile !== currentIsSmallMobile) {
                // 既存のfittyインスタンスを解除
                document.querySelectorAll('.hero-name, .hero-nickname, .section h2, .timeline-content h3').forEach(el => {
                    if (el._fitty) {
                        el._fitty.unsubscribe();
                    }
                });
                initFitty();
            } else {
                // 同じブレークポイント内ならfitAllで再計算
                fitty.fitAll();
            }
            lastWidth = currentWidth;
        }, 250);
    });
});
