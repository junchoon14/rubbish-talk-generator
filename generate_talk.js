function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTalk(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點code', '寫個code', '加個留言'],
    designer: ['畫一張圖', '改個logo', '順便幫忙設計一下', '隨便換個設計', '改個內容', '加個圖案'],
    entrepreneur: ['週末加班', '要能賺錢', '想個business model', '找VC募錢', '多請個員工', '找個通路']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常', '很順手', '就可以']

  let nonsenseTalk = ''

  if (options.option === 'engineer') {
    nonsenseTalk += '身為一個工程師' + sample(task.engineer)
  } else if (options.option === 'designer') {
    nonsenseTalk += '身為一個設計師' + sample(task.designer)
  } else if (options.option === 'entrepreneur') {
    nonsenseTalk += '身為一個創業家' + sample(task.entrepreneur)
  }
  nonsenseTalk += sample(phrase)
  console.log(nonsenseTalk)
  return nonsenseTalk
}
module.exports = generateTalk