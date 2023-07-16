const XLSX = require("xlsx")

const fs = require('fs')

const data = fs.readFileSync("feedbacks.json", "utf-8")

const parse = JSON.parse(data)

const wb = XLSX.utils.book_new()

wb.Props = {
  Title: 'Planilha de Feedbacks - Glassdor',
  Subject: 'Lista de Feedbacks',
  Author: 'Maxwell Alves',
  CreatedDate: new Date(),
};

const ws = XLSX.utils.json_to_sheet(parse)

XLSX.utils.book_append_sheet(wb, ws, 'Feedbacks')

XLSX.writeFile(wb, 'Lista Feedback Maxwell Final 24_03_23.xlsx', { bookType: 'xlsx', type: 'binary' });