import { initStore } from "./store.js";
import { initHistoryList } from "./components/history-list.js";
import { initCurrentAsset } from "./components/current-asset.js";
import { initAddItem } from "./components/add-item.js";

init();

function init() {
  //store 초기화
  initStore();
  //현재 자산 입력
  initCurrentAsset();
  //이벤트 추가?
  initAddItem();
  //기록
  initHistoryList();
}