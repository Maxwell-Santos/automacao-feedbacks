const { Builder, Browser, By } = require('selenium-webdriver');
const XLSX = require("xlsx");
const fs =require('fs')

const data = fs.readFileSync('data.json')
// objeto que vai ser formado com cada feedback coletado
class Feedback {

  constructor() {
    this.cargo = this.SetCargo()
    this.date = this.SetDate()
    this.pros = this.SetPros()
    this.contra = this.SetContra()
  }

  SetCargo(cargo) {
    return this.cargo = cargo
  }

  SetDate(date) {
    return this.date = date
  }

  SetPros(pros) {
    return this.pros = pros
  }

  SetContra(contra) {
    return this.contra = contra
  }
}

const dados = []

for (let c = 2; c < 5; c++) {
  setTimeout(()=> {
    //caso não exista o parâmetro o valor inicial é 2
    async function handleFeedbacks(c) {
      //"inicia" o driver
      let driver = await new Builder().forBrowser(Browser.CHROME).build();
  
      //site de onde pego os dados 
      await driver.get(`https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Simpress-Avalia%C3%A7%C3%B5es-E222101_P${c}.htm?filter.iso3Language=por`)
  
      //pega a div que envolver todo o Feedback 
      //retorna uma lista de feedbacks
      let feedbacks = await driver.findElements(By.className('empReview'))
      return feedbacks
    }
  
    handleFeedbacks(c).then(listOfFeedbacks => {
      let perPage = listOfFeedbacks.forEach(fillContentFeedback)
  
      dados.push(perPage)
      
      if (dados.length == 30) {
        TransformToXLSX(dados) //cria a planilha
        console.log('funcionou')
      }
    })

  }, 1500)
}


function fillContentFeedback(ContentFeedback) {

  let userFeedback = new Feedback()

  ContentFeedback.findElement(By.className("eg4psks0")).getText()
    .then(cargo => {
      userFeedback.SetCargo(cargo)
    })

  ContentFeedback.findElement(By.className("authorJobTitle")).getText()
    .then(date => {
      userFeedback.SetDate(date)
    })

  ContentFeedback.findElement(By.css("span[data-test='pros']")).getText()
    .then(pros => {
      userFeedback.SetPros(pros)
    })

  ContentFeedback.findElement(By.css("span[data-test='cons']")).getText()
    .then(contra => {
      userFeedback.SetContra(contra)
    })

  return userFeedback
}

function TransformToXLSX(data) {
  const wb = XLSX.utils.book_new();

  wb.Props = {
    Title: 'Planilha de Feedbacks - Glassdor',
    Subject: 'Lista de Feedbacks',
    Author: 'Maxwell Alves',
    CreatedDate: new Date(),
  };

  const ws = XLSX.utils.aoa_to_sheet(data);

  XLSX.utils.book_append_sheet(wb, ws, 'Feedbacks')

  XLSX.writeFile(wb, 'Lista Feedback Maxwell3.csv', { bookType: 'csv', type: 'binary' });
}
