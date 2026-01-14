// Fitty - レスポンシブフォントサイズの初期化
document.addEventListener('DOMContentLoaded', function() {
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

    // リサイズ時に再計算
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            location.reload();
        }, 250);
    });
});
