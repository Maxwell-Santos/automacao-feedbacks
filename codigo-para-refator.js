const { Builder, Browser, By } = require('selenium-webdriver')
const fs = require('fs')

// feedbacks Glassdoor de hoje até 22 de jul. de 2022

class Feedback {
  set cargo(cargo) {
    this._cargo = cargo
  }

  set date(date) {
    this._date = date
  }

  set pros(pros) {
    this._pros = pros
  }

  set contra(contra) {
    this._contra = contra
  }
}

const dados = []

let c = 2
TorcerPraDarCerto()

function TorcerPraDarCerto(c = 2) {

  async function handleFeedbacks() {
    //"inicia" o driver
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    /**
     * site de onde pego os dados 
     * identifiquei que é esse _P na url que indica o número da página que está mostrando os feedbacks
     * logo, é por meio de interpolação que eu vou fazer a manipulação de cada página que será exibida
     */
    await driver.get(`https://www.glassdoor.com.br/Avalia%C3%A7%C3%B5es/Simpress-Avalia%C3%A7%C3%B5es-E222101_P${c}.htm?sort.sortType=RD&sort.ascending=false&filter.iso3Language=por&filter.employmentStatus=REGULAR&filter.employmentStatus=PART_TIME`)

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

      // CARGO
      ContentFeedback.findElement(By.className("eg4psks0")).getText()
        .then(cargo => userFeedback.cargo = cargo)

      // DATA DO POST
      ContentFeedback.findElement(By.className("common__EiReviewDetailsStyle__newGrey")).getText()
        .then(date => userFeedback.date = date)

      // PRÓS
      ContentFeedback.findElement(By.css("span[data-test='pros']")).getText()
        .then(pros => userFeedback.pros = pros)

      // CONTRA
      ContentFeedback.findElement(By.css("span[data-test='cons']")).getText()
        .then(contra => {
          userFeedback.contra = contra

          dados.push(userFeedback)

          /**
           * é 10 pois para cada página de feedbacks tem 10
           * logo, quando bater 10, ele vai fazer a requisição com a url de outra página, com outros 10 feedbacks 
           */
          if (dados.length >= 10) {
            medir(dados)
          }
        })
    })
  })
}

function medir(dados) {

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
      c++
      console.log('tem 50')
      TorcerPraDarCerto(c)
      break;

    case 60:
      c++
      console.log('tem 60')
      TorcerPraDarCerto(c)
      break;

    case 70:
      c++
      console.log('tem 70')
      TorcerPraDarCerto(c)
      break;

    case 80:
      c++
      console.log('tem 80')
      TorcerPraDarCerto(c)
      break;

    case 90:
      c++
      console.log('tem 90')
      TorcerPraDarCerto(c)
      break;

    case 100:
      c++
      console.log('tem 100')
      TorcerPraDarCerto(c)
      break;

    case 110:
      c++
      console.log('tem 110')
      TorcerPraDarCerto(c)
      break;

    case 120:
      c++
      console.log('tem 120')
      TorcerPraDarCerto(c)
      break;

    case 130:
      c++
      console.log('tem 130')
      TorcerPraDarCerto(c)
      break;

    // case 140:
    //   c++
    //   console.log('tem 140')
    //   TorcerPraDarCerto(c)
    //   break;

    case 140:
      let arr = JSON.stringify(dados)
      console.log(arr)

      fs.writeFile('feedbacks.json', arr, (err) => {
        if (err) throw err;
        console.log("New data added");
      })
      break;
  }
}