const model = {
  paintings: [
    {
      "id": 1,
      "name": "南街殷賑",
      "painter": "郭雪湖",
      "img": "image/south_street.jpeg",
      "year": 1930,
      "description": "《南街殷賑》為郭雪湖以誇張、戲劇化手法描寫大稻埕迪化街霞海城隍廟口節慶熱鬧景象，廟口擁擠的市井小民忙碌紛擾，五彩繽紛的招牌遠近林立，不但有日本人回「內地」所需購買的台灣特產禮品店，也有中國的藥材店，還有寫著英文字樣的店面，由此可見當時台灣商圈的繁華多元，全圖也充滿社會現實性及視覺趣味性。",

    }
  ],
  img: document.querySelector('IMG')
}

const view = {

}

const controller = {
  Position: function (XY) {
    const e = window.event
    window.alert(e.clientX + ' ' + e.clientY)
  }
}

document.querySelector('.painting').addEventListener('click', controller.Position)