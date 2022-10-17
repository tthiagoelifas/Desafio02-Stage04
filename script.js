const students = [
  {
    name: "Lais",
    prova01: 10,
    prova02: 7
  },
  {
    name: "Pedro",
    prova01: 4,
    prova02: 3
  },
  {
    name: "Clébio",
    prova01: 6,
    prova02: 8
  },
  {
    name: "Denilson",
    prova01: 9,
    prova02: 3
  }
]

function average(prova01, prova02) {
  return (prova01 + prova02) / 2
}

function printAverge(student) {
  let averageResult = average(student.prova01, student.prova02)
  if (averageResult >= 7) {
    alert(`
    A media do(a) aluno(a) ${student.name} é: ${averageResult}
    Parabéns, ${student.name}! Você foi aprovado(a) no concruso!
    `)
  } else {
    alert(`
    A media do(a) aluno(a) ${student.name} é: ${averageResult}
    Não foi dessa vez, ${student.name}! Tente novamente!
    `)
  }
}

for(student of students){
 printAverge(student)
}