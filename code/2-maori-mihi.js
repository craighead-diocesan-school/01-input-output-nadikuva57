// ####################################
// ###### ----- Maori Mihi ----- ######
// ####################################

function maoriMihi() {
  alert('Māori Mihi')
  alert('This program will help you build a basic mihi.')
  alert("First, you'll be asked a series of questions, then your mihi will be ready.")

  alert('What is your name?')
  let name = promt()

  let maunga = promt('What is your maunga?')

  let awa = promt('what is your awa?')

  let home = prompt('What is your home town?')


  alert('Your mihi:')
  alert('Ko' +maunga+ 'tōku maunga')
  alert('ko' +awa+ 'tōku awa/moana/roto/whanga')
  alert('no' +home+ 'au,')
  alert('Ko ' + name + ' tōku ingoa,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou,')
  alert('Tēnā koutou, katoa.')
}