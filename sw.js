/**
 * ホーム画面に追加する場合、serviceWorkerで fetchイベント を行う必要がある
 * そのため具体的な動きがない、fetchイベントをするためだけのsw.jsを記述
 * app.jsでこのsw.jsを読み込んでserviceWorkerに登録する
 */
self.addEventListener("fetch", event => {});