const { Builder, Browser, By } = require('selenium-webdriver');
const XLSX = require("xlsx");

const fs = require('fs')

// let data = fs.redaFileSync("./data.json")
let data2 = fs.readFileSync("./data2.json")
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
//caso não exista o parâmetro o valor inicial é 2
let c = 47
TorcerPraDarCerto()

function TorcerPraDarCerto(c = 47) {
  async function handleFeedbacks() {
    //"inicia" o driver
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    //site de onde pego os dados 
    await driver.get(`https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Simpress-Avalia%C3%A7%C3%B5es-E222101_P${c}.htm?filter.iso3Language=por`)

    //pega a div que envolver todo o Feedback 
    //retorna uma lista de feedbacks
    let feedbacks = await driver.findElements(By.className('empReview'))
    return feedbacks
  }

  handleFeedbacks().then(listOfFeedbacks => {
    //mapeia cada item da lista e pega os dados específicos de de cada uma
    listOfFeedbacks.map(ContentFeedback => {

      //para cada ContentFeedback, vai instanciar um novo objeto e novo array 
      let userFeedback = new Feedback()
      let userDataArray = new Array()

      ContentFeedback.findElement(By.className("eg4psks0")).getText()
        .then(cargo => {
          userFeedback.SetCargo(cargo)
          userDataArray.push(cargo)
        })

      ContentFeedback.findElement(By.className("authorJobTitle")).getText()
        .then(date => {
          userFeedback.SetDate(date)
          userDataArray.push(date)
        })

      ContentFeedback.findElement(By.css("span[data-test='pros']")).getText()
        .then(pros => {
          userFeedback.SetPros(pros)
          userDataArray.push(pros)
        })

      ContentFeedback.findElement(By.css("span[data-test='cons']")).getText()
        .then(contra => {
          userFeedback.SetContra(contra)
          userDataArray.push(contra)

          dados.push(userFeedback)
          JSON.stringify(userFeedback)

          if (dados.length >= 10) {
            medir(dados)
          }

        })
    })
  })
}

function medir(dados) {
  // console.log('entrou no medir')

  switch (dados.length) {
    case 10:
      c++
      console.log('tem 10')
      TorcerPraDarCerto(c)
      break;

    case 20:
      c++
      console.log('tem 20')
      TorcerPraDarCerto(c)
      break;

    case 30:
      c++
      console.log('tem 30')
      TorcerPraDarCerto(c)
      break;

    case 40:
      c++
      console.log('tem 40')
      TorcerPraDarCerto(c)
      break;

    case 50:
      let arr = JSON.stringify(dados)
      console.log(arr)

      fs.writeFile(data2, arr, (err) => {
        if (err) throw err;
        console.log("New data added");
      })
      break;

    default:
      console.log('n é hora')
      break;
  }
}

function TransformToXLSX(data) {
  const wb = XLSX.utils.book_new();

  wb.Props = {
    Title: 'Planilha de Feedbacks - Glassdor',
    Subject: 'Lista de Feedbacks',
    Author: 'Maxwell Alves',
    CreatedDate: new Date(),
  };

  const ws = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(wb, ws, 'Feedbacks')

  XLSX.writeFile(wb, 'Lista Feedback (switch) Maxwell.csv', { bookType: 'csv', type: 'binary' });
}
